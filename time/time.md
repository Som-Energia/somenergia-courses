# Representando el tiempo

Existen diversas convenciones y formatos para representar el tiempo.
Hay que tenerlas en cuenta cuando las usamos para no introducir bugs.
Esta guía pretende clarificar conceptos y establecer ciertas convenciones y prácticas
que faciliten la manipulación de marcas temporales.


## Conceptos

### TL;DR

- **UTC:** Hora de referencia internacional, la hora solar media de Greenwich, antiguamente GMT.
- **UTC Offset:** Diferencia de un sistema horario con UTC. Se expresa UTC+-HH:MM
- **Huso horario:** UTF offsets en horas enteras. De UTC-12 a UTC+12.
- **Standard Time (ST):** Sistema horario usado en una región (WET, CET, PST, WAT, CAT...), se corresponde con un UTC offset.
- **Daylight Saving Time (DST):** Sistema horario alternativo a un Standard Time para el periodo de verano (WEST, CEST, PDT, WAST, CAST...)
- **Time Zone (TZ):** Zona en la que se aplica un Standard Time (y su pareja DST, si toca)
- **Local time:** Hora que se aplica oficialmente en una ciudad de referencia en cada momento. Europe/Madrid
- **Europe/Madrid:** Es nuestro local time. Actualmente CET(UTC+1)/CEST(UTC+2) con cambio de horario el último domingo de octubre y de marzo a la 01:00 UTC. Históricamente ha cambiado y puede cambiar.
- **IANA TZ Database:** Compilación histórica de los sistemas horarios que se aplican a ciertas ciudades de referencia.

Si te interesa profundizar en el origen y motivación de estos conceptos, sigue leyendo.
Si no, puedes saltar a la siguiente sección.

### Hora solar media (Mean solar time)

En el siglo XIX funcionabamos con la hora solar media de cada ciudad.
La **hora solar media** es la que sincroniza las 12h del mediodía con el apogeo del sol.
Le llamamos _media_, porque el movimiento relativo entre la tierra y el sol
avanza o atrasa el apogeo dependiendo de la época del año,
así que se toma la hora promedio.

Con hora solar media,
era necesario ir ajustando el reloj a poco que nos movamos al este o al oeste.
Por ejemplo, entre la hora solar de Girona y la de Lleida,
el desfase es de casi 9 minutos, 1 minuto cada 20km en esa latitud.

### Hora estándard (Standard Time) y Zona horaria (Time Zone)

A la que aparecieron los trenes, con sus horarios de paso,
y las comunicaciones a distancia como el telégrafo y el teléfono,
esa asincronía se volvio insostenible.
Por eso se establecieron regiones (**zonas horarias**)
en la que todos los relojes están sincronizados a una misma **hora estándar** (Standard time).
Dentro de una zona horaria ya no haría falta ajustar el reloj, sólo cuando pasases de una zona a otra.

### UTC, offsets y husos horarios

Las primeras horas estándar, a finales del siglo XIX,
eran propias de cada país, y usaban como referencia,
el tiempo solar medio de su capital o de su centro geográfico.
Ajustar el horario entre paises era un horror.
Por ejemplo, entre Irán y Reino Unido, el desfase era de +03:25:44.

Enseguida se propuso
fijar una referencia universal y saltos de horas enteras en regiones llamadas husos horarios.
La propuesta la hizo el canadiense Sandford Fleming en 1883, y,
aunque no se aprobó internacionalmente hasta 1912,
en 1900 ya la habían adoptado la mayoría de paises, entre ellos, España.

Como referencia de tiempo universal se adoptó el estándar inglés:
La hora solar media en el observatorio de Greenwich, en Londres,
el **Greenwich Mean Time (GMT)**. También es el meridiano origen de la longitud.
En la actualidad, usamos el **UTC (Universal Time Coordinated)** que es una redefinición más precisa del GMT.

La diferencia de un sistema horario con UTC la llamamos **UTC offset** y se expresa `UTC+-HH`.
Podemos añadir minutos y segundos al offset si hiciera falta.
El antiguo Tehran Mean Time era `UTC+03:25:44`.

