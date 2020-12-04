# Introducció a Locust

## Que és Locust?

a

::: notes

Locust és una eina que mitjançant scripts permet fer test de càrrega a la nostre API amb el qual es pot simular com reacciona aquesta amb X usuaris fent X Requests Per Second (RPS).
Està enfocat a simular un procés, per exemple el de contractació tindria les request:
- check vat
- check soci
- check cups
- check iban
- pots contractació

**Exemple:** 50 usuari intenten contractar amb Som Energia
- És real que els 50 usuaris facin les peticions alhora? **No!**
    <p>Per solucionar-ho Locust ens don 2 possibilitats que no són excloents: <p>

    - Simular un augment progressiu del nombre d'usuaris que van accedint a la nostra API (10 usuaris cada segons fins a un total de 100 simultanis)
    - Definir el temps entre les diferents request de manera variable dins d'un interval

**Nota:** Locust està plantejat per testejar API's, però permet testejar qualsevol codi escrit amb python, només cal implementar la connexió amb el sistema que vulguem testejar. Link: [custom clients](https://docs.locust.io/en/stable/testing-other-systems.html)
:::

## Estructura general

El mínim que ha de tenir un *locustfile* és **Users** i **Tasks**
**User**
- Representa l'usuari que entra en el nostre sistema
- Els atributs més freqüents són:
  - wait_time: El temps entre tasques que espera el client
  - weight: En cas de tenir més d'un tipus d'usuari, la proporció d'aquests que entren en el nostre sistema. Exemple: Per cada 4 usuaris 2 volen contractar, 1 realitza una modificació contractual i un altre es fa sòcia
  - tasks: Les tasques que realitza l'usuari. Aquestes tasques poden estar dins la classe User amb un decorator o es pot utilitzar una classe com la TaskSets. Es pot declarar com una llista o com un diccionari en cas de voler assignar una relació entre ells
``` python
    class WebformsUser(HttpUser):
        tasks = [NewContractTasks]
        wait_time = constant(1)
```

``` python
    class SomenergiaUser(HttpUser):
        tasks = {NewContractTasks:1, SomenergiaWebpageUser:50}
```
**Task**
- Representa cada una de les accions que realitza l'usuari
``` python
    @task
    def check_cups(self):
        cups = get_random_cups()
        self.client.get("/check/cups/{}".format(cups))
        self.post_body["cups"] = cups
```

## Execució

Per aquesta formació tractem només l'execució en la pròpia màquina, però Locust permet realitzar execucions distribuïdes per augmentar el nombre d'usuaris o Request Per Second (RPS)
- Execució simple amb UI: `locust -f locustfile`
- Execució  sense UI: `locust -f locustfile --headless -u 10 -r 1 --host https://ip:port`

![ui dashboard](images/locust_dashboard_example.png)
Exemple del dashboard en executar Locust amb UI

- Per executar-ho de manera distribuida:
  - Cal un master i X slaves
  - Tot i que el master requereix tenir un locustfile, els workers utilitzaràn el les tasquest dels seus en local
  - Per tenir un mètriques reals, els workers no han d'anar al 100% de CPU
  - Master i slaves han de tenir la mateixa versió de locust
  - El master divideix la feina a parts iguals entre els diferents workers des d'un inici (Si volem 100 usuaris amb un creixement de 10 usuaris/s i tenim 2 workers cada un haurà de generar 50 usuaris a un creixement de 5 usuaris/s)
  - Cada worker de Locust ocupa una CPU, per tant, si volem, en una màquina amb 6 cores podem arrencar 4 workers.
  - La interficie visual es refresca de manera automatica per totes les persones que vulguin seguir l'evolució del test
  - Execució Master: `locust -f master.py --master --web-host 192.168.35.249 --web-port 7654 --master-bind-port 4567`
  - Execució Slaves: `locust -f formacio_locust.py --worker --master-host 192.168.35.249 --master-port 4567`

## Exemples

``` python
from locust import HttpUser, task, tag, between

class MyUser(HttpUser):
    wait_time = between(5, 15)

    @task(4)
    def index(self):
        page = self.client.get("")

    @task(1)
    def about(self):
        page = self.client.get("/ca/qui-som/#quesom")

```

``` python
from locust import User, TaskSet, constant

class ForumSection(TaskSet):
    wait_time = constant(1)

    @task(10)
    def view_thread(self):
        pass

    @task
    def create_thread(self):
        pass

    @task
    def stop(self):
        self.interrupt()    # Acaba l'execució de tasques

class LoggedInUser(User):
    wait_time = constant(5)
    tasks = {ForumSection:2}

    @task
    def my_task(self):
        pass
```
Exemples extrets de la [documentació oficial de Locust](https://docs.locust.io/en/stable/index.html)
Podeu trobar [exemples més variats](https://github.com/locustio/locust/tree/master/examples) dins del repositori de Locust

## Altres coses que poden ser d'interès
- Normalment s'utilitza python-request com a llibreria per fer les requests, però es pot fer servir python-geventhttpclient per fer-ho més performance
- Pots veure les dades del test amb el client web, extraient-ho en un csv, ...
- Locust don per OK tota petició amb HTTP code < 400, però podem personalitzar la validació de la response
``` python
    with self.client.get("/stats/socis", catch_response=True) as response:
        response_body = response.json()
        if not response_body.get('state', False):
            response.failure()
```

## Exemple pràctic - hands-on

<p>Simularem les peticions que rep l'API de webforms cada cop que algú es connecta a la pàgina web<p>

**Usuari:** Client a través de la web
**Flux:** Connexió a la web de SomEnergia
**Endpoints cridats:** 
  - /stats/socis
  - /stats/contractes
