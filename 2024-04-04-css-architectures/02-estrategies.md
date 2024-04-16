# Estratègies CSS

## Arquitectures Planes

Exemples: BEM, SuitCSS

Mantenir l'especificitat baixa

```css
.button > .icon  /* La icona dintre d'un boto: MAL! (0,2,0) */
.button-icon` /* La icona del botó: BIEN! (0,1,0) */
/* Independent de la estructura, i, sempre (0,1,0) */

/* Particularització amb modificadors (estat, mode...) */
/* La icona a un boto deshabilitat (0,2,0) */
.button__disabled .button-icon  /* sobrescrivim el general */

/*
Diferents separadors per indicar el tipus
de cada part del nom de la classe:
Block, Element, Modifier
Depén de la metodologia
*/
```
:::notes
Per entendre com funciona l'especificitat,
pots provar selectors a  [aquesta calculadora](https://specificity.keegan.st/)

- Només selectors amb 1 o 2 classes: assegura especificitat baixa
- No aniuades: evita depèndencia de l'estructura
- Apliquen una clase a blocs i elements
- Per regles particulartizants la del block/element i una clase de modificador
- Això puja la especificitat per sobrescriure el cas genèric
- La jerarquia block -> element l'expressem al nom de la classe
- Nomenclatura  `block[-element][__modificador]`
- Separen parts convinant snake/camell/kebab-case
- Importància: naming estés a altres frameworks
- Nomenclatures de clases de Mui i d'altres s'enmirallen en BEM

BEM ens aporta:

- Criteris de nomenclatura de classes (es fa servir a Mui)
- La urgència de definir els selectors molt plans
- La táctica de definir modificadors amb major especificitat

:::


## Jerarquies CSS

Organitzar les regles per especificitat segons la seva natura (a quants elements apliquen)

- **reset** (fuck explorer) -> especificidad tag
- **base** (h1, h2, p, …) -> especificidad tag
- **layout** (stack, vertical, grid…) -> especificidad class (no s’hereten)
- **components** (button…) -> especificidad class
- **state** (disabled, active…) -> especificidad 2 class (customitzat)
- **theme** (dark, ligth, som…) -> variables

:::notes
component i state correspon amb BE i M de BEM.

Es interessant la distinció que fan dels estils de layout.

Els estils de layout, a diferencia de els que dirien de look-and-feel,
ni son temificables ni s'hereten als fills.
Per això els separen a classes diferentes.

Els base i el reset, s'apliquen no pas a classes
sinó a elements.
Afecten a com es veuen els elements estàndards d'html si no els fiquem cap classe.
:::


## Precompiladors: Sass, Less, Stylus

- DRY: funcions, variables, mixins...
- Aniuament noms (BEM) i selectors (Estructural)
- Ajuden a muntar BEM o jerarquies
- Es com es generen els estils de les llibreries que fem servir

:::notes
Preprocessadors

- Coses ja estan incorporades en l'estandard.\
	- CSS variables
	- `calc()`
	- aniuament amb &
	- grid system
	- includes
- Altres les podem suplir amb CSS-in-JS
- Algunes poques encara poden ser convenients
:::


## CSS com a recurs JS

```javascript
import "mystyle.css" // o .styl, .sass, .less
```

Pel fet d'importar-ho, Webpack/Vite\
l'incorporen com a asset compilat, minimitzat...

Per aplicar, afegim les classes al component.

React crea per defecte `index.css` i `App.css`\
Millor eliminar-los i fer servir `CssReset` de Mui.

Dividir per components. Treeshaking pero no aïllem.

:::notes

`index.css` i `App.css` fan una mica reset, però insuficient.

A més afegeixen els estils de la demo que poden interferir amb els nostres.

Si no fos Mui, seria el lloc on posaríem
els estils de reset i de base.

De fet, podriem fer servir paquets existents per fer bé el reset.

Pero a Mui tenim l'element del CssReset que en ficar-ho
a l'arbre de l'aplicació ja ho fa.

Podem dividir els estils per components.
Posar estils i javascript d'un component de costat.
Aixo també ajuda al tree-shaking:
Si no fem servir el component, no afegirà els estils als assets.

És útil transitoriament, quan estem migrant un component que té els estils plans.
Exemple: Els estils del Tomatic, que estaven a fitxers stylus.

Una primera passa a la migració es separar els estils que apliquen a un component
i importar-ho a cada component.
:::

## CSS Modules

Resol especificitat i reús a nivell components

```css
// mybutton.module.css
.button { ... } // escrius css pur