La otra aportación de Fleming fueron los **husos horarios**.
Son franjas terrestres de 15 grados de longitud
(el giro de la tierra en una hora)
en las que aplicar un offset UTC de horas enteras
de tal manera que la divergencia con la hora solar sea solo de media hora arriba o abajo.

- El huso de referencia, centrado en el meridiano de Greenwich tiene la hora UTC+00.
- Los husos al este desfasan una hora más cada uno UTC+1, UTC+2..., UTC+12.
- Los husos al oeste defasan una hora menos cada uno UTC-1, UTC-2..., UTC-12.
- Los husos UTC+12 y UTC-12 son la mitad de anchos, y los separa el anti-meridiano de Greenwich que define el cambio internacional de dia.

Este diseño consigue dos cosas:

- limita, dentro del huso, la desviación solar a sólo media hora
- hace que los ajustes entre zonas horarias sean de horas enteras

![](World_Time_Zones_Map.png)

Si observas el mapa actual de zonas horarias,
verás que los husos como delimitación geográfica
apenas se usan en tierra, sólo en alta mar.
Si que se han mantenido la idea de offsets enteros.

### Denominación militar/radiofónica de los husos

La propuesta de Flemming asignaba a cada huso una letra del abecedario.
Aunque esa parte de la propuesta no se aceptó,
se usa en ambitos donde premia la comunicación por radio,
como el militar, naval o aviación.
De hecho es comun usar [la palabra internacional de deletreo de esa letra](https://en.wikipedia.org/wiki/NATO_phonetic_alphabet):
(Alpha, Bravo, Charlie, Delta...)

- Z para UTC+00 (Zulú)
- hacia el este A=UTC+1 (Alpha) hasta M=UTC+12 (Mike), saltandose la J
- hacia el oeste N=UTC-1 (November) hasta Y=UTC-12 (Yankee)
- La J (Juliet) es para designar la hora local cuando es común entre las partes

Algunos estándares informáticos usan la Z para referirse a UTC.
Las demás letras no se usan tanto.

### Zonas horaria modernas (time zones)

Aunque las naciones vieron con buenos ojos los defases en horas enteras de una hora universal,
no triunfó tanto la idea de delimitar las zonas horarias con meridianos.
Era preferible hacerlos coincidir con los límites políticos existentes: paises, provincias o zonas económicas.

- Por un lado es más fácil saber en que zona horaria estás si coincide con un límite que ya conoces.
- Por otro, se vió más útil mantener una hora comun con los vecinos que limitar el desajuste solar a media hora.

Por eso gran parte de la Europa occidental, incluida España, Francia y el Benelux, usa un huso horario que no le corresponde, el de Alemania.
Por eso Galicia, comparte hora con el resto de España peninsular aunque le corresponda el siguiente huso.
Al final, Galicia y el este de Polonia comparten zona horaria
aunque la diferencia solar entre ellas sea de 2 horas y cuarto.

No todos los paises están en un huso horario de horas enteras respecto a UTC.
Algunos paises que quedaban partidos en dos husos,
decidieron adoptar un desfase a la media hora para todo el país.
Tal es el caso, por ejemplo, de la India (+5:30) e Iran (+3:30),
y durante algunos años, Venezuela (-04:30 en vez del -4 actual).

Las horas estándares que se definieron,
ya con UTC como referencia,
tienen nombres estandarizados que referencian su zona de aplicación
y también se refieren por sus siglas.
Ojo: las siglas no son unicas, y muchas horas estándares coinciden en el mismo offset.

- West Europe Time (WET) UTF+00
- Central Europe Time (CET) UTF+01
- Central African Time (CAT) UTF+01
- Pacific Standard Time (PST) UTF-08
- Atlantic Standard Time (AST) UTF-05
- ...


### Daylight saving time (DST)

En las sociedades rurales, el inicio diario de la actividad humana se vinculaba al amanecer.
En contraste, las sociedades industriales, vinculan el inicio de la actividad a un horario.
El uso de la hora solar media, ancló el horario al mediodía,
haciendo que la hora del amanecer divergiera mucho entre verano e invierno,
y con ello las horas de provecho de la luz solar.
Para reducir esta variación de la hora del amanecer
algunos paises empezaron a establecer el horario de verano,
durante el cual se adelanta el reloj una hora.

![](Bilba-Luz-del-Día-2009.png)

Efecto de el DST en la hora del amanecer en Bilbo

En general, estas medidas se han introducido
en tiempos de guerra o en crisis energéticas o por presión industrial.
Hoy en día, se discute su utilidad energética.

Cada horario estándar (_standard time_),
puede tener aparejado una horario de verano (_daylight saving time_):

- West Europe Time (WET) -> West Europe Summer Time (WEST)
- Pacific Standard Time (PST) -> Pacific Daylight saving Time (PDT)
- ...

Destáquese que se mantienen nombres diferentes aunque CET (Central European Time)
y WEST (West European Summer Time) sean ambos equivalentes a UTC+01.


### Hora local (_local time_)

Aunque los estándares horarios están bien definidos,
en una región concreta se puede cambiar a otro estándar horario.
De hecho pueden decidir:

- Cambiar a otro estándar horario
- Activar o desactivar el DST
- Modificar los periódos en que se aplica DST

Por eso es importante el concepto de hora local:
La hora oficial que se aplica en una ciudad de referencia a través de todos esos cambios en el tiempo.

La IANA mantiene una base de datos con las horas locales
para ciudades y territorios de referencia y todos sus cambios desde 1970.
Las ciudades de referencia tienen identificadores tipo:
`Africa/Algiers`, `Antarctica/Macquarie`, `Pacific/Canary`, `Europe/Berlin`...
La primera parte els el ámbito continental o oceánico.
Estas bases de datos nos permiten calcular la hora local equivalente de una hora UTC.

Lamentablemente, en las librerías se llama normalmente Time Zone
a conceptos esencialmente diferentes:

- A los husos horarios o UTC offsets (Zulu, UTC+02...)
- A una hora estándard o DST concreta aplicada a una zona (CET, CEST, WET, WEST...)
- A la zona donde se aplican una pareja de horas standard/DST (CET/CEST, WET/WEST...)
- A la oficialidad de un lugar (Europe/Madrid) que hoy puede ser CET/CEST pero que mañana puede cambiar a WET/WEST o WET, o pueden establecer dias diferentes de transicion DST.

### Europe/Madrid

Nuestra hora local oficial es la hora de Madrid (Europe/Madrid).
La compartimos con Paris, Berlin, Varsovia...
Cuando hablemos de hora local nos referiremos a esta.

Tenemos dos TZ diferentes en verano y en invierno:

- CET (Central European Time, UTC+1)
- CEST (Central European Summer Time, UTC+2)

El cambio DST se hace

- Último domingo de Marzo a la 1:00 UTC
- Último domingo de Octubre a la 1:00 UTC

No siempre ha sido así, no se puede tomar como regla general.
Hay que confiar en las implementaciones de tz's que
consideran los cambios históricos y
se actualizarán con los cambios futuros.

Tambien existen las horas locales de Africa/Ceuta, que coincide con Europe/Madrid,
y Atlantic/Canary que usa WET/WEST como standard y dst y hace los cambios los mismos días.

### Historia

España estandarizó su hora para península y baleares en 1900,
adoptando GMT+00 al ser el huso predominante en la península (el oeste de Galicia le hubiera tocado GMT-01).
Canarias estandarizó su hora poco despues a GMT-01.
El 16 marzo de 1940, España sincronizó la hora con la de Alemania,
igual que hicieron los territorios ocupados de Francia y Benelux durante la IIGM.
Desde entonces todos esos paises usamos CET en vez de el WET que nos tocaría por huso.

![](Cambio-de-hora-en-Espana-en-1940-publicado-en-el-Boletin-Oficial-del-Estado.webp)

A pesar del desfase horario, muchas costumbres como las comidas
o incluso los horarios laborales estan desplazados en el horario para ajustarlo al ritmo solar.

En España tenemos DST desde la crisis del petróleo del 78.
Pero ya habíamos coqueteado con la idea varias veces durante los últimos siglos.
Hasta 

[Histórico de cambios de horario en España](https://en.wikipedia.org/wiki/Time_in_Spain#Dates_of_Daylight_Saving_Time_and_other_changes)

## Ambiguedades y convenciones

### Estratégia del sandwich

Cuando llegan a nuestro software diferentes formatos o convenciones,
conviene usar la estrategia del sandwich,
que consiste en gestionar la heterogeneidad vía conversiones
en la parte más externa y cercana a la fuente de la hetereogeneidad,
e internamente, usar una convención única.
Tiene estos beneficios:

- El código interno es más simple, pues sólo gestiona una convención.
- Las conversiones pueden ser más específicas a cada fuente y documentan la convención usada por cada una de estas.

### Ambigüedad de las horas naive

Una **representación horaria naive**
es la que no aporta información explícita
sobre a qué estándar de hora o offset UTC se refiere.
Lo contrario es una representación con TZ explícito.

Las representaciones naive son ambiguas
y necesitan convenciones o información adicional para desambiguarlas.
Usando la estrategia sandwich,
averiguaremos la convención que usa la fuente
para convertirlas en tiempos con tz explicitos
tan pronto lleguen al sistema.

### Ambiguedad debido al DST

Debido al DST, la hora local es ambigua aunque se nos diga que es de Europe/Madrid.

- Hay una hora local que no existe: de 2:00 a 3:00 del ultimo domingo de marzo
- Hay una hora local repetida: de 2:00 a 3:00 del ultimo domingo de octubre

Cuando recibimos un tiempo en local time,
deberíamos recibirlo, bien con el timezone informado,
o bien con un flag de DST.
En el segundo caso, aplicando sandwich, lo convertimos a time zone informado.

### Mutabilidad de la hora local

Históricamente los criterios para determinar la hora local han variado.

- El offset standard (cambió a CET en 1940 y hay propuestas de restablecer WET)
- Si hay o no DST (cambió 6 veces en el siglo XX, y hay propuestas de eliminarlo)
- Cuando se produce el cambio de hora (el criterio actual se estableció en 1996)

Por ello, se recomienda no programar explícitamente estos criterios
y delegar en librerías especializadas, que mantienen la base de datos
de timezones.

También se recomienda cuando convirtamos a hora local,
no usar CET o CEST o los offsets concretos como zona horaria de destino,
sinó usar la hora local _Europe/Madrid_.


### Naividad de las fechas

Las fechas (sin hora) son naive:
Representan a un intervalo de tiempo,
que depende de la TZ a la que se refiera.
Tiene sentido y es más sencillo
manipularlas en esta forma naive.
Pero necesitamos referirlas a una TZ
cuando las mezclamos con tiempos.

![](naivedates.png)

Un dia empieza (y acaba) en instantes diferentes dependiendo de la TZ en la que estemos.

Normalmente una fecha se refiere no a la hora UTC sinó a la local.

Por ejemplo, el día 2022-03-05 en Madrid empieza a las `2022-03-0 23:00 CET` que corresponde a `2022-03-04 23:00Z`.


Cuando vayamos a usar fechas para compararlas con datetimes,
necesitamos saber que convencion se usa en las fechas.
Normalmente se referiran al día en la hora local, aunque no está de más comprobarlo.

Una buena aproximación es convertir la fecha a la hora 00:00:00 local del día en cuestión.
Nos sirve para comparar con fechas anteriores o posteriores e iguales.

	Comprobar si un tiempo es anterior a una fecha:
		2020-03-04T23:59:59CET < 2020-03-05?
			2020-03-05 -> 2020-03-05T00:00:00CET # Convertimos a localtime a las 00:00
			2020-03-04T23:59:59CET < 2020-03-05T00:00:00CET # Comparamos
	
	Comprobar si un tiempo es posterior o igual a una fecha:
		2020-03-04T23:59:59CET >= 2020-03-05?
			2020-03-05 -> 2020-03-05T00:00:00CET # Convertimos a localtime a las 00:00
			2020-03-04T23:59:59CET >= 2020-03-05T00:00:00CET # Comparamos

Sin embargo, para comparar tiempos posteriores o menores e iguales a una fecha,
deberíamos añadirle un día antes de convertirlo a local.
Un día y no 24h porque hay dias que por el DST tiene 23 o 25 horas.

	Comprobar si un tiempo es posterior a una fecha:
		2020-03-04T23:59:59CET > 2020-03-05?
			2020-03-05 -> 2020-03-06 # Añadimos un dia a la fecha (que no 24h por que hay dias de 23 y 25)
			2020-03-06 -> 2020-03-06T00:00:00CET # Convertimos a localtime a las 00:00
			2020-03-04T23:59:59CET < 2020-03-06T00:00:00CET # Comparamos
	
	Comprobar si un tiempo es anterior o igual a una fecha:
		2020-03-04T23:59:59CET <= 2020-03-05?
			2020-03-05 -> 2020-03-05T00:00:00CET # Convertimos a localtime a las 00:00
			2020-03-04T23:59:59CET <= 2020-03-05T00:00:00CET # Comparamos


![](comparing-dates-and-datetimes.png)


Dado que la fecha no tiene informado el TZ,
¿necesitamos indicar el DST para convertirla en tiempo local con TZ informado?
No, porque a las 00:00 locales no hay ambiguedad, por la fecha sabremos si es DST o no.


## Representaciones


### ISO Format

El estándard [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
establece una forma uniforme de representar el tiempo como texto.
No substituye a la representación en lenguaje natural como "3 de mayo de 2020",
pero si uniformiza las diferentes convenciones para representar fechas y horas.

Si dos objetos son del mismo tipo y de la misma zona horaria,
coincide el orden cronologico y el lexicografico.

- ISO dates: "YYYY-MM-DD"
- Naive ISO datetimes: "YYYY-MM-DD hh:mm:ss"
- UTC ISO datetimes: "YYYY-MM-DD hh:mm:ssZ" or "YYYY-MM-DD hh:mm:ss+00:00"
- TZ iso datetimes: ""YYYY-MM-DD hh:mm:ss+02:00"

Conventions:

- Naive iso datetimes are ambiguous, need exchange convention, either:
	- We are not produccing them (add always a TZ indicator)
	- When accepted, convention is needed, either:
		- They represent UTC
		- They represent local and a DST flag is provided to disambiguate
	- Standard says that naive is local time but 
- Naive iso dates are considered 00:00 localtime, there is no abiguity with DST.
	- Day addition to a isodate should be done in days not in hours since some local days are 23 and 25 hours.
	- Danger: When comparing with other isodates 'string':
		- Comparing with an UTC datetime, the first hours of the day in UTC are less than the date 
			- `"2022-08-01 23:30Z" < "2022-08-02"` but `isodatetimetz("2022-08-01 23:30Z")>localisodate("2022-08-02")`

- ISO format allows not using '-' and ':' as date and time elements separator. We are forcing it's use for readability.
- ISO format allows using either 'T' or ' ' (space) as separator between date and time. We are using always space unless exporting to json which requires 'T'
- UTC can be marked either as Z or as offset +00, neither 
- Smaller time elements can be dropped, meaning 00
- Smaller timezone elements can be dropped, meaning 00

La especificación permite duraciones, intervalos, repeticiones, semanas del año, dias del año y la semana...
De momento no cubrimos nada de eso.


### Timestamp or time since Epoch

Tiempo desde epoch (o también (UNIX/POSIX) timestamp)
es una representación numérica del tiempo mediante, por ejemplo,
los segundos transcurridos desde una momento de referencia o epoch.

Es un numero dificil de interpretar, pero fácil de obtener, comparar, restar...

Internamente en POSIX y por extension en otros sistemas,
el ordenador se representa numéricamente
como el tiempo transcurrido desde el EPOCH UNIX (January 1s 1970 00:00+00).


A determinar:

- Las unidades: segundos, milisegundos, microsegundos...
- La representación puede ser entera o float
	- Float permite granularidad menor pero manteniendo compatibilidad en unidades.
	- Ojo con los ints y el oferflow (efecto 2038 si seusan 32 bits)
	- Ojo con los floats y la precisión (a menudo que el numero se hace grande baja en precision)
- Las 00:00 de referencia del EPOCH pueden ser UTC... o no
	- Se recomienda UTC pero no tiene porqué ni hay forma de indicarlo

# WIP - A partir de aquí es Work In Progress

### Python

A parte de las representaciones en string y timestamp numérico,
existen los objetos del paquete `datetime`.

- isodate
- isodatetime naive
- isodatetime tz
- utc timestamp ms
- date
- datetime naive
- datetime con tzinfo

Conversions:

- `utctimestamp_s(utctimestamp_s)`: utctimestamp_s -> utcdatetime
- `as_utctimestamp_s(utcdatetime)`: utcdatetime -> utctimestamp_s
- `as_utctimestamp_s(localdatetime)`: localdatetime -> utctimestamp_s
- `as_utctimestamp_s(naivedatetime)`: naivedatetime (utc) -> utctimestamp_s
- `localtimestamp_s(localtimestamp_s)`: localtimestamp -> localdatetime
- `as_localtimestamp_s(localdatetime)`: localdatetime -> localtimestamp_s
- `as_localtimestamp_s(utcdatetime)`: localdatetime -> utcdatetime -> localtimestamp_s
- `isodate(isodate)`: isodate -> date
- `date_as_localdatetime(date)`: date (local) -> localdatetime
- localdatetime -> date (local)
- `as_utc(localdatetime)` localdatetime -> utcdatetime (conversion)
- `as_utc(naivedatetime)`: naivedatetime (utc) -> utcdatetime (reinterpret)
- `as_local(utcdatetime)`: utcdatetime -> localdatetime (conversion)
- `as_local(naivedatetime, dst)`: naivedatetime (local) + dst -> localdatetime (reinterpret)
- `isodatetime(naiveisodatetime)`: naiveisodatetime -> naivedatetime
- `isodatetime(tzisodatetime)`: tzisodatetime -> local/utcdatetime
- `as_isodate(utcdatetime)`: utcdatetime -> localdatetime -> date
- `as_isodate(localdatetime)`: localdatetime -> date
- `as_isodate(naivedatetime)`: naivedatetime (local) -> date (takes the date pare as it were local????)
- naiveisodatetime + dst -> localdatetime
- utc/localisodatetime -> localdatetime
- localdatetime -> naivedatetime + dst


### Javascript

Representaciones posibles

- new Date
- momentjs
- dayjs
- strings ISO


dayjs(utc_timestamp_ms) -> local datetime


### ERP

### Postgresql

- Mogrifying dates (query search)
- Inserting data
- Extracting data

### Mongo




# Discusion inicial

naive: no incluye el timezone (datetimes, isodatetime) necesitamos saber que es para interpretarlo.

tz: incluye el timezone (datetimes, isodatetime) es implicito que es.

Semantica:

	- local: la hora local, en nuestro código, es Madrid
		- si es un formato naive, necesitamos un season para
		  identificar la hora real (hay horas en el cambio
		  de horario que se duplican)
	- utc: hora zulu, Tiempo Universal Coordinado

Formatos:

	- date: datetime.date(y,m,d)
	- isodate: "YYYY-MM-DD"
		- Cuando comparamos fechas con tiempo, se le supone 00:00:00
		seria un naive, y habria que interpretarlo como tz con
		la semantica que tenga (usualmente local, no utc)
	- naive_datetime: datetime.datetime(y,m,d,h,m,s)
	- tz_datetime: datetime.datetime(y,m,d,h,m,s,zone_info=tz)
	- isodatetime: "YYYY-MM-DD HH:MM:SS"
	- tz_isodatetime: "YYYY-MM-DD HH:MM:SS+02:00"
	- timestamp: miliseconds or seconds since epoch (1 enero 1970)
		- Puede ser local o utc
		- Puede estar en milisegundos o en segundos
		- Puede ser entero o float









