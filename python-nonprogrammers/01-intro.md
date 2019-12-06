# Introducción

## Lenguajes


:::columns
::::column
**Lenguajes compilados**

Compilador

_Traductor de libros_

Genera un ejecutable

Se ejecuta sin código ni compilador

C, C++, Java, Pascal...
:::
:::column
**Lenguajes interpretados**

Interprete

_Traducción simultanea_

Ejecuta mientras interpreta

Necesitas interprete y código

Python, Perl, Bash, PHP...
::::
:::

::: notes
Usamos los lenguajes de programación
para decirle a los ordenadores lo que tienen que hacer.

Están pensados, con mayor o menor fortuna,
para que los humanos los entendamos.
Los ordenadores solo entienden código máquina: 0001011101001001...
que eso si que no hay humano que lo entienda.

Para traducir el código fuente en código máquina, usamos compiladores o intérpretes.

Python usa intérprete.

Los compiladores son como traductores de libros.
Se tiran meses traduciendo correctamente un libro.
Cuando lo publican ya està, la traducción es lo que necesitas,
no necesitas ni el original en inglés ni al traductor.

Los interpretes son mas como la traducción simultània.
Van ejecutando a medida que traducen.
No se lo puede currar tanto, pero es más rápida y flexible.
Eso sí, necesitas al interprete al lado para funcionar.
:::

## Instalación

Linux
```bash
$ sudo apt install ipython3
```

Windows\
TODO: Anaconda??

Mac\
TODO: NPI??



## Ejecución interactiva

Intérprete interactivo: `ipython3`

Ideal para pruebas rápidas

```python
>>> print("hola mundo")
hola mundo
```

Recupera la historia con el cursor arriba

Completa o explora con el tabulador


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

Y la última solo cuando la subsentencia sea una y corta.

En el resto de casos, es código feo.
Hay que evitar usarlos.

Se lee mejor el código con líneas cortas.

Si partimos líneas, aunque no se exije, mejor indentar para que se lea mejor.
:::






## Por mi cuenta


Lenguaje: 
[Tutorial oficial](https://docs.python.org/3/tutorial/)

Librería estandard:
[Referencia](https://docs.python.org/3/library/)

Librerías no estándards:
[Repositorio](https://pypi.org/)


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

Resulta en un dato/valor

En sí es una sentencia, pero se usa en otros sitios


```python
>>> 4+5
9
```

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
- Con los tipos numéricos (`int`, `float`, `complex`) podemos hacer operaciones aritméticas.
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
- Las tuplas (`tuple`) son parejas, trios... de valores que juntamos para pasarlos juntos como un solo valor.
- Las listas (`list`) son como las tuplas pero podemos insertar y eliminar elementos.
- Los conjuntos (`set`) son como las listas, pero no guarda el orden entre los elementos, y descarta los valores repetidos (por eso, en el ejemplo, uno de los dos 1 desaparece).
- Los diccionarios (`dict`) contienen parejas clave-valor, en los que se puede acceder al valor indicando la clave.
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

Plis, no uses nombres tontos `a`, `b`...

Usa nombres que expliquen la variable\
como `consumoEnKwh`.

Lower Case: `sinningunadiferenciaentrepalabras`\
Camel Case: `usamosLasMayusculasAlInicioDePalabra`\
Underscore: `separamos_las_palabras_con_subrayados`\


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
>>> max(30,500) + 4  # usamos el valor retornado en una expresión
504
>>> print(max(30,400))  # el resultado de una como parametro
```

`max` es una función built-in\
Podemos tambien definirlas nosotros\
o importarlas de librerías.

:::notes
Ya hemos usado una función: `print`. Retorna `None`.

`max` retorna el mayor valor de los pasados por parámetro.

Las funciones built-in como `print` o `max` siempre estan disponibles en el lenguaje.

Otras se pueden importar de librerías (standard o instalables).

También podemos definir nuestras propias funciones.
:::

# Texto

## Literales de texto `str`

```python
print('Me dijo: "Adios" y me fuí')
print("Castellar de N'Hug")
print('Usando la contrabarra para \'escapar\' la comilla')
print('''Usando las "triples" 'comillas'.''')
print("""Que también pueden ser "dobles" 'triples'.""")
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
:::

## Path en Windows!


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

## Zanqueando (striding)

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

## Metodos de textos

:::notes
Métodos son funciones que estan 'dentro' del valor/objeto.
Se accede a ellas con el `.`.


No compiten con las variables y las funciones por el espacio de nombres.
:::

```python
>>> s = 'abracadabra'
>>> s.count('bra') # Cuantas veces contiene el parámetro
2
>>> s.capitalize() # primera letra mayúscula
'Abracadabra'
>>> 'abrete sesamo'.title() # primera letra de cada palabra mayúscula
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

## Más métodos

```python
>>> 'abracadabra'.split('a')
['', 'br', 'c', 'd', 'br', '']
>>> 'hola tu que tal'.split()
['hola', 'tu', 'que', 'tal']
>>> '-'.join(['hola', 'tu', 'que', 'tal'])
'hola-tu-que-tal'
```

# Funciones

## Definir funciones

```python
>>> def media(a, b):
...     suma = a+b
...     return suma/2
...
>>> media(3, 1)
2.0
>>> media(4, 5)
4.5
```

:::notes
- `a` y `b` son los parametros
- adoptan diferentes valores cada vez que llamamos la funcion
- fuera de la funcion no estan definidos
- `suma` es una variable local
- fuera de la funcion no está definida
- `return` indica el valor que retornarà la función
- el `return` sale de la funcion y no ejecuta nada mas
- si llegase al final de la función sin encontrar un `return`, retornaria `None`
- `media` es un nombre, igual que una variable, si definimos una variable con ese nombre ocultara la función
:::


