
# Mithril {
	data-background-image="../images/logo-mithril.svg"
	data-background-size='40%'
	}

## Frameworks {
	data-background-image="../images/logo-mithril.svg"
	data-background-size='40%'
	}

HTML y CSS permiten algunas animaciones y respuesta interactiva,
pero son en esencia estàticos. 
**JavaScript** permite modificar el HTML en el navegador.

La **librería estándar** no es muy potente.
Hay **librerías** que la complementan:
JQuery, Underscore, Sugar...

No es suficiente abstracción para construir aplicaciones complejas.
Ahí entran los **frameworks**:
Vue, React, Angular, Mithril...

## Componentización {
	data-background-image="../images/logo-mithril.svg"
	data-background-size='40%'
	}

Los frameworks suelen dar una forma de definir
**componentes gráficos** o **widgets**.

En HTML sería un **tag propio**,
que controlamos **vía atributos**,
y que **abstrae** un HTML más complejo.

Se pueden replicar y juntar con otros para armar
nuevos componentes.

## Interacción Modelo-Vista {
	data-background-image="../images/logo-mithril.svg"
	data-background-size='40%'
	}

Cada framework llama _vista_, _modelo_ o _controlador_ a cosas distintas.
El patron MVC **original** no era práctico y nadie lo usa tal cual.
Pero quedó la idea: **Separar la presentación de los datos**.

El framework define:

Como el modelo (datos js) altera la vista (html)

Como lo que pasa en la vista modifica el modelo

<div class="notes">

- En el Modelo-Vista-Controlador original habia tres clases.
- El controlador era el unico que conoce a los otros dos y recibe notificaciones de ambos.
- Como patron es bastante limitante pero se quedaron los conceptos.
- Las vistas tienen su propio modelo (estado) interno.
- Como se resuelve la agregacion de vistas?
- Todo el mundo llama MVC a lo suyo y hablan de cosas muy distintas.

</div>

## Ventajas de Mithril {
	data-background-image="../images/logo-mithril.svg"
	data-background-size='40%'
	}

- Ligero: muy pocos k's
- Rápido: Usa DOM virtual
- Simple: API minimalista
- Potente: A pesar de la simplicidad

<div class="notes">

- DOM es la API que ofrece el navegador para manipular el html
- Manipular el DOM es bastante lento
- Un DOM virtual permite detectar las diferencias y modificar quirurgicamente

</div>

## Hola mundo {
	data-background-image="../images/logo-mithril.svg"
	data-background-size='40%'
	}

```html
...
<div id='mithril-target' class='main'>
	<div class='loading'><b>Loading...</b></div>
</div>
...
```

```javascript
var m = require('mithril');

window.onload = function() {
	var element = document.getElementById('mithril-target');
	m.render(element, m('h1', 'Hola mundo'));
};
```

## Hola mundo, comentado {
	data-background-image="../images/logo-mithril.svg"
	data-background-size='40%'
	}

`m.xxxx` - acceso a funciones de la api Mithril.

`m(...)` - como función genera nodos virtuales.

Los **nodos virtuales** (vnodes) representan HTML sin usar el DOM directamente, que es lento.

`m.render` convierte nodos virtuales en HTML.

Renderiza solo una vez, nos vale para ejemplos.
Veremos adelante como actualizar.

## Generando vnodes {
	data-background-image="../images/logo-mithril.svg"
	data-background-size='40%'
	}

```javascript
// Sintaxis general
m(tag, attrs, children, children2, ...);

// tag: sintaxis css
'h1'                // <h1>
'.sidebar.black'    // <div class="sidebar black">
'#mytag'            // <div id="mytag">
'[title="tooltip"]' // <div title="tooltip">
// Combinable:
'input.mdc-input#name[type="text"]'

// attrs: (opcional) diccionario con más attributos
// children: (opcional, multiple) string, vnodes o lista childrens
```

## Hyperscript {
	data-background-image="../images/logo-mithril.svg"
	data-background-size='40%'
	}

```javascript
var backuri = 'http://example.com';
return m('section#section1',[ // <section id="section1>
	m('h2', 'Titulo'),             //   <h2>Titulo</h2>
	m('p.first','yes'),            //   <p class="first">yes</p>
	m('p','no'),                   //   <p>no</p>
	m('nav.backlink', [            //   <nav class="backlink">
		m('a[target="_blank"]', {  //     <a target="_blank"
			'href': backuri,       //       href="http://examp..."
		},                         //     >
			'Volver atras'         //       Volver atras
		),                         //     </a>
	]),                            //   </nav> 
]);                                // </section>
```
## Control flujo {
	data-background-image="../images/logo-mithril.svg"
	data-background-size='40%'
	}

Las estructuras de control `if`  y `for` rompen la estructura visual del hyperscript.

Mejor usar expresiones ternarias o cortocircuitos booleanos y, para los loops, `map`.

```javascript
var verduras = ['judias', 'acelgas', 'espinacas'];
var selected = 'judias';
return m('ul',
	verduras.map(function(verdura, i) {
		return m('li', i+1, ' - ', verdura,
			verdura==selected?" selected":null),
		);
	})
);

```



## vnodes por dentro {
	data-background-image="../images/logo-mithril.svg"
	data-background-size='40%'
	}

Es un objeto/diccionario con:

- `tag`, `attrs` y `children`: los parámetros del `m`
- `text`: si solo hay un children y es texto
- `dom`: elemento DOM renderizado (si lo está)
- `state`, `key`: los veremos

Manipular el DOM dispara el redibujado.
Los vnodes son baratos de crear y comparar.
Vale la pena generarlos a menudo
a cambio de juntar cambios en un solo redibujado.



