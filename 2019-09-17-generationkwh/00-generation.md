
# Intro {
	data-background-image="images/logo-generationkwh.jpg"
	data-background-size="80%"
	}

## Objetivo

Familiarizar al equipo de proyecto
y al resto de IT de los detalles
de implementacion del Generation kWh
que se necesitan para entender su dinámica.

**Proyectos:**
entender las recientes incidencias
y repensar el nuevo modelo de inversión

**IT:** mapa mental para entrar al código


## ¿Qué es?

Una forma colectiva de **invertir en renovables**.\
En vez de dar intereses :moneybag:,\
**da derecho a usar los kWh producidos** :bulb:\
a **precio de coste**.\

## Funcionamiento

Las socias realizan **inversiones** para construir **plantas**

Se retorna en 25 años, sin intereses, año de carencia

Una vez construidas, los **kWh producidos**
se transforman en **derechos** de uso para las inversoras, proporcionalmente a su inversión.

Los derechos se **usan** en diferentes contratos según las **asignaciones** definidas por cada inversora.

En las **facturas** se separan los kWh a **precio Generation** de los que son a **precio de mercado**.

::: notes
Palabras clave:

- Inversiones (€)
- Plantas
- Producción (kWh)
- Derechos (kWh)
- Uso (kWh)
- Assignaciones (contratos, prioridad)
- Precio Generation (€/kWh)
:::

## Documentación

