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

## Interés para Hackasom

**Aplicación como entidad:**

Acceso consentido a datos personales

Certifica que es persona socia-titular-empleada

Visibilidad de la app en la OV

**Nos podeis ayudar:**

Implantarlo en otras entidades

Migrarlo a otros lenguajes

<div class=notes>
- ¿Porqué lo explicamos en el hackaton?
- Si consideramos una aplicacion como otra entidad
	- Veremos la aplicacion en la OV como un servicio de intercoop más
	- Hace las funciones de OAuth, para el registro
	- Se certifica la relación del usuario con la cooperativa
	- No se limita a Som, otras entidades de la ES la verán
- También es un ámbito donde podeis colaborar
</div>


## Economía Social

Funcionamos en un mercado hostil gracias a la implicación de la gente

Cambiar el modelo económico:
cubrir todos los ámbitos de la vida con la Economía Social

No nos podemos implicar en todas las entidades que cubren todas esas necesidades

<div class=notes>
- ¿Porqué se ha creado la plataforma?
- Para potenciar la Economia Social
- Actividad económicamente viable
- Pero pone en el centro, las personas y el medio ambiente
  no la generación de beneficios
- Ante un mercado hostil, nuestra fuerza la implicación de la gente
- Sobrevivimos gracias a sus aportaciones (material) y dedicación (temporal)
- Nuestro objetivo: Cambio de modelo económico
- Para ello aspiramos a cubrir todos los aspectos de la vida con ES
- Si tenemos que implicarnos o aportar en cada entidad llega un momento en que es inviable.
</div>

## Convenios bilaterales

Implicándose en una entidad, se puede acceder a servicios de las otras.

Handicap para las entidades:

**Usuarios que no aportan**

**Usuarios con gestión extra**

Gestión extra, incluyendo las salvaguardas para compensar los desequilibrios introducidos por usuarios que no aportan.

<div class=notes>
- Para que no sea tan inconveniente para los usuarios, se empezaron a hacer convenios bilaterales
- Eso lleva a un doble handicap:
	- Hay usuarios que no aportan
	- Además generan gestión extra, como mínimo comprobar que sean de la entidad de origen
- Para que no se desequilibre la entidad se suelen añadir al convenio salvaguardas para compensar
- Esas salvaguardas se añaden a la gestión extra
</div>


## Automatización

Para reducir el coste de gestión, pero:

1 módulo para recibir usuarios de cada otra entidad

1 módulo para enviar usuarios a cada otra entidad

**Coste comunitario:** 2N(N+1) (geométrico)

Se necesita un **protocolo común**

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


## Privacidad

Transparencia y soberanía en la gestión de los datos de los usuarios

Toda transferencia de datos es explícitamente autorizada por el usuario

Legalmente se podría pedir un permiso general
pero no nos parece ético porqué representaría una pérdida de control

Irónicamente, el reglamento parece que nos impide la cesión explícita.
Los abogados lo están revisando.


<div class=notes>
- Privacidad:
	- Distancia entre lo legal y lo ético
	- Hemos ido más allá que la ley en compromiso con la transparencia y el control sobre los datos
	- Legalmente podriamos añadir una cláusula general que nos permita ceder datos con quien quisieramos
	- No nos parece aceptable
	- Intercoop pide permiso explícito para cada cesión, mostrándote en qué consiste
	- No estamos seguros que algo así se pueda hacer según el nuevo reglamento, lo estamos revisando con Legal
</div>


## Otros principios

**Conveniencia:** No fastidiar al usuario

**Confiabilidad y seguridad:** Firmado y cifrado

**Evolucionable:** Cambiará, seamos conscientes

<div class=notes>
- Conveniencia
	- Se evita la introducción de datos repetida
- Cifrado y firmado
	- Sistema distribuido peer 2 peer
	- No hay una entidad que centralice
	- Las entidades se reconocen por sus claves publicas y privadas
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
</div>

## Ejemplo de uso

1. Exploración de los servicios
1. Selección del servicio a activar
1. Aceptación (o no) de la transferencia
1. Contratación del servicio en destino

[Video](images/intercoop-screencast.ogv){target="_blank"}

## Otros usos

**Invitaciones:** Usuario origen genera token, usuario destino usa el token

**Promociones:** Igual que las invitaciones pero el usuario origen es la entidad

**Comunicación servicios internos:**
Para comunicar servicios internos desacoplados.
Usamos la certificación del origen.


<div class=notes>
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

## Custom: Portal side

**Portal:** La web donde las usuarias pueden hacer gestiones.
En el caso de Som, la Oficina Virtual.

El Portal puede acceder al módulo común `Catalog` para navegar por los servicios y activarlos.

Se requiere **validación** para usar el portal
o cómo mínimo para activar los servicios.

