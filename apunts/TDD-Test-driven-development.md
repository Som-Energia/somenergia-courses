## Summary

Iterar al executar els testos:

1. RED
2. GREEN
3. REFACTOR

Iteració dins un refactor:

1. DUPLICAR
2. FARCIR
3. FER SERVIR
4. NETEJAR

Fases dins un test:

1. SETUP
2. EXERCISE
3. ASSERT
4. TEARDOWN

## TDD cycle (Red-Green-Refactor)

És el cicle del TDD.
Són tres fases diferenciades on canviarà la nostra actitud com a programadors (barrets).

### Red

- Cal definir un test que falli
- És important fer-lo fallar per que això testeja el test
- Si no el podem fer fallar, potser és un test que no cal, això ens delimita fins a on testejem
- Escrivim primer el test que el codi
	- Amb el test establim la interfície del codi que encara no hem escrit
	- Això força a pensar més en les interficies que en la implementació, i això és bó
	- Això força a fer interfícies que es poden testejar, i això és bó
- Un cop escrit el test, els errors ens diuen quines coses hem anar afegint de la interfície: Una classe, un mètode, un parametre...
- Quan deixi de donar errors hauriem de tenir una falla, i ja tenim el red
- Per exemple, si es una funció nova i retorna res, força que retorni malament, normalment amb quelcom que no t'oblidis que és incorrecte ('caca', 666, 69...)

El red normalment no es comiteja, al menys que estiguis fent la formació en TDD.
Per la formació, el commit serveix per marcar el ritme i comprovar que l'hem fet.
Però si en un projecte amb múltiples desenvolupadors comitejem un red, farem que els testos no estiguin sempre funcionant.
El que si que és important és que, quan tinguem el red, fem el canvi d'actitud cap a la següent fase.

### Green

- Cal fer lo mínim i més ràpid que posi el darrer test en verd
- Copiar el literal que esperem, fer-ho lleig, tot s'hi val... menys estar-se molt de temps fent el verd
- Tot el temps que estiguem en vermell fins aconseguir el verd és tensió
- Si veus que costa molt, tira enrera el vermell i planteja'n un de més assequible
- Tipiques xapuses (bones) que es fan:
	- Retornar el mateix literal que ens demanen sense calcular-ho a partir de les dades que ens donen

Es bona pràctica fer commit després d'un green.
Així tenim un punt de tornada si ens perdem.
A més el nom del test que passem, si l'hem escollit be, hauria de ser un bon missatge de commit.

### Refactor

- En aquesta fase podem fer els refactors que volguem
- Un refactor és un canvi en el codi que **no modifica el seu comportament**
- Hi ha receptes  per fer-ho sistemàtic tipus _extreu codi com a mètode_, _canvia literal per variable_...
- Els objectius dels refactors serán principalment:
	- Treure les xapuses que hem fet per passar el verd ràpid
	- Treure redundancies i complexitat
	- Preparar el codi per a que, sense avançar en comportament, fer el seguent verd sigui més assequible.

#### Nota: Refactor i Optimització

Es poden fer servir els refactors, per altres coses, optimitzar, o fer convergir dos codis.
Pero no dediquis temps a optimitzar, sobretot al començament.
Les optimitzacions tendeixen a enquistar el codi i fent-ho menys maleable per ficar noves funcionalitats.
Espera't a que estigui la major part de la funcionalitat feta.
Llavors amb l'ajuda d'un profiler, inverteix el temps en optimitzar
els colls d'ampolla reals del sistema.


## Refactoring loop (Duplicate-Fill-Use-Clean)

Tot i que hi ha moltes receptes, al llibre d'en Fowler,
quan has llegit algunes es percep un cert leitmotif.

Digam que en el refactoring volem substituir una estructura per una altra.
Estructura en el sentit ampli: Un literal, una variable local, un attribut,
codi inline, un mètode, una classe, una llista, un diccionari...

