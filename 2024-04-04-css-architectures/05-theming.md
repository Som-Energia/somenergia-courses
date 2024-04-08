# Definició i ús de temes

## Paleta

El tema conté una paleta amb un conjunt de _colors compostos_
redefinibles o _color objects_\
`primary`, `secondary`, `error`, `warning`, `info`, `success`

Compostos perque cadascun té subcomponents o _tokens_:\
`main`, `dark`, `light`, `contrastText`

Podem inventar-nos tant colors (`tertiary`) com a tokens (`superlight`).

## Augmentat de colors

`createTheme` sobrescriu el [tema per defecte]()\
Complementa el que rep

```javascript
createTheme({
  palette: {
    primary: {
      // complementarà dark i contrastText
      main: '#f55',
      light: '#faa',
    },
    // Agafa 'blue' com a main i calcularà la resta
    secondary: 'blue',
    // mantindrà: error, info... del tema per defecte
  }
  // També mantindrà tot el que hi ha fora de palette:
  // breakpoints, typografies...
})
```

## Augmentat de colors

Per augmentar els colors fa servir parametres del `theme.palette`:

`tonalOffset` -> tokens `light` i `dark`\
`contrastThreshold` -> token `contrastText`

Podem personalitzar-los al nostre tema.

**Accessibilitat:** `contrastThreshold` ha de ser mínim 4.5


## Definir custom colors

Només augmenta colors estàndard.\
Segona passada per fer servir `augmentColor`\
necessita un `color.main` i un `name`

```javascript
theme = createTheme(theme, {
  // Custom colors created with augmentColor go here
  palette: {
    tertiary: theme.palette.augmentColor({
      color: {
        main: '#FF5733',
      },
      name: 'tertiary', // Necessari per fer-ho servir per nom
    }),
  },
});
```

:::notes
[Documentació: Custom colors](https://mui.com/material-ui/customization/palette/#custom-colors)
:::

## Aplicant paleta

Amb `sx`:\
els posem com string\
agafa tant tokens com colors compostos\
`color: "primary"`\
`color: "error.light"`


Amb `style`:\
cal obtenir el `theme` amb `useTheme`\
cal indicar el token, no el color compost\
`color: theme.palette.primary.main`

## Ús avançat de la paleta

A `sx` podem rebre com a paràmetre el tema\
Aporta funcions per calcular els shades i contrastos

```jsx
<Box sx={({theme})=>({
  color: theme.palette.getContrastText("#443")
})}
```

## Breakpoints al tema

Estableixen tamanys de dispositius per a funcionalitats _responsives_.

```javascript
// Values
theme.breakpoints.keys = ['xs','sm','md','lg','xl']
theme.breakpoints.values = [0, 600, 900, 1200, 1536]
theme.breakpoints.units = 'px'
```
Eines per generar [media-queries](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/width)

```javascript
// functions to return media queries
theme.breakpoints.up(bp) // bp i més grans
theme.breakpoints.down(bp) // bp i més petites
theme.breakpoints.only(bp) // nomes bp
theme.breakpoints.not(bp) // qualsevol menys bp
theme.breakpoints.between(bp1,bp2) // entre b1 i b2 inclosos
```

## Breakpoints a `sx`

```javascript
sx={(theme)=>({
  [theme.breakpoints.up('md')]: {
    display: "none" // oculta per dispositius mitjans
  }
})}
```

:::notes
Sintaxi JS: Els corxets converteixen una expressio en clau del objecte/diccionari.

En aquest cas, amb el tema per defecte, la clau seria: `@media(width >= 900px)`

Amb `style` no podem fer servir lambdes per rebre el `theme` com a paràmetre.
Caldria fer servir `useTheme` al component per obtenir-ho.
:::

Drecera, el nom del breakpoint\
equival a `theme.breakpoint.up(bp)`\
No li cal rebre `theme`

:::columns
::::column
```javascript
// condicionar un conjunt d'atributs
{
  sm: {
    color: "black"
  }
}
```
::::
::::column
```javascript
// condicionar els valors d'un atribut
{
  color: {
    sm: "black"
  }
}
```
::::
:::

## Breakpoints amb hooks

```javascript
import useMediaQuery from '@mui/material/useMediaQuery'

export default function MyComponent() {
  const isBigEnough = useMediaQuery('(min-width:600px)');

  if (isBigEnough) ...
}
```

## Tipografies

`theme.typography.htmlFontSize`:
Font en la que es basa `rem`.
No es recomana fixar-la perque l'usuaria la canvia per temes d'accessibilitat.

`theme.typography.fontSize`: El tamany per defecte es 14px. Canvis afectaran proporcionalment.

`theme.typography.fontFamily`: llista separada per comes de noms de fonts.

## Tipografies: variants

`h1`-`h6`, `subtitle1`/`2`, `body1`/`2`, `button`, `caption`, `overline`

`theme.typography.<variant>`: Objecte amb estils per la variant.

## Tipografies: responsives

`fontSize` amb media queries per cada variant

O automàticament a partir de un fontSize:\
[`responsiveFontSizes(theme)`](https://mui.com/material-ui/customization/theming/#responsivefontsizes-theme-options-theme)\

:::notes
Segon paràmetre opcional opcions:
- `factor`: entre breakpoints (2 per defecte)
- `breakpoints`: 
:::

## Tipografies: fluïdes

```css
// Fluid font-size: s'adapta de forma continua
// canvia el tamany del bodi
body {
  font-size: calc(
    var(--fluid-font-size-min) 
    + (
      var(--fluid-font-size-max) - var(--fluid-font-size-min)
    ) * (
      100vw - var(--fluid-font-min-viewport)
    ) / (
      var(--fluid-font-max-viewport) - var(--fluid-font-min-viewport)
    )
  )
}
```
:::notes
https://css-tricks.com/snippets/css/fluid-typography/
:::


## Components temificats

La [Documentació](https://mui.com/material-ui/customization/creating-themed-components/)
encara fa servir la funció `styled`.



