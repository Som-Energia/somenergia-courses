# Proposta criteris generals

## Pels atributs de **layout**

El seu significat seria inconexe fora d'una estructura.

Té sentit aplicar-los directament al JSX

Fer servir preferent contenidors estructurals de MUI: Stack, Box, Grid...

Aquest contenidors permeten posar els atributs css com attributs html 


:::notes
Es expressiu tenir al JSX l'estructura d'elements amb els seus atributs de layout.

`Box` és un  `<div />`.
Veure [Flow layout](https://vokimon.github.io/apunts/computers/css-normalflow/)

`Stack` és un `<div style="display: flex" />`.
Veure [Flex layout](https://vokimon.github.io/apunts/computers/css-flexbox/)

`Grid` és un `<div style="display: flex" />` pero configurat per funcionar com un grid de bootstrap

`Grid` NO és un `<div style="display: grid" />`.
Veure [Grid layout](https://vokimon.github.io/apunts/computers/css-grid/).
Para tener un grid css, partir del `Box`.

Hi ha un `Grid_v2` que encara és un grid de bootstrap.
:::
## Attributs **look and feel**

Minimitzar customitzacions de components MUI

Si ho fem, fer servir àtoms del tema\
(colors, distancies, tipografies...)

No ens quadren? Afegim un àtom al tema.

Podem calcular shades i contrast colors

Inline? per provar puntualment. Ho movem després.

**Objectius:**\
Mantenir coherència. Single point of change\
Mantenir el tema de forma integrada\

:::notes
Per què evitar les personalitzacions?

- Els temes per defecte de MUI estan pensats per ser coherents
- Si havia alguna falla en la llibreria, segurament s'arregla després, i el nostre patch es posa en mig (ens ha passat amb Polythene, MDW i MUI)
- Ens trobem, sovint, quan una cosa es veu estranya, que vas quitant personalitzacions que s'han fet i al final es veu bé.
- També sovint les fem a prova error i deixem coses que no semblen afectar pero afecten.

Per què fer servir els colors del tema?

- Perque així maximitzem la coherència global

Per què afegir els colors nous al tema?

- Perquè així podrem reutilitzar-lo
- Perquè més endavant es podrà canviar el tema com un tot en un fitxer

:::

## Attributs **look and feel** (2)

Customitzar el tema general hauria de ser una decissió consensuada amb Comunica

Customitzar al tema un component MUI (Button) afecta a tot, si cal fer-ho,
de forma quirúrgica i consensuada amb Comunica

Si un tros de l'aplicació funciona amb diferents colors,
considerar crear un tema diferent i aplicar un ThemeProvider

## Evitar els **esculls**

Canviar sempre color i background a la vegada

Fer servir les funcions del tema\
per calcular colors de contrast i shades

Evitar selectors d'alta especificitat\
`!important`, `#ids`, múltiples classes...

Evitar selectors aniüats\
depenents de l'estructura

:::notes
Per què canviar color i background a la vegada?

- Si canviem nomes un, ie. color, no controlem quin es el background que vindrà
depenent del context del component, o el tema o el mode de llum pot variar.
:::

## Resets

Eliminar `App.css` i `index.css` que genera React

Afegir `CssBaseline` a l'arbre de l'aplicació

Afegir el `ThemeProvider` per sota del `CssBaseline`

:::notes
index.css fa una mica de reset. No prou.
Però, a mes, afegeix estils de la demo inicial.
:::


