# Consensos

## Oficialment

Recollits a aquest [document](https://docs.google.com/document/d/1RXexNAIqNR54ySRsRDJa6Ri36WMQqDa6ueQaZFjJVQw/edit#heading=h.pgagwmctyqs1) (privat)

Pendents de que fan noves versions de MUI

## Quin mecanisme d'estilat?

Fem servir `sx` per MUI (`style` per html pur)

Per contenidors estructurals (layout) prioritzarem\
`Stack`, `Grid`, `Box`\
amb atributs css com si fossin html

```jsx
// Be
<Stack sx={{justifyContent: "space-evenly"}}> ... </Stack>
// Millor
<Stack justifyContent="space-evenly"> ... </Stack>
```
:::notes
Intentem que sigui `sx`, no `style`, fen servir, per exemple, `Box` en comptes de `div`.
Així aprofitarem els avantatges de `sx`
:::

## `styled`?

No hem trobat un cas d'ús\
on `sx` no ho faci més simple que `styled`.

No tanquem la porta a `styled`\
si no es pot fer amb `sx` més simplement.

## Activació i customització

Consensuem concentrar la lógica d'aplicació d'estil
a un component  contenidor que mourem a la llibreria.

Contrindrà:\
CSS Reset\
Lògica dark theme\
Aplica el ThemeProvider\
Tema Som per defecte, parametritzable\
Completesa dels colors del tema\
Càlcul de tipografies responsives\
....

:::notes
Tenir-ho a un component centralitzat i a la llibreria
facilitarà la **incorporació transversal de millores**.

Segurament també ens ajudarà a la migració
quan arribi
el **nou sistema de temes de MUI6**
amb css variables i zero-runtime css
:::

## Personalització de l'aspecte

En comptes de posar colors directes `#rrggbb`\
prioritzem fer servir els tokens (colors, tipografies...)\
estàndars del tema (`secondary`, `primary`...)

Varietat amb els subtokens\
`light`, `dark`, `contrastText`...

Si realment necessitem **colors nous**\
definim un nou token al tema\
Nom **funcional**, no descriptiu


:::notes
Motiu de ficar tots els tokens al tema:

- Poder fer una gestió centralitzada dels colors.
- No haver d'anar a buscar on fem servir els colors concrets.
- Poder buscar més fàcilment els usos que s'en fan
- Relacionar els colors derivats amb l'original
  - `#f00` i `#700` vs `accent` vs `accent.dark`

**Nom funcional:**
El nom descriu la funció que fa el color:
`accent`, `compare`, `ternary`...
no pas descriu el color: `orange`, `fancyPurple`
:::

## 



