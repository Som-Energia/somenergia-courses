---
title: Intercoop
---

# Motivación

## Intercoop

Plataforma de intercooperación entre entidades

Automatiza que usuarios de unas entidades accedan a servicios de otras 

Otros usos: Promociones (Navidad), Invitaciones (socio vinculado, cambios de titular...)

<div class=notes>
- Promociones e invitaciones, se ven como un traspaso de usuarios a servicios dentro de la misma entidad
</div>

## Economía Social

Funcionamos en un mercado hostil gracias a la implicación de la gente

Cambiar el modelo económico:
cubrir todos los ámbitos de la vida con la Economía Social

No nos podemos implicar en todas las entidades que cubren todas esas necesidades

<div class=notes>
- Actividad económicamente viable
- En el centro, las personas y el medio ambiente
  no la generación de beneficios
- Mercado hostil, nuestra fuerza la implicación de la gente
- Sobrevivimos gracias a sus aportaciones y dedicación
- Objetivo: Cambio de modelo económico
- Cubrir todos los aspectos de la vida con ES
- Si tenemos que implicarnos o aportar en cada entidad llega un momento en que es inviable.
</div>

## Convenios bilaterales

Implicándose en una entidad, se puede acceder a servicios de las otras.

Handicap para las entidades:

**Usuarios que no aportan:**
En el convenio, 
salvaguardas para compensar desequilibrios

**Usuarios con gestión extra:**
Comprobar origen, monitorizar desequilibrios, aplicar compensaciones

## Automatización

Para reducir el coste de gestión, pero:

1 módulo para recibir usuarios de cada otra entidad

1 módulo para enviar usuarios a cada otra entidad

**Coste comunitario:** 2N(N+1) (geométrico)

**Protocolo común**

Reducimos a 2 por entidad, y el coste 2N (lineal)

Nuevas entidades no generan coste a las que ya estan

<div class=notes>
- Coste comunitario es el esfuerzo global de todas las entidades
- Cada entidad (N) tiene que recibir y enviar usuarios (2) a las otras entidades (N-1)
- Así que el coste comunitario de automatizar la intercooperación es de 2N(N-1)
- Con 4 entidades, 24 modulos. Con 10, 180 modulos! Con 50 entidades, 4900 módulos!
- ¿Somos potencialmente 10 entidades? Sí, y 50 también. Es inviable.
- Así que nos tenemos que poner de acuerdo sinó puede ser una locura.
- Un protocolo común permite que una entidad use el mismo módulo para hablar con cualquier otra entidad.
- Cada entidad implementa el protocolo para enviar y para recibir (2 modulos)
- A partir de ahí, no tiene impacto que se sumen 50 o 1000 entidades a la comunidad
</div>

## Desarrollo comunitario

Compartir esfuerzos si coincide la tecnología base

Desarrollo colaborativo y Open Source

Y como somos Economía Social, ¡Libre!

La N del coste pasa a ser el número de tecnologías

<div class=notes>
- Podemos reducir aún más el coste comunitario
- Compartamos el esfuerzo de desarrollo
- Siempre que se comparta la tecnología base
- El lenguaje o incluso el framework
- La N pasa a ser las tecnologías, no las entidades
- Habrá partes que son específicas de cada entidad
- Hay que diseñar las librería para aislar los elementos diferenciales y que se puedan substituir o parametrizar para cada entidad
</div>

## Flexibilidad

Aunque el desarrollo sea comunitario,
cada entidad tiene sus especificidades

**Diseño que aisle los elementos diferenciales:**

- Cómo se obtienen los datos personales
- Descripciones de entidades y servicios
- Formularios de contratación

Parametrización (descriptores) y módulos intercambiables


<div class=notes>
- Habrá partes que son específicas de cada entidad
- Cada entidad accederá de forma distinta a los datos de sus usuarios
- Los servicios ofrecidos tendrán diferentes requerimientos de datos
- Hay que diseñar las librería para aislar los elementos diferenciales y que se puedan substituir o parametrizar para cada entidad
</div>


## Otros principios

**Privacidad:** Transparencia y soberanía de los usuarios sobre sus datos
 
**Conveniencia:** No fastidiar al usuario

**Confiabilidad y seguridad:** Firmado y cifrado

**Evolucionable:** Cambiará, seamos conscientes

