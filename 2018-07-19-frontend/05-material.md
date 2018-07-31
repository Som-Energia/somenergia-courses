
# Material {
	data-background="../images/logo-materialdesign.svg"
	data-background-size='40%'
	}

## Librerias componentes {
	data-background="../images/logo-materialdesign.svg"
	data-background-size='40%'
	}

Bibliotecas que definen elementos de la interfaz reusables (widgets)

- Bootstrap (Twitter)
- Material (Google)
- JQuery-UI
- ...

## Material Design {
	data-background="../images/logo-materialdesign.svg"
	data-background-size='40%'
	}

<div class="columns">

<div class="column" style="width:60%">

[http://material.io](http://material.io){target="blank"}

**Especificación** de cómo han de ser las interfaces en **Android**
a partir de Lollypop

Generalizado a otros soportes como el web.

Multiples implementaciones.

</div>
<div class="column" style="width:30%">
![](Material_Design.svg){width=100%}
</div>
</div>


## Component List {
	data-background="../images/logo-materialdesign.svg"
	data-background-size='40%'
	}

<div class="columns">
<div class="column">
Button

Slider

Switch

TextField

Selects

Checkbox

RadioButton
</div>
<div class="column">
LayoutGrid

List

GridList

ImageList

Tabs

Chip

Progress
</div>
<div class="column">
AppBar

Drawer

Card

SnackBar

Banner

Dialog

Sheet
</div>
</div>


## Navegación {
	data-background="../images/logo-materialdesign.svg"
	data-background-size='40%'
	}


**Lateral:** pantallas al mismo nivel accesibles en todo momento.
(Tabs, Drawer, Bottom Navigation Bar)

**Progreso:** profundizar en el nivel jerárquico
(Button, List, Grid List, Image list...)

**Atrás:** Cronológico o jeràrquico
(Back button)

## Comunicación {
	data-background="../images/logo-materialdesign.svg"
	data-background-size='40%'
	}



<div class=columns>
<div class=column style="width:30%">
![**Dialog**](mdc-dialog.png){width=80%}

Persistente

Bloqueante
</div>
<div class=column style="width:30%">
![**Banner**](mdc-alert.png)

Persistente

No bloqueante
</div>
<div class=column style="width:30%">
![**SnackBar**](mdc-snackbar.png)

Temporal

No bloqueante
</div>

## Sistema de Color {
	data-background="../images/logo-materialdesign.svg"
	data-background-size='40%'
	}

![](mdc-colorsystem.png){width="60%"}

## Tema de Color {
	data-background="../images/logo-materialdesign.svg"
	data-background-size='40%'
	}

**Primary**, **Secondary** y sus variantes **light** y **dark**.

Las **variantes** para destacar de forma harmoniosa.

**Secondary** para dar acento especial.

**Background** para el fondo estatico.

**Surface** para las cosas que se elevan sobre el fondo.

**OnX:** El color de texto cuando se usa _X_ como fondo


## Tipografía

Valores por defecto, customizables y criterios.

Fuente, tamaño, espaciado, mayúsculas...

- **Headlines 1-6:** Textos cortos prominentes
- **Subtitles 1-2:** Textos cortos enfatizados
- **Body 1-2:** Textos largos
- **Caption:** Pies de imagen
- **Overline:** Contextualizar un titulo
- **Button:** Texto para botones

## ¿Material para Mithril? {
	data-background="../images/logo-materialdesign.svg"
	data-background-size='40%'
	}