[Píndoles Generation kWh](https://github.com/Som-Energia/somenergia-generationkwh/blob/master/docs/intro-ca.markdown){target=_blank}

[Modelos de inversión](https://github.com/Som-Energia/somenergia-generationkwh/blob/master/docs/inversions.markdown){target=_blank}

[Origen requisitos](https://github.com/Som-Energia/somenergia-generationkwh/blob/master/docs/domaincriteria.md){target=_blank}

[Módulos Generation](https://raw.githubusercontent.com/Som-Energia/somenergia-generationkwh/master/docs/GenKWh-UsageTrackerDetails.png){target=_blank}

::: notes

### Píndoles

Formación que hicimos cuando lo pusimos en producción

Ahora la gestion de las inversiones tiene botones para cada operación.

### Modelos de inversión

Hablaremos de ellos pero la documentación entra  mas en detalle

### Requisitos

Explica porque y de donde vinieron las decisiones en la recogida de
requisitos y posterior desarrollo.

Algunas de las ultimas decisiones no estan incluidas, deberian.

### Módulos

- Deals Definitions: ahora es Assigments
- Plantmeter access: ahora lo hace gisce
- Plantmeter measurements: ahora es `tm_profile`
- RightsPerShareCurver: ahora es `RightsGranter`
- ProductionAggregator: ahora es un `Mix`
- BuiltShareValue: ahora es ...
:::



## Road Map

Modelos de inversión

Concesión de derechos

Asignación de contratos

Uso de derechos

Corrección de derechos

Módulos (IT)

::: notes
- **Modelos de inversión:** Ciclo de vida (operaciones/estados) de una inversion: compra, pago, activación, amortización, cancelación, desinversión...
- **Concesión de derechos:** A partir de la producción definir que derechos van a cada socia
- **Asignación de contratos:** Cómo se define qué contratos se benefician de los derechos de una socia
- **Uso de derechos:** Cómo se usan (o devuelven) los derechos en las facturas
- **Corrección de derechos:** Cómo rectificar derechos generados erróneamente
- **Módulos:** Como està organizado el código. Solo para IT.
:::


# Modelos de inversión {
	data-background-image="images/logo-generationkwh.jpg"
	data-background-size="80%"
	}

## Modelo de inversión

Define el ciclo de vida de una inversión

Qué operaciones podemos hacer

Entre que estados transiciona


## Generation kWh

![](https://raw.githubusercontent.com/Som-Energia/somenergia-generationkwh/master/docs/inversions-states-generation.png)

## Aportaciones voluntarias

![](https://raw.githubusercontent.com/Som-Energia/somenergia-generationkwh/master/docs/inversions-states-aportacions.png)

## Títulos participativos

![](https://raw.githubusercontent.com/Som-Energia/somenergia-generationkwh/master/docs/inversions-states-titols10.png)

![](https://raw.githubusercontent.com/Som-Energia/somenergia-generationkwh/master/docs/inversions-states-titols5.png)


## Operaciones (ERP)

![](images/genkwh-erp-investment-actions.png)

::: notes
Evita la edición directa de los campos
que introduce inconsistencias

Solo mediante operaciones, que quedan registradas.
:::

## Generalizando

Objetivo: Un solo modelo parametrizado

¿Se pagan intereses? ¿Se amortiza?
¿Carencia? ¿Penalización por desinversión?

Estamos a medias:
pasamos el Generation
pero hay que incorporar los otros

Generalizar implica migrar

Migrar implica interpretar la contabilidad
como operaciones del ciclo de vida.

## Nuevo modelo de inversión


¿Cabe el nuevo modelo que se está pensando?

¿Hay nuevas operaciones?


¿Hay que modificar el diagrama de estados?


# Concesión de derechos {
	data-background-image="images/logo-generationkwh.jpg"
	data-background-size="80%"
	}


## Derechos

**kWh a precio Generation disponibles\
para uso de un socio inversor**

Regla de tres entre:

- la **producción de las plantas** (hora a hora)
- la **inversión del socio** (día a día)
- el **coste de las plantas** construidas (día a día)

Están vinculados a la hora de producción\
Solo se pueden gastar en el mismo periodo tarifario en que fueron producidos

::: notes
Derechos = Producción * Inversion Usuario / Inversion Total

A menos que tenga muchas acciones,
cada hora suele ser tan poca, que hay que ir acomulando
fracciones de kWh hora a hora para llegar a un kWh entero.

**¡Es importante gestionar los remanentes de kWh para que no se pierdan!**
:::


## Precálculo por perfil

No almacenamos curvas de derechos para cada socio

Precalculamos para cada número de acciones (Perfil)

**Ojo:** Un socio cambia de perfil cuando se activa o expira una inversión

La curva de derechos de un socio concreto será un collage de curvas de varios perfiles


::: notes
En el ERP, las curvas según número de acciones se llaman `RightsPerShare`.
Están almacenadas en Móngo como un `MongoTimeCurve`.

Desde el principio se generaron para de 0 a 99 acciones.\
Y alguien invirtió 120 acciones, y ahí están también.
:::


## Flujo de cálculo

![](https://raw.githubusercontent.com/Som-Energia/somenergia-generationkwh/master/docs/PlantProducctionToUseRights.png){style="width:50%"}


::: notes
1. calculamos la producción agregada
1. calculamos los derechos para cada perfil
1. componemos los derechos del socio a partir de los de cada perfil que adopta

- La primera y segunda fase se precalculan por la noche
- La tercera se hace en el momento de usarlos
:::

## Mix-Planta-Contador


::: notes
- **Mix:** GenerationkWh (podria haber otros)
- **Plant:** coste en acciones asociado, fechas activa
- **Meter:** número de serie del contador, fechas activo

¡Meters aun no tienen `last_efective_date`!

Estaría bien meterlo en ronda para que
si un dia tenemos que cambiar el contador
no nos pille el toro.

La interficie es el [Script Launcher](http://192.168.35.244:5000){target=_blank}

- [http://192.168.35.244:5000](http://192.168.35.244:5000){target=_blank}
- Accessible solo desde la oficina o con VPN
- Login del ERP
- Apartado _Projectes de Generació_
:::


![](images/genkwh-scripts-plants.png){style="width:70%"}

## Producción contador

![](images/genkwh-scripts-productionCurve.png){style="widht:70%"}

::: notes
- Antes lo leiamos nosotros de Monsol
- Ahora lo lee Gisce de la planta directamente
- Lo deja como `MongoTimeCurve` en la coleccion del Mongo `tm_profile`
- Script permite otras agregaciones (mensuales, con o sin detalle por horas)
:::


## Producción agregada

Curva horaria con la producción disponible para el Generation

Suma hora a hora de la producción de los contadores.

Solo sumamos los dias en que contador y planta estan activos.

No se almacena, se calcula cada vez que queremos generar derechos.

## Acciones construidas

Curva horaria que agrega el valor en acciones de cada planta activa.

Cuando activamos una planta la curva sube.

Baja cuando jubilamos la planta.

Sirve para relativizar el valor de las acciones de las socias.

## Cuantización


![](images/genkwh-rightsgranter.svg)

::: notes
Para cada perfil inversor,
obtener **derechos en kWh enteros** 
sin perder fracciones entre hora y hora

**Linea azul:** producción instantanea acomulada.\
No tenemos eso, tenemos las lecturas **horarias y diferenciales**.\
Si las acomulamos tenemos el **area azul**.

- 700 acciones construidas
- Rojo: 4 acciones
	- 1 kWh de derechos cada 175kWh de planta
- Verde: 7 acciones
	- 1 kWh de derechos cada 100kWh de planta

Como las acciones construidas pueden cambiar,
aplicamos la proporción sobre las lecturas diferenciales,
antes de hacer el cumsum.
:::

## Cuantización

Obtener, para cada perfil, derechos en kWh enteros 
sin perder fracciones entre hora y hora

- Convertir producción agregada a Wh (`*1000`)
- Aplicar proporción: acciones / construidas
- Suma acomulada hora a hora (integral)
- Cuantizar a kWh (`//1000`)
- Diferencia hora a hora

Guardamos el remanente (en Wh) del intérvalo calculado
para usarlo para el pròximo intérvalo.

::: notes
- Los calculos los hacemos con Wh para tener más precisión
- Es posible que no sea precisión suficiente
    - Consta que los que menos acciones tienen, pierden
:::

## Remanentes

Restos de kWh del último día calculado

Se guardan para cada perfil
en el modelo `Remainders`

También indica la siguiente fecha a calcular de ese perfil

Si un perfil no tienen ningún remanente,\
calcular desde el principio

<div class=notes>
- Por ejemplo: cuando se activa una inversión y nunca habíamos calculado derechos para ese número de acciones
- Se calcularon al principio de 0 a 99, y algun desalmado invirtio 120
</div>

## Derechos por perfil

![](images/genkwh-scripts-rightsCurve.png){style="width:90%"}


# Asignación de contratos {
	data-background-image="images/logo-generationkwh.jpg"
	data-background-size="80%"
	}


## Asignaciones

Contratos beneficiarios\
de las inversiones de una socia

Cualquier contrato de Som Energia\
**No** se requiere vinculacion con la socia\
(como titular, pagadora...)

Puede haber más de un contrato beneficiario\
Se establecen prioridades entre ellos

<div class=notes>
Un contrato también puede acabar beneficiandose de las inversiones de varios socios.

En este caso es indeterminado de que inversor cogerá antes los derechos.
</div>

## Asignaciones (ERP)

![](https://raw.githubusercontent.com/Som-Energia/somenergia-generationkwh/master/docs/pantallades/socis_form.png){style="width:80%"}

<div class=notes>
- Cada asignacion tiene un número de orden de prioridad
- Pueden tener la misma prioridad, el primero que llega se lo lleva
</div>

## Asignación inicial

<div class=notes>
Solo se hace al activarse
la primera inversión de cada socia

Aunque la asignación inicial
coga los contratos como pagadora o titular,
después puede incluir el contrato que sea.

También hay solo dos niveles de prioridad
pero podemos poner los que queramos.
</div>

Un mes antes de activarse la inversión,\
se hace una asignación por defecto y
se notifica a la socia por si quiere cambiarla.

**Con prioridad 0** el contrato **con más consumo**
con la inversora como titular.
Si no tiene contratos como titular,
el que tenga más consumo figurando como pagadora.

**Con prioridad 1** todo el **resto de contratos**
en los que figure **como pagadora o titular**.

## Prioridades

Un contrato más prioritario tiene la opción de gastar primero los derechos,
hasta que factura la fecha en que se han producido.
A partir de ahí, esos derechos quedan disponibles para el resto de contratos.

**Se implementa con el punto de vista inverso:**

Una factura de un contrato no puede usar derechos
generados a fechas que otro contrato más prioritario
no haya facturado aún.


## Porqué prioridad laxa

La generación de facturas no es ordenada

Cada contrato puede salir antes o despues que otro

Hay contratos con facturación bloqueada

Abonos, refacturaciones, borradores...

A misma prioridad o en zona no restringida, el primero que factura se lo lleva.


## Múltiples fuentes

Un contrato puede recibir derechos de varios inversoras

No está definido de cual recibe primero

En la factura, aparecen en linias separadas con el nombre de cada inversora



# Uso de derechos {
	data-background-image="images/logo-generationkwh.jpg"
	data-background-size="80%"
	}


## Anotando el uso

El uso de los derechos sí que\
se almacena por cada socia

A medida que usamos kWh,\
la curva de uso del socio\
va igualando, sin superar,\
a su curva de derechos, hora a hora

![](images/genkwh-rightsusage.svg){style="width:60%"}

::: notes
Si, la curva de derechos de la socia que no almacenamos
y que calculamos como collage de los perfiles que ha tenido.

Si reescribimos la curva de derechos a la baja,
podemos acabar teniendo derechos usados que no se han otorgado

Aunque en suma sean iguales o menos,
podrian ser mayores hora a hora.
:::


## Derechos usados

![](images/genkwh-scripts-usedRights.png){style="width:90%"}


## Uso y retorno

**Se reservan derechos**\
cuando se crea una factura en borrador

**Se devuelven derechos**\
cuando se borra, abona, rectifica...

**Ojo:** facturas en borrador reservan derechos\
¡Hay que borrarlas si no son buenas!



## Ventana de uso

![](images/genkwh-invoice-windowing.png)

::: notes
Una factura de un contrato no puede consumir derechos

- **del futuro**: más modernos que la última fecha a facturar
- **caducados**: más antiguos que 12 meses de la primera fecha a facturar
- **reservados**: de fechas que un contrato más prioritario no haya facturado aún

Los 12 meses de caducidad se cuentan desdel inicio del periodo de facturación.
La caducidad real se extiende aproximadamente a 13 meses.

Si hay varios periodos, tambien enmascaran la ventana las horas correspondientes.
:::

## Uso de derechos

Dentro de la ventana de uso:

**Se usan** los mas antiguos sin usar

**Se devuelven** los más modernos usados

Las facturas no se guardan\
de qué días/horas cogieron los derechos

Tampoco en la curva de uso se guarda\
a qué facturas fueron ¿deberiamos?

::: notes
Si tenemos hora de escritura, asi que tenemos una manivela
para saber como estaba la curva a un dia concreto.

No hay aún herramienta/script para mirarlo.

Complicado ligarlo con facturas concretas, o abonos concretos.
:::



## Periodos P1, P2...

Se reservan derechos de forma independiente\
para cada periodo horario de la tarifa

Solo se pueden gastar los derechos\
generados a las horas que le corresponden

![](images/genkwh-invoice-lines.png)



# Corrección de derechos {
	data-background-image="images/logo-generationkwh.jpg"
	data-background-size="80%"
	}


## ¿Por què?

Nos han llegado las primeras lecturas tarde

Nos equivocamos con el código del contador

Detectamos un error en como se calcula

...

:shit: happens, so :dancer:

¿Reescribimos los derechos?

## Problema

No podemos reescribir la curva por debajo\
porque esos derechos ya se han otorgado

La curva de uso estaría por encima de los derechos otorgados.

Aunque en global se den más derechos,\
ha de ser mayor hora a hora

::: notes
Recordemos que la produccion para 10 acciones
daba cada hora un kWh si otra no.

Cambios en la generación de derechos
pueden hacer mover kWh de hora
porque suman o dejan de sumar un kWh entero

Donde deja de sumar, nos está pasando
que se han usado derechos que ya no están.
:::

## Solución

Algoritmo para regenerar la curva,
respetando los derechos ya otorgados.

Cuando, por respetar los derechos ya dados,\
se dan derechos de más en algunas horas\
se compensa en las horas posteriores en que se dió de menos.

Genera una corrección.


::: notes
Cuando la nueva curva debiera ir por arriba de la antigua,
es correcto y ponemos la nueva curva.

Cuando la nueva curva debiera ir por debajo,
se genera una deuda, que se compensa
en horas posteriores,
cuando la curva debiera ir por arriba.

Si no se logra compensar todo,
al final se guarda como remainder negativo.
::: 

## Visualmente

![](images/genkwh-correction-graph.png)

::: notes
**Rojo:** Derechos otorgados previamente

**Azul:** Nuevos derechos calculados

**Verde:** Derechos finales

**Azul - Verde:** Corrección\
Se guarda en la MTC `genkwh_rights_correction`

:::

## Curva de corrección

La curva corregida es fea de enseñar

Guardamos la corrección para recuperar la bonica

```
         otorgados    corrección     original
2019-01        109             0          109
2019-02        114             0          114
2019-03        157            25          132
2019-04        250            79          171
2019-05         48          -104          152
2019-06        201             0          201
2019-07        192             3          189
2019-08        160             0          160
2019-09        112             0          112
```

::: notes
Se dió de más en marzo y abril
porque pusimos la planta de Matallana en vez de fontivsolar.

En mayo paramos la otorgación de derechos,
la base antes de la corrección era cero, así que
todo lo que cogimos de mas se compenso ahí.

En junio y julio hay correcciónes, pero
la suma mensual es casi es zero.

Pendiente: corregir el uso de derechos
para que sea compatible con la curva bonica
y poder mostrar dos curvas bonicas en la OV.
:::


# Módulos {
	data-background-image="images/logo-generationkwh.jpg"
	data-background-size="80%"
	}


## IT Warning

:::notes
Esta parte de la presentación ya habla de temas de IT específicamente.
:::

## Mapa

[![](https://raw.githubusercontent.com/Som-Energia/somenergia-generationkwh/master/docs/GenKWh-UsageTrackerDetails.png){style="width:50%"}
](https://raw.githubusercontent.com/Som-Energia/somenergia-generationkwh/master/docs/GenKWh-UsageTrackerDetails.png)


## ERP vs Pure Python

La lógica de negocio se ha extraido fuera del ERP

**Objetivo:**

Agilizar la ejecucion de los test unitarios

Facilitar una eventual migración a otro ERP o versión

**Estrategias:**

Controlador de estado

Inyección y delegación


## State controller

Máquina de estados que controla una serie de atributos de un modelo del ERP.

El constructor recibe los atributos leidos del ERP.

Sus metodos son las acciones que cambian el estado del modelo
(transiciones).

Se le puede consultar los atributos modificados,\
para hacer el write de vuelta al ERP.

De los side effects se encarga el modelo

::: notes
La otra estratégia para abstraer lógica del ERP.

También la usamos para simular ciclo de vida en las migraciónes
sin tener que ejercitar el ERP.

Ejemplo: `InvestmentState` controla el estado del modelo `Generationkwh.Investment`

Tiene acciones como `order`, `pay`, `unpay`, `amortize`...

No incluye funcionalidad fuera del modelo como crear otros objetos (facturas, lineas de contabilidad...)

Esa funcionalidad lo hace el modelo pero deleja en el state controller los cambios en sus atributos.
:::


## Inyección y delegación

**API:** Modelo ERP sin tabla (en memoria)

**Classe pura:** Clase (no ERP) con el mismo nombre

**Proveedores de datos:** Interfaz no manchada con `cursor` y `uid` para acceder a datos del ERP

Cuando la API sirve una llamada:

1. crea los proveedores de datos,
1. crea la clase pura inyectandole los proveedores
1. delega la funcionalidad a la clase pura

::: notes
En la presentación llamaremos API's a los modelos ERP sin tabla
que usamos para albergar los puntos de entrada.

Técnicamente el modelo ERP es tambien una clase Python
pero para aclararnos llamemos clase a la que no es de ERP
y modelo a la clase que es un modelo erp.
:::


## Data providers

Abstraen el acceso a datos del ERP

Substituibles por mocks para testear la lógica de negocio
en las clases puras

Su interfaz ha de ser independiente del ERP\
(menos el constructor)

Clase base `ErpWrapper`:\
el constructor recibe los parametros `cursor`, `uid`\
los otros métodos los ven como miembros.

## Test Funcionales

Abusamos del concepto.

Son los que necesitan el ERP\
y usan `erppeek` para testear.

Intentamos que solo sean los funcionales y que la lógica esté testeada ya en los unitarios.

Cubren API's (propiamente funcionales) pero también los data providers y los side effects de los modelos con state controller.

::: notes
Ahora los haríamos con el Destral

Como funcionales no tendrían que ser exhaustivos.\
Simplemente testear que se hace la delegación.\
Los test exhaustivos irían en los unitarios del delegado.

Los side effects de un `investment`, por ejemplo,
son la creación de facturas, envio de correos...
:::


## Test Helpers

API's que usamos solo para testear

Wrappers para traducir parámetros y retornos\
a tipos serializables por XMLRPC

También helpers comunes para `setUp` y `tearDown`.

::: notes
Recordemos: API es un Modulo ERP sin datos con puntos de entrada

Aunque internamente en el ERP podemos pasar o retornar de todo sin problemas
cuando llamamos una funcion via XMLRPC, se queja de:

- fechas: han de ser strings o datetimes
- namespaces: en los data providers son convenientes pero para testear hay que pasarlos a diccionarios
- tuplas: hay que convertirlas en listas
- None: se convierten en False
- Excepciones: no tengo claro que pasa con ellas
- Cualquier objeto no estandard
:::

## Investments

<div class=columns>
<div class=column>
Modelo ERP: 
`generationkwh.investment`\
Delega manipulacion de estado a `investmentstate`.
Añade creacion de facturas, remesas...

`investmentstate` máquina de estados de inversión.
Se inicializa y serializa en un diccionario como el del erp.
</div>
<div class=column>
`investmentmodel` encapsula expecificidades de Generation
de cara a parametrizarlas algun día.

`genkwh_investments.py`\
cli para gestionar las inversiones
</div>
</div>


## Assignments









