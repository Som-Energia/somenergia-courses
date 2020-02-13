# Sesión 2 <br><small>2020-02-13</small><br> :snake: :snake:

# Repaso

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

## ¿Qué os costó entender más?


## ¿Y hoy qué?

Tomar decisiones

Recorrer estructuras

Usar librerías

Manipular ficheros

## Ejercicio

Evitar conversaciones cruzadas en teléfono

Las graellas usan la definición de mesa

Complicado que cada cual se lo configure

Joan nos ha pasado [un fichero con las mesas](mapataules.txt).

Tomatic las necesita en otro formato.



::: notes
Para generar graellas se tienen en cuenta las mesas para evitar conversaciones cruzadas.

No hay forma de que cada cual configure la suya

Joan se ha currado un [mapa de mesas](mapataules.txt)

```markdown
# INFERN

carles monica
nuri marta
manel   carol

# CASADEMONT

erola
sergi  vic gemma   mar
rogerlf	pau joan  adria
...

```

El tomatic necesita un formato especifico (YAML)\
pero convertirlo a mano es tedioso y me puedo equivocar

```yaml
taules:
  carles: 0
  monica: 0
  nuri: 1
  marta: 1
  manel: 2
  carol: 2
  ...
```
:::


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


## Filtros iteradores

```python
>>> guests = ["Vane", "Sergi", "Albert", "Pau"]
>>> list(sorted(guests))
["Albert", "Sergi", "Pau", "Vane"]

>>> list(reversed(guests))
["Pau", "Albert", "Sergi", "Vane"]

>>> list(enumerate(guests))
[(0,"Vane"), (1,"Sergi"), (2,"Albert"), (3,"Pau")]

>>> gustos = ["fresas", "tomates", "alcachofas", "chocolate" ]
>>> list(zip(guests, gustos)])
[ ("Vane", "fresas"),
  ("Sergi", "tomates"),
  ("Albert", "alcachofas"),
  ("Pau", "chocolate"),
]
```

:::notes
`list` toma un iterable y lo convierte en lista.
Nos sirve para "aterrizar" un iterable como el `range` que
solo genera elementos cuando lo usamos.

Las siguientes funciones generan elementos pero
crean una lista, por eso usamos `list` para 

`enumerate`: genera elementos emparejados con su índice.

`sorted`: genera los elementos en orden (numerico, alfabetico...)

`reversed`: genera los elementos en el orden inverso al que están

`zip`: empareja elementos de diferentes iterables, el primero con el primero, el segundo con el segundo...
:::

## Listas del tirón

Construyendo una lista a partir de otra (o un iterable)

:::columns
::::column
```python
squares = []
for x in range(6):
	squares+=[x*x]
```
::::
::::column
```python
# [0, 1, 4, 9, 16, 25]
squares=[x*x for x in range(6)]
```
::::
:::

:::notes
En inglés se llaman _comprehension lists_
pero me da mucho palo llamarlas así
porque cuesta pronunciarlo, y no entiendo que significado aporta comprehension.

Sirven para generar una lista nueva a partir de un iterable.

Ojo, el `for` va sin `:`
:::

## Filtrando elementos

```python
l = [ x*x for x in range(6) if x % 3 ] # [0, 1, 4, 16, 25]

# Como se suele complicar, lo formateamos asi:
l = [
	(x, x*x, x*x*x)   # Trio: x, el cuadrado y el cubo
	for x in range(6)
	if x % 3
]
```

:::notes
Podemos añadirle una condición de filtro con el `if` final.
Tambien sin `:`

Tienen una estructora similar al SQL:
SELECT .. FROM ... WHERE

```python
[
	item_expression
	for var in iterable
	if item_condition
]
```
:::

## Generador del tiron

```python
# Si en vez de [] usamos () no se crea una lista
# es un generador de elementos como el range
g = ( x*x for x in range(60000) if x % 3 )
# No generar listas intermedias acelera la ejecución
```


# Ficheros

## `pathlib`

Es una libreria estandard

Provee objetos `Path`

```python
from pathlib import Path

p = Path('/home/user/.config')
home = Path.home() # el directorio de usuario
current = Path.cwd() # el directorio de trabajo
config = home / 'miconfig.ini' # navegación con operador /
```

:::notes
`pathlib` es una librería estandard.
No hay que instalarla pero hay que importarla en el script.

Path da acceso al sistema de ficheros
:::


## Leer y escribir

