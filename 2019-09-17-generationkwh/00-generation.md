
# Intro {
	data-background-image="images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

## ¿Qué es?

Una forma de **invertir en renovables** que,
en vez de darte derecho a un interés,
**da derecho a usar kWh producidos**
a **precio de coste**.

## Funcionamiento

Las socias realizan **inversiones** para construir **plantas**

A 25 años, sin intereses, carencia de un año

Una vez construidas, los kWh que se produzcan se transforman en **derechos** de uso para las inversoras, proporcionalmente a su inversión.

Los derechos se reparten entre diferentes contratos según las **asignaciones** definidas por cada inversora.

En las facturas se separan los kWh a **precio Generation** de los que son a **precio de mercado**.


## Documentación

[Píndoles Generation kWh](https://github.com/Som-Energia/somenergia-generationkwh/blob/master/docs/intro-ca.markdown){target=_blank}

[Modelos de inversión](https://github.com/Som-Energia/somenergia-generationkwh/blob/master/docs/inversions.markdown){target=_blank}

[Origen requisitos](https://github.com/Som-Energia/somenergia-generationkwh/blob/master/docs/domaincriteria.md){target=_blank}

[Módulos Generation](https://raw.githubusercontent.com/Som-Energia/somenergia-generationkwh/master/docs/GenKWh-UsageTrackerDetails.png){target=_blank}

<div class=notes>

### Píndoles

Formación que hicimos cuando lo pusimos en produccion

Ahora la gestion de las inversiones tiene botones para cada operacion.

### Modelos de inversión

Hablaremos de ellos pero la documentacion entra  mas en detalle

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
</div>


## Road Map

Modelos de inversión

Concesión de derechos

Asignación de contratos

Uso de derechos

Corrección de derechos

<div class=notes>
- **Modelos de inversión:** Ciclo de vida (operaciones/estados) de una inversion: compra, pago, activacion, amortización, cancelación, desinversión...
- **Concesión de derechos:** A partir de la producción definir que derechos van a cada socia
- **Asignación de contratos:** Cómo se define qué contratos se benefician de los derechos de una socia
- **Uso de derechos:** Cómo se usan (o devuelven) los derechos en las facturas
- **Corrección de derechos:** Cómo rectificar derechos generados erróneamente
</div>


# Modelos de inversión {
	data-background-image="images/logo-somenergia-nobg.svg"
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


## Operaciones

- Orders (Client via form)
- Charge (SE payment order)
- Return (Payment order returned)
- Discard 
- Divest
- Expire (Time)
- Pay Interest
- Amortize
- Transfer (ownership)

## Operaciones (ERP)

TODO

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


# Concesión de derechos

## Derechos

**kWh disponibles para uso de un socio inversor a precio Generation**

Están vinculados a la hora de producción\
Solo se pueden gastar en el mismo periodo tarifario en que fueron producidos

Regla de tres entre:

- la **producción de las plantas** (hora a hora)
- la **inversión del socio** (día a día)
- el **coste de las plantas** construidas (día a día)

<div class=notes>

Derechos = Produccion * Inversion Usuario / Inversion Total

A menos que tenga muchas acciones,
cada hora suele ser tan poca, que hay que ir acomulando
fracciones de kWh hora a hora para llegar a un kWh entero.

**¡Es importante gestionar los remanentes de kWh para que no se pierdan!**
</div>


## Precálculo por perfil

No almacenamos curvas de derechos para cada socio

Precalculamos para cada número de acciones (Perfil)

**Ojo:** Un socio cambia de perfil cuando se activa o expira una inversión

La curva de derechos de un socio concreto será un collage de curvas de varios perfiles


<div class=notes>
En el ERP, las curvas según número de acciones se llaman `RightsPerShare`.
Están almacenadas en Móngo como un `MongoTimeCurve`.
</div>


## Flujo de cálculo

![](https://raw.githubusercontent.com/Som-Energia/somenergia-generationkwh/master/docs/PlantProducctionToUseRights.png){style="width:50%"}


<div class=notes>
1. calculamos la producción agregada
1. calculamos los derechos para cada perfil
1. componemos los derechos del socio a partir de los de cada perfil que adopta

- La primera y segunda fase se precalculan por la noche
- La tercera se hace en el momento de usarlos
</div>

## Mix-Planta-Contador


<div class=notes>
- **Mix:** GenerationkWh (podria haber otros)
- **Plant:** coste en acciones asociado, fechas activa
- **Meter:** número de serie del contador, fechas activo

¡Meters aun no tienen `last_efective_date`!
</div>


![](images/genkwh-scripts-plants.png){style="width:70%"}

## Producción contador

![](images/genkwh-scripts-productionCurve.png){style="widht:70%"}

<div class=notes>
- Antes lo leiamos nosotros de Monsol
- Ahora lo lee Gisce de la planta directamente
- Lo deja como `MongoTimeCurve` en la coleccion del Mongo `tm_profile`
- Script permite otras agregaciones (mensuales, con o sin detalle por horas)
</div>


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

## Discretización

Obtener, para cada perfil, derechos en kWh enteros 
sin perder fracciones entre hora y hora

- Convertir producción agregada a Wh (`*1000`)
- Aplicar proporción: acciones / construidas
- Suma acomulada hora a hora (integral)
- Discretizar a kWh (`//1000`)
- Diferencia hora a hora

Guardamos el remanente (en Wh) del intérvalo calculado
para usarlo para el pròximo intérvalo.

<div class=notes>
- Los calculos los hacemos con Wh para tener más precisión
- Es posible que no sea precisión suficiente
    - Consta que los que menos acciones tienen, pierden
</div>

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


# Asignación de contratos

## Asignaciones

Definen qué contratos se benefician\
de las inversiones de un socio

Cualquier contrato de Som Energia\
relacionado o no con el socio

Puede haber más de un contrato beneficiario

Se pueden establecer prioridades entre los contratos

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

## Asignaciones por defecto

Cuando se activa la primera inversión de una socia

Se hace una asignación por defecto

Se le envia un correo con la propuesta por si quiere hacer cambios

## Asignaciones por defecto

Todos los contratos en que la socia es titular o pagadora

Se prioriza el que tenga más consumo como titular

Si no, el que tenga más consumo como pagador

El resto por debajo con la misma prioridad


## Prioridades

Una factura de un contrato no puede usar derechos
generados a fechas que otro contrato más prioritario
no haya facturado aún.

**Desde el otro punto de vista:**

Le damos opción al prioritario de gastar primero los derechos.
Si el prioritario factura la fecha en que se han generado y no los gasta,
quedan disponibles para el resto de contratos.


## Porqué prioridad laxa

La generación de facturas no es ordenada

Cada contrato puede salir antes o despues que otro

Hay contratos con facturación bloqueada

Abonos, refacturaciones, borradores...

A misma prioridad o en zona no restringida, el primero que factura se lo lleva.


# Uso de derechos

## Anotando el uso

El uso de los derechos sí que\
se almacena por cada socia

A medida que usamos kWh,\
la curva de uso del socio va igualando sin superar,\
a su curva de derechos


<div class=notes>
Si, la curva de derechos de la socia que no almacenamos
y que calculamos como collage de los perfiles que ha tenido.

Si reescribimos la curva de derechos a la baja,
podemos acabar teniendo derechos usados que no se han otorgado

Aunque en suma sean iguales o menos,
podrian ser mayores hora a hora.

Los 
</div>


## Uso y retorno

Cuando se crea una factura en borrador se reservan derechos.

Cuando se borra, abona, rectifica... se devuelven derechos.

Ojo, facturas en borrador reservan derechos\
hay que borrarlas si no son buenas.


## Periodos P1, P2...

La facturación pide 


## Derechos usados

![](images/genkwh-scripts-usedRights.png){style="width:90%"}


## Ventana de uso

![](images/genkwh-invoice-windowing.png)

<div class=notes>
Una factura de un contrato no puede consumir derechos

- **del futuro**: más modernos que la última fecha a facturar
- **caducados**: más antiguos que 12 meses de la primera fecha a facturar
- **reservados**: de fechas que un contrato más prioritario no haya facturado aún

Los 12 meses de caducidad se cuentan desdel inicio del periodo de facturación.
La caducidad real se extiende aproximadamente a 13 meses.

Si hay varios periodos, tambien enmascaran la ventana las horas correspondientes.
</div>



## Uso de derechos

Dentro de la ventana de uso:

**Se usan** los mas antiguos sin usar

**Se devuelven** los más modernos usados

No guardamos los dias/horas de origen en las facturas







