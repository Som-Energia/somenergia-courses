# Capes Aplicació

## Les capes

- Vista
- Aplicació
- Negoci
- Entitats
- Persistencia

## Capes irreals

Semblant a les capes OSI per xarxes \
Les funcions hi han de ser-hi \
Els moduls poden estar a varies capes \
Hi ha d'altres divisions \
Eix horitzontal per temes/funcionalitats \
Serveix per pensar on posar la frontera en un disseny distribuit \

::: notes
Podem decidir que l'ERP només proveirà API estil CRUD (persistència)
i que tota la lògica de negoci la posarem a els scripts externs,
pero centralitzant-la a una llibreria que es replicarà a totes les
applicacións.

Decissions:

- què repliquem o no
- què centralitzem o distribuim
- què diversifiquem o uniformem
- quines fronteres (API's) definim
:::

## Persistencia

Base de dades, Fitxers

Quins valors es guarden\
Quins es calculen\
En quin format\
En quin suport\

## Entitats

Els elements del negoci com están definits

Com es relacionen

Les APIs CRUD son d'aquest nivell\
(per això no m'agraden)

## Negoci/Domini

Lógica, operacions i restricions
propies del domini

Són idependentment de l'aplicació

## Aplicació

Es la lógica que regna el diàleg amb l'usuari.

Quins passos presentes, que ensenyes, que no...

Com transiciones de pantalla a pantalla

## Presentació

Com es mostra la informació a l'usuari.


## A l'ERP

Les aplicacions accedeixen a diferents nivells
d'abstracció.

Hi ha lógica del negoci fora.

S'ofereixen API's a nivell de vista (wizards)
que haurien de ser de negoci

S'ofereix API a nivell persistencia (orm)

## Problemes

Acoblament a l'estructura de la base de dades

Acoblament amb els camps i disseny dels wizards

Ens saltem la lógica de negoci


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

Erpppek fa servir wizards com a API:

Extreure la lògica de negoci com a API

Cridar aquesta API des del wizard

Cridar aquesta API des de l'erppeek


## Ús tipus CRUD

No hi ha abstracció de negoci

Acoblament a la representació

Genera rigidesa

Abstreure ops i moure-les a l'ERP

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
Fer servir funcions diferents com a punt d'entrada\










