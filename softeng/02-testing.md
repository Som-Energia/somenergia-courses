# Tipus de testos

## Segons transparencia

Com de conscients som quan escribim el test dels detalls d'implementacio?

**Caixa Negra**\
Ho fem a cegues, entrada-sortida

**Caixa Grisa**\
Tenim una idea del que fa

**Caixa Blanca**\
Fem el test seguint el codi

## Segons quan els fem

**Test Last development**\
Un cop que ja hem fet codia (clàssic)

**Test driven development**\
Abans el test, de cada linia de codi

**Behaviour driven development**\
Abans el test funcional, que tot el codi


::: notes

Test Last development es el que s'ha fet de tota la vida.

- Costa molt justificar fer testos de cosas que ja saps (o creus) que funcionen
- Acaven no fent-se
- Costos de debug d'errors posteriors
- Regresions de coses que abans funcionaven

Test driven aporta un cicle virtuos.

- Sensació de progrés
- Automatització -> feedback automatic -> ens envalentonem amb els canvis

Sovint el codi ja està fet, hi ha técniques per fer-ho sistemàtic com si fos TDD.

BDD implica altres coses que no pas quan fas els testos
i es compatible amb TDD.
Parteix dels testos funcionals.
:::

## Segons codi cobert (I)

- **Unitaris:** cobreix una línia o modificació de codi
- **Component:** un component aïllat (doubles)
- **Integració:** cobreix la delegació a altres móduls
	- **Bottom-up**: por capas
	- **Big bang**: módulo coordinador
- **Funcionals:** cobreix un cas d'ús d'usuari

::: notes
- Test unitari: Cobreix una linia de codi (o una modificacio de codi)
- Test funcional: Cobreix un cas d'ús (nivell usuari)
	- Deriven de l'especificació o del cas d'us feta per l'usuari
- Test d'integració: Cobreix la comunicacio de dos moduls
	- Bottom up: capas de abajo a arriba
	- Big bang: Se junta todo a la vez
- Test de component: Testeja el comportament general del component, no pas una funció
:::

## Segons codi cobert (II)

- **Extrem a extrem:** Integración total del sistema en entorn realístic
- **Aceptació:** El que fa l'usuari per donar-ho per bó
- **Desplegament:** Els que es fan en posar a producció
	- **Smoke:** Arrenca, respon... molt ràpids.
	- **Sanity:** Comprovacions mínimes dels canvis aplicats.

::: notes
- Test extremo a extremo: Integracion total, emulando un caso real en entorno real
- Test d'acceptació: Es el que fa l'usuari per donar per bo un desenvolupament
- Test de desplegament:
	- Test de fum: Es fa per comprovar que un desplegament mínimament correcte (arrenca, respon...)
	- Test de sanitat: Comprovacions ràpides en desplegament per saber si funciones les noves funcionalitats i correccions
:::


## Segons motivació

Els unitaris també poden ser:

- **Exploratori:** com funciona un codi de tercers?
- **De correccio:** per aillar un bug detectat
- **De regresió:** quan els seguim executant

::: notes
- **Test exploratori:** Test unitari que es fa per entendre el funcionament de códi de tercers
- **Test de correcció:** Test unitari que fem per manifestar un bug, i que després deixem per regresió
- **Test de regresió:** Quan els testos, un cop passats es continuen passant per comprovar que no tirem enrera

Els testos de correcció son molt importants
com a práctica de manteniment.
Els bugs ens serveixen per definir casos d'ús
que no haviem pensat en el desenvolupament inicial.

Si deixem els exploratoris com a test de regresió
també serveixen com alarma per detectar
els canvis en el comportament
del codi de tercers que es podrien donar.
:::


## Segons el cas d'ús

**Test de camí daurat:**\
Comprova la condició d'exit principal

**Test d'extensió:**\
Comprova una condició d'exit divergent

**Test de fallada:**\
Comprova una condició de fallada