// el compilador detecta el .module i genera un css
// afegint una tirallonga única al nom de les classes
.button-tirallonga { ... } 
```

```javascript
// Quan l'importes al javascript
import style from "mybutton.module.css"
// retorna un mapa entre les classes originals i les generades
{ button: 'button-tirallonga' }
// i el fem sevir així:
`<Button className={style.button} />`
```

:::notes
MUI fa servir `emotion`
que genera classes uniques fent servir una estrategia similar.
Tot i que no ho escrius a un arxiu css.

Avantatges:

- No construeix estils en runtime
- Eficient i sense glitch inicial
- CSS standard, fàcil de migrar.
- No depen del framework Javascript

Problemes:

- Valors dinàmics
	- Aplicar classes de forma condicional
	- Alguns es poden calcular amb `calc()`
	- Modificar dinamicament variables css
- Temificació
	- Fer servir variables css pels temes
:::

## CSS-in-JS

Codi Javascript que genera CSS

```javascript
// Escrit com a text templatitzat
css = `
button {
  background-color: ${mycolor}
}
`
// Escrit com a objecte javascript
css = {
  button: {
    backgroundColor: mycolor
  }
}
```

:::notes
Els templates son més propes al css original

Els objectes han de canviar les propietats de kebabcase a camellcase

:::

## CSS-in-JS

Com ho apliquem als components

**Styled components:** modifica un component existent per generar un segon amb els estils

**Class names:** Com els CSS modules. Cal extreure el css fora.

**Attributes:** `style` (React) o `sx` (MUI)

`style` tradueix directament a l'atribut inline\
`sx` fa tot un seguit de transformacións

:::notes
Hi ha alguns frameworks com [Vanilla Extract]
que fan l'extracció a CSS pur com els css modules.
Pero la part dinamica l'extreu automàticament com a variable
i li aplica els canvis per javascript només a la variable
que sembla ser molt més eficient.

MUI [diuen] que la proxima versió de MUI anirà per aquesta direcció.
[diuen]:()
:::

## CSS variables

CSS variables: Propietats css especials\
S'hereten i s'apliquen a selectors.\
Es referencien amb la funció `var()`\

Brutals per fer theming\
També per evitar magic numbers.\
Tandem amb `calc()/min()/max()/clamp()/...`

Molt suportades pels navegadors\
Ús experimental en theming de MUI 5

:::notes
Identificades pel prefix `--`, ie `--my-color`

Les variables normalment aporten tokens (colors, distàncies...)
que és el que normalment fiquem als temes.

En heretar-se les podem modificar en punts de l'arbre
i s'apliquen als fills.

`var()` permet aportar un default sobrescrivible.

Definides a top level

:::


# Estratègies CSS

## Arquitectures Planes

Exemples: BEM, SuitCSS

Mantenir l'especificitat baixa

```css
.button > .icon  /* La icona dintre d'un boto: MAL! (0,2,0) */
.button-icon` /* La icona del botó: BIEN! (0,1,0) */
/* Independent de la estructura, i, sempre (0,1,0) */

/* Particularització amb modificadors (estat, mode...) */
/* La icona a un boto deshabilitat (0,2,0) */
.button__disabled .button-icon  /* sobrescrivim el general */

/*
Diferents separadors per indicar el tipus
de cada part del nom de la classe:
Block, Element, Modifier
Depén de la metodologia
*/
```
:::notes
Per entendre com funciona l'especificitat,
pots provar selectors a  [aquesta calculadora](https://specificity.keegan.st/)

- Només selectors amb 1 o 2 classes: assegura especificitat baixa
- No aniuades: evita depèndencia de l'estructura
- Apliquen una clase a blocs i elements
- Per regles particulartizants la del block/element i una clase de modificador
- Això puja la especificitat per sobrescriure el cas genèric
- La jerarquia block -> element l'expressem al nom de la classe
- Nomenclatura  `block[-element][__modificador]`
- Separen parts convinant snake/camell/kebab-case
- Importància: naming estés a altres frameworks
- Nomenclatures de clases de Mui i d'altres s'enmirallen en BEM

BEM ens aporta:

- Criteris de nomenclatura de classes (es fa servir a Mui)
- La urgència de definir els selectors molt plans
- La táctica de definir modificadors amb major especificitat

:::


## Jerarquies CSS

Organitzar les regles per especificitat segons la seva natura (a quants elements apliquen)

- **reset** (fuck explorer) -> especificidad tag
- **base** (h1, h2, p, …) -> especificidad tag
- **layout** (stack, vertical, grid…) -> especificidad class (no s’hereten)
- **components** (button…) -> especificidad class
- **state** (disabled, active…) -> especificidad 2 class (customitzat)
- **theme** (dark, ligth, som…) -> variables

:::notes
component i state correspon amb BE i M de BEM.

Es interessant la distinció que fan dels estils de layout.

Els estils de layout, a diferencia de els que dirien de look-and-feel,
ni son temificables ni s'hereten als fills.
Per això els separen a classes diferentes.

Els base i el reset, s'apliquen no pas a classes
sinó a elements.
Afecten a com es veuen els elements estàndards d'html si no els fiquem cap classe.
:::


## Precompiladors: Sass, Less, Stylus

- DRY: funcions, variables, mixins...
- Aniuament noms (BEM) i selectors (Estructural)
- Ajuden a muntar BEM o jerarquies
- Es com es generen els estils de les llibreries que fem servir

:::notes
Preprocessadors

- Coses ja estan incorporades en l'estandard.\
	- CSS variables
	- `calc()`
	- aniuament amb &
	- grid system
	- includes
- Altres les podem suplir amb CSS-in-JS
- Algunes poques encara poden ser convenients
:::


## CSS com a recurs JS

```javascript
import "mystyle.css" // o .styl, .sass, .less
```

Pel fet d'importar-ho, Webpack/Vite\
l'incorporen com a asset compilat, minimitzat...

Per aplicar, afegim les classes al component.

React crea per defecte `index.css` i `App.css`\
Millor eliminar-los i fer servir `CssReset` de Mui.

Dividir per components. Treeshaking pero no aïllem.

:::notes

`index.css` i `App.css` fan una mica reset, però insuficient.

A més afegeixen els estils de la demo que poden interferir amb els nostres.

Si no fos Mui, seria el lloc on posaríem
els estils de reset i de base.

De fet, podriem fer servir paquets existents per fer bé el reset.

Pero a Mui tenim l'element del CssReset que en ficar-ho
a l'arbre de l'aplicació ja ho fa.

Podem dividir els estils per components.
Posar estils i javascript d'un component de costat.
Aixo també ajuda al tree-shaking:
Si no fem servir el component, no afegirà els estils als assets.

És útil transitoriament, quan estem migrant un component que té els estils plans.
Exemple: Els estils del Tomatic, que estaven a fitxers stylus.

Una primera passa a la migració es separar els estils que apliquen a un component
i importar-ho a cada component.
:::

## CSS Modules

Resol especificitat i reús a nivell components

```css
// mybutton.module.css
.button { ... } // escrius css pur

// el compilador detecta el .module i genera un css
// afegint una tirallonga única al nom de les classes
.button-tirallonga { ... } 
```

```javascript
// Quan l'importes al javascript
import style from "mybutton.module.css"
// retorna un mapa entre les classes originals i les generades
{ button: 'button-tirallonga' }
// i el fem sevir així:
`<Button className={style.button} />`
```

:::notes
MUI fa servir `emotion`
que genera classes uniques fent servir una estrategia similar.
Tot i que no ho escrius a un arxiu css.

Avantatges:

- No construeix estils en runtime
- Eficient i sense glitch inicial
- CSS standard, fàcil de migrar.
- No depen del framework Javascript

Problemes:

- Valors dinàmics
	- Aplicar classes de forma condicional
	- Alguns es poden calcular amb `calc()`
	- Modificar dinamicament variables css
- Temificació
	- Fer servir variables css pels temes
:::

## CSS-in-JS

Codi Javascript que genera CSS

```javascript
// Escrit com a text templatitzat
css = `
button {
  background-color: ${mycolor}
}
`
// Escrit com a objecte javascript
css = {
  button: {
    backgroundColor: mycolor
  }
}
```

:::notes
Els templates son més propes al css original

Els objectes han de canviar les propietats de kebabcase a camellcase

:::

## CSS-in-JS

Com ho apliquem als components

**Styled components:** modifica un component existent per generar un segon amb els estils

**Class names:** Com els CSS modules. Cal extreure el css fora.

**Attributes:** `style` (React) o `sx` (MUI)

`style` tradueix directament a l'atribut inline\
`sx` fa tot un seguit de transformacións

:::notes
Hi ha alguns frameworks com [Vanilla Extract]
que fan l'extracció a CSS pur com els css modules.
Pero la part dinamica l'extreu automàticament com a variable
i li aplica els canvis per javascript només a la variable
que sembla ser molt més eficient.

MUI [diuen] que la proxima versió de MUI anirà per aquesta direcció.
[diuen]:()
:::

## CSS variables

CSS variables: Propietats css especials\
S'hereten i s'apliquen a selectors.\
Es referencien amb la funció `var()`\

Brutals per fer theming\
També per evitar magic numbers.\
Tandem amb `calc()/min()/max()/clamp()/...`

Molt suportades pels navegadors\
Ús experimental en theming de MUI 5

:::notes
Identificades pel prefix `--`, ie `--my-color`

Les variables normalment aporten tokens (colors, distàncies...)
que és el que normalment fiquem als temes.

En heretar-se les podem modificar en punts de l'arbre
i s'apliquen als fills.

`var()` permet aportar un default sobrescrivible.

Definides a top level

:::



