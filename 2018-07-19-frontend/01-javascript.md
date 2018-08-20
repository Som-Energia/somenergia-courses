
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
1=='1' // true    ''=='    ' // false  null == undefined // true
1==='1' // false  false=='' // true    null === undefined // false
0=='' // true     false==0 // true     undefined==false // false
0==='' // false                        [1,2]=='1,2' // true
```

La regla: Usar el de tres signos al menos que realmente quieras la conversión
(y no, no la quieres)

<div class='notes'>
No la quieres porque aunque te puedas esperar cierta conversión,
siempre hay una conversión que no esperabas.

Si es el caso, explicita la conversión y usa el de tres signos,
o usa dos comparaciones con el de tres signos.
</div>

## Falsos amigos: `+` {
	data-background-image='../images/logo-js.svg'
	data-background-size='40%'
	}

```javascript
3 + 2 // 5
'a' + 'b' // 'ab'
'2' - 3 // -1 !!
'2' + 3 // 23 !!
'a' + 3 // 'a3'
3 + true // 4 !!
3 + false // 3 !!
'3' + true // '3true' !!
3 + undefined // NaN
'a' + undefined  // 'aundefined'
3 + {} // '3[object Object]'
```

<div class='notes'>
- Con `-` se convierten los operadores a número.
- Con `+` si un operador es string, se convierte el otro a string
- Todo se convierte a string menos los booleanos si al otro lado hay un numero
</div>


## Falsos amigos: bool cast {
	data-background-image='../images/logo-js.svg'
	data-background-size='40%'
	}

En Python estamos muy acostumbrados a usarlas en condiciones y funcionan muy distinto.

- Las estructuras vacias `{}` y `[]` son `true`!!
- Un string vacio `''` es `false`, pero tambien uno con solo espacios: `'    '`
- El entero `0` es falso pero, tambien el string `'0'`!!
- De hecho un string con varios ceros pero con espacios delante y detras tambien es `false`: `'   000 \t\n  '`

<div class='notes'>
- Lo que buscas es: `[].length`, `Object({}).keys().length` o `''.length`
- Comparar un objeto o array con otro vacío, siempre sera falso, pues comparar dos objetos distintos es falso aunque tenga el mismo contenido
</div>


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

- `yamlns` es una libreria que usamos en Python para tener diccionarios con esteroides
- "diccionarios" en Python, _associative array_ en general
- Usamos la sintaxis de `[]` en vez de `.` cuando la clave:
	- Es calculada, o
	- No es un identificador válido
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
var myinstance = new MyClass('param1value'); // No olvides el new

// Ampliar una clase a posteriori. No olvides el 'prototype'!
MyClass.prototype.method3 = function() { ... };

```
<div class='notes'>
- Al llamarla con `new` pasamos un objeto nuevo vacio como `this`.
- La expresion `new` retorna ese objeto, despues de rellenarlo en la función factoría.
- Dos formas de definir una función: declaración y assignación.
- El punto y coma solo la lleva la asignación.
- La funcion factoría tiene un attributo, `prototype`,
  sobre el que podemos añadir métodos y atributos a posteriori
- En el singleton lo podíamos hacer directamente
</div>


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
var f2 = o.f; f2(a,b); // 'undefined', f2 pierde el binding
var f3 = f.bind(o); f3(a,b); // Seria `o`
// A bajo nivel
f.call(o, a, b); // Seria `o`
f.apply(o, [a,b]); // Seria `o`
```

<div class='notes'>
- La función es la misma todo el rato
- Que reciba un this no depende de como la definamos, sino de como la llamamos
- lo que intentamos hacer con `f2`, és obtener una función _bindeada_ a un objeto, y se puede en muchos lenguajes
- pero si lo hacemos en javascript, acabamos llamando a la función a pelo sin objeto
- en javascript lo hacemos como lo hace `f3`
</div>


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
<div class='notes'>
Pregunta:
podemos usar `this` en los métodos que se definen dentro de la función factoría
de unas diapositivas atras?
</div>


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

<div class='notes'>
- Si se resuelve antes de añadir el `then` tambien se ejecuta
- Un segundo parámetro en un `then`, se considera un `catch`.
- Podemos encadenar varios `then` y `catch`
- Si alguno retorna algo, es el `result` o el `error` para el siguiente `then` o `catch`.
</div>