Els següents passos asseguren que tindrem el codi sempre funcionant
tot i que estem en mig d'un refactor:

### Duplicar

- Dupliques l'estructura sense fer-la servir.
- T'assegures que està ben definida (syntaxis), no modifiques el comportament.
- Passes testos i fas commit 

### Farcir

- Els llocs on li dones valors a l'estructura antiga, li dones valors tambe a la nova.
- No treus encara el codi que dona valor a la antigua, i no fas servir el contingut de la nova, així tot segueix funcionant
- Hauria de correspondre als setters

### Fer servir

- Els llocs on feies servir (getter) l'antiga ara faràs servir la nova
- Com la vella i la nova tindràn estats equivalents, hauries de poder fer servir indistintament les dues
- Això permet anar canviant els usos progressivament i controlar els errors de poc en poc

### Netejar

- Un cop el comportament no depen l'estructura vella (no li fem cap get), podem eliminant per ordre:
   - els setters a la vella
   - l'estructura duplicada en aquest ordre.


## Fases d'un test (SetUp-Exercise-Assert-TearDown)


Els testos els hem de llegir de la següent manera:

- Quan el sistema està en un estat determinat (**Set up**)
- fem quelcom (**Exercise**)
- comprovem que el sistema ha quedat en l'estat esperat (**Assert**)
- i tornem el sistema a les condicions inicials per que no afecti al següent test (**Tear down**)

Els frameworks permeten definir mètodes `setUp` i `tearDown`,
però només serien la part comuna de tots els testos.
A dintre de cada test s'afegirà el codi propi de setup i teardown
per arribar a les seves propies condicions de test i sortir-ne.

Una altra manera molt gràfica de veure-ho es pensar en el sistema
com un gran diagrama d'estats.
Cada test testeja un vertex del diagrama:

- El setup posa el sistema en l'estat origen del vertex.
- L'exercise provoca la transició del vertex.
- L'assert comprova que estem a l'estat destí que toca.
- El teardown torna a posar el sistema a l'estat inicial.

Altres nomenclatures fan servir estructures del llenguatge natural (Given-When-Then-Finnally) pero seria anàleg:

- Given: Setup
- When: Excercise
- Then: Assert
- Finally: Teardown


## Entrades i sortides

Setup, exercise i teardown canvien l'estat del sistema.
Per aixo diem que farem servir metodes tipus setter o mètodes de modificació.
L'assert nomes comprova a quin estat està,
normalment, si es pot, farà servir getters o mètodes de consulta.

També es diu que per testejar un sistema hem de aportar-li entrades i comprovar les seves sortides.

Son entrades de sistema,
els mètodes de modificació que cridem.
els parametres de tots els mètodes que cridem.

Son sortides del sistema, els retorns dels métodes que cridem.

Però hi ha entrades i sortides indirectes que no controlem directament des del test.

Quan el nostre sistema crida a un altre element ocult,
els mètodes que crida i els paràmetres que envia son sortides del sistema,
i els retorns d'aquestes crides, son entrades que voldriem controlar.

Per això es fan servir els dobles.
Els dobles intenten emular tercers elements per poder controlar o comprovar la interacció amb ells.
Segons l'estrategia, parlem de mockups, fake objects, stubs...

- Dummy: nomes necessitem que hi sigui, sense res per controlar o comprovar entrades i sortides indirectes
- Stub: contesta amb una resposta programada des del test (respon amb les dades que volem)
	- Permet establir des del test les entrades indirectes
- Spy: grava les crides que s'han fet des del sistema al suposat tercer per comprovar que les ha fet des del test
- Mock: comprova les crides que s'han fet des del sistema al suposat tercer son les que hem programat que ha de fer
- Fake: emula el comportament del tercer real (en comptes de fer-ho amb base de dades ho fa a memoria)


El Fake es el més elaborat de fer, pero, si fem que passi els mateixos test que l'objecte real,
es poden mantenir en paral·lel per adonar-nos de canvis d'api o comportament.



