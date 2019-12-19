# Introducción

## Objetivo

Introducir a personas del ET
que no hayan programado nunca
al lenguaje de programación Python

Dos sesiones estilo _manos a la obra_ (hands-on)

Meta: Leer una hoja de cálculo, procesarla y generar un informe chulo

Los ejemplos de la presentación los podeis copiar
en vuestros ordenadores
de la [versión on-line](https//som-energia.github.io/somenergia-courses/python-nonprogrammers)

## Código Máquina

Programamos para decirle al ordenador qué hacer

El ordenador solo entiende **código máquina**:\
01000111001... binario ininteligible para humanos

:::columns
::::column
![](images/punchcard.jpg)
::::
::::column
![](images/Human-Computers.jpg)
...para casi todos
::::
:::

:::notes
A la izquierda las mujeres que traducían
programas y datos a tarjetas perforadas,
Sí, en binario.

A la derecha las computadoras humanas de la NASA.
Pasaron de hacer los calculos a mano a programar
las nuevas computadoras también a pelo.
Lidiaban con lenguajes primitivos o directamente código máquina.
:::


## Código fuente

(El resto) usamos lenguajes intermedios\
para comunicarnos con la máquina

Los **lenguajes de programación** nos abstraen de la máquina
para que nos concentremos en el problema,\

:::columns
::::column
y, así, llegar [más allá](https://github.com/casper-astro?language=python):
::::
::::column
![](images/blackhole.jpg){style=width:40%}
::::
:::

¿Cómo se pasa de **Código fuente** a **Código máquina**?

:::notes
No todos los lenguajes consiguen abstraer igual de bien.
Algunos incluso se meten en medio.

Un buen lenguaje de programación nos abstraerá
del hierro e incluso del lenguaje y nos permitirá
pensar en el problema.

Usando lenguajes de más alto nivel (más lejanos del hierro)
nos permite también ir más allá en lo que programamos.

Python es un lenguaje fácil de aprender (**escalon de entrada bajo**)
pero que al mismo tiempo permite crear aplicaciones industriales, científicas y empresariales muy complejas... (**alto techo**)
:::

## Compiladores e intérpretes

:::columns
::::column
**Compilador**

_Traductor de libros_

Genera un ejecutable

Se ejecuta sin código ni compilador

C, C++, Java, Pascal...
:::
:::column
**Intérprete**

_Traducción simultanea_

Ejecuta mientras interpreta

Necesitas interprete y código

Python, Perl, Bash, PHP...
::::
:::

::: notes
Para traducir el código fuente en código máquina, usamos **compiladores** o **intérpretes**.

Los **compiladores** son como traductores de libros.
Se tiran meses traduciendo correctamente un libro.
Cuando lo publican ya està, la traducción es lo que necesitas,
no necesitas ni el original en inglés ni al traductor.

Los **interpretes** son más como la traducción simultània.
Van ejecutando a medida que traducen.
No se lo puede currar tanto, pero es más rápida y flexible.
Eso sí, necesitas al interprete al lado para funcionar.

**Python usa intérprete**
:::

## Python mola

Es muy fácil de empezar

No te limita cuando quieres crecer

No (solo) para jugar: ciencia, negocios...

Hay librerías para todo

Mucha comunidad

Se llama así por los [Monty Python](https://es.wikipedia.org/wiki/Monty_Python)\
Tiene huevos de pascua...


:::notes
**Sencillez:**
Cosas iguales se hacen de la misma manera

Todos los objetos se manejan de forma similar:
Aprendes a manejar un texto, y ves que una lista
tiene las mismas operaciones, cuando tiene sentido.
Solo hay que aprender lo que es diferente.

Si hay una forma más sencilla de hacer las cosas,
esa es la forma que queda.
:::


## Instalación

Linux
```bash
$ sudo apt install ipython3
```

Windows

[Anaconda](https://conda.io/)



## Ejecución interactiva

Intérprete interactivo: `ipython3`

Ideal para pruebas rápidas

```python
>>> print("hola mundo")
hola mundo
```

Completa o explora con el tabulador

Recupera la historia con el cursor arriba


::: notes
Los simbolos `>>>` no hay que escribirlos.
Representan lo que escribe el interprete para decirte
que puedes introducir el siguiente comando.
En `ipython`, en vez de eso, muestra `In [1]:`


El `hola mundo` de abajo es lo que responde el intérprete.

Escribe `pri` y pulsa el tabulador, veras que completa con `print`.

Si solo escribes `p` te da todas las opciones disponibles.

Con el cursor puedes recuperar las líneas anteriores y editarlas.
Edita un `print` anterior y cambia el texto.

Se sale escribiendo `exit` o pulsando `Ctrl`+`D`
:::


## Scripts

Cuando el código se complica,\
en un fichero (script)

```python
# miscript.py
print("hola mundo")
```

Se ejecuta:

```bash
$ python3 miscript.py
hola mundo
```





::: notes
Los scripts son ficheros de texto plano.

Los editamos con editores como kate, gedit, vim...

Hay que asegurarse que usamos la codificación UTF8.

#### Culturilla

En Linux podemos convertirlos en ejecutables poniendo en la primera línia:

```python
#!/usr/bin/env python3
```

Y dandole permisos de ejecución con:

```bash
$ chmod +x miscript.py
```

Entonces ejecutarlo con:

```bash
./miscript.py  # ./ o el path hasta el script
```

O si está instalado, simplemente con:

```bash
miscript.py
```
:::


## Syntaxis

```python
# Despues de la almohadilla son comentarios, los ignora
print("Hola Mundo") # Una sentencia por línia
print("Hola caracola")

# Sentencias con : empiezan sub sentencias indentadas
if True:
    print("Primera subsentencia")
    print("Segunda subsentencia")
print("Esta ya esta fuera")

if True:
    if False:
        print("Dentro del if False")
    print("Dentro del if True")

```
::: notes
Para la indentación de subsentencias,
es significativo si usamos tabuladores o espacios
o cuantos espacios usamos para cada nivel.

Recomendado 4 espacios.
Los editores se pueden configurar para que el tabulador haga eso.

Si no alineamos bien:

```python
Indentation Error: unexpected indent.
```

:::


## Gamberreando

```python
# Los signos que abren y cierran permiten partir líneas
print(
    "Hola mundo"
)

# A muy malas con la contrabarra al final de línea
print \
    ("Hola mundo")

# Punto y coma para juntar dos sentencias
print("Marco"); print("Polo")

# Tambien podemos poner en una ĺínia las subsentencias
if True: print("subsentencia rápida")
```

::: notes
Norma: Una sentencia por linea.

Nos la podemos saltar.

De las cuatro, la primera es la única que mola.

Los símbolos que abren y cierran son: `{} [] () "" '' """ """ ''' '''`

La última solo es agradable cuando la subsentencia es una y corta.

En el resto de casos, es código feo.
Hay que evitar usarlos.

Se lee mejor el código con líneas cortas.

Si partimos líneas, aunque no se exije, mejor indentar para que se lea mejor.
:::



## Por tu cuenta


Lenguaje: 
[Tutorial oficial](https://docs.python.org/3/tutorial/)

Librería estandard:
[Referencia](https://docs.python.org/3/library/)

Librerías no estándards:
[Repositorio](https://pypi.org/)

Disclaimer: todo en inglés


:::notes
El **lenguaje** son las reglas de como decir las cosas.

La **librería estándard**
son cosas que no hace falta que programes porque ya vienen de serie
con el intérprete.

Ademas en el repositorio de paquetes Pypi,
puedes encontrar otras **librerías no estándard** programadas por terceros
y listas para instalar.

:::



# Calculadora

## Expresiones

Las sentencias más simples, se evalúan

Usemos `ipython3` como calculadora

```python
>>> 4+5
9
```

`4`, `5` y `9` son literales

Los literales representan datos directos

El `+` es un operador


:::notes
Normalmente introducimos una senténcia por línea

La más sencilla es una expresión

Literal representa un valor directo

No sorprende que llamemos operador al signo `+`,
pero hay otros operadores no tan evidentes.
:::


## Literales básicos

```python
>>> -12 # un número entero (int)
-12
>>> 12.34 # un número con decimales (float)
12.34
>>> 2+3j # un número complejo (complex)
(2+3j)
>>> 'un texto' # un texto (str)
'un texto'
>>> None # el no-objeto (NoneType), el intérprete ni lo imprime
>>> True # un valor lógico (bool), su antitesis es False
True
```

:::notes
Todo los datos tienen un _tipo_ asociado.

- Con los tipos numéricos (`int`, `float`, `complex`) podemos hacer operaciones aritméticas.
	- Usamos el `.` para los decimales, notación anglosajona
	- Usamos la `j` para el número imaginario `i`, notación ingenieril
- Con los textos (`str`) podemos concatenarlos, substituir, partir, buscar...
- El no-valor `None` (`NoneType`) representa el concepto de ningún valor, más útil de lo que parece.
- Los valores lógicos (`bool`) representan una condición que puede ser cierta o falsa, y sirven para tomar decisiones.
:::

## Literales estructuras

```python
>>> 12, 23 # una tupla (tuple) con dos enteros
(12, 23)

>>> [1, 2, 3, 1] # una lista (list) con 4 enteros
[1, 2, 3, 1]

>>> {1, 2, 3, 1} # un conjunto (set) con 4... ops, 3 enteros
{1, 2, 3}

>>> # un diccionario (dict) 2 con parejas clave: valor
>>> { 'David': 40, 'Aitor': 25 }
{ 'David': 40, 'Aitor': 25 }
```
:::notes
TODO: Moverlo a cuando empecemos con las estructuras?

- Las tuplas (`tuple`) son parejas, trios... de valores que juntamos para pasarlos juntos como un solo valor.
- Las listas (`list`) son como las tuplas pero podemos insertar y eliminar elementos.
- Los conjuntos (`set`) son como las listas, pero no guarda el orden entre los elementos, y descarta los valores repetidos (por eso, en el ejemplo, uno de los dos 1 desaparece).
- Los diccionarios (`dict`) contienen parejas clave-valor, en los que se puede acceder al valor indicando la clave.

Los valores pueden ser no solo enteros.
Pueden ser incluso otras estructuras anidadas.

Volveremos a ellas. De momento, veamos que podemos hacer con los datos simples.
:::

## Operadores numéricos

```python
>>> 10+3 # suma
13
>>> 10-3 # resta
7
>>> 10*3 # multiplicación
30
>>> 10/3 # división con decimales
3.3333333333333335
>>> 10//3 # división entera
3
>>> 10%3 # resto de la división entera
1
>>> 10**3 # potencia
1000
```

:::notes
A destacar:

- Usamos el `*` para la multiplicación,
	- Si no te sorprende es que ya has programado o has editado hojas de cálculo.
	- En mates, se usa el punto elevado, la cruz o simplemente la juxtaposición.
- Los diferentes tipos de división
- El doble `**` para la potencia.
	- Otros lenguajes usan el `^` o no tienen el operador.
	- Tambien sirve para raices: `2**0.5` raiz cuadrada de 2
:::

## Prioridad Operadores

Como en mates:

Exponenciación\
Multiplicaciones y divisiones\
Sumas y restas\
Paréntesis para romperlo


```python
2 * 3 + 4 # se resuelve como (2*3)+4 = 10
2 + 3 * 4 # se resuelve como 2+(3*4) = 14
2 * (3 + 4) # = 2 * 7 = 14
(2 + 3) * 4 # = 5 * 4 = 20
2 + 3 + 4 + 5 # misma prioridad, orden de lectura ((2+3)+4)+5 = 14
```

:::notes
En mates no importa el orden de los operadores de la misma prioridad.
En computacion puede comportar un error diferente.
:::

## Asignación

Variable: nombre que referencia un valor

Mantiene valores para usarlos después

```python
>>> a = 23  # sentencia de asignación, a un literal
>>> a       # usamos la variable como expresión
23
>>> b = 10*a   # la usamos dentro de otra expresión y asignamos
>>> b
230
>>> c = 'hola' # pueden ser cualquier tipo de valor
>>> c
'hola'
```

:::notes
Los editores y el interprete completan los nombres del
:::


## Nombres de variables

Porfa, no uses nombres tontos `a`, `b`...

Usa nombres que expliquen la variable\
como `consumoEnKwh`.

Lower Case: `todojuntosinseparar`\
Camel Case: `mayusculasAlInicioDePalabra`\
Underscore: `separadas_con_subrayados`\

:::notes
Para que sea un nombre explicativo suele tener varias palabras.
Pero los nombres no pueden tener espacios. ¿Cómo hacemos que se entienda?
:::


## Ops de Actualización

Sirven para actualizar el valor de una variable operando el valor original.

:::columns
::::column
```python
saldo = 0
# Hacemos una venta
saldo = saldo + 200
# Podríamos haber escrito:
saldo += 200
```
::::
::::column

```python
costeAntena = 100
costeSwitch = 45
descuento = 20
factorIva = 0.21
costeFactura = 0
costeFactura += costeAntena
costeFactura += costeSwitch
costeFactura -= descuento
costeFactura *= 1 + factorIva
print(costeFactura)
```
::::
:::

## Llamando funciones

```python
>>> max(30,500)  # le pasamos dos parámetros, retorna un valor
500
>>> min(30,500) + 4  # usamos el valor retornado en una expresión
34
>>> min(max(30,400),100)  # el resultado de una como parametro
30
```

`max` y `min` son funciones _built-in_\
Podremos tambien definir nuestras funciones\
o importarlas de librerías.

:::notes
`max` retorna el mayor valor de los pasados por parámetro y `min` el menor.

Ya hemos usado una función: `print`. Retorna `None`.

Las funciones built-in como `print` o `max` siempre estan disponibles en el lenguaje.

Otras se pueden importar de librerías (standard o instalables).

También podemos definir nuestras propias funciones.
:::


## Ejercicio: Simular Factura

Script para calcular la factura de una 2.0A

Arriba los valores de entrada en variables

Pon a las variables nombres decentes\
`consumoEnKwh`, `precioPorKwDia`...

Ves calculando poco a poco valores intermedios

Haz un `print` del importe final.


:::notes
Cuando manejamos unidades, como el kWh o el kW,
es muy util que quede claro en el nombre
de que unidad hablamos.

Por ejemplo, en vez de decir `tiempoDeEspera`,
es más claro si ponemos `minutosDeEspera`, `segundosDeEspera` o `usegundosDeEspera`
Asi sabemos como interpretar el número.

`porcentajeIva` seria `21` mientras `factorIva` sería `0.21`.

Propuesta variables de entrada:

- `precioKwh`
- `precioKwDia`
- `consumoKwh`
- `diasFacturados`
- `porcentajeIva`
- `porcentajeImpuestoElectrico`
- `alquilerContadorDia`
- `bonoSocial`
:::


# Texto

## Literales de texto `str`

```python
# Varios delimitadores, útil si contiene comillas
print('Comillas simples')
print("Comillas dobles")
print('''Triples comillas simples''')
print("""Triples comillas dobles""")
# Útiles si el texto tiene comillas
print('Me dijo: "Adios" y se fue')
print("Castellar de N'Hug")
# Tambien podemos escapar con la contrabarra
print('Usando la contrabarra para \'escapar\' la comilla')
# Carácteres especiales indicados con contrabarra y una letra
print("Primera linia\nSegunda linia") # Salto de linia \n
print("Primer campo\tSegundo campo") # Tabulador \t
print("La contra barra: \\") # Contrabarra se escapa a si misma
```

:::notes
Los literales de texto, `str`, se limitan con comillas dobles `"hola"` o sencillas `'hola'`.

Aprovechamos eso para usar la que no este en el texto.

Si el texto contiene los dos tipos de comillas tenemos otras opciones:

- escaparla con `\` o
- usar triples comillas (dobles o sencillas)

La contrabarra tiene un significado especial.
Indica que el siguiente caracter no se interpreta como normalmente,
decimos que lo _escapa_.

Hay combinaciones de escape para representar carácteres especiales
como `\n` y `\t` que serán importantes para nuestra meta
de leer una hoja de cálculo. Los usaremos de separadores.
:::

## Rutas de carpetas en Windows


```python
>>> # Las contrabarras se convierten en un tab y un salto de línea
>>> print("c:\temp\newitem")
c:      emp
ewitem
>>> print("c:\\temp\\newitem") # Escapando contrabarras
c:\temp\newitem
>>> print(r"c:\temp\newitem") # Texto 'en crudo', prefijo 'r'
c:\temp\newitem
```

:::notes
Las contrabarras son un problema en windows
porque se usan para indicar la ruta de un fichero.

Las tenemos que doblar para que no pasen cosas raras.

O podemos desactivar las secuencias de escape con el prefijo `r''`
(raw, crudo)
así la ruta se lee más simple.
:::

## Ops con texto

```python
>>> "Hola" + "mundo" # juntamos los dos textos (sin espacio!)
'Holamundo'
>>> 'hola'*4 # Multiplicar por un numero, repite el texto
'holaholaholahola'
>>> len('hola') # longitud de un texto
4
>>> 'ol' in 'hola'
True
>>> 'lo' in 'hola'
False
>>> 'lo' not in 'hola'
True
>>> 'ol' not in 'hola'
False
```

:::notes
Una característica muy buena de Python.
Facilita el aprendizaje por analogía.
Si una operación de un tipo tiene sentido con otro tipo, usará el mismo.

Operadores matemáticos por analogía.

Todas estas operaciones que funcionan con texto,
por analogía también, funcionan en otros tipos de datos
que representan secuencias o colecciones de cosas.

- sumarlas entre ellas,
- multiplicarlas por un número,
- preguntar su longitud con `len`
- preguntar si contienen o no algo con `in` o `not in`

Algunas tambien con los conjuntos (set) y diccionarios.
:::

## Indexado

```python
>>> a = 'murcielago'
>>> a[1] # ¡ojo! ¡La primera letra es la 0!
'u'
>>> a[0] # Ahora sí
'm'
>>> a[10] # ¡ojo! el ultimo es el 9, si nos salimos, error
IndexError: string index out of range
>>> a[9] # así sí
'o'
>>> a[-1] # Con índices negativos empezamos por el final
'o'
>>> a[-2]
'g'
```

:::notes
Operador indexación `[]`: Acceder a un elemento de una secuencia.

Secuencia: `str`, `list`, `tuple`...

No secuencia: `set`, `dict`

Índices basados en 0.
:::

## Rebanado (slicing)

```python
>>> a[2:6] # de la tercera (2) a la sexta letra (5)
'rcie'
>>> a[:6] # Si no ponemos el inicio se deduce desde el principio
'murcie'
>>> a[2:] # si no pones el final se deduce que hasta el fin
'rcielago'
>>> a[:] # copia entera
'murcielago'
>>> a[:5] + a[5:] # ¿porque el índice 5 no esta repetido?
'murcielago'
```

El índice final no se incluye

## Zancadas (striding)

```python
>>> a[::2] # saltamos las letras de dos en dos
'mrilg'
>>> a[1::2] # si le damos un offset
'uceao'
>>> a[6:2] # inicio y fin no ordenados, retorna texto vacío
''
>>> a[6:2:-1] # pero con un paso negativo, va hacia atrás
'leic'
>>> a[::-1] # Super útil, voltea la secuencia
'ogaleicrum'
```

## Métodos de textos

:::notes
Métodos son funciones que estan 'dentro' del valor/objeto.
Se accede a ellas con el `.`.


No compiten con las variables y las funciones por el espacio de nombres.

En interactivo puedes descubrir los que hay poniendo el punto
y pulsando tabulador.

Objetos similares tienen métodos similares,
aunque por dentro sean muy distintos.

- `count` tambien sirve para listas y tuplas.
:::

```python
>>> s = 'abracadabra'
>>> s.count('bra') # Cuantas veces contiene el parámetro
2
>>> 'abrete sesamo'.capitalize() # primera letra mayúscula
'Abrete sesamo'
>>> 'abrete sesamo'.title() # iniciales en mayúsculas
'Abrete Sesamo'
>>> s.upper() # todo a mayusculas
'ABRACADABRA'
>>> 'AbRaCaDaBra'.lower() # todo a minúsculas
'abracadabra'
>>> s.replace('a', 'o')
'obrocodobro'
>>> s.replace('ab', 'XXX')
'XXXracadXXXra'
```

## Partiendo y juntando

```python
>>> 'abracadabra'.split('a')
['', 'br', 'c', 'd', 'br', '']

>>> 'hola tu que tal'.split()
['hola', 'tu', 'que', 'tal']

>>> '-'.join(['hola', 'tu', 'que', 'tal'])
'hola-tu-que-tal'
```

**Ejercicio:** Convertir `"una frase con palabras"`
a un nombre de variable
con underlines `"una_frase_con_palabras"` o
en camell case `"unaFraseConPalabras"`

:::notes
```python
literal = 'Una frase con palabras'
underline = '_'.join(literal.lower().split())
camellcase = literal[0].lower()+''.join(literal.title().split())[1:]
```

Si te encuentras ese código lo tienes que escudriñar.
Mejor usar variables intermedias con nombres buenos, o incluso...
:::


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

# Rellenando con `format`

## Posicionalmente

Los corchetes indican donde va el parámetro a insertar

```python
>>> "El resultado es {}".format(4)
El resultado es 4

>>> "{} tiene {} puntos".format("Aitor", 100)
Aitor tiene 100 puntos
```

## Con claves

Cuando empezamos a añadir parámetros,
igual que con las funciones,
podemos perdernos contando.

```python
>>> "{name} tiene {points} puntos".format(
...     name="Aitor",
...     points=100,
... )
Aitor tiene 100 puntos
```

:::notes
:::

## Controlando el formato

Los `:` indican una cadena de formato.

```python
>>> 'El saldo al dia de hoy es {saldo:08.2f}€'.format(saldo=34.2)
'El saldo al dia de hoy es 00034.20€'
```

Rellena con `0` a la izquierda hasta que ocupe 8 caràcteres, 2 de los cuales serán decimales.

[Mini lenguaje de formato](https://docs.python.org/3/library/string.html#format-specification-mini-language)

# Decisiones

## Booleanos (`bool`)

`True` y `False`

Sirven para tomar decisiones
según lo que se encuentra el script

Es lo que da inteligencia al ordenador

¿Cómo los obtenemos?

## Ops relacionales

`< <= == != >= >`

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

## Ops de identidad `is`

¿Son el mismo objeto?
No si tienen el mismo valor, si no si son el mismo objeto.

:::notes
Inmutables (numbers, tuple, str, bool): mismo valor ok

Mutables (list, dict, set): aunque tengan el mismo valor han de ser el mismo objeto.
:::

```python
v = 'valor'
v is 'valor' # True, strings son inmutables
t=1,2,3
t is 1,2,3 # True, tupla inmutable
l=[1,2,3]
l is [1,2,3] # False, mismo valor pero son dos listas diferentes
l2=l
l is l2 # True, los dos apuntan a la misma lista
```

## Sent. condicional `if`


```python
if name is 'Aitor':
	print("Hola Aitor, bienvenido a casa")
if name is not 'Aitor':
	print("Fuera intruso!")
```

## Sent. alternativa `else`


```python
if name is 'Aitor':
	print("Hola Aitor, bienvenido a casa")
else:
	print("Fuera intruso!")
```

## Sent. alternativa `elif`


```python
if name is 'Aitor':
	print("Hola Aitor, bienvenido a casa")
else:
	if name is 'David':
		print("Hola David, sientate, Aitor no tardará en llegar")
	else:
		print("Fuera intruso!")
```
```python
if name is 'Aitor':
	print("Hola Aitor, bienvenido a casa")
elif name is 'David':
	print("Hola David, sientate, Aitor no tardará en llegar")
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

a | 	b |	a or b |	a and b |	not a
--+-------+--------+------------+----------
True  | True  | True  | True  | False
True  | False | True  | False | False
False | True  | True  | False | True
False | False | False | False | True


