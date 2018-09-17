# Planteamiento

## ¿Cómo fué el anterior?

Buena asistencia. Gente potente

Se montó el Github SomLabs

Se concentraron esfuerzos en 4 proyectos software


## Projectos presentados

- SomMaps
- Wrapper API
- App mobil  
- Gamificacion
- Hardware

## ¿Puntos a mejorar?

No pudo ir nade de la oficina de Girona

Incertidumbre sobre la realidad técnica de Som

Faltaban las API's

Se focalizó en tener algo durante el día

Sin mucha continuidad después


## ¿Qué vamos a hacer este?

IT Girona volcado en el Hackaton

Se han preparado API's, documentación...

Focalizar en construir una comunidad

Venimos con propuesta (mártir)

Hackearemos más bien poco, en los cafes y en otros encuentros que podamos hacer a partir de ahora

## La propuesta

Canales de comunicación (Telegram, github...)

Nutrir equipos. Roles. Relevos

Comité de bienvenida

Lista de propuestas de proyectos

Camino para empezar nuevos proyectos

Procedimientos para pedir cosas a IT:

API's, consultas técnicas, infraestructura, formación...


# Recursos

## Repositorios

**som-labs** ([enlace](https://github.com/som-labs){target=_blank})<br>
gestionados por la comunidad - participa IT

**som-energia** ([enlace](https://github.com/som-energia){target=_blank})<br>
gestionados por IT - participa la comunidad

No es necesario tener acceso de escritura para aportar

Algunos proyectos de SomEnergia requieren datos personales no compartibles.

Gisce sigue sin publicar el codigo del ERP

## Comunicación

Grupo de Telegram

Mecanismos propios de Github (issues)

¿Lista de correo?

## Materiales formación

Por fin podemos dedicar tiempo en Girona a formación interna.

Los materiales de las formaciones internas son públicos
([enlace](https://som-energia.github.io/somenergia-courses/){target=_blank})

Podreis conocer las tecnologías y metodologías que usamos y como está montado todo.

También estaría bien formación desde la comunidad hacia Girona o a otros voluntarios.


# Construyendo comunidad

## Preguntas

¿Cómo acogemos a las nuevas hackers?

¿Cómo organizamos las ideas de proyectos?

¿Cómo empezar y mantener proyectos?

¿Cómo podemos recabar ayuda de IT Girona?

¿Cómo avanzamos sin esperar las APIs de IT Girona?

¿Cómo pedimos infrastructura?

¿Cómo saber como funciona Som por dentro?

## Acogida

Personas encargadas del **comité de bienvenida**, que ayuden a las recien llegadas

**Landing zone:** Una página con la lista de recursos por donde empezar

Si usamos el Telegram, hay que decirlo

Eliminar/Redirigir **recibidores desiertos**: Plataforma...


## Lista de ideas

Ya hay diversas listas. Juntar, limpiar y clasificar:

- Propuestas en la Plataforma
- [Ideas del Hackasom 2017](https://docs.google.com/document/d/1BX8mtYhKTIAmeHnsFHBwPeULqj96id-CFmyjkdmO1Ik/edit#) en un Drive
- Este año se han hecho propuestas en el Decidim
- IT Girona: Proyectos para paracaidistas

**Propuesta:** Issues en el SomLabs o iniciativas del Partricipa...

<div class='notes'>
- Paracaidistas: Estudiantes, voluntarios, training...
- Son proyectos que puedes hacer sin meterte en el core
- El participa va bien para votar y ver interés pero no recabar voluntarios
- Hay que plantearse si podemos usar bounties.
</div>

## Incorporaciones


Designar administradoras del github

¿Cómo alguien se suma a un proyecto existente?

Importante explicar el setup de desarrollo 

Cuando alguien se acerca a un proyecto sus aportaciones suelen tener fallos, hay que ser generosos, hemos decidido compartir nuestra criatura con la comunidad.

<div class='notes'>
- Tambien fallbacks para no quedar huerfanos
</div>

## Ayuda de Girona

Estamos en el Telegram y normalmente pendientes

Intentad resolverlo en la comunidad.

Los proyectos para paracaidistas son más divertidos
y nos desviaremos de otras cosas más aburridas pero más vitales para la cooperativa.


## Recursos de Girona

API's nuevas

Formaciones

Acceso a datos

Infrastructura (servidores, DNS's...)

Traspasar mantenimiento

## API's nuevas

Mockup que simule lo que queremos de la API

Definimos la interficie de ese mockup de forma que lo podamos substituir por un proxy remoto que realmente ataque a la api.

Ojo, hay que simular asincronia.

No hace falta ningún framework de simulación. En serio.

Desarrollando el front-end de los formularios simulamos CAS y la API de contratación.



# API OpenData

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

Incluiria Andalucía (01) y los municipios Tinerfeños de 
_Granadilla de Abona_ (38017) y
_Guía Isora_ (38019)

Se usan los códigos del INE ([web](http://www.ine.es/daco/daco42/codmun/codmunmapa.htm){target=_blank})


## Ideas: Nuevas métricas

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

## Ideas: Formatos y visualizaciones

**Formatos:** Soportar JSON, CSV... no solo YAML

**Visualizaciones:** Usando los datos de la API o integradas en la API como formato de salida

Gráficas -
Mapas -
Animaciones -
Interactivos

¿Concurso?

## Ideas: Frontend

Hacer accesible la herramienta a personas no técnicas para que la puedan usar los grupos locales

Construcción interactiva de la query

Integración de las visualizaciones

Conversor Grupo Local -> lista de municipios

Generación de snippets para integrar en el blog

# CAS

## Autentificación

Muchas cosas que se quieren implementar requieren validar la aplicación y el usuario que la maneja.

- Aplicaciones web hospedadas por Som, o no.
- Aplicaciones cliente de móbil o escritorio.
- API's autentificadas.

Porque:

- Acceden a datos personales.
- Operaciones delicadas (contratar, dar de baja...)


## CAS, ¿qué es?

Funcionalidad equivalente al Google Accounts
para aplicaciones de SomEnergia

Protocolo standard y herramientas abiertas

Permite que aplicaciones web desarrolladas independientemente
pero en un mismo ámbito (SomEnergia) compartan la sesión

Las aplicaciones se fian de una tercera para saber si el usuario tiene la sesión abierta.

## CAS, ¿qué NO es?

No es **LDAP**: No solo se comparte el directorio de usuarios, también la sesión abierta.

No es **OpenID**: No es una identificacion descentralizada sino centralizada.

No es **OAuth**: No sirve para que accedan terceras partes a los recursos del usuario.

Sí que se puede usar en combinación con esas tecnologías

## ¿Dónde lo usamos?

De momento, Decidim/Participa y la Oficina Virtual.

Lo usarán los formularios de contratación: se pedirá contraseña, evitará pedir datos que se tienen.

## ¿Cómo se puede utilizar?

TODO: Analizar para que si y para que no (privacidad, trust...)














