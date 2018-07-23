---
title: Tecnologías de Front-end
subtitle: usadas en Som Energia, para Pythoner@s
author: David García Garzón

theme: serif # beige/black/blood/league/moon/night/serif/simple/sky/solarized/white
history: true # no vuelvas al principo con F5
transition: convex # none/fade/slide/convex/concave/zoom
center: true
slideNumber: true # Muestra el numero de slide
progress: true
#parallaxBackgroundImage: "https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg"
parallaxBackgroundSize: 150%
parallaxBackgroundHorizontal: 20
parallaxBackgroundVertical: 5
keyboard:
  8: navigatePrev
include-before: |
	<style>
		.reveal {
			background: #d5e20f88;
			background-image: url('../images/logo-somit.svg');
			background-repeat: no-repeat;
			background-size: 20%;
			background-position: bottom left;
			opacity: 50%;
		}
		.reveal .slides {
			background: #ffffffee;
		}
		.reveal .slides .titleslide {
			background-color: #86bc25ff;
		}
		.reveal .slides .titleslide h1 {
			color: white;
		}
		.reveal .slides .slide.level2 h2 {
			color: #86bc25ff;
			//color: #480;
		}
		code {
			background: #ffe;
			border-radius: 0.5ex;
			padding: 3px;
			color: #500;
		}
		.slide strong {
			color: #060;
		}
		.columns {
			display: flex;
		}
		.columns .column {
			margin-left: auto;
			margin-right: auto;
		}
	</style>
---

# Frontend {
	data-background-image="../images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

## Frontend vs Backend {
	data-background-image="../images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

- **Frontend:** se ejecutan en el **navegador**
	- Mithril, ReactJS, Angular...

- **Backend:** se ejecutan en el **servidor**
	- Flask, Django, NodeJS, PHP... 

## Objetivo {
	data-background-image="../images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}


Poner al día de las tecnologías de Frontend
que usamos en Som Energía
al personal que ya programa en Python temas de Backend.

Se supone una base en programación.

Haré paralelismos con tecnologías Python.


## Ecosistema de Frontend {
	data-background-image="../images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

<div class='columns'>
<div class='column'>
![Javascript (Lenguage)](../images/logo-js.svg){width=40%} 
</div>
<div class='columns'>
![NodeJS<br>(Paqueteria, Entorno)](../images/logo-nodejs.svg){width=45%}
</div>
<div class='columns'>
![Webpack (Builder)](../images/logo-webpack.svg){width=50%} 
</div>
</div>
<div class='columns'>
<div class='column'>
![Mithril (Control)](../images/logo-mithril.svg){width=40%} 
</div>
<div class='column'>
![Material (Widgets)](../images/logo-materialdesign.svg){width=35%} 
</div>
</div>


## Javascript {
	data-background-image='../images/logo-js.svg'
	data-background-size='40%'
	}

**Inevitable:** El único lenguage incluido en todos los navegadores (en cada uno a su manera)

Sintaxis familiar pero engañosa, no se comporta igual que C++ o Java.
Repasaremos algunas trampas.

Es necesario entender algunas construciones que usamos en **Mithril**.

## NodeJS {
	data-background-image='../images/logo-nodejs.svg'
	data-background-size='60%'
	}

Tecnologia de backend, sí, pero nos da un entorno de desarrollo
(como el que tenemos en python).

- Definicion de proyecto (setup.py -> package.json)
- Repositorio de paquetes (pip -> npm)
- Entorno local aislado (venv -> node_modules)
- Interprete interactivo (python -> node)
- Web server para desarrollo

## Webpack {
	data-background-image='../images/logo-webpack.svg'
	data-background-size='40%'
	}

Constructor: Prepara el paquete de ficheros que se bajará el navegador.
Deja obsoletos a Grunt, Gulp, Requirejs, Bower, Browserify...

- Aisla los .js en paquetes/namespaces
- Soluciona dependencias
- Transcompila lenguajes (scripts, estilos)
- Optimiza ficheros
- Empaqueta lo que puede ir junto
- Separa lo que puede ir separado
- Modifica el HTML para bajarselo todo

