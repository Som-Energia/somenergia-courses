# Capes Aplicació

## Les capes

- Vista
- Aplicació
- Negoci
- Entitats
- Persistencia

## Capes irreals

- Semblant a les capes OSI per xarxes
- Les funcions hi han de ser-hi
- Els moduls poden estar a varies capes
- Hi ha d'altres divisions
- Eix horitzontal per temes/funcionalitats
- Serveix per pensar on posar la frontera en un disseny distribuit

## Persistencia

Base de dades, Fitxers

Quins valors es guarden, quins es calculen, en quin format

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








