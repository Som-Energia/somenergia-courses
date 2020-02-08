# Sesión 2 <br><small>2020-02-13</small><br> :snake: :snake:

# Repaso

## Sesión Anterior

<asciinema-player src="sessio1-ascii.cast"></asciinema-player>

:::notes
Esto que parece un video es una sesion grabada de consola
mientras estuve haciendo la clase.

Puedes reproducirlo, pararlo, avanzarlo igual que un vídeo,
pero, también, puedes seleccionar el texto de los comandos y copiarlos
en tu consola, porque es texto, no imagen.

La sesión se queda muchos ratos parada,
de cuando estaba explicando cosas o atendiendo vuestras consultas,
intentare grabar una sesión sin interrupciones
y a ver si puedo añadirle el audio.
:::

## Modos de ejecución

El **interprete interactivo** `ipython3`.\
Para ejecutar comandos en vivo y explorar.\
Histórico editable de comandos\
Autocompletar con el tabulador

Los **scripts**: cuando la cosa se complica,\
mejor tener los comandos en un fichero de texto .py\
y lanzarlos de golpe con el intérprete

## Sintaxis

La sintaxis general: una línea por sentencia\
La funcion `print`

Subsentencias, indentadas despues de los `:`\
Ejemplos: `def` y `if`\
Importante: indentar igual las subsentencias

Si abrimos `{`, `[`, `(`... podemos partir las líneas
libremente hasta cerrarlos.

Comentarios: lo que venga detrás de `#` se ignora

:::notes
Intentación: sangrado que damos a las líneas
para darle estructura.

En otros lenguajes, se usa para mejorar la legibilidad.

En Python, es el indentado el que define la estructura.

`def` lo usábamos para definir nuestras funciones propias.

`if` es un condicional, no lo explicamos, hoy entraremos al trapo con el.
:::

## Tipos de datos

Numéricos: `10` (`int`),  `10.0` (`float`)

Textos: `"Hola mundo"` (`str`)

Un poco de listas: `[1,2,'tres',4]` (`list`)

Apenas mostramos diccionarios, booleanos...\
Hoy los veremos




## Manipulando datos

Operadores:  `* + - / // % ** in`

Asignación `=` y actualización `+= *= ...`

Llamar a funciones: `round(importeFinal)`

Llamar a métodos: `palabra.count('a')`

Indexado, rebanado y zancada: `seq[i:r:z]`

Formateo: `f"Hola {nombre}"`

:::notes
Operadores que usabamos en números,
pero algunos los usabamos tanmbién con textos.

El `%` de hecho me lo colé.
Es para saber el resto que correspondería de la división entera `//`.

El operador `in` servia para saber si una cosa estaba dentro de otra.

Vimos como asignar variables o como actualizarlas.

Llamar funciones, aplicando el operador parentesis.

Acceder a métodos con el `.`.

Sacar elementos de una secuencia con `[]`

Algo de formateo basico
:::

## ¿Y hoy qué?

Tomar decisiones

Recorrer estructuras

Usar diccionarios

Usar librerías

Manipular ficheros


# Decisiones

## Booleanos (`bool`)

`True` y `False`

Sirven para tomar decisiones
según lo que se encuentra el script

Es lo que da inteligencia al ordenador

¿Cómo los obtenemos?

Ya vimos los operadores `in` y `not in`

```python
>>> 3 in [1,2,3]
True
```

## Comparando

Operadores `< <= == != >= >`

```python
>>> a = 3
>>> 1<a  # operador de inequalidad 'menor que'
True
>>> 10<a
False
>>> 1 <= a <= 10  # ¿del 1 al 10, ambos incluidos?
True
>>> 'alfredo' < 'benito'  # orden alfabético
True
>>> 'alfredo' == 'alfredo' # igualdad
True
>>> 'alfredo' != 'alfredo' # desigualdad
False
```

## Sent. condicional `if`

```python
# Espera que se lo escribamos por la consola
name = input("¿Quien Vive?\n")

if name == 'Carme':
	print("Hola Carme, bienvenida a casa")
```