## Mithril   {
	data-background-image='../images/logo-mithril.svg'
	data-background-size='40%'
	}

Framework para desarrollar
aplicaciones de página única
que se ejecutan en el navegador.

- Definir **componentes** HTML dinámicos
- Sincronizar **vista** y **modelo**
- Acceder **asincronamente** a las **APIs**
- Pequeño, sencillo, rápido y potente

## Material Design   {
	data-background-image='../images/logo-materialdesign.svg'
	data-background-size='40%'
	}

Especificación de componentes gráficos.
Originalmente para Android.

Define aspecto, comportamiento, variaciones...
de botones, menus, radio buttons...

Hay muchas implementaciones (incompletas todas)
Usamos la de Google para Web:

**Material Design Components for the Web**

Agnóstica al framework, la adaptamos a Mithril


# Javascript {
	data-background-image='../images/logo-js.svg'
	data-background-size='40%'
	}

## Falsos amigos {
	data-background-image='../images/logo-js.svg'
	data-background-size='40%'
	}

> Javascript, tan familiar que pensamos que no hay que aprenderlo.

Se parece a C++ y Java

Esperamos que se comporte como ellos.

Cuando no lo hace, 😠 😠 😠 😠 `＼(｀O´)／`

## Falsos amigos: `==` y `!=` {
	data-background-image='../images/logo-js.svg'
	data-background-size='40%'
	}

- `==` y `!=` intentan convertir tipos antes de comparar
- `===` y `!==` comparan sin conversion

```javascript
1=='1' // true
1==='1' // false 
0=='' // true
0==='' // false
false=='' // true
undefined==false // false
```

La regla: Usar el de tres signos al menos que realmente quieras la conversión
(y no, no la quieres)

## Falsos amigos: `+` {
	data-background-image='../images/logo-js.svg'
	data-background-size='40%'
	}

```javascript
3 + 2 // 5
'a' + 'b' // 'ab'
'a' + 3 // 'a3'
'2' + 3 // 23 !!
'2' - 3 // -1 !!
3 + true // 4 !!
3 + false // 3 !!
3 + undefined // NaN
'a' + undefined  // 'aundefined'
3 + {} // '3[object Object]'
```

## Falsos amigos: bool cast {
	data-background-image='../images/logo-js.svg'
	data-background-size='40%'
	}

En Python estamos muy acostumbrados a usarlas en condiciones y funcionan muy distinto.

- Las estructuras vacias `{}` y `[]` son `true`!!
- Un string vacio `''` es `false`, pero tambien uno con solo espacios: `'    '`
- El entero `0` es falso pero, tambien el string `'0'`!!
- De hecho un string con varios ceros pero con espacios delante y detras tambien es `false`: `'   000 \t\n  '`


## Variables no declaradas {
	data-background-image='../images/logo-js.svg'
	data-background-size='40%'
	}

**Típico:** me equivoco en el nombre de la variable

Javascript no se queja, devuelve `undefined`.

Se propaga en silencio como
`false` o el numero `NaN` o la cadena `'undefined'`...
hasta que peta!!!

Añadir `'use strict';` al principio de los ficheros hace que se queje
si usas una variable no declarada.

**¡Ojo!** Avisará con las variables,
pero no con las **propiedades de los objetos** que no existen.

## Objetos {
	data-background-image='../images/logo-js.svg'
	data-background-size='40%'
	}

Los objetos de Javascript son "diccionarios"

Acceso dual con `.` y `[]` como nuestro `yamlns`.

```javascript
var name = 'd';
var o1 = { // literal
	a: 1,
	'b-at': 2,  // 'b-at' no es identificador valido, comillas
	name: 19,   // coge la clave 'name', no 'd'
	name+'': 3, // truco para coger 'd' de la variable
};

// Updating: en Python: o1.update({'a':4, 'c':5})
Object.assign(o1, {a: 4, c: 5});

// Cloning: en Python: o2 = dict(o1)
var o2 = Object.assign({}, o1);
```

<div class="notes">

