# Introducció

## Comissió d'incidències crítiques

Arrel de la incidència de centraleta

Reunions a l'inici de desembre de 2020

Representats tots els equips IT

Benja, Xavi, Fran, Joan, Alberto, Voki

:::notes
Coincidia amb la resaca de la centraleta.
Tot i que encara hi erem. I encara hi som.

Ens vam adonar de moltes coses que estavem fent malament.
Hem anat incorporant algunes pràctiques que han resolt algunes disfuncions.
I si les haguessin incorporat abans? Que ens cal, d'a més a més?
:::

## Resultats

Qué considerem incidència crítica

Quines disfuncionalitats tenim

Quines práctiques han anat bé o es poden millorar

Propostes organtizades en 14 punts, que formen el protocol

Recollit a un [Document](https://docs.google.com/document/d/1tB955P30UBBRhJ8RKf94xvP4XVNi69Xeg_a8jS9MqMo/)

:::notes
El protocol està agrupat en 14 punts.
No son passes.
Alguns son activitats,
d'altres eines...
:::


## ...i avui...

Traslladar el treball de la comissió:\
**reflexions** i **proposta de protocol**

Acabar de perfilar-ho amb **aportacions** de la resta

Que tothom ens donem per assabentats\
per **començar a aplicar-ho**


## Roadmap

Quan considerem que som a una incidéncia crítica?

Disfuncionalitats que ens hem trobat

Protocol, dividit en 14 pràctiques-artefactes


## Quines incidències?

:::columns
::::column
#### Efectes

Bloqueja **processos vitals** per l’empresa

Impedeix treballar **a moltes persones**

Suposa **perdua d'informació**
::::

::::column

#### Resolució

Coneixement clau **distribuït**

Diversos **equips** d’IT

**Temps** sense trobar solució

Involucra gestió de **partners**
::::
:::

Com a mínim, un de cada columna

::: notes
**Exemples**

- Una incidència que para a molta gent de treballar, i que una sola persona no troba la solució inmediata
- Una incidència que para a molta gent de treballar, i que un sol equip no troba la solució inmediata
- Una incidència que para a molta gent de treballar, i que depén d’un partner extern irresolutiu
- Un esdeveniment que afecta a un sistema amb implicacions en molts d’altres sistemes (cau la fibra)
- Un esdeveniment previst del qual s’espera que generi incidencies desconegudes a priori (implantacio d’una nova versio, canvi de sistema…)
:::


# Què ha estat passant?


## Recursos

S'ha allargat molt temps

Moltes persones implicades

Persones que no calien, i persones que faltaven

## Comunicació interna

Actuacions paral·leles amb desconeixença

Rotacions sense traspàs

Visió parcial del que s'està fent

Necessitat continua de reunions amb tothom

Múltiples vies de comunicació.\
Informació perduda en algun mitjà diferent

:::notes
- No tothom implicat sap amb quines actuacions s’han fet
- Actuacions en paral·lel amb efectes mutus
- Costa traspassar informació quan hi ha rotació de persones
- Comunicació entre participants (intervencions paral·leles)
- La informació completa només es troba quan es reuneixen totes les persones implicades
- Actuacions que es fan sense que la resta de persones tinguin constància
- No sempre estan disponibles les persones que tenen una informació o knowhow
- S’ha anat canviant de mitja de comunicació (meet, telegram, hangouts, diversos chats, excel…)
:::


## Comunicació externa

**IT**:\
Afecta a d'altres equips? Han de ser-hi? Necessiten informació?

**Espònsors**:\
Què hem de comunicar? Cal coordinar missatges

**ET:**\
Que passa? Qui s'està encarregant? Temps estimat?


:::notes
- Els altres subequips no se n’adonen que la incidència també els pot estar afectant a ells.
- Comunicació confusa cap a l’ET (què passa, qui s’està encarregant, estimacions de temps de solució, ...)
:::

## Cures

Crema molt invertir tant de temps personal en una incidència

Soletat en moments quan ningú més respon

Tensió i nervis: Balons fora, culpabilització...

Sense una solució, es posen en dubte totes les decisions tècniques preses

:::notes
- Les persones implicades es cremen quan porten molt de temps
- Sensació de soletat en moments que es queda una persona al front de tot
- No ens sentim recolzades en les decissions técniques que prenem
:::

## Partners

Triguem en delegar en ells

Reben missatges contradictoris de persones diferents

Ens bloquejem esperant resposta

Sovint, no hem estat a sobre exigint resposta

Desconeixem els nivells de servei exigibles


:::notes
- No tothom implicat sap amb quins partners s’ha parlat que
- Canal de comunicació amb els partnes difusos (mail, trucada, qui es comunica)
- Els partners no contesten amb premura
- Desconeixem els nivells de servei que podem exigir a cada partner (SLA’s)
:::

## Presa de decicions

Falta de auto-confiança per pendre-les

Necessitem contrastar decisions amb altres persones\
per falta del coneixement complet\
i per necessitat de legitimitzar

:::notes
- Ningú se sent confiat per prendre decisions
- Necessitat de contrastar les decisions amb altres persones
:::


## Metodologia i prevenció

Actuacions preventives pendents: diagnosi, backup...

No es desfan proves, que no han tingut l'efecte esperat, acomulant efectes

Inacció per ausència de protocol\
concret per incidències conegudes\
genèric per noves

Retrospectiva i aprenetatges

:::notes
Amb la centraleta, les preventives es van fer durant la gestió.
Servidor i xarxa de backup,
eines de diagnosi,
pla de prevenció de desastres...
Eren totes targetes pendents.

- Actuacions preventives no s’havian fet i s’han fet durant la gestió de la incidència
- No sabiam como procedir
- No es desfan actuacions (proves) que no han tingut efecte
- Falta d’un protocol de com actuar per la incidència concreta
- Falta d’un protocol de com actuar per incidències genèriques per incidències desconegudes
- Un cop passada la incidència crítica no hi ha dades per aprendre de com s’ha de gestionar la incidència i realitzar una millora continua
:::

# Proposta

## 1. Identificació

Ho considera la persona que l'està gestionant:

:::columns
::::column
#### Efectes

Bloqueja **processos vitals** per l’empresa

Impedeix treballar **a moltes persones**

Suposa **perdua d'informació**
::::

::::column

#### Resolució

Coneixement clau **distribuït**

Diversos **equips** d’IT

**Temps** sense trobar solució

Involucra gestió de **partners**
::::
:::

Com a mínim, un de cada columna


## 2. Movilització

Identificar equips involucrats

Contactar amb les persones de cada equip\
que estan d'incidències al calendar

Suport no fan torns. Veure nota al costat.

Aquestes persones deleguen\
si no estan disponibles o\
si algú altre té l'especialització

:::notes
Suport no fa torns.

- Ara les gestiona al matí sempre Xavi i com a fall back Jordi (acabara sent Isra), a la tarda Joan
- Establim comunicació amb support pel Hangouts IT, si no hi ha resposta per telegram.
:::


## 3. Kick-off

Consensuar **criticitat**

Crear drive de **Bitàcola**, amb l'acta

**Intern:** Qui falta? qui sobra?\
Referents? Disponibilitat?

**Partners:** Quins? Interlocutors?

**ET**: Quins? via? freqüència?\
Primer contacte: _tenim comissió_

Primera **reunió de seguiment diària**\

:::notes
- Consensuar la criticitat
- Crear un drive de bitàcola, posar-hi l’acta del kickoff per començar
- Comunicació interna
	- Repensar qui estem, qui falta i qui sobra
	- Definir persona o persones de referència (una o dues)
	- Declarar quina és la disponibilitat dels participants
- Comunicació partners
	- Identificar els partners externs
	- Definir qui gestiona la interlocució amb ells
- Comunicació externa stakeholders
	- Identificar els stakeholders (àmbits, referents, altres equips IT)
	- Escollir el mitjà i establir la freqüència de comunicació amb ells
	- Fer un primer contacte, per informar que hem creat la comissió de crisi
- Organitzar el primer dia
	- Posada al dia d’estat, actuacions, comunicacions... (amb referències a la bitàcola per anar ràpid)
	- Repartir feina del dia
:::


## 4. Reunió seguiment diàri

**Qui?** Totes les participants disponibles

**Quan?** Ràpida, millor abans de l'standup

**Contingut:**

Posada al dia: estat, actuacions, comunicacions\
Fer referències a la bitàcola per agilitzar

Repartir feines del dia

:::notes
Arribar a l'standup sabent la disponibiliat per pair-programar


- Tots els participants disponibles
- Ràpida i millor fer-la abans de l’standup (perque la gent sàpiga després que podra pair-programmar)
- Parts que ha de tenir la reunió:
	- Posada al dia d’estat, actuacions, comunicacions... (amb referències a la bitàcora per anar ràpid)
	- Repartir feina del dia
:::

## 5. Persones de referència

Una o dues persones concentren la info

S'estableixen al kickoff

Amb **suplències o traspàsos** planificats

**Convoquen i moderen** reunions

Centralitzen **comunicació stakeholders**

Centralitzen **comunicació partners** (delegable)

Detecta i encamina necesitats de **cures**

## 6. Presa de decissions

**Gerència**:
Pagaments, canvis de partners, inviabilitat d'una decissió de Gerència, decissions polítiques.

**Stakeholders**:
Canvis en la forma de treballar,
interrupció o merma de servei.

Per la resta la comissió és **sobirana, per consens**.

Si **falta algú**: prou amb una referent i dos més.

Si hi ha **disens**: s'escala\
referents, referent IT, gerencia, CR, assemblea...


## 7. Carpeta del drive

Centralitza la documentació relacionada


La posem a `IT/Incidencies/YYYYMMDD-Tema/`

Enllaç a [IT/Incidencies](https://drive.google.com/drive/folders/1Y1lcQ2TZwwUKG6kJkky6suwvXAcb_dUj)


:::notes
La carpeta centralitza tots els documents relacionats amb la incidència
La posem a IT/Incidencies/YYYYMMDD-Tema/.
:::


## 8. Bitàcola

`00-Bitacola` Per a que quedi a dalt

Entrades ordenades per temps.

Marcat amb hora, dia i participants

::: columns
:::: column

Cal incloure:

- Actuacions fetes
- Informació recopilada
- Decissions preses
- Comunicacions fetes
::::
:::: column
A la capcelera

- Membres i referents
- Interlocutors
- Enllaç sala de crisis
- Full de càlcul de casos
::::
:::


:::notes
La posem a IT/Incidencies/YYYYMMDD-Tema/00-Bitacola
Ordenat per temps i marcat amb hora, dia
Ressenyat amb participants
Totes les actuacions que es fan
Tota la informació que es recopila
Totes les decisions que es prenen
Tots els contactes que es fan (amb partners, usuaris…)
:::


## 9. Sala de Crisi (Meet)

Sempre la mateixa, enllaç a la capcelera de la bitàcola.

Sala de treball amb oients

Oients fan altres coses

Persones pendents en aquell moment (no actives)

No hi ha tothom, si cal avisar: xat de crisi

Si hi ha dos tasques, split




:::notes
Siempre la misma (enllaç a la bitàcola)
Punt de contacte de la gent que està pendent en el moment (no té per què ser activa)
Sala de treball, amb oients
compte, no hi ha tothom si cal avisar al xat o si cal informar al log
compte, els oients que no fan coses en paral·lel, llavors s està agafant recursos
Cal identificar quan hi ha dos tasques en paral·lel per fer un split i evitar soroll
:::


## 10. Xat de crisi

Flood: la informació es perd, a la bitàcola

Per convocar a la Sala o raonar

Separat dels **stakeholders** i **partners**\
(no estarian pendents entre el soroll)


:::notes
**Alberto, Voki:**
En la comision se dijo que igual partner en el mismo xat.
Pero hemos visto que habria el mismo problema que con los stakeholders.


Per convocar a la gent i notificacions a la gent que no està a la sala de crisis

És bo separar els stakeholders (barrejar les comunicacions amb ells amb les internes, fa que no estiguin atents)

Considerar si és convenient incloure els partners

:::


## 11. Rotacions i suplències

**Rotacions:** per evitar rostir la gent\
**Suplències:** vacances, enfermetat, ausencies, altres tasques...

Si es pot, **traspàs** abans de que es produeixi

La persona que faltarà és responsable de\
cercar la suplencia i fer el traspàs

Sobrevinguda: el seu equip s'encarrega

Fer servir la bitàcola per minimitzar efectes d'una absència


:::notes
Com gestionar rotacions i suplències

- Vacances
- Horari laboral reduit

Sempre que sigui prevista, ens assegurarem de fer el traspàs amb anterioritat

La persona que ha de faltar o ser rotada és responsable de buscar substitut

Si es sobrevinguda, el seu equip (persona d’incidències, referent…).

La màxima informació possible la compartirem a la bitàcola
:::

## 12. Partners

Revisar els SLA's. Què els podem exigir?

Centralitzada o delegada. Es traspassa com Déu mana:

Qui parli amb els partners, ha de tindre el màxim d'informació.

Les actuacions i comunicacions del partner\
es traspassen sempre a la bitàcola.

:::notes
- Com fer la comunicació amb els partners
- Cal revisar els SLA’s (Contractes de nivell de servei) per saber quina involucració podem exigir al partner
- La comunicació amb els partners serà centralitzada o delegada amb traspàs convenient
- Qui parli amb els partners ha de tindre el màxim d’informació
- Totes les actuacions, comunicacions amb el partner han d’escriure’s a la bitàcola i a la carpeta del drive
:::


## 13. Stakeholders

Després de la reunió diaria i als canvis significatius:

**Estat:** hi ha diagnosi? solució? afectació? workarounds?\
**Pla:** Actuacions realitzades i pendents\
**Estimació:** evitant falsos optimismes

Rebre feedback: Equilibri entre redundancia i silenci\
Evitar soroll establint **canal acomulatiu i no intrusiu**\
Cal ser clar amb els usuaris com fer servir els canals

:::notes
Comunicació amb els stake holders

- Moments importants de comunicar cap als stakeholders
	- Després de l’standup diari, perquè tenim la foto de com està i què farem
	- Quan hi hagi un canvi d’estat significatiu
- Que comuniquem
	- Estat de la incidencia (hi ha diagnostic? hi ha solució? afectació? hi ha workarounds?)
	- Actuacions realitzades i pendents
	- Si es pot, comunicar una estimació aproximada de temps de resolució  (evitant falsos optimismes)
- Canals d’entrada
	- En una incidència d’aquesta mena és tan comú trobar saturació de canal com silenci perquè tothom ja sap que no va be
	- Cercar un mecanisme que maximitzi la informació i minimitzi el soroll i que nos sigui farragós  de fer servir
	- Acumular la informació per no haver d’atendre cada cas individual però tampoc perdre-la (+1)
- Exemples:
	- Incidencia d’asterisk vam fer un excel per anar apuntant les trucades fallides
	- Comunicar clarament als usuaris com fer servir aquest canal mentres duri la incidència
:::

## 14. Retro i Tancament

Reunió un cop acabada la crisi

Deixar escrit com actuar si torna a passar

Analitzar com ho hem fet i treure conclusions

Comunicar als stakeholders\
un resum executiu de la incidència

Cerveseta de celebració!!!

:::notes
Reunión de Retro i Tancament
Un cop acaba la crisi és important analitzar el que ha passat amb retrospectiva
Deixar escrit com actuar si torna a passar el mateix
Analitzar com hem gestionat la crisis i treure conclusions (a millorar, que hem fet bé)
Comunicar als stakeholders resum executiu de la incidència
Cerveseta de celebració

:::




## 0. Tasques preventives

Prioritzar targetes de prevenció:

:::columns
::::column
- Recopilar els SLA’s vigents de tots els partners
- Elaborar un pla de gestió de riscos
- Establir protocols per incidències específiques (previstes o conegudes)
::::
::::column
- Desplegar mitjans de backup
- Desplegar eines de diagnosi
- Fer auditories externes
- Fer proves de càrrega
- Tenir integració continua
- Testos, testos, testos
- ...
::::
:::

# Discussió

## Temes pendents de treballar

Ús de la sala de crisi

Gestió de cures ::heart::

Elements que previnguin conflictes i malestars ::ligthing::

## Altres temes

Recollim-los al [Document](https://docs.google.com/document/d/1tB955P30UBBRhJ8RKf94xvP4XVNi69Xeg_a8jS9MqMo/)