Las subsentencias solo se ejecuta\
si la condición se cumple


:::notes

Ojo: `=` asignación, `==` comparación

`input` se queda esperando que escribamos algo y le demos al intro

Un poco aburrido si no ponemos `Carme`, no sale nada.
:::


## Sent. alternativa `else`

```python
if name == 'Carme'
	print("Hola Carme, bienvenida a casa")
if not(name == 'Carme'):
	print("Fuera intruso!")
```

Se simplifica como:

```python
if name == 'Aitor':
	print("Hola Aitor, bienvenida a casa")
else:
	print("Fuera intruso!")
```

:::notes
Si, `not(name == 'Carme')`
se puede escribir `name != 'Carme'`.

Lo escribo así para enfatizar que es el negado.
:::

## Sent. alternativa `elif`


```python
guests = "Adria Lucia Manel Vero".split()
if name == 'Carme':
	print("Hola Carme, bienvenida a casa")
else:
	if name in guests:
		print(f"Hola {name}, sientate, Carme no tardará en llegar")
	else:
		print("Fuera intruso!")
```
```python
if name == 'Carme':
	print("Hola Carme, bienvenida a casa")
elif name in guests:
	print(f"Hola {name}, sientate, Carme no tardará en llegar")
else:
	print("Fuera intruso!")
```

:::notes
Si no se cumple la primera condición, a menudo
queremos comprobar otra segunda.
Eso acaba haciendo niveles y niveles.
Con la sentencia `elif` podemos seguir poniendo
condiciones alternativas en el mismo nivel.
:::

## Mútiples `elif`

```python
guests = "Adria Lucia Manel Vero".split()
owner = "Carme"

name = input("¿Quien vive?\n")
if name == owner:
	print(f"Hola {owner}, bienvenida a casa")
elif name in guests:
	print(f"Hola {name}, sientate, {owner} no tardará en llegar")
elif name == "El de la luz":
	print("Deje de intentar timarme que estoy en Som Energia")
else:
	print("Fuera intruso!")
```

## Operadores booleanos

`and not or`

Combinan booleanos y generan booleanos

```python
pasaEsto or pasaAquello  # con que pase alguna pasa
                         # solo si no pasa ninguna no pasa

pasaEsto and pasaAquello # tienen que pasar las dos
	                     # si una no pasa no pasa

not pasaEsto      # Pasa cuando no pasaEsto,
                  # y no pasa cuando pasaEsto
```

## Operadores booleanos

::: columns
:::: column
a     |   b   |	a or b
:----:+:-----:+:-------:
**True**  | **True**  | **True**   
**True**  | _False_ | **True**   
_False_ | **True**  | **True**   
_False_ | _False_ | _False_  
::::
:::: column
a     |   b   | a and b
:----:+:-----:+:-------:
**True**  | **True**  | **True**    
**True**  | _False_ | _False_   
_False_ | **True**  | _False_   
_False_ | _False_ | _False_   
::::
:::

a     |	not a
:----:+:--------:
**True**  | _False_
_False_ | **True**


## Conversiones a bool

Cada tipo tiene valores 'falsos',
el resto son 'ciertos'

Ceros: `0`, `0.0`, `0j`\
Estructuras vacías: `""` `{}` `[]` ...\
El no-objeto: `None`\

```python
alumnos = [ .... ]
# Estas condiciones serian equivalentes
if len(alumnos) != 0: ...    # bool False o True
if len(alumnos): ...         # int  0 o diferente de 0
if alumnos: ...              # list [] o llena
```



# Recorridos<br>(Iteraciones)

## Sentencia `for`

```python
milista = [1, 2, 3, 4, 5, 6]

for numero in milista:    # Ojo, no olvides los dos puntos!
	print(f"El numero es {numero}")
	print(f"Su cuadrado es {numero*numero}")
```

`numero` es una variable que va adoptando
los sucesivos valores de  `milista`

Para cada valor se ejecutan las subsentencias.

:::notes

Acordaros de los dos puntos al final de la linea del `for`

Indentad correctamente

A recorrer los elementos de una estructura
se le llama _iterar_
:::