**UserInfo:**
Cada entidad ha de implementarla para obtener la información de una usuaria.

## Custom: API side

**WebService Framework:**
Adaptación del módulo común `Intercoop API`
al framework web que se use en el proveedor de servicios.

**Service Forms:**
Formularios de contratación,
adaptados para usar el token y no preguntar esa información
de la que ya se dispone.

**Remote User Info:**
Repositorio temporal, o no, de la información que viene
de los proveedores de usuarios.

<div class=notes>

</div>


## Descriptor de entidad

Información de una entidad y sus servicios

Indica los datos de usuario que se requieren

Formato YAML, fáciles de crear y compartir

Doble versionado: contenido y formato

Módulo `PeerInfo` abstrae una colección de ellos en una API.

## `somenergia.yaml`

```yaml
intercoopVersion: "1.0"  # Version of the protocol
peerVersion: 1 # Version of the descriptor data
peerid: somenergia # readable text identifier for the peer
name: Som Energia SCCL
logo: https://www.somenergia.coop/wp-content/uploads/2014/07/logohdmi.png
description: 
  es: Contrata la luz con la cooperativa de energía verde
  ca: Contracta la llum amb la cooperativa de energía verda
url:
  es: https://www.somenergia.coop/es
  ca: https://www.somenergia.coop/ca
  eu: https://www.somenergia.coop/eu
  gl: https://www.somenergia.coop/gl
privacyPolicyUrl:
  es: https://www.somenergia.coop/es/politica-de-privacidad-cookies-y-aviso-legal/
  ca: https://www.somenergia.coop/ca/politica-de-privacitat-cookies-i-avis-legal/
  eu: https://www.somenergia.coop/eu/pribatutasun-politika-cookie-ak-eta-lege-oharra/
  gl: https://www.somenergia.coop/gl/politica-de-privacidade-cookies-y-aviso-legal/
info:
  es: >
    Som Energia es una cooperativa de consumo de energía verde sin ánimo de lucro.
    Nuestras principales actividades son la comercialización y producción de energía de origen renovable.
    Estamos comprometidos a impulsar un cambio del modelo energético actual para conseguir un modelo 100% renovable.
  ca: >
    Som Energia és una cooperativa de consum d’energia verda sense ànim de lucre.
    Les nostres activitats principals són la comercialització i la producció d’energia d’origen renovable.
    Estem compromesos a impulsar un canvi del model energètic actual per assolir un model 100% renovable.
  eu: >
    Som Energia irabazi-asmorik gabeko energia berdearen kontsumo-kooperatiba da.
    Gure funtsezko jarduerak jatorri berriztagarriko energiaren ekoizpena eta komertzializazioa dira.
    Oraingo eredu energetikoaren aldaketaren alde gaude %100eko eredu guztiz berriztagarria lortzeko.
  gl: >
    Som Energia é unha cooperativa de consumo de enerxía verde sen ánimo de lucro.
    As nosas principais actividades son a comercialización e produción de enerxía de orixe renovable.
    Estamos comprometidos a impulsar un cambio do modelo enerxético actual para conseguir un modelo 100% renovable.
services:
  contract:
    name:
      es: Contrata la luz
    description:
      es: Contratar luz como si fueras miembro de la cooperativa.
  generationkwh:
    name:
      es: Generation kWh
    description:
      es: Participar en los proyectos de autoproducción colectiva.
  recuperaelsol:
    name:
      es: Recupera el sol
    description:
      es: Participar en rescates de proyectos solares en quiebra.
  collectivepurchases:
    name:
      es: Compras colectivas
    description:
      es: Participar en compras colectivas para socios/as.
      ca: Participar en compres col·lectives per a socis/es.
targetUrl: https://api.somenergia.coop/intercoop/contrataluz
dataFormat: yaml
fields:
- innerid # serial number within the source entity
- peerroles # list of roles within the source entity (member, worker, customer...)
- nif
- name
- address
- postalcode
- city
- state
- country
- phone
- email
- proxynif
- proxyname
publickey: |
  -----BEGIN PUBLIC KEY-----
  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA6NNjLFEswRPwzTbuD1Oa
  H9eIVR3U/8iBxQR9jgExqCEI/4oBjBk/eZmYOVdygkZgTeU0TxD5NFd5Zd0Cewz3
  kTkUHJ9YLHSb2SClE6pYlocRYlrvPxEa0XIF+ujRcpKUk5UpEcFNzmNS0s7cUpB+
  UufeEUSyiETeMlu0pqhIXQZSQlgxBt3Fb4vUv8E2Jp1jb4b8A7iygN7oPE7800NX
  VqoCLTnoc3IPDTPugoxfH59rY7LZH0yCCFl5gIAmM1J+w6YFdfjSSwZyE4w/0aF8
  Y4CXTEOoo8f0vTnpN96or4ObdI1ZMwU8b7rpxEHmP2exAul9FnoEZytVtteAYpIt
  QwIDAQAB
  -----END PUBLIC KEY-----
# vim: et ts=2 sw=2
``` 