- "diccionarios" en Python, _associative array_ en general
- Usamos la sintaxis de `[]` en vez de `.` cuando la clave:
	- Es calculada, o
	- No es un identificador
- Usamos `''` en las claves de los literales cuando no es identificador
- Truco: si la clave es calculada y esta en la variable `key`,
  definir el literal: `{ ''+key: value }`, si no considera la clave literal `'key'`.

</div>

## Singletons {
	data-background-image='../images/logo-js.svg'
	data-background-size='40%'
	}

Métodos: atributos que apuntan a funciones

```javascript
var MySingleton = {
	_param1: 'param1value',
	method1: function() {
		// body
	},
	method2: outerfunction,
};
MySingleton.method3 = function() {};
```

No son clases, son **Singletons**, objetos únicos.
Pero sirven de prototipo para otros.

En Mithril los usamos para definir componentes.



## Las clases son funciones {
	data-background-image='../images/logo-js.svg'
	data-background-size='40%'
	}

```javascript
function MyClass(param1) {  // funcion 'Factoria'
	this._param1 = param1; // Attributo
	function premethod1() {
		// body
	} // <- Sin punto y coma, es una declaracion
	this.method1 = premethod1;
	this.method2 = function() {
		// body
	}; // <- Ojo el punto y coma! es una asignacion
}
// Esto es útil para ampliar una clase que no es nuestra
function premethod3() {}
MyClass.prototype.method3 = premethod3;  // Recuerda el prototype

var myinstance = new MyClass('param1value'); // No olvides el new
```

## Falsos amigos: `this` {
	data-background-image='../images/logo-js.svg'
	data-background-size='40%'
	}

Su valor en una funcion `f` depende de como se llame, no de donde se defina

```javascript
// La misma funcion todo el rato
function f (a,b) { console.debug(this); }

f(a,b); // Seria `undefined`
new f(a,b); // Seria un nuevo objeto `{}` vacio
o.f=f; o.f(a,b); // Seria `o`
f.call(o, a, b); // Seria `o`
f.apply(o, [a,b]); // Seria `o`
var f2 = o.f; f2(a,b); // 'undefined', f2 pierde el binding
var f3 = f.bind(o); f3(a,b); // Seria `o`

```


## Falsos amigos: `this` {
	data-background-image='../images/logo-js.svg'
	data-background-size='40%'
	}

Ojo con las lambdas y las inner:

```javascript
function mymethod(b) {
	var a = 3;
	var self = this;
	this.onEvent(function() {
		// a y b se pueden usar aqui dentro
		// pero this esta redefinida como undefined
		// por eso usamos self como variable intermedia
		this.otrafuncion(a,b); // Error, this es undefined
		self.otrafuncion(a,b); // Bien
	}
}
```

## Promesas {
	data-background-image='../images/logo-js.svg'
	data-background-size='40%'
	}

Facilitan la programación asíncrona.

```javascript
function funcionAsincrona() {
	return new Promise(function (resolve, reject) {
		// do you async stuff here
		if (ok) { resolve(result); }  // makes the promise succed
		else { reject(error); }  // makes the promise fail
	});
}
var promesa = funcionAsincrona();
promesa.then(function(result) {
	// Codigo a ejecutar cuando acabe
}).catch(function(error) {
	// Codigo a ejecutar si falla
});
```


# NodeJS {
	data-background-image='../images/logo-nodejs.svg'
	data-background-size='60%'
	}

## Definición del proyecto {
	data-background-image='../images/logo-nodejs.svg'
	data-background-size='60%'
	}


La definición del proyecto se guarda en `package.json`.

Se crea con el comando `npm init` a partir de preguntas interactivas.


## Repositorio de paquetes {
	data-background-image='../images/logo-nodejs.svg'
	data-background-size='60%'
	}


`npm` es un gestor de paquetes parecido a `pip`

`npm search`, `npm install`...

Se baja los paquetes de un repositorio online
y los instala en local, en la carpeta `node_modules`.

Cada proyecto tiene su `node_modules` propio y
aislado como un `virtualenv` en Python.

