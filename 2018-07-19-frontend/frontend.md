---
theme: serif
title: Tecnologías de Front-end
subtitle: usadas en Som Energia, para Pythoner@s
author: Voki
---

# Intro

## Frontend vs Backend

- **Frontend:** se ejecuta en el **cliente**
	- Mithril, ReactJS, Angular...

- **Backend:** se ejecuta en el **servidor**
	- Flask, Django, NodeJS, PHP... 

## Elementos del Frontend

- **Javascript:** lenguage
- **nodejs/npm:** entorno, paquetes (virtualenv, pip)
- **Webpack:** constructor (makefile)
- **Mithril:** controlador (MVC)
- **Material Design Components:** widgets (qt)
- **ospec:** Framework de testing (unittest)

<div class='notes'>
- Javascript
	- ES6 nuevo y bonito pero no portable
	- Se usa Babel para convertir a ES5, no cal
- nodejs/npm
	- nodejs es tecnologia de backend
	- usamos su empaquetado (pip+setup.py)
	- npm es un pip con esteroides
- Webpack
	- Procesa el codigo y los recursos
	- Analiza las dependencias
	- Genera los ficheros que se baja el navegador
	- Alternativas: grunt, gulp...
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


# Javascript

## Falsos amigos

Javascript: tan familiar que nos pensamos que no hay que aprenderlo.

Se parece a C++ y Java, esperamos que se comporte como C++ y Java.

Cuando no lo hace, 😠 😠 😠 😠 ＼(｀0´)／

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
3 + true // 4 !!
3 + false // 3 !!
3 + undefined // NaN
'a' + undefined  // 'aundefined'
3 + {} // '3[object Object]'
```

## Falsos amigos: bool cast

En Python estamos muy acostumbrados a usarlas en condiciones y funcionan muy distinto.

- Las estructuras vacias `{}` y `[]` son `true`!!
- Un string vacio es `false`, pero tambien uno con solo espacios: `'    '`
- El entero `0` es falso pero, tambien el string `'0'`!!
- De hecho un string con varios ceros pero con espacios delante y detras tambien es `false`: `'   000 \t\n  '`


## Variables no declaradas

Error típico: me equivoco en el nombre de la variable

Javascript no se queja, te de vuelve un valor `undefined`, convertible a `false` o al numero `NaN` o a la cadena `'undefined'`.

Añadir `'use strict';` al principio de los ficheros hace que se queje
si usas una variable no declarada.

Pero ojo: Aún tenemos el mismo problema cuando accedemos a una propiedad de un objeto.

## Objetos

Los objetos de Javascript son diccionarios de Python con esteroides.

Acceso dual con `.` y `[]` como nuestro `yamlns`.

Si un atributo es una funcion se puede llamar como método.

```javascript
o1 = {
	a: 1,
	'b-at': 2,  // si el nombre no es identificador, comillas
};
Object.assign(o1, {a: 3, c: 4}); // py update
o2 = Object.assign({}, o1); // py clone
```
<div class="notes">
- Usamos la sintaxis de `[]` en vez de `.` cuando la clave:
	- Es calculada, o
	- No es un identificador
- Usamos `''` en las claves de los literales cuando no es identificador
- Truco: si la clave es calculada y esta en la variable `key`,
  definir el literal: `{ ''+key: value }`, si no considera la clave literal `'key'`.
</div>



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
MyClass.prototype.method3 = premethod3;

var myinstance = new MyClass('param1value'); // No olvides el new
```

## O diccionarios

En Mithril los usamos para definir componentes.

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

O son singletons o sirven de prototypos para otros objetos.

## Falsos amigos: `this`

Su valor en una funcion `f` depende de como se llame, no de donde se defina

```javascript
function f (a,b) { console.debug(this); }

f(a,b); // Seria `undefined`
new f(a,b); // un nuevo objeto `{}` vacio
o.f=f; o.f(a,b); // Seria `o`
f.call(o, a, b); // Seria `o`
f.apply(o, [a,b]); // Seria `o`
f.bind(o); f(a,b); // Seria `o`

var f2 = o.f; f2(); // f2 loses the this binding
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
		self.otrafuncion(a,b);
	}
}
```

# NodeJS i npm

## Node no es de backend?

Si, pero hace cosas que son utiles para front-end
(similares a otras que tenemos en python).

- Definicion de proyecto (setup.py -> package.json)
- Gestion de paquetes y dependencias (pip -> npm)
- Entorno local aislado (venv -> node_modules)
- Interprete interactivo (python -> node)
- Web server para desarrollo (flask serve -> npm run server)

## Definición del proyecto

`package.json` contiene los metadatos del proyecto.

Se crea con el comando `npm init` a partir de preguntas interactivas.

La clave `scripts`, contiene comandos personalizados
que podemos ejecutar con `npm`, por ejemplo: `npm run server`.

## Entorno virtual y repositorios

El proyecto tiene su entorno virtual en la carpeta `node_modules`
donde se iran instalando los paquetes de _vendor_.

Muy parecido a `pip`:  `npm search`, `npm install`...

## Dependencias del proyecto

**Dependencias (de run-time):** necesarias para alguien que use el paquete distribuido

**Dependencias de desarrollo:** necesarias para construir el paquete distribuido

Nosotros no hacemos paquete (aun), las de run-time son las que se usan en el navegador

Se instalan con `npm install` sin especificar paquete.

## Añadiendo dependencias

Los paquetes insalados a pelo se marcan como _straneous_.
Quiere decir que si otra persona instala el paquete, no los tomara.

Se añaden con `npm install --save paquete` o `--save-dev` si es de desarrollo.

El `package.json` se guarda la versión.

Para actualizar: `npm install --upgrade paquete`


## Chuleta

```bash
npm init # Crea el package.json a base de preguntas

npm install # Instal·la les dependencies del package.js

npm search <words> # busca paquetes con words en la descripción

npm install --save <package> # añade la dependencia al proyecto

npm install --save-dev package # añade dependencia de desarrollo

npm run test # Ejecuta el script `test` definido en `package.json`
```

# Webpack

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

# Mithril

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