## `schema.yaml`

```yaml
$schema: http://json-schema.org/draft-06/schema#
id: http://intercoop.somenergia.coop/peerinfo-schema/1.0/#
title: Peer catalog and api information for intercooperation
description: >
  This schema defines a format to describe a peer entity 
  in a intercooperation context using the intercoop protocol.
  It includes information to be able to display a catalog
  of services and how to activate them via an intercoop api.
type: object
required:
- intercoopVersion
- peerVersion
- peerid
- name
- logo
- description
- url
- privacyPolicyUrl
- services
- targetUrl
additionalProperties: false
properties:
  intercoopVersion:
    type: string
    pattern: '[0-9]+(\.[0-9]+)*'
    enum:
    - "1.0" # Force current version
  peerVersion:
    type: integer
  peerid:
    type: string
    pattern: '^[a-z]+$'
  name:
    title: Entity name
    type: string
  logo:
    title: Url to the entity logo
    type: string
  publickey:
    title: Public RSA key in PEM format that others peers can use to validate signed messages from the entity
    type: string
  description:
    title: Single line entity description
    $ref: "#/definitions/translatable"
  url:
    title: Url to entity's web page
    $ref: "#/definitions/translatable"
  privacyPolicyUrl:
    title: A link to the entity privacy policy
    $ref: "#/definitions/translatable"
  info:
    title: Extended information in markdown format
    $ref: "#/definitions/translatable"
  services:
    title: Services that the entity offers
    type: object
    patternProperties:
      "^[a-z]+$": 
        $ref: "#/definitions/service"
    additionalProperties: false
  dataFormat:
    type: string
    default: yaml
    enum:
    - yaml
    - json
    - xml
  targetUrl:
    title: base Url to redirect services
    type: string
  fields:
    title: Transferred fields for any service not specifying it
    default:
    - peerid
    - nif
    $ref: "#/definitions/transferFields"

definitions:

  transferFields:
    title: fields that a service could request to share
    type: array
    items:
      type: string
      enum:
      - originpeer # slug id of the source entity (required)
      - innerid # serial number within the source entity
      - peerroles # list of roles within the source entity (member, worker, customer...)
      - nif # includes dni, cie and cif
      - name # "surname, fistname" for physical persons, 
      - address
      - postalcode
      - city
      - state
      - country # ISO code
      - phone # Preferred contact phone
      - email # Preferred contact email
      - lang # Language preferred by the user (ISO code)
      - langs # Languages accepted by the user sorted by preference (ISO code)
      - proxynif # For legal persons, the proxy phisical person nif (see nif)
      - proxyname # For legal persons, the proxy phisical person name (see name)

  translatable:
    title: strings that can be optionally translated
    description: >
      Translatable strings may have plain string values
      or they can contain a map of translations with the
      2-letters of the lang ISO code.
    anyOf:
    - description: optionally untranslated string
      type: string
    - description: a map of translations including at least 'es'
      type: object
      required:
      - es
      additionalProperties: false
      patternProperties:
        (es|ca|gl|eu|an|ast|oc):
          type: string

  service:
    type: object
    required:
    - name
    - description
    additionalProperties: false
    properties:
      name:
        $ref: "#/definitions/translatable"
      description:
        $ref: "#/definitions/translatable"
      fields:
        description: Fields to be transferred to activate the service
        $ref: "#/definitions/transferFields"

# vim: et ts=2 sw=2
```

## Diccionario de campos

Cada entidad describe las personas de forma diferente.

Se definen campos y semanticas consensuadas

La traducción la hace el custom module `UserInfo`.

También se encarga de ir a buscar la info donde este en la plataforma que use cada entidad.

# Proyectos

## Gamificar Econ. Social

Perfil Economía Social

¿En cuántas entidades participas?
¿De cuántas maneras?
¿Ofreces ayuda?
¿Necesitas ayuda?

Las entidades certifican la implicación de sus miembros vía Intercoop

Opt-In: si no quieres no se comparte


## Implantarlo en Som

Integrar catálogo en la OV

Aceptar tokens en los formularios de SOM

Promociones de Navidad

Invitaciones de socios

## Ampliar Intercoop

Soportar otros lenguajes

Integrar otras entidades

Actualización automática de descriptores

Consensuar diccionario de datos

## Wanna Hack?

Documentación y librerías (Python, PHP)

[`github:som-energia/intercoop`](http://github.com/som-energia/intercoop){target=blank_}