## Dependencias del proyecto {
	data-background-image='../images/logo-nodejs.svg'
	data-background-size='60%'
	}


**Dependencias (de run-time):** de uso del paquete

**Dependencias de desarrollo:** de construcción del paquete

Para nosotros, que no hacemos paquete (aun), las de run-time son las que se usan en el navegador.

Se definen en el `package.json` y se instalan con `npm install` sin especificar paquete.


## Añadiendo dependencias {
	data-background-image='../images/logo-nodejs.svg'
	data-background-size='60%'
	}


Se añaden con `npm install --save paquete` o con `--save-dev` si es de desarrollo.

Con las opciones _save_ quedan guardadas en las claves `dependencies` y `devDependencies`

Si no, no se actualiza (los marca _straneous_)


Queda guardada la versión.
Para actualizarlas: `npm update --save paquete`

## Comandos extra {
	data-background-image='../images/logo-nodejs.svg'
	data-background-size='60%'
	}


Podemos añadir comandos personalizados para el desarrolo de nuestro proyecto.

El `package.json` contiene la clave `scripts`
con comandos personalizados de `npm`.

```json
	"scripts": {
		"server": "webpack-dev-server --open --watch -d",
	},
```

```bash
$ npm run server
```


## Chuleta {
	data-background-image='../images/logo-nodejs.svg'
	data-background-size='60%'
	}


```bash
npm init # Crea el package.json a base de preguntas

npm install # Instal·la les dependencies del package.js

npm search <words> # busca paquetes con words en la descripción

npm install --save <package> # añade la dependencia al proyecto

npm install --save-dev package # añade dependencia de desarrollo

npm update --save/--save-dev # actualiza versión (menores) de los paquetes

npm run test # Ejecuta el script `test` definido en `package.json`
```
<div class="notes">

El update no actualiza las versiones mayores.
Hay que editarlas a mano en el fichero

</div>


# Webpack {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}

## ¿Qué aporta? {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}


A partir del codigo fuente, genera los ficheros que se bajará el navegador.

Vamos que compila, ¿pero Javascript no era interpretado?

A medida que los proyectos se hacen grandes, es necesario
modularizar, descartar modulos no usados, agregar el resto, optimizar, preprocesar...

## Ejemplo real {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}