## Segons si cal executar

**Dinàmics:**\
Necessiten executar el codi per fer la comprovació

**Estàtics:**\
Testos que es fan analitzant el codi no executant-ho

::: notes
Algunes eines Python que fan tests estàtics:

- pep8: standard style checker
- pylint: extended style checker
- mccabe: cyclomatic complexity checker
- pyflakes: errores logicos
- flakes8: matxambra pyflakes i pep8
- mypy: static type checking

Algunes eines que fan tests dinàmic:

- Performance profilers (valgrind)
- Memory profiles (callgrind)
:::

## Test no funcionals

Comprova requeriments no funcionals: 

::: columns
:::: column
**Usabilitat**
::::
:::: column
**Accessibilitat**
::::
:::: column
**Compatibilitat**
::::
:::
::: columns
:::: column
**Eficiencia**
::::
:::: column
**Seguretat**
::::
:::: column
**Rendiment**
::::
:::


::: notes
- **Test d'usabilitat:**
	Es monitoritza la reacció dels usuaris interactuant amb el programa
- **Test d'accessibilitat:**
	Llista de comprovacions per facilitar l'ús a persones amb diversitat funcional
- **Test de compatibilitat:**
	Funciona a tots els navegadors/processadors/sistemes operatius...?
- **Test d'eficiencia:**
	Com de ràpid s'executa el codi
- **Test de rendiment:**
	Com de be es comporta el sistema en desplegament
:::

## Test de rendiment

::: columns
:::: column
**Test de Volum**\
funciona per tots els tamanys de dades?
::::
:::: column
**Test de Càrrega**\
funciona per tots els nivells d'us?
::::
:::
::: columns
:::: column
**Test d'Escalabilitat**\
s'agafa més recursos quan cal?
::::
:::: column
**Test de Pic**\
respon be a pics alts puntuals?
::::
:::
::: columns
:::: column
**Test d'Estress**\
quin es el límit operacional?
::::
:::: column
**Test de Remull**\
es degrada mantenint la càrrega un bon temps?
::::
:::

::: notes
Recursos: (CPU, Memoria, Disc, Xarxa...)
:::


## Test de Seguretat

**Test de Penetració**\
El fan els white hat hackers seguint els seus propis procediments

**Test de Vulnerabilitat**\
Cerca de vulnerabilitats conegudes o típiques

::: notes
- Hi han eines que simulen atacs fent servir
- Hi ha bases de dades de vulnerabilitats i payloads.

https://github.com/foospidy/payloads
:::


# Casos de test

## Quan hem testejat prou?

Llei del retorn decreixent

Més testos fan l'execució de testos més lenta

Més testos augmenten el cost de manteniment

Més testos cal implementar-los

Afegirem només casos que aportin quelcom

::: notes
**Retorn decreixent:**
_Arriba un punt que afegir més testos
no aporta prou valor per compensar el cost d'afegir-lo_

Quan els testos son lents tendim a no passar-los tant sovint.
I no deixa de ser codi que hem de picar i sobretot
mantenir.
:::

## Técniques

:::columns
:::: column

**Montecarlo**\
Generació aleatoria

**Anàlisi de valors frontera**\
A banda i banda d'on canvia el comportament

**Particions equivalents**\
Un cas per partició d'equivalent comportament
::::
::::column
**Branch testing**\
cada cami al codi un test

**Test de cobertura**\
eina que detecta codi no exercitat pels testos
::::
:::

::: notes

Ens ajuden a racionalitzar els casos de tests.

Totes les tècniques es deixen casos
o son inviables a full.
:::

## Montecarlo

- És molt difíci amb un cas de test extrany.
- Important: guardar el cas fallat, per reproduir-lo fora del montecarlo
- Molt costós d'executar
- Hi ha eines per generar-ne
- Per definir el domini aleatori, cal un análisi de domini mínim
- Ideal per tests de rendiment