<div class=notes>
- Privacidad:
	- Distancia entre lo legal y lo ético
	- Hemos ido más allá que la ley en compromiso con la transparencia y el control sobre los datos
	- Legalmente podriamos añadir una cláusula general que nos permita ceder datos con quien quisieramos
	- No nos parece aceptable
	- Intercoop pide permiso explícito para cada cesión, mostrándote en qué consiste
	- No estamos seguros que algo así se pueda hacer según el nuevo reglamento, lo estamos revisando con Legal
- Conveniencia
	- Se evita la introducción de datos repetida
- Cifrado y firmado
	- Sistema distribuido peer 2 peer
	- No hay una entidad que centralice
	- Las entidades se reconocen por sus claves publicas y privadas
- Flexibilidad
	- Muchos aspectos son parametrizables
	- Muchos módulos reimplementables
- Evolucionable:
	- Actualización de los servicios ofrecidos
	- Actualización del protocolo (para incluir cosas no previstas de entrada)
	- Mejor adaptar que intentar ser muy generico (y complejo)
</div>


# Propuesta

## Roles

Las entidades adoptan dos roles a la vez:

**Proveedora de Usuarios**

Amplia su **portal de usuario**
con un **catálogo** de servicios de entidades intercooperantes

**Proveedora de Servicios**

Ofrecen servicios a través de sus **Formularios de Contratación**
y una **API intercoop** para recibir transferencias de usuarios
de las otras entidades.

<div class=notes>
- Proveedoras de Usuarios:
	- Ofrecen **portales** para que las usuarias gestionen sus datos
	- Se les añade un **catálogo de servicios** de otras entidaes
	- Nuestro portal seria la **Oficina Virtual**
- Proveedoras de Servicios
	- Ofrecen **formularios** de contratación de los servicios
	- Añaden una **API intercoop** donde aceptar tranferencias de usuarios de otras entidades
</div>

## Activación de servicios

![](images/intercoop-mainscenario.svg){style=border:none;width:70%}

<div class=notes>
1. La usuaria en el Portal de su entidad
	- Se identifica
	- Explora el catálogo de servicios intercoop
	- Indica que quiere activar uno de ellos

2. El Portal le informa de:
	- los datos que se transferirán
	- la política de privacidad del destino

3. Si la usuaria acepta, el portal
	- Cifra los datos y certifica el origen
	- Los envía a la API del destino
	- La API responde con un token

4. El portal redirige a la usuaria
	- Al formulario de contratación de destino
	- Se adjunta el token

5. La usuaria rellena el formulario en destino
	- No se preguntan los datos transferidos

Otros usos, donde el proveedor de servicios y usuarios es el mismo.
Pero el usuario o la aplicación no son el mismo.
Se quiere certificar el origen y pasar algun dato.

- Invitaciones, Promociones, Comunicación entre servicios internos...


</div>


# Arquitectura

## Librerias

Python (completa) y PHP (acabándose)

Módulos comunes y módulos personalizables

Test driven developed

Ambas tienen estructura muy similar

Incluyen ejemplos funcionales contra los que probar


##

![](images/intercoop-architecture.svg){style=border:none;width:80%}

<div class=notes>
- Libreria común (azul) vs módulos personalizados (rojo)
</div>

## User provider

**Portal:** La web donde las usuarias pueden hacer gestiones.
En el caso de Som, la Oficina Virtual.

El Portal puede acceder al módulo común `Catalog` para navegar por los servicios y activarlos.

Se requiere **validación** para usar el portal
o cómo mínimo para activar los servicios.

**UserInfo:**
Cada entidad ha de implementarla para obtener la información de una usuaria.

## Personalizables: API

**WebService Framework:**
Adaptación del módulo común `Intercoop API`
al framework web que se use en le proveedor de servicios.

**Service Forms:**
Formularios de contratación,
adaptados para usar el token y no preguntar esa información
de la que ya se dispone.

**Remote User Info:**
Repositorio temporal o no de la información que viene
de los proveedores de usuarios.

<div class=notes>

</div>


## Peer Descriptor

Información de una entidad y sus servicios

Indica los datos de usuario que se requieren

Formato YAML, fáciles de crear y compartir

Doble versionado: contenido y formato



# Proyectos

## 

Integrar catálogo en la OV (Girona/APSL)

Aceptar tokens en los formularios (Girona)

Soportar otros lenguajes

Promociones de Navidad

Invitaciones de socios

Gamificación Economía Social







