---
title: Open Data
author: Benjamí Ramos
---

# API

## Open Data

Acceso a datos anonimizados por agregación

[`http://opendata.somenergia.coop`](http://opendata.somenergia.coop){target=_blank}

En la raiz está la documentación

**Da pie a proyectos para voluntarios y estudiantes**

- Explotar los datos
- Ampliar funcionalidades

## Métricas y detalle

**Métricas:**

`/v0.2/members` (socias)

`/v0.2/contracts` (contratos)

**Detalle geográfico:**
Por defecto global.

`/by/<level>`
(`country`, `state`, `ccaa`, `city`)



## Serie temporal

**Por defecto:** la última fecha disponible

**A fecha dada:** `/on/<date>`

(solo primeros de mes, de momento)

**Serie anual:** `/yearly[/from/<date>][/to/<date>]`

**Serie mensual:** `/monthly[/from/<date>][/to/<date>]`


## Filtros geográficos

En la query string.

`?ccaa=01&city=38017&city=38019`

Incluiría Andalucía (01) y los municipios Tinerfeños de 
_Granadilla de Abona_ (38017) y
_Guía Isora_ (38019)

Se usan los códigos del INE ([web](http://www.ine.es/daco/daco42/codmun/codmunmapa.htm){target=_blank})

# Interfaz para humanos

## 

![](../images/opendata-frontend.png){width=40%}

## Función

Acceso a personas no programadoras

Grupos locales, Equipo técnico

- Construir queries
- Visualizar resultados


## Ideas para hackear

Editor de filtros geográficos

Mejorar la tabla de resultados

Integrar nuevas visualizaciones

Descarga en diferentes formatos

Generar widgets para el blog

## Wanna hack?

[`github:som-energia/webforms-mithril`](github.com/som-energia/webforms-mithril`){target=_blank}


Tecnologías utilizadas:

- Mithril: control aplicación
- MDC4W: widgets de base
- Webpack: optimización y empacado
- NodeJS: dependencias

Explicadas en una formación 'interna':

[Presentación: Tecnologías de front-end](../2018-07-19-frontend/index.html)


# Ideas: usando el API

## Usando el API

El API permite usar 

No limita tecnologías

**Herramientas de análisis**




## Herramientas de Análisis

Cuadros de control

Mineria temporal y geográfica

Correlacionar con eventos

Animaciones, interactivos...

Widgets insertables en el blog

## Visualización

<div class='columns'>
<div class='column' width='20%'>
![Gráficas](images/grafiques.png){width=50%}
</div>
<div class='column'>
![Tablas ](images/diffcolortable.png){width=50%}
</div>
<div class='column'>
![Tree Map](images/treemap.png){width=50%}
</div>
</div>

<div class='columns'>
<div class='column' width='20%'>
![Mapas color](images/colormaps.png){width=40%}
</div>
<div class='column' width='20%'>
![Mapas burbujas](images/bubblemap.png){width=40%}
</div>
</div>

¿Concurso?

## Wanna hack?

Con la API no hace falta acceso a repositorios

Usar tecnologías compatibles con las que usamos en Girona
facilitan una posterior integración o mantenimiento

Pero, ¡libertad total!


# Ideas de mejora

## Nuevas métricas

Cantidades que podamos agregar a nivel de municipio.

Consumo agregado,
Producción,
Plantas,
Autoproducción
...

**Referéncias para métricas relativas:**
Población,
Superficie,
Puntos de suministro
...


## Métricas de comercialización

Mejorar socias y contratos

Consumo agregado

Modificaciones de contrato

Reclamaciones

<div class=notes>
- Socias
	- Ya implementado, pero necesita mejoras
	- No se cuentan las bajas en los datos históricos (si te das de baja, desapareces de los datos históricos)
	- Hay mucho ruido en los datos, sobretodo del principio
	- Casos con múltiples direcciones, se escoge una arbitrariamente, no la del momento
- Contratos
	- Ya implementado
	- Hay que limpiar ruido en los datos
- Consumo agregado
	- Tenemos los datos en las facturas de distribuidora
	- Sera lento recopilarlo
- Contratos por peaje-tarifa
	- Primera iteracion considerando la ultima tarifa de cada contrato
	- Habria que considerar los cambios de tarifa (modificaciones contractuales, mas complejo)
- Consumo agregado por cada peaje
- Casos ATR
	- Altas de suministro
	- Cambios a SOM
	- Cambios des de SOM
	- Cambios de titular
	- Cambios de potencia
	- Reclamaciones
</div>

## Métricas de producción

**Plantas de generación**

Potencia / Producción

**Autoproducción**

Instalaciones / Potencia / Energía

<div class=notes>
- Potencia de plantas
	- Poco cambio, no en la base de datos pero se puede hacer a mano
- Producción de plantas
	- Solo tenemos la produccion instantanea de las del Generation
	- Resolucion horària, algunas plantas dan incluso mas
	- TODO: Preguntar a proyectos si tenemos info historica de las otras plantas
- Autoproduccion agregada (Numero, Potencia, Energia)
	- Hay personas que lo tienen de antes, como obtenerlo
	- De las promovidas por Som estamos definiendolo
	- Aún no tenemos datos
</div>


## Nuevos filtros

**Atajos para peticiones frecuentes
con muchos municipios o províncias**

Grupos locales

Coordinadoras territoriales

Comarcas. Super regiones.

Dominios lingüísticos

<div class=notes>
- Grupo local/Coordinadora Territorial
	- Seria un alias para filtrar todos los municipios/provincias que cubre
	- Hay un trabajo de recopilarlos
		- A mano? Es una opción si la hace cada GL
		- La aplicacion de grupos locales tiene el mapeo de municipios a GL's
		- Ese mapeo no esta, aún en el ERP ni en la BD
		- Hay que considerar si el mapeo evoluciona con el tiempo
- Comarca
- Dominios lingüisticos
</div>


## Eventos

**Situarlos en el tiempo para contrastar su efecto en las métricas.**

<div></div>
 
Grupos locales: Charlas, ferias, stands...

Apariciones en los medios 

Campañas de Som. Notícias del sector

<div class=notes>
- Charlas, ferias, stands... de los grupos locales
	- Habria que recopilarlas
	- Tenemos los Google Calendars de los GL, pero requiere picar piedra o sistematizarlo
- Apariciones en los medios
	- Habria que recopilarlas
- Campañas de Som
	- Habria que recopilarlas
</div>

## Referencias relativas

**Relativizan las métricas a las características de cada zona.**

Son datos públicos, cualquiera puede integrar

Población, superficie (INE, los tenemos)

Puntos de suministro, demanda (REE, CNMC)

Actividad económica (PIB, Número de empresas...)


## Wanna hack?

[`github:som-energia/somenergia-api`](https://github.com/som-energia/somenergia-api){target=_blank}

Tecnologías: Python / Flask

Muchas requieren acceso al ERP y las tenemos que hacer en Girona

¿Cúales interesa implementar para vuestras aplicaciones?

Otras no y las podeis aportar vosotros mismos.


## Referencias

[API Open Data](http://github.com/som-energia/somenergia-api)

[Front End Open Data](http://github.com/som-energia/webforms-mithril)

[Ejemplo: SomMaps (HackaSom 2017)](https://som-labs.github.io/somenergia-maps/) [Código](http://github.com/som-labs/somenergia-maps)

[Ejemplo: GapMinder (HackaSom 2018](https://opendata.somenergia.coop/ui/gapminder.html)

[Cuadro de control de socios, Baix Montseny](https://docs.google.com/a/somenergia.coop/spreadsheets/d/1Kb9USX6lmZ9Yq5AMVaVwpRQEvoJo-FNbHznoIMeF3gk})

[Discusion sobre mapas en la Plataforma (2015)](https://plataforma.somenergia.coop/discussion/view/153870/som-maps)





