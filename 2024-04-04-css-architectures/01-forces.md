# Els problemes 😈

## 🛑Pareu-nos!🛑

És important tenir un vocabulari comú.

Segurament ja us heu trobats en les situacions que descrivim.
No entrarem per no allargar-nos

Pero si no ubiqueu els problemes als que ens referim\
pareu-nos i donarem exemples concrets

Si estàs llegint-ho en diferit,\
alguns exemples en les 'speaker notes'

## ⚡Forces en Tensió⚡

🎯 Especificitat

🐑 Reusabilitat

🤡 Personalització

:::notes
- **Especificitat:** com afinem perque una regla apliqui a cert element i només a ell
- **Reusabilitat:** com evitem especificar arreu el mateix concepte
- **Personalització:** com fer per poder-nos sortir en algun cas de la generalització
:::

## Especificitat 🎯

> Com afinem que una regla afecti a un element?

A un mateix element poden aplicar moltes regles.\
Quines es queden?

S'ordenen per l'especificitat del selector.\
Determinista però complex.

A mesura que afegim regles, creix el perill de que comencin a interferir entre elles.

:::notes
Per si no us resona explicat en genèric,
aquí teniu uns casos concrets
que segur que heu viscut:


- **Colisió** entre els noms de les classes de diferents libreries i les nostres. `button`? `disabled`? `error`?

- **Contaminació per herència.**
Definim un component rebé amb els seus estils, el fiquem a un context
on un dels ancestres seteja un atribut heretable i ens trenca el component.

- **Excessiva especificitat** en els estils d'una llibreria complica personalitzacions o simplement evitar contaminacions (Tomatic vs Polythene)

Tot plegat es complexe. La solució: mantenir baixa l'entropia. Reduir els casos i les interferències.
Ara bé, com?
:::


## 🎯 Estratègies

**Especificitat plana**\
ni selectors alta especificitat, ni combinacions\
Metodologies: [BEM], [SuitCSS]\
Frameworks: Bootstrap, [Mui]

**Jerarquitzar els estils per tipus**\
arquitectures CSS de capes\
Metodologies: [ITCSS], [SMACSS], [Atomic Design]

**Acotar l'aplicació de les regles**\
Metodologies: [CSS-in-JS], [CSS modules]...\
Frameworks: [Emotion], [Styled Components]

[BEM]:(https://getbem.com/)
[SuitCSS]:(https://suitcss.github.io/)
[ITCSS]:(https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
[SMACSS]:(http://smacss.com/)
[Atomic Design]:(https://bradfrost.com/blog/post/atomic-web-design/)
[CSS-in-JS]:(https://en.wikipedia.org/wiki/CSS-in-JS)
[Emotion]:(https://emotion.sh/docs/introduction)
[Styled Components]:(https://styled-components.com/)
[CSS modules]:(https://github.com/css-modules/css-modules)

:::notes
**Especificitat plana**

- Tots els selectors tenen especificitat similar. (tots amb una classe, dues classes per quan ho necessitem)
- Eviten l'aniuament de selectors per evitar side effects

**Capes**

- Classes de regles: mes abast -> tipus de selector amb menys especificitat
- Exemple capes: reset - base - layout - component - state

**CSS-in-JS:** escriure el CSS com a codi JS.
El JS genera el CSS en compilacio o execució.
Com string template, com a diccionari, JSX...

**CSS modules:** CSS importat desde JS.
El processen les eines de compilació.

Quina estrategia segueix MUI?
**Mes o menys les tres**
:::

## Reusabilitat 🐑

> Voldríem no repetir-nos (DRY)

Objectiu: Tenir un sol punt de canvi.

:::notes
Que, quan decideixin a Som que el color de som es el vermell,
o la lletra deixi de ser la Montserrat, ho poguem fer a un sol lloc.

Que, si tenim cent botons i les cantonades deixen de ser quadrades, que ho fem a un sol lloc.

Que, si hi ha una forma mes eficient de fer una certa animació, ho canviem a un sol lloc.
:::

## 🐑 Coses reusables

**Temes**\
uns certs àtoms/tokens que apliquem arreu\
_colors, typografies, mides..._

**Components**\
una estructura html aïllada repetida\
_botons, llistes, barres de navegació..._

**Utilitats:**\
estils que apliquem a elements diversos\
_center, space-evenly, vertical, danger..._

:::notes
Els **temes** defineixen un seguit d'elements (tokens: colors, lletres, espaiats...)
que es fan servir arreu pero que podem canviar de forma global
perque siguin uns altres.

Quan definim **components** establim blocs d'html reutilitzables.
No només reutilitzem l'html sinó els estils que apliquem per que tinguin l'aspecte que volem.
Definim classes amb noms que identifiquen els components.

Les **utilitats** són classes que vinculem amb un seguit de regles css.
Definim classes amb noms que referencien l'efecte de les regles.

Amb grisos, existeixen llibreries CSS basades en components (Bootstrap, Bulma...) i basades en utilities (Tailwind)
:::

## 🐑 Estrategies

**CSS Preprocessors**\
functions, variables, mixins\
[Less], [Sass], [Stylus]

**Components JS**\
Repetim els estils amb el html\
React, Vue...

**Theme system / CSS Variables**


[Less]:(https://lesscss.org)
[Sass]:(https://sass-lang.com/)
[Stylus]:(https://stylus-lang.com/)


## Personalització 🤡

> Havent generalitzat, com podem diferenciar un cas concret.

Canviar el tema per defecte

Aplicar un tema diferent a certs components

Personalitzar un component

Les altes especificitats compliquen sobreescriure

## 🤡 Solucions

Fer servir especificitat més alta que al component.

Exemples:

Selector combinant la classe original amb la de especilització.

CSS Inline (máxima especificitat)

Sistemes de Temes personalitzables

:::notes
Els components de MUI venen amb molt estil,
cada versió van canviant de sistema per facilitar aquesta personalització.
:::

## Altres consideracions

**Compatibilitat** 🧩\
Res més compatible que CSS pur

**Velocitat** 🚀\
Generar o modificar CSS en el navegador es lent.

**Canvis Dinàmics** ⚙️\
Modificar en execució els attributs CSS.

**Expressivitat** 👄\
Media queries. Dreceres...

:::notes
**Compatibilitat**

JS-to-CSS depén del framework.\
Escena canviant -> rescriptura\
CSS pur és i serà compatible.

**Eficiència**

Generar/modificar CSS en el navegador, costós:\
rescriure una regla -> recàlcul  cascada CSS

**Zero run-time CSS**:
CSS estàtic generat en compilació.
Dinamisme via clases i variables.

- [Vanilla Extract](https://vanilla-extract.style/), [Linaria](https://linaria.dev/)...
- [MUI6 en camí](https://github.com/mui/material-ui/issues/38137)

**Canvis dinàmics**

Modificar les regles que s'apliquen a un element en temps d'execució

- Modificant directament les regles des del JS (costós)
- Canviant les classes de l'element
- Donant valors a variables CSS

**Expressivitat:**

Eines per facilitar l'escriptura i lectura.\
Estructures css complicades d'escriure:\
media queries, keyframes, anidacions...
:::

## Ens deixem cap?

Si, durant la presentació,\
penseu en cap altra força o criteri,\
afegim-ho per considerar-ho

:::notes
Ara que ja sabem quins son els problemes
que dona la gestió dels css,
repassem solucions que s'han donat a la indústria a nivell general.
:::


