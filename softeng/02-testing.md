# Tipus de testos

## Segons transparencia

Com de conscients som quan escribim el test dels detalls d'implementacio:

- Caixa Negra (Ho fem a cegues, entrada-sortida)
- Caixa Grisa (Tenim una idea del que fa)
- Caixa Blanca (Fem el test seguint el codi)

## Segons quan fem els testos

- Test Last: Un cop que ja hem fet codi
- Test driven: abans el test, de cada linia de codi
- Behaviour driven: abans el test, de tot el codi

Sovint el codi ja esta fet, fem-ho test last pero:

- Comentar el codi fet
- Anar afegint el codi per pedaços amb l'antic de referencia
- L'antic ens serveix per detectar els  testos necessaris:
	- Cada condicio
	- Cada for: un, zero, many (o zero, un, many)

## Segons el codi que cobreix

- Test unitari: Cobreix una linia de codi (o una modificacio de codi)
	- Test exploratori: Test unitari que es fa per entendre el funcionament de códi de tercers
	- Test de correcció: Test unitari que fem per manifestar un bug, i que després deixem per regresió
	- Test de regresió: Quan els testos, un cop passats es continuen passant per comprovar que no tirem enrera
- Test funcional: Cobreix un cas d'ús (nivell usuari)
- Test d'integració: Cobreix la comunicacio de dos moduls
	- Bottom up: capas de abajo a arriba
	- Big bang: Se junta todo a la vez
- Test de component: Testeja el comportament general del component, no pas una funció
- Test extremo a extremo: Integracion total, emulando un caso real en entorno real
- Test d'acceptació: Es el que fa l'usuari per donar per bo un desenvolupament
- Test de desplegament:
	- Test de fum: Es fa per comprovar que un desplegament mínimament correcte (arrenca, respon...)
	- Test de sanitat: Comprovacions ràpides en desplegament per saber si funciones les noves funcionalitats i correccions


## Casos de test

- Com decidir els casos de tests:
	- Anàlisi de valors frontera: Trobar casos frontera de forma agregada
	- Particions equivalents: Testeja un cas de cada partició equivalen
	- Test per branques: un test per cada cami al codi
	- Test de cobertura: es un check de quin codi no s'ha exercitat amb els testos
- Test de camí daurat: Comprova una condició d'exit
- Test de fallada: Comprova una condició de fallada


## Anàlisis estatic o dinàmic

- Dinàmics
	- Performance profilers (valgrind)
	- Memory profiles (callgrind)

- Test estàtics (vs dinámics): Testos que es fan analitzant el codi no executant-ho
	- pep8: standard style checker
	- pylint: extended style checker
	- mccabe: cyclomatic complexity checker
	- pyflakes: errores logicos
	- flakes8: matxambra pyflakes i pep8
	- mypy: static type checking


## Test no funcionals

Comprova requeriments no funcionals: 

- Test d'usabilitat: Se monitoriza la reacción de los usuarios interactuando con el programa
- Test d'accessibilitat: Llista de comprovacions per facilitar l'ús a persones amb diversitat funcional
- Test compatibilitat: Comprobar si funciona a tots els navegadors/processadors/sistemes operatius...
- Test d'eficiencia:
	- Test de volumen: Comprova si es processen correctament dades de diferent tamany
	- Test d'escalabilitat: Comprova els límits del programari
	- Test de càrrega: Es comprova la capacitat del programari
	- Test d'estress: Comprueva como se recupera el software cuando algun recurso (CPU, Memoria, Disco, Red...) està al límite.
	- Test de remull: Monitoritza la degeneració del software durant llargs períodes de temps.
- Test de seguretat
	- Test de penetracio: El fan white-hat hackers seguint els seus propis procediments
	- Test de vulnerabilitats: Cerca de vulnerabilitats al programari

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
		self.confition(A)
		with it("returns 666"):
			expect(self.myMethod()).to(equal(666))
```

## xUnit vs BDD style

La intenció original dels BDD es implicar
als stakeholders en l'escriptura i manteniment dels testos.

Lliga l'especificació co-escrita amb els stake holders
amb els testos mantinguts pels desenvolupadors.

Opinió (esbiaixada he crescut amb xUnit):

Als frameworks BDD els falta maduresa\
Fan el codi de test mes complex\
Per això dubto de qui ho fa servir coescrigui els testos\
Quan separen especificació, el binding es fràgil\
El que aconsegueixen ara, ben portat, es pot fer amb xUnit\

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








