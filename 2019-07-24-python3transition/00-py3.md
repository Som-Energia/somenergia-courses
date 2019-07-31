# La transición :snake: {
	data-background-image="images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

## Por qué transición {
	data-background-image="images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

y no migración?

2020: Acaba soporte a Python 2

Gisce no tendrá el ERP migrado

Aún estaremos con Python 2 por un tiempo

Cuando se pongan las pilas, puede que no tengamos tiempo
de migrarlo todo, hay que ir haciéndolo

Lo que no se usa en módulos ERP no require transición.
Pero puede ser útil.


## Propuesta {
	data-background-image="images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

Migrar el código para que funcione en ambos\
Manual: [Idiomas de compatibilidad](https://python-future.org/compatible_idioms.html)

<div class=notes>
Idioma: forma concreta de usar un lenguage de programación
</div>

Se proponen diversos idiomas para cada problema\
Escoger el idioma más parecido al Py3 final

Intento concretar propuestas, no escritas en piedra
Unifiquemos criterios con diálogo

Importante: Cobertura previa de tests


## Estrategia: Testing

Código aguantado con tests.

¿No hay tests? Montamos B2B de campaña.

Objetivo: que no dejen de pasar en Py2 mientras avanzamos con Py3.

A falta de CI, los que podamos en Travis\
(tests que no usen datos presonales, ni erp)

Ejemplos travis multiversion: intercoop, generation...


## Estrategia: conversores {
	data-background-image="images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

`2to3`: Convierte a Py3, pero no portable.

Aplica una bateria de fixers (arregladores) ([Lista](https://docs.python.org/3/library/2to3.html#fixers))

Algunos son portables, los aplicaremos tal cual.

Otros no, los aplicamos a parte para detectar incompatibilidades.

## Conversores portables {
	data-background-image="images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

Parte de la libreria `future`

`futurize`: Genera Py3 backward compatible Py2

`pasteurize`: Genera Py2 forward compatible Py3

Aún así hay que revisar el código.

## Conversion automàtica

Pasamos el `2to3` con los fixes portables

	$ 2to3 -w -f raise -f except -f asserts -f paren \
		-f raw_input -f reduce -f import

Test, commit y, el resto, sin sobreescribir:

	$ 2to3 -nw --add-suffix=3 src/ # Genera ficheros py3
	$ futurize -nw --add-suffix=23 src/ # py23, Py3 backward compatible

Analizamos los cambios propuestos caso a caso

	$ find -name \*.py3 |
	  while read a; do vimdiff $a ${a%3} ${a%3}23; done

<div class=notes>
En el [manual de la herramienta](https://docs.python.org/3/library/2to3.html#fixers)
está la descripción de todos los fixers.


Este otro [manual](http://blog.pyspoken.com/wp-content/uploads/2018/07/python2_to_3_migration_guide.pdf)
da una la lista mas amplia que la mia de fixers portables sin necesidad de revisar.
Yo solo he incluido los que he revisado.

```
apply # confirmado
asserts # confirmado
except # confirmado
execfile # confirmado
exitfunc # confirmado
funcattrs # confirmado 2.7 es dual
has_key # confirmado
input 
isinstance # confirmado
methodattrs
ne # confirmado
next # No portable???
nonzero # No portable??
numliterals # para mí, hay que revisarlo, por bugs latentes
paren # confirmado
reduce # confirmado
repr # confirmado
set_literal # confirmado 2.7
standarderror # En except generaliza!!
sys_exc # confirmado
tuple_params # revisable
types # ni idea
ws_comma # opcional?
xreadlines # confirmado
```

Portables con revision

```
buffer
dict
filter
idioms
import # para mí sin revision
map
raise # para mí sin revision
renames
xrange
zip
```

No portables:

```
basestring
exec
future
getcwdu
imports and imports2
intern
itertools
itertools_imports
long
metaclass
print
raw_input
throw
unicode
urllib
```

</div>


## Novedades Py3 {
	data-background-image="images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

- Strings, unicode, bytes, entrada y salida
- Función `print`
- Iterables: (`x`)`range`, (`iter`)`items`
- `except Exception as e`
- API de algunas librerías standard
- Otras features que no usamos directamente


# Iterables  <br> :loop: {
	data-background-image="images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

## Problema {
	data-background-image="images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

`keys`/`iterkeys`,
`values`/`itervalues`,
`items`/`iteritems`,
`range`/`xrange`,
`readlines`/`xreadlines`,
`map`/`imap`,
`zip`/`izip`,
`filter`/`ifilter`,
...

En Py2 retornan listas, la alternativa retorna generadores.

En Py3 los primeros retornan generadores, los segundos no existen.

<div class=notes>
Excepcion: `readlines` sigue devolviendo una lista en py3.
File es iterable en si.

Comprobación: Ahí donde lo usemos `readlines`, ¿necesitamos una lista?
</div>

## Estrategia {
	data-background-image="images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

2to3 convierte:

- `d.iteritems()` &rightarrow; `d.items()`
- `d.items()` &rightarrow; `list(d.items())` 

Propuesta: usar `items()` sin `list` casi siempre

En Py2, listas grandes intermedias son lentas.
Usar `builtin.iteritems` en esos casos.

En Py3, los generadores se gastan.
Si hay manipulaciones o más **una sola** iteración,
convertir a lista o volver a llamarlo.

## Ejemplo {
	data-background-image="images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

```python
for k,v in d.items() # Original
for k,v in list(d.items()) # 2to3
for k,v in d.items() # Nuestra propuesta

# Peligro 1: Si la lista es grande y en Py2 ralentiza
from future.builtins import iteritems
for k in iteritems(d)

# Peligro 2: Lista guardada en Py2, rompe Py3
items = d.items()
for k in (items): ....
for k in sorted(items): ... # generador ya consumido en Py3
# Solución: Llamar la función cada vez
# Si se vuelve costoso en Py2, ver Peligro 1
```

## Ejemplo {
	data-background-image="images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

```python
# Peligro 3: El resultado se manipula como lista

d.items()[:2] # Funciona en Py2 pero casca en Py3
d.values() + ['additional'] # Funciona en Py2 pero casca en Py3

# Solucion, aquí si, pasar a lista

list(d.items())[:2] # las dos primeras parejas
list(d.values()) + ['additional'] # Lista explicita
```
## Eficiencia para Py2 {
	data-background-image="images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

Solo en caso que Py2 sea muy ineficiente usaremos:

```bash
$ pip install future # includes `builtins` package for Py2
```
```python
from future.builtins import range
from future.builtins import map
from future.builtins import zip
from future.builtins import filter
from future.builtins import itervalues
from future.builtins import iteritems
# iterkeys no se necesita, iterar sobre el dict
# xreadlines no se necesita, iterar sobre el file
```


# Gestion excepciones :warning:

## Sintaxis obsoleta

```python
# Sintaxis deprecada en Py2, obsoleta en Py3
try:
	...
	raise MyException, 'Ha petado' # Obsoleto
except MyException, e: # Obsoleto
	...

# Forma correcta en Py2 y P3
try:
	...
	raise MyException('Ha petado') # Correcto
except MyException as exception: # Correcto
	...
```

<div class=notes>

Hay cierta sintaxis para gestionar las excepciones,
que hace tiempo está deprecada en Py2, y ahora queda obsoleta.


Hay mucho código nuestro que, por copia y pega, la usa.
Hace tiempo deberíamos de usar la nueva.
</div>

## Solución

La nueva forma funciona en ambos, Py2 y Py3.

Estrategia: Dejar a 2to3 que haga lo suyo


## `raise from`

Interesante para encadenar contexto

```python
# Python 3 only
class FileDatabase:
    def __init__(self, filename):
        try:
            self.file = open(filename)
        except IOError as exception:
            raise DatabaseError('failed to open') from exception

# Python 2 and 3:
from future.utils import raise_from

class FileDatabase:
    def __init__(self, filename):
        try:
            self.file = open(filename)
        except IOError as exception:
            raise_from(DatabaseError('failed to open'), exception)

# Testing the above:
try:
    fd = FileDatabase('non_existent_file.txt')
except Exception as e:
    assert isinstance(e.__cause__, IOError)    # FileNotFoundError on Py3.3+ inherits from IOError
```

## Excepciones nuevas

Algunas excepciones han cambiado:

TODO


# Funcion `print`

## Comportamiento nuevo

En Py2 el `print` era una cláusula como el `return`.

Ahora es una función.

## Estrategia

```python
# Solo una cosa: Entre parentesis.
print('Hola mundo') # Portable

# Varias cosas: Usamos format
print('Hola', name) # imprime la tupla en Py2!!
print('Hola {}'.format(name)) # Portable

# Standard error: usamos consolemsg
print sys.stderr << "La has cagado", name # Py2 only
print("Fastidiate {}".format(name)", file=sys.stderr) # Py3 only

from consolemsg import error, out # Errores en colorines
error("Fastidiate {}", name) # No hace falta format

# Tambien tenemos el substituto para stdout
out("Hola {}", name) # Funciona con unicodes y pipes
```

## Sin fin de linea

TODO:

Hemos evitado hacer `from __future__ import print_function`

Pero ¿y los prints acabados en coma que no hacen salto de linia?

# Otros

## Imports relativos

En Py2 los imports eran implicitamente relativos.

En Py3 solo se puede hacer de forma explícita.

Como la forma explícita es común, usaremos esa en ambos.

```python
import sibbiling_module # Solo funciona en Py2

from . import sibbiling_module # Funciona en ambos
```

Fixer portable de `2to3`: `import`.

## Libreria standard

Se han reestructurado las librerias:\
httplib, urllib. collections...

Se resuelve:

Usando el import de Py3

Antes de hacer el import, poner:

```python
from future import standard_library
standard_library.install_aliases()
```

## División entera

Py2: `a/b` es división entera con operadores enteros

En muchos sitios, `float(a)/b` para evitarlo.

Py3: `a/b` siempre es división real

```python3
3 / 2 # Retorna 1 en Py2, 1.5 en Py3

# Si queremos entero, usamos operador explicito
3 // 2 # Retorna 1 en Py2 y Py3

# No queremos comportamiento antiguo de / asi que:
from __future__ import division
3 / 2 # Retorna 1.5 en Py2 y Py3
```

Atención, efecto sutil. Bugs escondidos.

## Bye `long`

El sufijo `L` para los long es implicito en Py2, ilegal en Py3, lo quitamos

El tipo `long` de Py2 es el `int` de Py3, si necesitas discriminarlos:

## Constantes octales

`0644` solo funciona en Py2, `0o644` en ambos.

Usar la segunda forma siempre.

Evitar usar 0-padding en las constantes, para no liar a Py2.

Estrategia, pasar el fix `numliterals` de `2to3`,
y revisar que realmente queriamos una constante octal
donde proponga cambios.

## Metodos `__`mágicos`__` :tophat:

Nuestro código no los suele redefinir.

Si lo hemos hecho, cuidado con estos:

`__bool__` y `__nonzero__`

`__unicode__` y `__str__`

`next` y `__next__`

## `__nonzero__`

```python
# Old Py2 only code
class MyClass:
	def __nonzero__(self): return truth value
a = MyClass()
if a: ....

# Compatible code
from builtins import object # the only added code for portability
class MyClass(object):
	def __bool__(self): return truth value
a = MyClass()
if a: ....
```


## `__next__`

```python
# Old Py2 only code
class myiterable:
	def __iter__(self): return self
	def next(self): ... # bad 
it.next() # explicit use, Py2 only

# Portable code, looking almost like Py3
from builtins import object # the only added code for portability
class customiterator(object):
	def __iter__(self): return self # same
	def __next__(self): ... # same as next
next(it) # explicit use portable
```

## `__str__` y `__unicode__`


# Unicode ![HELL](images/hell.svg){style="border:none"}

## Sinceramente

Unicode ya es complicado con una sola versión.

Un código que funcione en las dos... es posible.

A veces cuesta hacer portable porque no lo estamos gestionando bien en Py2 o en Py3

Aprovechemos para aclarar conceptos y establecer premisas que podamos seguir en ambas.

## Dos semánticas

`unicode` (`str` en Py3):
texto multilenguaje abstracto, sin ninguna codificación explícita.

<div class=notes>
Culturilla (porque no nos deberia importar la representación interna de los unicode)

Py2, dependiendo de flags de compilación,
representa los unicode internamente con UCS2 o UCS4.
A diferencia de UTF8, UTF16-BE...
son representaciones de tamaño de caracter fijo,
que facilitan la algorítmica.
Si usas UCS2, hay caracteres que no puedes representar.
Si usas UCS4, cubres los 21 bits de Unicode
pero estás escribiendo muchos ceros que ocuparan mucho.

Py3 es más hábil, tiene una representación
flexible y se adapta a cada texto concreto,
según haya suficiente con Latin-1 (8 bits), UCS2 (16 bits) o UCS4 (32 bits).

</div>

`bytes` (`str` en Py2):
bytes que lo representan usando una codificación concreta,
ASCII, UTF-8...\
o qualquier tira de bytes aleatoria que no sea texto.

¡Ojo! Aunque tienen la misma semántica,
`bytes` en Py3 tiene una API muy diferente a `str` en Py2.

## Cambios

`str` &rightarrow; `bytes`

`unicode` &rightarrow; `str`

`'text'` o `b'text'` &rightarrow; `b'text'`

`u'text'` &rightarrow; `'text'` o `u'text'`

`basestring` &rightarrow; ~~removed~~

(`str` y `bytes` ya no comparten API en Py3)

## Invariante

Los prefijos explícitos mantienen la misma semántica

No disponibles hasta 2.7.1 (`b`) y 3.3 (`u`)

`type(u'')` es `unicode` en Py2, `str` en Py3 

`type(b'')` es `str` en Py2, `bytes` en Py3 

`type('')` es `str` en ambos pero semanticamente diferentes

## Premisas

Nosotros manejamos todo el texto como unicode.

Si nos llegan cosas como bytes: `decode('utf8')`\
Si nos piden cosas como bytes: `encode('utf8')`

Todos los bytes codificados en UTF-8, por defecto.

Solo se aplica `decode` a bytes\
Solo se aplica `encode` a unicodes

Py2 permite aplicarlos indistintamente \
¡No lo hagamos!

## Why ASCII? WHY!?

Si aplicamos encode o decode al tipo que no toca, \
Py2 convierte al tipo que toca usando ASCII.\
Si contiene no-ASCII, peta :bow:

```python
u'Castaña'.decode('utf8')
# En Py3 no hay decode para unicodes
# En Py2 sería equivalente a:
u'Castaña'.encode('ascii').decode('utf8')
# Como no puede encodear a ascii peta

# Analogamente:
b'Castaña'.encode('utf8')
# En Py3 no hay encode para bytes
# En Py2 sería equivalente a
b'Castaña'.decode('ascii').encode('utf8')
```

## Unicode Sandwitch :hamburger:

![](images/unicode-sandwitch.svg){style=float:left;width:25%;margin:1ex;padding:1ex}

Bytes: Nunca se manipulan, suman, formatean...
al menos que estemos hackeando hardware.

Minimizaremos o aislaremos las fuentes y destinos de bytes
para no tener que hacer encodes y decodes en todos sitios

## Aseguradores

Para cuando no sabemos qué nos llega\
(aunque deberíamos saber qué nos llega)

```python
def u(text):
	if type(text) == type(u''): return text
	if type(text) == type(b''): return text.decode('utf8')
	return type(u'')(text) # unicode formating

def b(text):
	if type(text) == type(b''): return text
	if type(text) == type(u''): return text.encode('utf8')
	return type(u'')(text).encode('utf8') # format and encode
```
En la última versión de `consolemsg` :smile:


<div class=notes>
- Puntos frontera de librerías que no sabemos quien usará
- En medio de una migración
</div>


## Código fuente

El código fuente se guarda como bytes \
¿Qué codificación?

En Py3 se supone UTF8

En Py2 se supone ASCII (again!)

Por Py2, siempre en la cabecera:

`# -*- encoding: utf8 -*-`

Y configurar editor con encoding UTF8 defecto.


## Literales

**Ante la duda explicitar prefijo `u` siempre.**

Como mínimo, si el literal:

- contiene **carácteres no ASCIII**
- o es un **template para `format`**

La comunidad desaconseja usar\
un aparentemente conveniente\
`from __future__ import unicode_literals`


## Literales: No ASCII

¿Por qué explicitar `u` en las no ASCII?

Cuando Py2 combina unicode con otra cosa,

- lo promociona todo a unicode. **¡Bien!**
- con un `decode` implicito ASCII **¡Aggh!**

Si las partes no ASCII ya están en unicode,
lo irá promocionando bien.

<div class=notes>
Py3 no deja combinar bytes con unicodes.
Pero hablamos de combinar literales `''` con `u''`
y en Py3 ambos son unicode.

No, no vamos a usar `b''` explícito en algo que vayamos a combinar.

</div>

## Literales: Templates

¿Por qué explicitar `u` en templates de `format`?

En Py2 el `format` mantiene el tipo del template.\
Segun toque codifica o decodifica los argumentos usando ASCII (again!)

```python
name1 = u'María' # prefijo por la norma de no-ascii
name2 = 'Pedro' # podriamos poner el prefijo, no se requiere

# Py2 implícitamente codifica name1 en ASCII
'Hola {} y {}'.format(name1,name2) # Peta, hay no ASCII
# Py2 implícitamente decodifica name2 de ASCII
u'Hola {} y {}'.format(name1,name2) # Funciona
```

<div class=notes>
Un template sin prefijo, es bytes en Py2.

Fuerza el encoding implícito ASCII
de cualquier argumento unicode.

En Py3, `bytes` no tiene `format`,
y si vienen en los argumentos, los inserta como `repr`

No, no queremos usar bytes en Py3.

```python

# Python 3

>>> b'{}'.format(3)
AttributeError: 'bytes' object has no attribute 'format

>>> 'result: {}'.format(b'hello')
"result: b'hello'"
# Hace un repr

```
</div>



## Future `unicode_literals`

Podríamos ahorrarnos las `u`'s con:

`from __future__ import unicode_literals`

En la práctica dicen que da problemas y todo el mundo lo descaconseja.\

No entiendo porqué (ver notas)

<div class=notes>
En teoría está desaconsejado por que:

- Hay librerías antiguas no saben manejar unicode.
- En medio de una migración cambiarlo todo de golpe es muy a saco.

Tendríamos los mismos problemas si pusieramos prefijo `u` en todos los literales.

Yo, solo para esos casos, explicitaría `b''` si es un literal directo,
o, si no es literal, llamaría a encode en el momento de pasar el argumento.

TODO: Investigarlo o probarlo
</div>


## Problema con `open`

Cuando abrimos en modo texto,

Py2 trabaja en bytes, haciendo decoding ASCII
implícito si le pasamos un unicode para escribir.

Py3 acepta un parametro `encoding`

En Py2 en modo texto, lee y escribe bytes.\
Usa ASCII para decodificar si le pasamos un unicode.\
Hemos de codificar manualmente, si no va bien.


En Py3 en modo texto, lee y escribe `unicode`\
codificando y decodificando a `utf-8`

En Py2 lee `bytes` siempre.
Se usaba la libreria `codecs` para
tener unicodes con utf8.

```python
import codecs
with codecs.open(filename, 'r', encoding='utf8') as f:
	content = f.read() # siempre unicode

with codecs.open(filename, 'w', encoding='utf8') as f:
	f.write(b'Pedro') # En Py2 se lo traga
	f.write(b'María') # No se lo traga nadie
	f.write(u'María') # Se lo traga todo el mundo
```

## Ejemplo `io.open`

Es mucho mas simple si usamos `io.open`, existe en
Py2 y Py3, y tiene exactamente la misma signatura que `open` en Py3.
Así que la podemos usar sin complejos, y más adelante simplemente quitar el import.

```python
content=u'María'
from io import open
with open(filename, 'w', encoding='utf8') as f:
	f.write(content)

	# complains in Py2: must be unicode not str
	# complains in Py3: must be str not bytes
	f.write(b'María')

with open(filename, encoding='utf8') as f:
	result = f.read() # u'María'
```


## Pipes y `print`

Cuando metemos nuestro script en pipes de shell
el locale de stdin/stdout pasa a ser C (ASCII)

En Py2, funcionaba en consola pero petará.

La solución en todo caso es definir un environment.

```bash
PYTHONIOENCODING='utf8'
```

O usar exclusivamente las funciones de la última versión de `consolemsg`
que gestionan esto ellas solas sin requerir que el usuario defina el environ.

## Simplified Sandwitch

![](images/unicode-sandwitch-simplified.svg){width=30%}


# Sin Python 2

## Más allà de Python 2

Nos hemos centrado en código portable Py2/Py3.

¿Qué podremos hacer cuando dejemos caer Py2?

- Dejar de usar los prefijos `u''`
- Eliminar todos los futures i six
- Usar f-strings en vez de `format`
- `nonlocal` en las closures para modificar variables de la funcion superior
- star unpacking: `a, *b, c = [1,2,3,4]
- ...