## Anàlisi de domini d'entrada

Tàndem: Valors frontera + particions equivalents

Un cop definits els valors frontera, generem les particions equivalents

Fem servir els valors frontera com a representants de la partició.

Dos casos son equivalents si tenen el mateix comportament

## Branch testing

Assignar un cas d'us a cada branch de codi\
`if`, `for`...

Per a codi ja escrit o que tenim clar que volem escriure

Compte funcions delegades (`floor(x)` vs `x//1`)

No considera comportament divergent per dades


## Coverage testing

Es fa amb eines d'anàlisi de codi

Serveix per detectar alguns casos no previstos

Al final fas branch testing,
amb les seves limitacións.


## Code guided tests

Sovint el codi ja esta fet, fem-ho test last pero:

- Comentar el codi fet
- Anar afegint el codi per pedaços amb l'antic de referencia

Code guided tests:

- Cada condicio
- Cada for: un, zero, many (o zero, un, many)


# Automatització

## Motivació

Clàssic: Executar el codi i comprovar el resultat esperat

Conseqüències:

- Costa molt de comprovar els resultats a mà
- No repetim aquesta mateixa comprovació quan fem la següent funcionalitat
- Tenim regressions

## Solució

Fem codi que:

- Construeixi la situació de test (fixture)
- Comprobi que el resultat es l'esperat
- Només ens alerti si no ho és

¿Qui testeja el codi de test?

## Estil xUnit (TDD)

```python
# xUnit (unittest, nose, pytest)
class MyClass_Test(unittest.TestCase):
	def test_myMethod_inConditionA_returns666(self):
		sut = MyClass()
		sut.setConditionA()
		self.assertEqual(666, sut.myMethod())
```

## Estil BDD

```python
# Mamba (mamba, behave, pexpect)
with description(MyClass, "having an instance of MyClass") as self:
	with context("in condiion A"):
		self.condition(A)
		with it("returns 666"):
			expect(self.myMethod()).to(equal(666))
```

## xUnit vs BDD style

La intenció original dels BDD es implicar
als stakeholders en l'escriptura i manteniment dels testos.

Lliga l'especificació co-escrita amb els stake holders
amb els testos mantinguts pels desenvolupadors.


:::columns
**Specification tied code**\
Es coescriu l'especificació,
i el test fa referència al
text de l'especificació.

**Code is specification**\
S'intenta que el codi
expliqui el cas de test
:::

:::notes
Opinió (esbiaixada, he crescut amb xUnit):

Impressió: Als frameworks BDD els falta maduresa\
Fan el codi de test mes complex\
Per això dubto de qui ho fa servir coescrigui els testos\
Quan separen especificació, el binding es fràgil\
Ben portat, es pot fer amb xUnit sense complicar tant el codi\
Potser es la meva desconeixença
:::


# TDD

## Red-Green-Refactor

- Red: Fem un test que falli
	- ens fa pensar en la interfície primer
	- en pensar-les des del test, genera interfícies testables
	- ens provocara crear classes i/o mètodes buits
	- petarà fins que no tinguem la API (ERROR), llavors fallarà  (FAIL)
	- la fallada es obligatoria perque testeja que el test funciona
	- Criteri de limitació: si no trobem un test que falli, es que no cal el test
- Green: Fem lo minim per que passi ràpid
	- No ens preocupa si el codi es correcte
	- Si no ho podem fer rapid,
		- tirem enrera i refactoritzem per facilitar-ho
		- o plantejem un test diferent, més proper
- Refactor: Millorem el codi
	- No afegim funcionalitat
	- Reduim entropia i duplicació al codi
	- O fem espai per la pròxima funcionalitat
	- Es poden fer diversos abans del seguent Red
	- **Passem els testos a cada canvi**

## Refactorings

Són receptes per fer canvis al disseny sense canviar el comportament

Reversibles: Sovint hi ha l'invers

## Refactors: Receptes