```python
csv = Path('mifichero.txt')

escrito = """\
Primera línea
Segunda línea
"""
csv.write_text(escrito, encoding='utf8')

leido = csv.read_text(encoding='utf8')
# "Primera línea\nSegunda línea\n"
```

:::notes
Si siempre trabajamos con UTF-8,
nos vamos a evitar muchos problemas
con los acentos y otros carácteres especiales.

- Cuando exportemos archivos, utf8.
- Cuando editemos código, utf8
- cuando leamos o escrivamos ficheros desde el código, utf8

Evitar cosas como: ASCII, Latin1, UTF16, ISO6889-15, CP885, UCS...

Si el fichero existe lo machaca.
:::

## Lectura progresiva

La forma para ficheros grandes,
no podemos cargarlos todos en memoria.

```python
with csv.open(encoding='utf8') as file:
	for nline, line in enumerate(file):
		print(f"Contenido de la línea {nline+1}: {line}")
```

:::notes
`with` controla el recurso.
Abre el fichero y lo cierra cuando salimos.

Fijaros que no quita el `\n` final,
cuando hacemos `print` hace dos saltos.

La ultima línea vacia y sin salto.
:::


## Partes del path

```python
p = Path('/home/vokimon/Documents/manual.tar.gz')
p.parts # ('/', 'home', 'vokimon', 'Documents', 'manual.tar.gz')
p.root # '/'
p.parent # '/home/vokimon/Documents'
p.parents # [ '/home/vokimon', '/home', '/' ]
p.name # 'manualdepython.tar.gz'
p.suffix # '.gz'
p.suffixes # ['.tar', '.gz' ]
p.stem # 'manualdepython.tar'
p.with_suffix('.zip') # Path('/home/vokimon/Documents/manual.zip')
```

## Busqueda

```python
# Todos los ficheros de texto del directorio actual
[x for x in Path(".").glob('*.txt')]

# Lo mismo pero mirando subdirectorios
[x for x in Path(".").glob('**/*.txt')] 

for child in Path('.').iterdir():
	....
```




:::notes
Devuelve un iterable con todos los elementos que concuerden

El doble asterisco quiere decir que desciende en los subdirectorios
:::

## Propiedades

```python
p.exists() # existe el path
p.is_dir() # es un directorio
p.is_file() # es un fichero
p.owner() # propietario del fichero

```

## Operaciones

```python
p.remove() # borra fichero
p.rmdir() # borra directorio vacio

p.mkdir(parents=True, exists_ok=true) # crea el directorio y los padres, si no existen
# si es un directorio mueve, sino mueve y renombra
p.rename("nuevonombre")
```

# Ejercicio Mesas

## Pasos

- Obtener el contenido del fichero
- Separarlo por líneas
- Descartar líneas vacias
- Descartar líneas de sala
- Partir los nombres
- Lista de listas de mesa
- Escribir la salida

::: notes
Para generar graellas se tienen en cuenta las mesas para evitar conversaciones cruzadas.

No hay forma de que cada cual configure la suya

Joan se ha currado un [mapa de mesas](mapataules.txt)

```markdown
# INFERN

carles monica
nuri marta
manel   carol

# CASADEMONT

erola
sergi  vic gemma   mar
rogerlf	pau joan  adria
...

```

El tomatic necesita un formato especifico (YAML)\
pero convertirlo a mano es tedioso y me puedo equivocar

```yaml
taules:
  carles: 0
  monica: 0
  nuri: 1
  marta: 1
  manel: 2
  carol: 2
  ...
```
:::

## Obtener contenido del fichero

Pista: usar `Path` y `read_text`

Asegúrate de que el fichero está en el
directorio de trabajo actual.

:::notes
```python
from pathlib import Path

fitxertaules = Path('mapataules.txt')
contingut = fitxertaules.read_text(encoding='utf8')
```
:::


## Separarlo por líneas

Hay que partir el texto por los `'\n'` (saltos de línea)

Pista: `'abracadabra'.split('a')` partía el texto con las `'a'`

Obtendremos una lista\
cada elemento será una línia

Hacemos un `for` para las líneas y las imprimimos separadas

:::notes
```python
from pathlib import Path

fitxertaules = Path('mapataules.txt')
contingut = fitxertaules.read_text(encoding='utf8')
for linea in contingut.split('\n'):
    print("Linea: {linea}")

```
:::


## Filtrar las líneas vacias

Haremos un `continue`, si la linea esta vacía

Pista: el texto evalua falso cuando està vacio