## Primer componente {
	data-background-image="../images/logo-mithril.svg"
	data-background-size='40%'
	}

```javascript
// Nuestro primer componente!
var Hello = {
	// render llama al método view pasandole el vnode original
	// Retornamos el vnode que se renderizará en su lugar
	view: function(vn) {
		// podemos acceder a los attributos del vnode original
		return m('h1', 'Hola '+vn.attrs.name||'mundo');
	},
};

window.onload = function() {
	var element = document.getElementById('mithril-target');
	// Usamos el componente como tag
	m.render(element, m(Hello, {name: 'Voki'}));
};
```

## Montando la app {
	data-background-image="../images/logo-mithril.svg"
	data-background-size='40%'
	}

La funcion `m.mount` activa el sistema de actualización.
Después de cada evento se dispara un renderizado, si hay cambios se redibuja el DOM.

```javascript
var App = {};
App.view = function(vn) { return m('h1', 'Hola mundo'); },

window.onload = function() {
	var element = document.getElementById('mithril-target');
	m.mount(element, App); // mount, no render!
};
```
**Ojo!** Al `mount` le pasamos un componente, `App`,
no un vnode, `m(App)`, como al `render`.


## Componente _contenedor_ {
	data-background-image="../images/logo-mithril.svg"
	data-background-size='40%'
	}

Igual que usábamos `vn.attrs`, podemos propagar `vn.children`
al _virtual node_ resultante.

```javascript
var RedBox = {};
RedBox.view = function(vn) {
	return m('', {style: 'border:3pt solid red'}, vn.children);
};

var App = {};
App.view = function(vn) {
	return m(RedBox,
		m('h1', 'Dress in red'),
		m('.content', 'bla bla'),
	);
};
```

## Controlando un modelo {
	data-background-image="../images/logo-mithril.svg"
	data-background-size='40%'
	}

```javascript
var Person = { name: 'anonymous' };  // the model

var PersonEditor = {};
PersonEditor.view = function(vn) {
	return m('',[
		m('input', {
			value: Person.name, // Model -> View
			oninput: function(ev) {
				Person.name = ev.target.value; // View -> Model
			},
		}),
		m('', 'hello ' + Person.name), // Model -> View (again)
	]);
};
```


## Estado interno {
	data-background-image="../images/logo-mithril.svg"
	data-background-size='40%'
	}

`vn.state`: objeto que mantiene el estado del widget

```javascript
PersonEditor.var1 = 1; // inicializa vn.state.var1

// Inicializa el estado en oninit
// Se llama antes de inicializar el DOM
PersonEditor.oninit = function(vn) {
	vn.state.var2 = 'value2';
	// vn.state se pasa como this a los metodos del componente
	this.var3 = 'value3'; // igual que vn.state.var3
};
```

**¡Ojo!** Distingue entre estado interno y modelo



## Acceso al dom {
	data-background-image="../images/logo-mithril.svg"
	data-background-size='40%'
	}

Hay que evitar manipular el DOM directamente.

A veces es necesario  por el uso de otras librerías.
(Como MDC4W).

`vn.dom`: apunta al DOM renderizado

El componente puede implementar hooks que se llaman en diferentes momentos del ciclo de vida.

En `vn.oninit()` no está disponible porque no se ha ejecutado aún ningún render.

## Ciclo de vida (I) {
	data-background-image="../images/logo-mithril.svg"
	data-background-size='40%'
	}
`oninit`: Antes de llamar al `view` la primera vez.
Para inicializar `vn.state` a partir de `vn.attrs`.
Cosas que no necesiten el DOM.

`oncreate`/`onupdate`: Tras insertar/actualizar el DOM después de un render.
Para llamar librerias que necesitan el DOM o consultar layout final.

**¡Ojo!** Cambios en el modelo aquí, no disparan render.

## Ciclo de vida (II) {
	data-background-image="../images/logo-mithril.svg"
	data-background-size='40%'
	}

`onremove`: Para tareas de limpieza.  Se llama justo antes de eliminar el nodo.

`onbeforeremove`: Para transiciones de salida. Retorna un `Promise`.
Se retrasa el `onremove` y la eliminación del nodo hasta que el `Promise` resuelva.



## Conciliar con claves {
	data-background-image="../images/logo-mithril.svg"
	data-background-size='40%'
	}

Es difícil saber que nodo virtual corresponde si
reordenamos los nodos o si cambian demasiado.

Mithril permite asociar al virtual node una clave,
`vn.key`, para asegurar que el mapeo es correcto.

## Consultas a APIs {
	data-background-image="../images/logo-mithril.svg"
	data-background-size='40%'
	}

```javascript
m.request({
	url: 'https://example.com/api/persona',
	method: 'POST',
	data: {
		name: Persona.name,
	},
}).then(function(response) {
	
}, function(error) {

});
```

Se refresca la interfaz despues de recibir la respuesta.

Por defecto JSON, personalizable.

## Personalizar la response {
	data-background-image="../images/logo-mithril.svg"
	data-background-size='40%'
	}

Diferentes niveles de personalizacion partiendo de:

`extract(xhr, options)`: acceso a toda la respuesta, por defecto pasa `xhr.responseText`

`deserialize(responseText)`: a partir del responseText, por defecto parser JSON

`type(object)`: objeto JSON parseado, por defecto identidad


## Personalizar la request {
	data-background-image="../images/logo-mithril.svg"
	data-background-size='40%'
	}

`data`: datos que serializan en el body o en la request

`headers`: añade cabeceras

`config`: permite modificar las cabeceras de la request

`serialize`: aplicado a data, por defecto `JSON.serialize`