Renombrar o relocalitzar classes, atributs i mètodes\
Pujar i baixar atributs i mètodes en una jerarquía de classes\
Extreure o expandir en linia métodes, attributs o classes\
Encapsular attributs, canviar condicionals per polimorfisme, state o strategy\
Canviar la signatura de mètodes\


## Passos comuns

Com si fos una bastida cal tenir sempre el codi funcionant:

- Duplicar l'estructura vella
- Farcir l'estructura nova (duplicar setters)
- Recolzar-se en l'estructura nova (getters)
- Netejar restos de l'estructura vella

Exemples:

- Passar d'un literal a un atribut
- Passar d'un objecte a una lista d'objectes
- Canviar el contenidor dels objectes agregats
- Substituir un component per una reimplementació

## Estructura d'un test

- Setup: Es la part on posem el sistema a les condicions de test
- Exercise: Es la part on s'executa el codi que volem testejar
- Assert: Es la part on comprovem que l'estat es el dessitjat
- Tear Down: Es la part on deixem el sistema net i llest pel segûent test

TODO: Diagrama d'estats

## Inputs i outputs

Des del test fem inputs (setters) i revisem outputs (getters).

- Setup: Inputs
- Exercise: Inputs (o outputs)
- Assert: Outputs
- TearDown: Inputs

TODO: Diagrama


## I/O Indirectes

No totes les sortides ni totes les entrades son accessibles des del test

Alguns depenen de tercers objectes.

TODO: Diagrama

## Test doubles

- Dummy object: Does not provide inputs or outputs (se requiere el objeto pero no se usa para el caso)
- Test Stub: Provides indirect inputs (ignoring outputs)
- Test Spy: Records indirect outputs, and may provide indirect inputs
- Mock Object: Asserts indirect outputs, and may provide indirect inputs
- Fake Object: Objetos que no queremos usar (correo, impresoras, SMS's...)

# Caracteristiques

## Fragilitat

Un test es fràgil quan es possible que en algún moment falli,
tot i que la funcionalitat no s'hagi trencat.

- Depén de dades de producció
- Depén de la data actual
- Depén de esdeveniments aleatoris

## Back-2-Back tests

Per agafar control codi no cobert

Per comparar sortides difícils d'escriure

Trobar casos significatius

Generar una sortida per ells (referencia)

Comparar automaticament (diff) si canvia o no

## Prenent control

Quan falla un B2B d'un procés llarg
no ajuda gaire a saber on esta la falla.

Normalment te a veure amb els canvis que hem fet.

Si no, interessa fer drops de dades intermitjos.

Els punts de drop es un bon punt per posterior
disecció del procés en mòduls testejables
partint dels B2B.

## Nomenclatura

Una bona nomenclatura permet identificar el test fàcilment

Si testejem `myMethod` de `MyClass` en una condició de test concreta:

`MyClass_Test.test_myMethod_failsWhenShitHappens`

Combinació de camell case i underlines per localitzar millor
classe, metode i condicions.

Si els simbols tenen underlines, fer-ne servir dobles per separar.

`MyClass_Test.test__my_method__failsWhenShitHappens`

## ¿On poso els tests?

¿Carpeta `tests` o in-place?

¿Prefix `test_` o sufix `_test`?

Per un costat,
la carpeta `test` separa el codi que anirà a producció
i és costum en projectes Python.

Al `setup.py` es pot excloure de la distribució per directori o per sufix al `setup.py`.

Però es molt bo que quan vagis a editar un codi,
trobis just al costat els testos que has de mantenir conjuntament.

Per això: al mateix directori i amb sufix.


## Data driven tests

Quan els casos de tests es poden paremetritzar, entrada sortida

Un mateix codi per diferents dades

Sovint els usuaris poden escriure la taula

Important documentar que aporta cada dada

Helpers de setup i assert, tambe fan feina

Frameworks (`ddt` per `unittest`)