Ojo: hay líneas no tan vacias, tienen espacios.\
El método `linea.strip()` quita espacios delante y detras.

:::notes
```python
from pathlib import Path

fitxertaules = Path('mapataules.txt')
contingut = fitxertaules.read_text(encoding='utf8')
for linea in contingut.split('\n'):
    if not linea.strip():
        continue
    print("Linea: {linea}")

```
:::


## Filtrar los nombres de las salas

Haremos un `continue` también si la primera letra de línea es un `'#'`

Pregunta: ¿Lo miraremos antes o despues de mirar si la línea esta vacia?

:::notes
```python
from pathlib import Path

fitxertaules = Path('mapataules.txt')
contingut = fitxertaules.read_text(encoding='utf8')
for linea in contingut.split('\n'):
    if not linea.strip():
        continue
    if linea[0] == "#":
        continue
    print("Linea: {linea}")

```
:::



## Convertir las líneas en lista de nombres

Pista: Un `split` sin parametros, separaba palabras.

:::notes
```python
from pathlib import Path

fitxertaules = Path('mapataules.txt')
contingut = fitxertaules.read_text(encoding='utf8')
for linea in contingut.split('\n'):
    if not linea.strip():
        continue
    if linea[0] == "#":
        continue
    noms = linea.split()
    print("Noms: {noms}")

```
:::


## Enumerar las mesas

Podemos usar `enumerate` pero\
¿Como saltamos las líneas ignoradas?

:::notes
```python
from pathlib import Path

fitxertaules = Path('mapataules.txt')
contingut = fitxertaules.read_text(encoding='utf8')
for i, linea in enumerate(contingut.split('\n')):
    if not linea.strip():
        continue
    if linea[0] == "#":
        continue
    noms = linea.split()
    print("Noms {i}: {noms}")
```
:::

## Iteramos para cada nombre

Acomulamos un texto de salida.

Un `for` dentro del `for`, para cada nombre en la linia.

:::notes
```python
from pathlib import Path

fitxertaules = Path('mapataules.txt')
contingut = fitxertaules.read_text(encoding='utf8')
for i, linea in enumerate(contingut.split('\n')):
    if not linea.strip():
        continue
    if linea[0] == "#":
        continue
    noms = linea.split()
    for nom in noms:
        print("A {nom} li toca la taula {i}")
```
:::


## Construimos el texto de salida

:::notes
```python
from pathlib import Path

fitxertaules = Path('mapataules.txt')
contingut = fitxertaules.read_text(encoding='utf8')
sortida = 'taules:\n'
for i, linea in enumerate(contingut.split('\n')):
    if not linea.strip():
        continue
    if linea[0] == "#":
        continue
    noms = linea.split()
    for nom in noms:
        sortida += f"  {nom}: {i}\n"
print(sortida)
```
:::


## Escribim el fitxer de sortida


Usamos `.with_suffix` para obtener la ruta con la extensión cambiada.

Usamos `write_text`.

:::notes
```python
from pathlib import Path

fitxertaules = Path('mapataules.txt')
contingut = fitxertaules.read_text(encoding='utf8')
sortida = 'taules:\n'
for i, linea in enumerate(contingut.split('\n')):
    if not linea.strip():
        continue
    if linea[0] == "#":
        continue
    noms = linea.split()
    for nom in noms:
        sortida += f"  {nom}: {i}\n"

fitxeryaml = fitxertaules.with_suffix(".yaml")
fitxeryaml.write_text(sortida, encoding='utf8')
```
:::

## Huecos en los numeros de mesa

El enumerate se cuela las mesas que se salta.

Construyamos una lista intermedia que solo tenga mesas y enumeremos esa.

:::notes
```python
from pathlib import Path

fitxertaules = Path('mapataules.txt')
contingut = fitxertaules.read_text(encoding='utf8')
taules = []
for linea in contingut.split('\n'):
    if not linea.strip():
        continue
    if linea[0] == "#":
        continue
    taules += [linea]

sortida = 'taules:\n'
for i, linea in enumerate(taules):
    noms = linea.split()
    for nom in noms:
        sortida += f"  {nom}: {i}\n"

fitxeryaml = fitxertaules.with_suffix(".yaml")
fitxeryaml.write_text(sortida, encoding='utf8')
```
:::


## Para casa

Generar los grupos (salas)

```yaml
groups:
  casademont:
    - carles
    - monica
    - nuri
    - marta
    - manel
    - carol
  infern:
    - 
  ...

```




