# Introducció

## Objectius

Establir un marc comú entre nosaltres

Base teòrica (tipus de tests, mantras...)

Vocabulari comú (per entendre'ns)

Diferents aproximacions per fer-los

Com abordar testos complexos

## Sense TDD?

Com ho feiem sense TDD?

- Afegim funcionalitat
- Mostrem resultats al main
- Comprovem si son bons
- Següent funcionalitat

Només tornem a comprovar funcionalitats del passat
quan entrem en mode paranoid.

Sindrome del 'no ho toquis'

::: notes
Valorem els testos. D'on venim?

'Només quan entrem en mode paranoid' no vol dir que no entressim sovint
:::

## I les UI?

Clickem i clickem fins que peta

Itineraris de proves

Molt feixuc


## Automatització

Evitem la validació manual

Permet executar els testos moltes vegades

Evitem regresions, ens envalentona

Frameworks: `unittest`, `nose`, `pytest`, `jest`, `mamba`...


## Com automatitzar

Fem codi que:

- Construeixi la situació de test (fixture)
- Comprobi que el resultat és l'esperat
- Només ens alerti si no ho és

Si el test és codi, ¿qui testeja el codi de test?

Si el test és codi, caldrà mantenir-ho

## Abans o després?

Automatitzar un test quan el codi ja funciona:

- Fa mandra, ja funciona
- Com sabem que el test funciona?

Si fem el test quan la funcionalitat encara no hi és,
estarem comprovant que realment ho detecta.

Per codi antic, que volem cobrir, hi ha estratègies.

## Els mantras

Red - Green - Refactor

SetUp - Exercise - Assert - TearDown

Duplicate - Fill - Relay - Clean

## Ordre del matí

1. Tipus de testos
1. TDD
1. Trobant els casos
1. Escrivint testos
1. Refactoritzant
1. Solucionant pollos


:::notes
**Tipus de testos**

Per reflexionar sobre els que fem i deixem de fer
i establir vocabulari comú.

**TDD**

Sense entrar-hi gaire, ja el coneixem.
Repasem algunes coses clau.
Si surten dubtes entrem.

**Trobant els casos**

Com determinar els casos a testejar

**Escrivint testos**

Guía per com escriure els testos.

**Refactoritzant**

Algunes consideracions respecte el refactoring.
Què és, com el fem, criteris...

**Solucionant pollos**

Gestionant aquelles situacions que semblen que no es poden gestionar correctament

- M'he *oblidat* testejar i ho vull cobrir a posteriori
- Vull pendre el control d'un sistema que no tè testos
- Un component que depén d'altre
- El resultat és massa gran per ficar-ho al codi
- El comportament és aleatori o fràgil
- Vull automatitzar testos d'una interficie

:::


# Tipus de testos

## Validació

**Test supervisats:**\
Un humà ha de validar que els resultats son bons

**Test automatitzats:**\
L'ordinador fa la validació

**Tests amb referència validada:**\
Es comprova la sortida del cas la primera
vegada y cada cop que canvia el comportament

::: notes
Supervisats: Main amb prints

Automatitzats: Frameworks xunit

Referència validada:
[back2back](https://github.com/vokimon/back2back),
[snapshot](https://jestjs.io/docs/en/snapshot-testing)...

Reflexions per som:

- Automatitzats és millor que referència validada (fràgils i més manteniment)
- Referència validada és millor que supervisats
- Ambits on costa automatitzar: UI, validació usuari...
- Hem de tendir a erradicar-los
:::



## Transparència

Com de conscients som dels detalls de la implementació quan escrivim el test?

Testos de **caixa negra**\
Testos de **caixa grisa**\
Testos de **caixa blanca**\

::: notes
**Caixa Negra**\
Testejem sense coneixer el codi, només la especificació.

**Caixa Blanca**\
Fem el test seguint el codi.

**Caixa Grisa**\
Sense accés complert al codi, fent servir per exemple documentació de disseny.

Els testos de caixa negra parteixen de l'especificació.

Els testos de caixa blanca pot examinar el codi per determinar les particions equivalents o analitzar els límits.
:::


## Abast (I)

**Unitaris** vs **Funcionals**

**Component** vs **Integració**

Integració **Bottom-up** vs **Big bang**

**Important:** Els testos d'integració no han de testejar tots els casos dels components
**només que es delega de forma correcta en els components**.

::: notes
- **Test unitari:** Cobreix una linia de codi (o una modificacio de codi)
- **Test funcional:** Cobreix un cas d'ús (nivell usuari)
	- Deriven de l'especificació o del cas d'us feta per l'usuari
- **Test de component:** Testeja el comportament general del component, no pas una funció
- **Test d'integració:** Cobreix la comunicacio de dos moduls
	- **Bottom up test:** capas de abajo a arriba
	- **Big bang test:** Se junta todo a la vez en un modulo coordinador


Reflexions per Som:

- Tests d'integració que passem tots els casos dels components integrats
	- Més tests costen de mantenir
- Tests que son d'integració i haurien de ser de component
	- Triguen més en executar-se
	- Fer servir mocks
:::

## Abast (II)

**Aceptació:** El que fa l'usuari per donar-ho per bó

**Extrem a extrem:** Integración total del sistema en entorn realístic

**Desplegament:** Els que es fan en posar a producció

- **Smoke:** Arrenca, respon... molt ràpids.
- **Sanity:** Els canvis aplicats hi son

::: notes
- Test extrem a extrem: Integracio total, emula un caso real en entorno real. Frontend, backend...
- Test d'acceptació: Es el que fa l'usuari per donar per bo un desenvolupament
- Test de desplegament:
	- Test de fum: Es fa per comprovar que un desplegament mínimament correcte (arrenca, respon...)
	- Test de sanitat: Comprovacions ràpides en desplegament per saber si funciones les noves funcionalitats i correccions

Interessant per Som:

- Començar a automatitzar els testos de desplegament
- Donar suport en eines i metodologia per fer el test d'acceptació
- Tenir testos end-to-end (cypress)
:::


## Motivació

Per què l'afegeixes?

- **De progressió:** comprova noves funcionalitats
- **De regresió:** quan els seguim executant
- **De correccio:** per aillar un bug detectat
- **Exploratori:** com funciona un codi de tercers?

::: notes
- **Test de regresió:** Quan els testos, un cop passats es continuen passant per comprovar que no tirem enrera
- **Test exploratori:** Test unitari que es fa per entendre el funcionament de códi de tercers (llibreries, api's, mòduls d'altres partners...)
- **Test de correcció:** Test unitari que fem per manifestar un bug, i que després deixem per regresió

Els testos de correcció son molt importants
com a práctica de manteniment.
Els bugs ens serveixen per definir casos d'ús
que no haviem pensat en el desenvolupament inicial.

Si deixem els exploratoris com a test de regresió
també serveixen com alarma per detectar
els canvis en el comportament
del codi de tercers que es podrien donar.
:::


## Cas d'ús

**Test de camí daurat:**\
Comprova la condició d'èxit principal

**Test d'extensió:**\
Comprova una condició d'èxit divergent

**Test de fallada:**\
Comprova una condició de fallada

::: notes
El **camí daurat** és el cas d'us d'èxit més típic o més il·lustratiu.
Per exemple:

> Una persona física que és socia vol fer un contracte 2.0A, com a titular i pagadora, sense cèntim voluntari i sense cap documentació.

Les extensions serien les derivacions d'aquest cas que tenen sortides diferents.

> Exemples
> 
> - Amb DH
> - Amb 3.0A
> - Contracta una persona jurídica
> - Persona no socia convidada
> - Un altre pagador (to kill)

Els casos de fallada serien els que no acaben bé.

> Exemples
>
> - quan el CUPS te un cas obert,
> - quan la persona esta en una blacklist...

:::


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
quin és el límit operacional?
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


- Anàlisis estàtic de patrons de codi vulnerables
- Dependències amb vulnerabilitats conegudes
:::


# TDD

## Red-Green-Refactor

**Red:** Fem un test que falli

**Green:** Fem lo minim per que passi ràpid

**Refactor:** Millorem el codi, reduint entropia i preparant per seguent red

:::notes
TDD és una metodologia que prentén establir un cicle virtuós
entre diferents aspectes de la programació.

Si testejes a priori

- Testejes el test
- Et dona un límit de què testejar
- Et dona sensació de progrés
- Et dona confiança per fer canvis
- Pots simplificar el codi sense por
- El codi queda més net i fàcil de mantenir
- Es soluciona el canvi climàtic i la fam al món
:::

## Red

**Escrivim un nou test que falli**

- ens fa pensar en la interfície primer
- les pensem des del test, interfícies testables
- donarà errors (ERROR) fins que creem classes i mètodes buits fins arribar a la fallada (FAIL)
- el FAIL és el test del test, **obligatori!!**

**Criteri de limitació:**\
si no podem fer que el test falli, no calia fer-lo

## Green

**Fem lo minim per que passi ràpid**

- No ens preocupa si el codi és correcte
- Si no ho podem fer rapid,
	- tirem enrera el red i refactoritzem per facilitar-ho
	- o plantejem un altre test més assequible
- Molta cura de no afegir funcionalitat no coberta

## Refactor

**Millorem el codi**

- No afegim funcionalitat
- Reduim entropia i duplicació al codi
- O fem espai per la pròxima funcionalitat
- Es poden fer diversos abans del seguent Red
- **Passem els testos a cada canvi**


# Trobant<br>casos de test

## Quan hem testejat prou?

Llei del retorn decreixent.

Compte, no son gratis, si fem masses testos...

Costa implementar-los\
Costa mantenir-los\
L'execució dels testos triga més\

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

**Montecarlo**\
Generació aleatoria de casos\
(casos petits? casinos?)

:::columns
::::column
**Anàlisi de fluxe**

**Branch testing**\
cada cami al codi un test

**Test de cobertura**\
eina que detecta codi no exercitat pels testos
::::
:::: column
**Anàlisi domini d'entrada**

**Valors frontera**\
A banda i banda d'on canvia el comportament

**Particions equivalents**\
Un cas per partició de comportament equivalent
::::
:::

::: notes

Ens ajuden a racionalitzar els casos de tests.

Totes les tècniques es deixen casos
o son inviables a full.
:::

## Montecarlo

És molt difíci donar amb cas de test extrany.

Important: guardar el cas fallat, per reproduir-lo fora del montecarlo

Molt costós d'executar

Hi ha eines per generar-ne

Per definir el domini aleatori, cal un análisi de domini mínim

Ideal per tests de rendiment


::: notes
En Python, la libreria `faker` és bestial para generar, nombres, direcciones, nifs...
:::

## Branch testing

Assignar un cas d'us a cada branch de codi\
`if`, `for`...

**Compte:** No considera comportament divergent per dades quan cridem a terceres funcions o operadors

Exemple: `floor(x)` vs `x//1` amb negatius

::: notes
Per a codi ja escrit o que tenim clar que volem escriure

Quan tenim un `if`, un test per quan la condició és certa o és falsa.

Si la condició és una convinació de condicións, ho fem per cadascuna.

Quan tenim un `for` fem-ho per _one_(1), _none_(0), _many_(2)

Si hi ha condicions de `break`, `continue`, `return` a dins del for
les testejem com un `if`.
:::

## Coverage testing

Es fa amb eines d'anàlisi de codi

Serveix per detectar alguns casos no previstos

Al final fas branch testing,
amb les seves limitacións.


## Anàlisi de domini d'entrada

Tàndem: Valors frontera + particions equivalents

Un cop definits els valors frontera, generem les particions equivalents

Fem servir els valors frontera com a representants de la partició.

Dos casos son equivalents si tenen el mateix comportament


# Escrivint els testos

## Estructura d'un test

![Testing com diagrama d'estats](images/testing-testcaseAsStates.svg)

::: notes
- **Set Up:** Es la part on posem el sistema a les condicions de test
- **Exercise:** Es la part on s'executa el codi que volem testejar
- **Assert:** Es la part on comprovem que l'estat és el dessitjat
- **Tear Down:** Es la part on deixem el sistema net i llest pel segûent test

Recordeu: Setup i tearDown no són només els mètodes del TestCase.
Els mètodes setUp i tearDown, contenen les passes comunes per tots els mètodes de test.
Cada mètode de test afegeix el seu propi setup.

Si pensem el sistema com a un complex diagrama d'estats,

- Cada cas de test comprova una aresta del diagrama.
- El **set up** posa el sistema en el estat de partida
- El **exercise** provoca la transició
- L'**assert** comprova que som a l'estat on toca
- El **tear down** torna el sistema a l'estat inicial

:::

## Comandes i consultes

És práctic tenir els mètodes dividits en

**comandes** (setters) que modifiquen estat\
	Els fem servir al **setUp**, **tearDown**

**consultes** (getters) que no alteren l'estat\
	Els fem servir per l'**assert**


## Inputs i outputs

![](images/testing-sut-direct-io.svg)

::: notes
Inputs: el que rep l'unitat (crides, paràmetres...)

Outputs: el que ofereix l'unitat (retorns...)

- Setup: Inputs
- Exercise: Inputs (o outputs)
- Assert: Outputs
- TearDown: Inputs

Què fem quan l'estat depén d'un tercer component?
::::

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
with description("having an instance of MyClass") as self:
	instance = MyClass()
	with context("in condition A"):
		instance.setConditionA()
		with it("returns 666"):
			expect(instance.myGetter()).to(equal(666))
```

:::notes

La intenció original dels BDD és implicar
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

Opinió (esbiaixada, he crescut amb xUnit):

Impressió: Als frameworks BDD els falta maduresa\
Fan el codi de test mes complex\
Per això dubto de qui ho fa servir coescrigui els testos\
Quan separen especificació, el binding és fràgil\
Ben portat, es pot fer amb xUnit sense complicar tant el codi\
Potser és la meva desconeixença
:::

## Nomenclatura

Objectiu: identificar el propòsit del test

Testejem `myMethod` de `MyClass` en una condició de test concreta
(i esperem alguna cosa):

```
MyClass_Test.test_myMethod_whenThisHappens_fails
MyClass_Test.test__my_method__whenThisHappens_fails
```

classe - mètode - condicio - (opcional) conseqüència

::: notes

Combinació de camell case i underlines per localitzar millor
classe, metode i condicions.

Si els simbols tenen underlines, fer-ne servir dobles per separar.
:::

## ¿On poso els tests?

¿Carpeta `tests` o de costat?

¿Prefix `test_` o sufix `_test`?

Editar sempre en parells codi + test\
Directori o prefix els allunya

Carpeta `test` comú a la comunitat Python\
Separa testos de codi de producció

Al `setup.py` podem separar per suffix

::: notes
Per un costat,
la carpeta `test` separa el codi que anirà a producció
i és costum en projectes Python.

Al `setup.py` es pot excloure de la distribució per directori o per sufix al `setup.py`.

Però és molt bo que quan vagis a editar un codi,
trobis just al costat els testos que has de mantenir conjuntament.

Per això la meva opció: al mateix directori i amb sufix.
:::

## Test Helpers

El codi de test cal mantenir-ho també.\
Codi replicat és el dimoni del manteniment.

Extreure codi comú.

Desofusca la intenció del test:\
treu detalls d'en mig darrera d'un bon nom.

Consell: per una millor abstracció, esperar a tenir alguns testos que la necessitin

Modifiquem el test, testejem-lo provocant fallades


::: notes
Els helpers generalment s'apliquen a una fase del test (setup, teardown...)

Si es un assert `assertAquestaCondicio(...)`

:::

# Refactoritzant

## Receptes

Fowler te receptes per modificar un artefacte d'implementació en una direcció

"Artefactes" poden ser un atribut, un literal, un métode, un condicional, la signatura...

Reversibles: Sovint hi ha de complementaris

::: notes
- Renombrar o relocalitzar classes, atributs i mètodes
- Pujar i baixar atributs i mètodes en una jerarquía de classes
- Extreure o expandir en linia métodes, attributs o classes
- Encapsular attributs, canviar condicionals per polimorfisme, state o strategy
- Canviar la signatura de mètodes

Son reversibles perque origen i destí son equivalents.

El fet que sigui reversible ens fa ser valentes.
Els podem aplicar i desaplicar-los després si convingués.
:::


## Passos comuns

Com si fos una bastida cal tenir sempre el codi funcionant, que l'edifici no caigui en cap moment:

- **Duplicar** l'estructura vella
- **Farcir** l'estructura nova (duplicar setters)
- **Recolzar-se** en l'estructura nova (getters)
- **Netejar** restos de l'estructura vella

::: notes

**Com ho farieu en aquests casos?**

Modificar la signatura de la funció

Atribut objecte a atribut lista d'objectes

Passar d'un literal a un atribut

Canviar el contenidor dels objectes agregats

Substituir un component per una reimplementació
:::


## Sobredisseny

Dona cabuda a possibles funcionalitats futures que encara no suportem.\
Tradicionalment: "disseny previsor", pero\

- Complexitat innecessària i potser mal dirigida
- Codi més difícil de mantenir

En TDD, només es fa en el refactoring previ a la introducció de la funcionalitat

Si n'hi ha, és bo refactoritzar per treure'l.\
Recorda: És reversible.

::: notes
**Exemple:** si preveiem que una persona pot tenir més d'un telèfon
podem representar el telefon com una llista de telèfons.
Però, si, a la interfície d'usuari,
no hem implementat la possibilitat de afegir múltiples
telèfons és un sobredisseny que complica la lògica.
És un cas d'ús que encara no hem abordat per priorització.

Si ens ho trobem, refactoritzem per simplificar-ho.
Així, mentres que no ho necessitem, el codi és més simple.

Ara bé, el dia que ens requereixen tenir-ho, podem fer un refactoring
de convertir un atribut a una llista i ja ens cap.

Evidentment una bona encapsulació de les funcionalitats ajuda.
:::

## Optimitzacións

Un altre ús bon del refactoring.\
Amb els testos, dona molta seguretat.

**Compte:** Tendeix a codi ménys flexible.

**Com ho apliquem?**\
No aplicar-ho d'hora.\
Esperar a que estigui quasi complert.\
Amb profilers, només als colls d'ampolla.\
Mantenir la resta flexible.


# Solucionant pollos

## Els pollos

M'he *oblidat* testejar i ho vull cobrir a posteriori

Vull pendre el control d'un sistema que no tè testos

Un component que depén d'altre

El resultat és massa gran per ficar-ho al codi

El comportament és aleatori o fràgil

Vull automatitzar testos d'una interficie


## Testejant codi ja fet

Si es tracta d'un cas, que hem implementat sense test

Modifiquem el codi que sembla no testejat per no fer el que fa

Si aixeca un test, estava cobert, sinó, fem el test que l'aixequi.

## Code guided tests

Si no és un cas sino tot un métode

- Comentar el codi fet
- Anar afegint el codi per pedaços
- Mantenim l'antic de referència

:::notes
Motivem-nos: No tant per testejar el codi que potser sabem que funciona sinó per testejar el test.
:::

## I/O Indirectes

Algunes entrades i sortides es fan amb tercers,
no pas amb el test.

![](images/testing-sut-indirect-io.svg)

::: notes
Si volguessim **controlar l'estat**, hauríem de controlar els **retorns** dels tercers cridats.

Si volguessim **comprovar l'estat**, hauríem de conèixer quines **crides** i quins **paràmetres** han rebut els tercers cridats.

Com qui fa la crida els l'objecte, els rols d'entrada i sortida s'inverteixen.

:::


## Test doubles

::: columns
:::: column

**Dummy object:** Es demana un parametre, no es fa servir

**Test Stub:** Retorna respostes enlatadas. Ignorant parametres.

**Test Spy:** Stub que, a més, registra les crides que s'en fan. El test les comprova.

::::
:::: column
**Mock Object:** Li programes una expectació i el ja fa la comprovació. 

**Fake Object:** Implementación funcional de la interficie. \
	pe. Simular una base de datos o api con objetos en memoria

**Verified Fake Object:** 
::::
:::


::: notes
Gerard Meszaros introdujo una clasificación a sabiendas de que habia gente que llamaba a todo Stub o Fake o Mock.

Aunque se tiende a usar, a menudo se mezcla. Intentemos usarla.

Fowler dixit (Mocks aren't Stubs)[https://martinfowler.com/articles/mocksArentStubs.html]
:::


## Perills dobles

Els dobles son codi

Si l'objecte doblat evoluciona cal actualitzar-los

Si fem un Fake que passa els mateixos testos, ens adonarem!


## Fragilitat

Un test és fràgil quan és possible que en algún moment falli,
tot i que la funcionalitat no s'hagi trencat.

- Depén de dades de producció
- Depén de la data actual
- Depén de esdeveniments aleatoris

## Desfragilitzant
::: columns
:::: column
**Dades de producció**

- Comprovar de casos
- Cercador de casos
- Extractor de casos
- Casos sintètics
- Double de font de dades
::::
::::column
**Aleatori**

- Generador substituible
- Injecció de dependencies
- Context handler

**Data actual**

- Parametre today
- Mockup datetime
::::
:::


::: notes
**Comprovador de casos:** Test extra comprova que el cas seleccionat te les característiques dessitjades

**Cercador de casos:** Helper que cerca un cas amb unes característiques concretes

**Extractor de casos:** Genera dades sintètiques a partir de casos reals

**Dades sintètiques:** Les construim amb codi o declarativament
:::

## Back-2-Back tests

**Utilitat**

Per agafar control codi no cobert\
Per comparar sortides difícils d'escriure

**Com funcionen**

Es seleccionen entrades de casos significatius

Es genera una sortida per ells (referència)

Es compara automaticament (diff) si canvia o no

Mecanisme per acceptar una nova referència

## Prenent control

Quan falla un B2B d'un procés llarg,
no ajuda gaire a saber on esta la falla.

Normalment te a veure amb els canvis que hem fet.

Si no, interessa fer drops de dades intermitges.

Els punts de drop és un bon punt per posterior
disecció del procés en mòduls testejables
partint dels B2B.

## Data driven tests

Quan els casos de tests es poden paremetritzar, entrada sortida

Un mateix codi per diferents dades

Sovint els usuaris poden escriure la taula

Important documentar que aporta cada dada

Helpers de setup i assert, tambe fan feina

Frameworks (`ddt` per `unittest`)