**[Polythene](https://github.com/ArthurClemens/Polythene):**
Lo usamos en el [Tomàtic](https://github.com/Som-Energia/somenergia-tomatic).
Calcula los estilos en el navegador,
y pierde lo que ganas con Mithril.

**Mithril MDL:** wrapper para Mithril de Material Design Lite de Google.
Menos completo, mucho más rápido. Estilos precompilados.

MDL fue discontinuado en favor de
**Material Components 4 Web**
que aún no tiene wrapper Mithril.




## MD Components 4 Web {
	data-background="../images/logo-materialdesign.svg"
	data-background-size='40%'
	}

Implementación Web de Google

Incompleta como todas, en progreso rápido.

En vez de concentrarse en un framework da herramientas
para usarlo en cualquiera.

Nosotros haremos el wrapping para Mithril:
`src/mdc/` ([link](https://github.com/Som-Energia/webforms-mithril/tree/master/src/mdc))

[Demo en vivo](http://material-components-web.appspot.com/)


## Estructura {
	data-background="../images/logo-materialdesign.svg"
	data-background-size='40%'
	}

**Estilos:**

Implementados con Sass.

Customizables (¡precalculados!)

**Javascript:**

Cuando necesitan inicializacion

Cuando Ofrecen API.

## Aplicar tipografía {
	data-background="../images/logo-materialdesign.svg"
	data-background-size='40%'
	}


```javascript
require('@material/typography/dist/mdc.typography.css');
```

En la raiz aplicar la clase `mdc-typography`.

- `mdc-typography--headline1` a `6`
- `mdc-typography--subtitles1` a `2`
- `mdc-typography--body1` a `2`
- `mdc-typography--caption`
- `mdc-typography--overline`
- `mdc-typography--button`

Redefinibles en el CSS.

## Usando el tema {
	data-background="../images/logo-materialdesign.svg"
	data-background-size='40%'
	}


En nuestro css, antes de cargar el de MDC4W

```css
* {
	--mdc-theme-primary: red;
	--mdc-theme-secondary: yellow;
	--mdc-theme-background: white;
	--mdc-theme-surface: #ffe;
	/* cuando ponemos un color de tema de fondo,
		estos colores para el texto */
	--mdc-theme-on-primary: white;
	--mdc-theme-on-secondary: black;
	--mdc-theme-on-surface: black;
}
```

Usables como color `var(--mdc-theme-primary, #faf)`


## MDC Button en Mithril {
	data-background="../images/logo-materialdesign.svg"
	data-background-size='40%'
	}

Sin Javascript, basado solo en estilos

```javascript
require('@material/button/dist/mdc.button.css');
var Button = {
	view: function(vn) {
		return  m('button.mdc-button'
			+(vn.attrs.raised ? '.mdc-button--raised':'')
			+(vn.attrs.unelevated ? '.mdc-button--unelevated':'')
			+(vn.attrs.outlined ? '.mdc-button--outlined':'')
			+(+vn.attrs.dense ? '.mdc-button--dense':'')
			, attrs, [
			(vn.attrs.faicon ? m(
				'i.mdc-button__icon.fa.fa-'+vn.attrs.faicon):''),
			vn.children
		]);
	},
};
```

## Uso del MDC Button {
	data-background="../images/logo-materialdesign.svg"
	data-background-size='40%'
	}

```javascript
var Button = require('./mdc/button');

var App = {
	clicked: false,
	view: function(vn) {
		return  m(Button, {
			raised: true,
			faicon: this.clicked?'spinner.fa-spin':'paper-plane',
			onclick: function(ev) {
				vn.state.clicked = true;
			},
		}, 'Send');
	},
};
```

## Como pinta {
	data-background="../images/logo-materialdesign.svg"
	data-background-size='40%'
	}

![](mdc-button.png)


## MDC Dialog en Mithril {
	data-background="../images/logo-materialdesign.svg"
	data-background-size='40%'
	}

Inicializando y con API.

```javascript
const mdcDialog = require('@material/dialog');
const MDCDialog = mdcDialog.MDCDialog;
var Dialog = {};
Dialog.oninit = function(vn) {
	// Para poder acceder desde fuera a la API
	vn.state.model = vn.attrs.model || {};
	// Api publica del componente Mithril
	vn.state.model.open = function() {
		vn.state.widget.show();
	};
};
Dialog.oncreate = function(vn) {
	vn.state.widget = MDCDialog.attachTo(vn.dom);
	vn.state.widget.listen('MDCDialog:accept', function() {
		vn.attrs.onaccept && vn.attrs.onaccept();
	});
	vn.state.widget.listen('MDCDialog:cancel', function() {
		vn.attrs.oncancel && vn.attrs.oncancel();
	});
};
Dialog.onremove = function(vn) {
	vn.state.widget.destroy();
};
```

## Uso de Dialog {
	data-background="../images/logo-materialdesign.svg"
	data-background-size='40%'
	}

Acceso al API via objeto injectado

```javascript
const Dialog = require('./mdc/dialog');
var mydialog = {};
m(Dialog, {
	oncancel: function() { }, // Whatever to do on cancel
	onaccept: function() { }, // Whatever to do on accept
	model: mydialog, // inject object
	buttons: [
		{ text: "Help", onclick: showhelp }, // Custom action
		{ text: "No", cancel: true }, // Default cancel action
		{ text: "Si", accept: true }, // Default accept action
	},
}, m('¿Quieres proceder?)),
m(Buttton, {
	// open is accessible via mydialog
	onclick: function() { mydialog.open(); },
}, "Open Dialog");
```

