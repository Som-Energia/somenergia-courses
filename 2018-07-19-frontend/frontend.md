---
title: Tecnologías de Front-end
subtitle: usadas en Som Energia, para Pythoner@s
author: Voki

theme: serif # beige/black/blood/league/moon/night/serif/simple/sky/solarized/white
history: true # no vuelvas al principo con F5
transition: slide # none/fade/slide/convex/concave/zoom
center: false
slideNumber: true
progress: true
parallaxBackgroundSize: 150%
#parallaxBackgroundImage: "https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg"
parallaxBackgroundHorizontal: 20
parallaxBackgroundVertical: 5
keyboard:
  8: navigatePrev
include-before: |
	<style>
		.reveal {
			background: #d5e20f88;
			background-image: url('../images/logo-somenergia-nobg.svg');
			background-repeat: no-repeat;
			background-size: 20%;
			background-position: bottom left;
			opacity: 50%;
		}
		.reveal .slides {
			background: #ffffffdd;
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
	</style>
---

# Frontend {data-background-image="../images/logo-somenergia-nobg.svg" }

## Frontend vs Backend

- **Frontend:** se ejecutan en el **navegador**
	- Mithril, ReactJS, Angular...

- **Backend:** se ejecutan en el **servidor**
	- Flask, Django, NodeJS, PHP... 

## Elementos del Frontend

- **Javascript:** lenguage
- **NodeJS:** entorno, paquetes (virtualenv, pip)
- **Webpack:** constructor (makefile)
- **Mithril:** controlador (MVC)
- **Material Design Components:** widgets (qt)
- **ospec:** Framework de testing (unittest)

<div class="notes">

- Mithril
	- Framework de control (Angular, React, Vue...)
	- HTML es de naturaleza estatica -> Javascript
	- La API estandard tiene muchas limitaciones
	- Separacion del modelo y construccion por composicion
- Material Design Components
	- Diseño concreto de interactividad
	- Define como son los elementos combinables (widgets)
- Framework de testing

</div>

## Javascript { data-background-image='../images/logo-js.svg' data-background-size='40%' }

**Inevitable:** El único lenguage incluido en todos los navegadores (a su manera)

Sintaxis familiar y engañosa, no se comporta igual que C++ o Java.
Repasaremos algunas trampas.

Es necesario entender algunas construciones que usamos en **Mithril**.

## NodeJS, npm { data-background-image='../images/logo-nodejs.svg' data-background-size='60%' }

Tecnologia de backend, sí, pero nos da un entorno de desarrollo
(como el que tenemos en python).

- Definicion de proyecto (setup.py -> package.json)
- Repositorio de paquetes (pip -> npm)
- Entorno local aislado (venv -> node_modules)
- Interprete interactivo (python -> node)
- Web server para desarrollo

## Webpack { data-background-image='../images/logo-webpack.svg' data-background-size='40%' }

Constructor: Prepara el paquete de ficheros que se bajará el navegador.
Deja obsoletos a Grunt, Gulp, Requirejs, Bower, Browserify...

- Aisla los .js en paquetes/namespaces
- Soluciona dependencias
- Transcompila lenguajes (scripts, estilos)
- Optimiza ficheros
- Empaqueta lo que puede ir junto
- Separa lo que puede ir separado
- Modifica el HTML para bajarselo todo

## Mithril { data-background-image='../images/logo-mithril.svg' data-background-size='40%' }

Framework para desarrollar
aplicaciones de página única
que se ejecutan en el navegador.

- Definir **componentes** HTML dinámicos
- Sincronizar **vista** y **modelo**
- Acceder **asincronamente** a las **APIs**
- Pequeño, sencillo, rápido y potente

## Material Design { data-background-image='../images/logo-materialdesign.svg' data-background-size='40%' }

Especificación de componentes gráficos.
Originalmente para Android.

Define: aspecto, comportamiento, variaciones...
de botones, menus, radio buttons...

Hay muchas implementaciones (incompletas todas)
Usamos la de Google para Web:

**Material Design Components for the Web**

Agnóstica al framework, habrá que adaptarla a Mithril


# Javascript {data-background-image="../images/logo-somenergia-nobg.svg" }

## Falsos amigos

> Javascript, tan familiar que pensamos que no hay que aprenderlo.

Se parece a C++ y Java

Esperamos que se comporte como ellos.

Cuando no lo hace, 😠 😠 😠 😠 `＼(｀O´)／`

## Falsos amigos: `==` y `!=`

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

## Falsos amigos: `+`

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

## Falsos amigos: bool cast

En Python estamos muy acostumbrados a usarlas en condiciones y funcionan muy distinto.

- Las estructuras vacias `{}` y `[]` son `true`!!
- Un string vacio `''` es `false`, pero tambien uno con solo espacios: `'    '`
- El entero `0` es falso pero, tambien el string `'0'`!!
- De hecho un string con varios ceros pero con espacios delante y detras tambien es `false`: `'   000 \t\n  '`


## Variables no declaradas

**Típico:** me equivoco en el nombre de la variable

Javascript no se queja, devuelve `undefined`.

Se propaga en silencio como
`false` o el numero `NaN` o la cadena `'undefined'`...
hasta que peta!!!

Añadir `'use strict';` al principio de los ficheros hace que se queje
si usas una variable no declarada.

**¡Ojo!** Avisará con las variables,
pero no con las propiedades de los objetos que no existen.

## Objetos

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

## Singletons

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



## Las clases son funciones

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

## Falsos amigos: `this`

Su valor en una funcion `f` depende de como se llame, no de donde se defina

```javascript
// La misma funcion todo el rato
function f (a,b) { console.debug(this); }

f(a,b); // Seria `undefined`
new f(a,b); // Seria un nuevo objeto `{}` vacio
o.f=f; o.f(a,b); // Seria `o`
f.call(o, a, b); // Seria `o`
f.apply(o, [a,b]); // Seria `o`
f.bind(o); f(a,b); // Seria `o`

var f2 = o.f; f2(); // 'undefined', f2 pierde el binding
```


## Falsos amigos: `this`

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

# NodeJS {data-background-image="../images/logo-somenergia-nobg.svg" }

## Definición del proyecto

La definición del proyecto se guarda en `package.json`.

Se crea con el comando `npm init` a partir de preguntas interactivas.


## Repositorio de paquetes

`npm` es un gestor de paquetes parecido a `pip`

`npm search`, `npm install`...

Se baja los paquetes de un repositorio online
y los instala en local, en la carpeta `node_modules`.

Cada proyecto tiene su `node_modules` propio y
aislado como un `virtualenv` en Python.

## Dependencias del proyecto

**Dependencias (de run-time):** de uso del paquete

**Dependencias de desarrollo:** de construcción del paquete

Para nosotros, las de run-time son las que se usan en el navegador.

Se definen en el `package.json` y se instalan con `npm install` sin especificar paquete.


## Añadiendo dependencias

Se añaden con `npm install --save paquete` o con `--save-dev` si es de desarrollo.

Con las opciones _save_ quedan guardadas en las claves `dependencies` y `devDependencies`

Si no, no se actualiza (los marca _straneous_)


Queda guardada la versión.
Para actualizarlas: `npm update --save paquete`

## Comandos extra

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


## Chuleta

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


# Webpack {data-background-image="../images/logo-somenergia-nobg.svg" }

## Que hace webpack?

A partir del codigo fuente, genera los ficheros que se bajará el navegador.

Vamos que compila, ¿pero Javascript no era interpretado?

A medida que los proyectos se hacen grandes, es necesario
modularizar, descartar modulos no usados, agregar el resto, optimizar, preprocesar...


## Modulos en Javascript

A pelo, Javascript ES5 no sabe de modulos.

- Incluimos cada .js en el html con `<script>`.
- Tambien las dependencias!
- Todo va al scope global. No hay `namespaces`.

## Como funciona?

- explora las dependencias entre los módulos y genera código para:
	- aislar cada modulo en su espacio de nombres
	- organizarlos en una estructura buscable por el path
	- implementar la funcion `require` para acceder a las dependencias
- modifica el html para incluir los js finales

## Definición de módulos

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

## El bundle (envoltorio)

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

## Otros recursos (assets)

Datos (json, xml, yaml),
estilos (css, sass, less, stylus),
imagenes (png, jpg, svg)
...

Se _requieren_ como si fueran javascripts.

Los _loaders_ se encargan de que esten disponibles.

Strings en el bundle javascript o en su propio bundle.

<div class='notes'>

- Como string en el js, añaden codigo js para que este disponible
- En su propio bundle, modifican el html para incluirlo

</div>

# Mithril {data-background-image="../images/logo-somenergia-nobg.svg" }

## Frameworks

HTML pensado para ser estático, o poco dinámico.
Con CSS se pueden hacer algunas florituras.

Necesitamos que el HTML cambie en el navegador: Javascript.

Librerias: Complementan API DOM.
JQuery, Underscore, Sugar...

Frameworks: Componentización, Comunicación Modelo-Vista...
Vue, React, Angular, Mithril...

## Componentización

Componentes gráficos (widgets), en html:

- un tag propio, lo controlamos con los atributos y el contenido.
- abstrae un html mas complejo
- los podemos juntar para hacer componentes mas complejos

## Comunicacion Modelo-Vista

El patron MVC, tal como se definió, no es practico y  no se usa.
Cada framework llama vista, modelo y controlador a cosas distintas.
Pero queda la idea: **Separar la presentación de los datos**.

El framework define:

- Como los datos modifican la vista (html)
- Como lo que pasa en la vista modifica los datos

<div class="notes">

- En el Modelo-Vista-Controlador original habia tres clases.
- El controlador era el unico que conoce a los otros dos y recibe notificaciones de ambos.
- Como patron es bastante limitante pero se quedaron los conceptos.
- Las vistas tienen su propio modelo (estado) interno.
- Como se resuelve la agregacion de vistas?
- Todo el mundo llama MVC a lo suyo y hablan de cosas muy distintas.

</div>

## Ventajas de Mithril

- Ligero: muy pocos k's
- Rápido: Usa DOM virtual
- Simple: API minimalista
- Potente: A pesar de la simplicidad

<div class="notes">

- DOM es la API que ofrece el navegador para manipular el html
- Manipular el DOM es bastante lento
- Un DOM virtual permite detectar las diferencias y modificar quirurgicamente

</div>

## La API Mithril

Toda la api sirve 

```javascript
m = require('mithril');
```



## Componentes en Mithril

En Mithril, un componente se define con:

- Una funcion, `view`, que genera dinamicamente el html
- Una serie de atributos que podemos fijar desde donde los usamos, dependiendo del modelo
- De esos attributos, algunos son callbacks que hacen la comunicación contraria hacia arriba
- Un estado interno del componente
- Unos callbacks que se llaman en momentos especificos del ciclo de vida