Repositorio `webforms-mithril` ([link](https://github.com/Som-Energia/webforms-mithril/blob/master/webpack.config.js){ target=_blank })

La configuración de webpack en `webpack-config.js`

Comandos de `webpack` en los `scripts` del `package.json`



## Modulos en Javascript {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}


A pelo, Javascript ES5 no sabe de modulos.

Se incluye cada .js en el html con `<script>`.

Tambien las dependencias!

Todo va al scope global. No hay `namespaces`.

Se usan funciones auto-llamadas para aislar.

## ¿Cómo funciona? {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}


Explora las dependencias entre los módulos y genera código para:

- aislar el espacio de nombres de cada módulo
- indexar los módulos por el path
- implementar `require` para cargarlos

Tambien modifica el html para incluir los assets finales

## Definición de módulos {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}


```javascript
// mymodule.js
'use strict'; // Activa errors per variables no declarades

function myfunction() {
	return 'hello world';
}

module.exports = myfunction;
```

```javascript
// main.js
'use strict'; // Activa errors per variables no declarades

var imported = require('./mymodule');

console.debug(imported()); // should show 'hello world'
```

## El bundle (envoltorio) {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}


```javascript
(function(modules) { // funcion auto-llamada
	var installedModules = {}; // The module cache
	function require(moduleId) {
	    // Check if module is in cache
	    if(installedModules[moduleId]) {
	 	    return installedModules[moduleId].exports;
	    }
	    // Create a new module (and put it into the cache)
	    var module = installedModules[moduleId] = {
	 	    i: moduleId,
	 	    exports: {}
	    };
	    // Execute the module function
	    modules[moduleId].call(module, module.exports, require);
	    // Return the exports of the module
	    return module.exports;
	}
	require('./main'); // el entry point del bundle
}) ({
	'./mymodule': function(module, exports, require) {
		eval('string con el contenido del fichero');
	},
	'./main': function(module, exports, require) {
		eval('string con el contenido del fichero');
	},
});
```

## Entry points y bundles {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}


**Entry point:** Punto de partida (js) de donde estirar las dependencias.
Puede haber varios (diferentes páginas)

Los navegadores cargan más rápido un fichero mediano que muchos pequeños.

**Bundle:** Un fichero que junta las dependencias de un punto de partida.

## Chunks {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}

Un fichero grande también es peor que varios medianos. Fragmentemos.

Los assets se generan con un **hash** en el nombre para forzar recarga de cache si hay cambios.

Las dependencias _vendor_ son menos proclives a cambiar, si las separamos tendran mas hits de cache.

Con varios _entry points_, habrá cosas comunes entre los bundles.
Separando lo común y lo particular, se optimiza la carga
de múltiples páginas.

## Otros recursos (assets) {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}


Datos (json, xml, yaml),
estilos (css, sass, less, stylus),
imagenes (png, jpg, svg)
...

Se _requieren_ como si fueran javascripts.

Una cadena de _loaders_ se encarga
de que esten disponibles en el navegador.

<div class='notes'>

- Como string en el js, añaden codigo js para que este disponible
- En su propio bundle, modifican el html para incluirlo

</div>

## Transcripción {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}

Los loaders nos permiten **traducir recursos** en formatos
no soportados por los navegadores.

- CSS: Sass, Less, Stylus
- Javascript: ES6, CoffeScript, TypeScript
- HTML: Markdown, RST, Jade
- Datos: XML, JSON, YAML
- Imagenes, videos, fuentes...

También se usan para la **optimización**.
Minifiers, uglifiers, imagenes multiresolución...

## Disposición {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}

Los loaders determinan en que forma estará disponible
el recurso y lo hacen accesible de forma transparente

Como ficheros independientes

Como **strings en el bundle javascript**

Extraidos en **su propio bundle**

**Insertados** en otro recurso

## Loaders {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}

`config.module.rules` como cargar cada recurso.

```javascript
rules: [
	// yaml-loader: yaml data -> json data
	// json-loader: json data -> js object
	// you get it with 'require'
	{ test: /\.yaml$/, use: ["json-loader", "yaml-loader" ] },

	// stylus-loader:  stylus -> css
	// css-loader: css -> js code that adds the style
	// MiniCssExtractPlugin: extracts into a css bundle
	// 'require' ensures that the css is loaded
	// as any dependant assets (images, includes...)
	{ test: /\.styl$/, use: [ MiniCssExtractPlugin.loader,
			"css-loader", "stylus-loader"]},
	// The css bundle is configured in the plugin section
```

## Servidor de desarrollo {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}


`webpack-dev-server --open -d `

o `npm run server`

Lanza un webserver NodeJS local con los assets

Apunta el navegador a la página principal.

Detecta cambios en los ficheros,
regenera los assets del servidor y
recarga el navegador.

Agiliza mucho el ciclo de desarrollo.


## Integración Back-end {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}


**Problema:** el HTML lo genera la aplicacion de backend, no webpack.

Hay **plugins de webpack** que generan **manifiestos**
con la **lista de assets**.

Hay **extensiones para Flask y Django** que integran esa lista en las páginas.

**Estrategia:** en backend pocas páginas y mucha API.

## Source Maps {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}

Con tanta transformación, 
¿cómo relacionamos un error en el navegador con el código fuente?

En modo desarrollo webpack genera _source maps_.
Comentarios especiales que referencian al código original,
fichero y linia.

Los navegadores modernos los entienden y generan _stack traces_ usables.


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


# Material Design {
	data-background="../images/logo-materialdesign.svg"
	data-background-size='40%'
	}

## MD Components {
	data-background="../images/logo-materialdesign.svg"
	data-background-size='40%'
	}

<div class="columns">
<div class="column">
Dialog

Button
</div>
<div class="column">
Dialog

Button

sdfa
</div>
<div class="column">
Dialog

Button
</div>
<div class="column">
Dialog

Button
</div>
</div>