## Objetos recorribles

`for` recorre listas...\
o cualquier cosa que contenga o genere elementos.

¿Textos? Pruébalo:

:::columns
::::column
```python
equipo = "tigres".upper()
for letra in equipo:
	print(f"Dame una {letra}")

print(f"¡¡¡{equipo}!!!")
```
::::
::::column
```
¡Dame una 'T'!
¡Dame una 'I'!
¡Dame una 'G'!
¡Dame una 'R'!
¡Dame una 'E'!
¡Dame una 'S'!
¡¡¡TIGRES!!!
```
::::
:::


:::notes
Para ser correctos,
se llaman _iterables_, no recorribles.


:::

## Intérvalos `range`

Genera secuencias de números

Sin contruir una lista: `range(2000000)`\
no crea una lista de 2000000 numeros en memoria


:::columns
::::column
```python
for i in range(10):
	print(i)

# Similar a los [slices]
range(10) # 0 to 9
range(3,10) # 3 to 9
range(3,10,2) # 3, 5, 7, 9
range(10,3) # Empty
range(10,3,-2) # 10, 8, 6, 4
```
::::
::::column
```python
# Common operators
r = range(3,10,2) # 3, 5, 7, 9
len(r) # 4
7 in r # True
6 in r # False
6 not in r # True
r.index(7) # 2
r[2:] # 7, 9
```
::::
:::

:::notes
Es otro tipo de objeto.

Genera una secuencia pero queda definido por un inicio, un fin y un paso.

No genera los números si no se necesitan.

Podemos aplicarle las operaciones que tienen en común listas y textos
por ser secuencias.
:::

## Listas del tirón

:::columns
::::column
```python
l = []
for x in range(6):
	l+=[x*x]
```
::::
::::column
```python
# [0, 1, 4, 9, 16, 25]
l = [ x*x for x in range(6) ]
```
::::
:::



```python
l = [ x*x for x in range(6) if x % 3 ] # [0, 1, 4, 16, 25]
l = [ # Como se suele complicar, lo formateamos asi:
	(x, x*x, x*x*x)   # Trio: x, el cuadrado y el cubo
	for x in range(6)
	if x % 3
]
# Si en vez de [] usamos () no se crea una lista
# es un generador de elementos como el range
g = ( x*x for x in range(60000) if x % 3 )
# No generar listas intermedias acelera la ejecución
```

:::notes
En inglés se llaman _comprehension lists_
pero me da mucho palo llamarlas así
porque cuesta pronunciarlo, y no entiendo que significado aporta comprehension.

Sirven para generar una lista nueva a partir de un iterable.

Tienen una estructora similar al SQL:
SELECT .. FROM ... WHERE

```python
[
	item_expression
	for var in iterable
	if item_condition
]
```

Ojo, el `for` va sin `:`

Podemos añadirle una condición de filtro con el `if` final.
Tambien sin `:`
:::


## Filtros iteradores

```python
>>> guests = ["Vane", "Sergi", "Albert", "Pau"]
>>> [x for x in enumerate(guests)]
[(0,"Vane"), (1,"Sergi"), (2,"Albert"), (3,"Pau")]

>>> [x for x in sorted(guests)]
["Albert", "Sergi", "Pau", "Vane"]

>>> gustos = ["fresas", "tomates", "alcachofas", "chocolate" ]
>>> [x for x in zip(guests, gustos)]
[ ("Vane", "fresas"),
  ("Sergi", "tomates"),
  ("Albert", "alcachofas"),
  ("Pau", "chocolate"),
]
```


# Librerías

## Reutilizando código

Las **_built in_** siempre están ahí:\
`print`, `round`, `max`, `min`, `sum`, `len`...

**Librerías estandards**\
Vienen con el lenguaje pero hay que importarlas.\
`import math`

**Tus librerías**\
`from . import mimodulo`


**Librerías externas**\
`pip install <paquete>`


```python
import math
math.cos(angulo)
```




# Ficheros


## Importar librerías






# Descarte

# Funciones

## Definir funciones `def`

