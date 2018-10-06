# Proyectos en Open Data

## API Opendata

[`opendata.somenergia.coop`](https://opendata.somenergia.coop)

**Datos anominizados por agregación**

Primera versión pública

Métricas: Socias y contratos

Detalle geográfico hasta municipio

Secuencia histórica mensual

## Posibles proyectos

**Explotar los datos:**

Aplicaciones de análisis

Visualizaciones, interactivos, mapas...

**Ayudarnos a hacerla mas potente:**

Nuevas métricas

Referencias relativas. Eventos

Mejorar el front-end

## Herramientas de Análisis

Cuadros de control

Mineria temporal y geográfica

Correlacionar con eventos

Animaciones, interactivos...

Widgets insertables en el blog


## Visualización


<div class='columns'>
<div class='column'>
![Mapas color](images/colormaps.png){width=60%}
</div>
<div class='column'>
![Mapas burbujas](images/bubblemap.png){width=60%}
</div>
</div>


<div class='columns'>
<div class='column'>
![Tablas ](images/diffcolortable.png){width=60%}
</div>
<div class='column'>
![Gráficas](images/grafiques.png)
</div>
<div class='column'>
![Tree Map](images/treemap.png)
</div>
</div>


## Nuevas métricas

Cantidades que podamos agregar a nivel de municipio.

Muchas requieren acceso al ERP y las tenemos que hacer en Girona

¿Cúales interesa implementar para vuestras aplicaciones?

Otras no y las podeis aportar vosotros mismos.

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



## Mejoras Front-end

**Permite construir las queries de forma gráfica**

[`github:som-energia/webforms-mithril`](github.com/som-energia/webforms-mithril`)

<div class=columns>

<div class=column>
![](../images/opendata-frontend.png){width=50%}
</div>

<div class=column widht=60%>
Editor de filtros

Mejorar la tabla

Integrar nuevas visualizaciones

Descarga en diferentes formatos

Generar widgets para el blog

</div>
</div>

<div class=notes>
- src/opendata.js
- Solo depende de la API
- Se pueden enviar parches
</div>

## Referencias

[API Open Data](http://github.com/som-energia/somenergia-api)

[Front End Open Data](http://github.com/som-energia/webforms-mithril)

[SomMaps (HackaSom 2017)](http://github.com/som-labs/sommaps)

[Cuadro de control de socios, Baix Montseny](https://docs.google.com/a/somenergia.coop/spreadsheets/d/1Kb9USX6lmZ9Yq5AMVaVwpRQEvoJo-FNbHznoIMeF3gk})

[Discusion sobre mapas en la Plataforma](https://plataforma.somenergia.coop/discussion/view/153870/som-maps)




# Proyectos cacharreo

## Adquisición de datos


<!--

# Documentos con proyectos

## Por pasar
- App básica para el móvil
- Mejora visualización de mapas (previo api desarrollado)
  (para acceder a este debate primero tienes que solicitar añadirte al grupo de grupos locales de la plataforma)
- Visualización producción eléctrica cooperativa; sería interesante añadir la parte fraccionada de cada cliente que ha invertido en generation, así como la curva horaria equivalente (en periodos) de su consumo, para que pueda ir adaptando su curva al máximo de cerca de la generación. Idem con los sistemas de autoconsumo
- App consumo propio (instantáneo, histórico, ahorros energéticos conseguidos,...). Sería interesante ligar toda esta información con Infoenergía, de forma que en la APP se de información complementaria a la de los informes, para aquellos usuarios más avanzados, o que quieren info más rápida (hay que ver disponiibilidad de datos de smart meters semanal)
- SomCoin (criptomoneda para el balance neto en autoconsumo)
- Calculadora financiación para inversiones renovables (de autoconsumo?)
- monitorización instalaciones a tiempo real
- Carnet Som: App mobil para actualizarlo y para validar el de otros (GPG,QR…) (hay una api experimental, queda un codigo QR inmenso, alternativas?) https://github.com/Som-Energia/intercoop (si, la api de generacion y validacion del carnet esta metida en la de intercoop, habria que extraerla, o no)
- Gamification para socias (en app carné por ejemplo), puntos y badges para haber tomado cursos de la “universidad popular de Som Energia”, haber dado charlas, ahorrado energía,...
- Intercoop, apis para intercambio de usuarios y servicios con otras entidades (hay una prueba de concepto funcional, hay que integrarlo en las diferentes entidades: SomEnergia, SomConexio, MesOpcions, SomMobilitat…) https://github.com/Som-Energia/intercoop
- Big data o bien data mining: Personalmente creo que en una APP es demasiado poner este tipo de herramientas, pero le veo sentido coordinar con el big data de info energía, una app que sirva como sistema de asesoramiento y apoyo a los grupos locales, a la oficina (call center) y/o a grupos de asesores que se creen, de forma que se generen comunidades de usuarios que tienen sus datos de consumo, generación,etc,.. y un tratamiento de esos datos que les ayude a tomar decisiones de ahorro o de EERR
- Business intelligence para facilitar la gestión de la empresa o de los clientes, idem que anterior, des de Infoenergía ya se puede realizar business intelligence para la empresa, y habría que ver si hay cosas interesantes a añadir en un app movil

## Pasada

- API para sacar datos relevantes y anónimos de la cooperativa (número de socios y contratos por territorio,...) Aquí tenemos las funciones para generar datos anonimos (y los mapas actuales) y que faltaria publicar como API de una forma mas organizada https://github.com/Som-Energia/somenergia-dataexports
	- Esto es OpenData
- Hoja de seguimiento automàtica de socios para los GL del estilo de la que hacemos en el Baix Montseny de forma manual.
	- Esto es OpenData + graficas + filtros GL

Hardware:
    • Medidor consumo eléctrico → https://openenergymonitor.org/ , en este tipo de monitoring siempre creo que hay que valorar lo que cuestan i/o el esfuerxo que te suponen vs el ahorro econòmico que puedes llegar a tener, así como con respecto a la información que actualmente se puede obtener de los smart meters, que ya se pagan,... 
    • Coche miniatura con placa solar y wifi (o 3G?) (Som Energia + Mobilitat + Connexió) → valorar https://www.particle.io/ como controlador
    • Seguidor solar basado en Arduino, sale a cuenta seguidor? con los precios actuales de FV?
    • Estación de recarga (SMART) para vehículo eléctrico
    • Contador en modo hardware libre para quitarnos el coste de alquiler de la factura, tienes el problema de la homologación, si no son homologados solo los puedes poner en serie con el de compañia 
    • Tejas fotovoltaicas. Libertad energética.
    • Maqueta de seguidor solar con 4 LDRs, 2 servos, una placa Arduino y su correspondiente sketch, que simula el funcionamiento de un sistema que como, un panel solar, p.e., sigue al sol para conseguir la mayor absorción de luz del panel. Se puede comentar cuándo vale la pena incluir este sistema, teniendo en cuenta el mantenimiento requerido y las posibles averías.

-->
