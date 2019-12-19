# Arquitectura multicapa

## Motivació

Distribuir les responsabilitats en components

Les capes estableixen punts de tall (possibles) per la componentització

Aquestes capes estan en gairebé tota aplicació
independentment del domini.

Bon punt de partida, aprofitem-ho

:::notes
En anglès _multi-tier_

En una aplicacio trobaràs d'altres criteris de componentització depenent del domini.
Pero tindre uns criteris que et trobaràs sempre és un bon punt de partida.

No ens ho prenem com un paradigma arquitectònic que cal seguir per nassos.

Com els models UML és una eina per pensar i comunicar.
:::

## Les capes

<style>
.isostack {
    width: auto;
}
.isostack p {
border: 1pt #fff solid;
background: #aba;
width: 10em;
margin: auto;
}
</style>

<div class=isostack>
Presentació

Aplicació

Negoci

Entitats

Persistencia
</div>

:::notes
Cada capa resol problemes que li son propis.

Cada capa aïlla a la superior dels seus detalls.

Acoblament unidireccional: Les capes d'adalt fan servir les de sota.

- Presentació: com es presenta la informació a l'usuari, interactivitat
- Aplicació: dialeg amb l'usuari
- Negoci (Domini): regles/operacions propies del domini (si hagues més d'una aplicació el que fora comú)
- Entitats: Com s'agrupa la informació en entitats, atributs i relacions
- Persistència: Com es guarda tota aquesta informació, suport, mecanismes d'accés, indexació, backups...
:::

## Son capes irreals

Irreals com el model OSI de xarxes:

No cal correspondència Component - Capa

Pero les funcions han de ser-hi!

Serveixen per pensar/comunicar\
on posar fronteres i responsabilitats


## Presentació

::: columns
:::: column
<div class=isostack>
**Presentació**

Aplicació

Negoci

Entitats

Persistencia
</div>
::::
:::: column
Com es mostra la informació a l'usuari.

Elements visuals i interactius

Camps, botons, widgets, taules...
::::
:::

## Aplicació

::: columns
:::: column
<div class=isostack>
Presentació

**Aplicació**

Negoci

Entitats

Persistencia
</div>
::::
:::: column
Es la lógica que regna el diàleg amb l'usuari.

Quins passos presentes, que ensenyes i que no,
estat de la sessió.

Com transiciones de pantalla a pantalla

::::
:::

## Negoci/Domini

::: columns
:::: column
<div class=isostack>
Presentació

Aplicació

**Negoci**

Entitats

Persistencia
</div>
::::
:::: column
Lógica, operacions i restricions
propies del domini

Existeixen idependentment de l'aplicació
::::
:::



## Entitats

::: columns
:::: column
<div class=isostack>
Presentació

Aplicació

Negoci

**Entitats**

Persistencia
</div>
::::
:::: column
Elements del negoci\
Quins són\
Quins atributs els defineixen\
Com es relacionen
::::
:::

::: notes
Aquest nivell coincideix amb el de les APIS
anomenades CRUD (Create, Read, Update, Delete)

La lógica de negoci queda fora
:::


## Persistència

::: columns
:::: column
<div class=isostack>
Presentació

Aplicació

Negoci

Entitats

**Persistencia**
</div>
::::
:::: column
Com es guarda l'estat del sistema?\
Base de dades? Fitxers? Online?

Què es guarda?
Què es calcula?

En quin format?
En quin suport?

Indexos, rèpliques...
::::
:::

## Divisió horitzontal

Capes d'aplicació seria la divisió vertical

Horitzontal: Per temàtiques o funcionalitats

De la conjunció surten els components del sistema.

## Decissions

què repliquem o no

què centralitzem o distribuim

què diversifiquem o uniformem

quines fronteres (API's) definim

duplicació vs replicació

:::notes
Duplicació: quan fem el mateix a diversos llocs (i cal desenvolupar-ho diverses vegades)

Replicació: quan desenvolupem una cosa un cop i la repliquem a diversos puestos
:::

## Aplicació i negoci

La de negoci és la lògica compartida per les aplicacions.

Si tenim diverses aplicacions,\
no dupliquem la lògica de negoci a cadascuna.

Compartim un component que la contingui.

Llibreria, API, servei...

Mola exposar accions de negoci\
(tambè s'en diu la capa de serveis o operacions)

::: notes
Es diferent tenir logica duplicada que replicada o compartida.

La duplicació és un perill pel manteniment i la coherència.
:::

## Entitats i negoci

CRUD/ORM: representació d'entitat

Entitat no aporten per se lògica de negoci

ORM's augmentats amb operacions de negoci?\
Es bo per construir el nivell de _Negoci_.

El problema es quan oferim l'ORM a _Aplicació_,
permetent-li saltarse restriccións de _Negoci_.

:::notes
És bo si ho permet l'ORM augmentar les entitats amb operacions de negoci

El que és perillés es oferir l'ORM com a capa de negoci,
donat que no només ofereix aquestes operacions sinó
també les manipulacions a baix nivell de les entitats.

Si _Aplicació_ accedeix directament a una API ORM o CRUD,
és molt possible que estigui fent lògica de _Negoci_.
:::


## Aplicació i presentació

**Client-servidor:**\
Al servidor només estava _Persistencia_.

**LAMP clàssic:**\
Presentació era l'HTML generat,\
l'applicació estava al servidor.

**Single Page App:**\
Presentació i aplicació al navegador.


## A l'ERP

Les aplicacions accedeixen a diferents nivells
d'abstracció.

Hi ha lógica del negoci fora.

S'ofereixen API's a nivell de vista (wizards)
que haurien de ser de negoci

S'ofereix API a nivell persistencia (orm)

## Problemes

**Acoblament a l'estructura de la base de dades**

Rígidesa en el disseny

Ens saltem la lógica de negoci

Repliquem la lógica de negoci\
(i mantenim les répliques desigualment)

**Acoblament amb els camps i disseny dels wizards**

## Ús tipus CRUD

No hi ha abstracció de negoci

Acoblament a la representació

Genera rigidesa

Abstreure ops i moure-les a l'ERP

Bad smell de que hi ha lógica de negoci fora.


## Logica de negoci fora

Ficar la lògica de negoci dintre de l'ERP

Definir interfície que segueixi aquesta lògica de negoci

Operacions de negoci

::: notes
Es el que hem fet amb el `Partner.become_member`

És el que hem anat fent al webforms.

Al webforms ho hem anat fent de forma progressiva per
anar descobrint les parts comunes i definint la interfície apropiada.
:::


## API's tipus wizard

**Erpppek fa servir wizards com a API**

Wrappejar la crida al wizard

Moure-la a l'ERP, com a op de domini

Extreure la lògica de negoci com a API

Cridar aquesta API des del wizard

Cridar aquesta API des de l'erppeek


## Procediment 

**Abstreure ops a l'erppeek** \
cobertes amb tests! \
si no tenim, b2b i/o funcionals d'allò que ho crida \
unitaris després de la funció extreta

**Replicar-les a l'ERP com a API accessible** \
Intentar replicar els casos unitaris a destral \
Delegar mantenint testos interns i externs\

## API's amb diccionaris

Pot semblar còmode \
'flexibilitza' els arguments que es passen

Complica l'ús: \
Signatura ja no es documentació \
Errors tipogràfics silenciosos

Fer servir paràmetres explicits \
Problema: XMLRPC no soporta keywords \

Si els paràmetres depenen de la casuística,\
potser convé oferir diferents punts d'entrada.