```python
>>> def media(a, b):
...     suma = a+b
...     return suma/2
...
>>> media(3, 1)
2.0
>>> media(4, 5)
4.5
>>> suma
NameError: name 'suma' is not defined
```

:::notes
Permiten reutilizar código,
y ¡ponerle nombre!
Si le ponemos un buen nombre,
no hace falta que miremos el código para entender que pasa.

- `a` y `b` son los parametros
- adoptan diferentes valores cada vez que llamamos la funcion
- `suma` es una variable local
- `a`, `b`, `suma` no estan definidos fuera de la función. Que no choquen variables ayuda
- `return` indica el valor que retornarà la función
- el `return` sale de la funcion y no ejecuta nada más, si hubiera más subsentencias no las ejecutaría
- si llegase al final de la función sin encontrar un `return`, retornaria `None`
- `media` es un nombre, igual que una variable, si definimos una variable con ese nombre ocultara la función
:::

## Parámetros opcionales

Hacemos un parámetro opcional dándole
un valor por defecto en la definición.

```python
>>> def aplicaIva(baseImponible, factorIva=0.21):
...    return baseImponible*(1+factorIva)
...
>>> aplicaIva(100)
121.0
>>> aplicaIva(100, 0.07)
107.0
```

:::notes
Si asignamos un valor en la definicion del paràmetro,
podemos no especificarlo.
:::

## Parámetros opcionales

Se rellenan por posición.

```python
>>> def prueba(a,b,c='c',d='d'):
...    print(a,b,c,d)
...
>>> prueba(1)
TypeError: prueba() takes at least 2 arguments (1 given)
>>> prueba(1,2)
1 2 c d
>>> prueba(1,2,3)
1 2 3 d
>>> prueba(1,2,3,4)
1 2 3 4
>>> prueba(1,2,3,4,5)
TypeError: prueba() takes at most 4 arguments (5 given)
```

¿Que pasa si queremos pasar el segundo opcional pero dejar el primero por defecto?


## Parámetros opcionales

Los opcionales tienen que ser los últimos paràmetros.

```python
>>> def prueba(a,b,c='c',d):
...    print(a,b,c,d)
...
SyntaxError: non-default argument follows default argument
```

¿Que pasa si queremos pasar el segundo opcional pero dejar el primero por defecto?

## Parámetros por clave

```python
>>> aplicaIva(100, factorIva=0.07)
107
```
Ayuda la lectura, cuando hay varios parámetros

Permite reordenar los parámetros respecto la definición

Primero los posicionales


:::notes
Fijaos que la sintaxis es similar en la llamada
como en la definición de valor por defecto.
:::



## Ops de identidad `is`

`is` ¿Son el mismo objeto?\
`==` ¿Tienen un valor equivalente?\

Dos listas pueden coincidir en contenido\
pero su identidad es diferente.


```python
l1 = [1,2,3]
l2 = [1,2,3] # el mismo contenido pero otra lista
l3 = l1 # l3 apunta a la misma lista que l1
l1 == l2  #  True, tiene el mismo contenido
l1 is l2  #  False, son dos listas diferentes
l1 is l3  #  True, apuntan a la misma lista
l1 += [4,5] # Concatenamos
l2     # [1,2,3] sin modificar, *es* otra lista
l3     # [1,2,3,4,5] actualizada via l1, *es* la misma lista
```

::: notes
**Culturilla**

Datos inmutables (numbers, str, bool): si tienen el mismo tipo y valor son el mismo objeto

- el `4` es el `4` siempre
- el `1.0` no es el `1` aunque se comparan iguales

Datos mutables (list, dict, set): tienen identidad y valor independiente.

- pueden modificar su contenido manteniendo su identidad
- dos estructuras con el mismo contenido tienen indentidades independientes

La tupla es la única estructura que es inmutable

- la pareja (tupla) `(3,6)` siempre sera esa pareja
- Las tuplas (immutables) no se pueden modificar, cada tupla con un contenido diferente se considera un objeto diferente.
- Dos tuplas construidas en sitios diferentes, pero con el mismo contenido, se consideran la misma tupla.
:::


