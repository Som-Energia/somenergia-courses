
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
var myinstance = new MyClass('param1value'); // No olvides el new

// Ampliar una clase a posteriori. No olvides el 'prototype'!
MyClass.prototype.method3 = function() { ... };

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
var f2 = o.f; f2(a,b); // 'undefined', f2 pierde el binding
var f3 = f.bind(o); f3(a,b); // Seria `o`
// A bajo nivel
f.call(o, a, b); // Seria `o`
f.apply(o, [a,b]); // Seria `o`
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




