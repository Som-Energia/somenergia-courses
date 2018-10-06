
Som Maps
Alvaro Campos

    Limitado
    3 likes

Som Maps
Per Alvaro Campos fa 941 dies Replies (13)

    Herramientas
    Recursos
    Mapa

Hola a todos,

En la reunión de Grupos locales comenté la posibilidad de utilizar un mapa que había desarrollado un compañero de Energia Gara Bilbao (Javi A.) basandose en la versión que Goiener tiene en su página. De momento solo hemos metido Euskal Herria pero la adaptación es inmediata.

Som [Maps.zip](https://plataforma.somenergia.coop/file/view/153771/som-mapszip)

Adjunto el fichero con la idea de que veáis de que se trata y si le véis potencial para visibilizar nuestras actividades y demás cositas. A mi se me ocurre:

- Socios

- Proyectos renovables

- Certificados de origen

- Comercios

- Etc.

Molaría hacerlos por capas que se puedan activar/desactivar mediante clicks.

Adjunto la explicación que nos dio Javi cuando nos pasó la herramienta. En principio nos basamos en uno similar que tiene Goiener en su página pero habría que adaptarlo para que nos nos llamen copiones.

    Te mando una primera versión del mapa que tenemos entre manos. Te explico un poco el proceso que sigo.
    Por un lado parto del excel que enviaste tú con el nombre del pueblo y el número de socios que tiene, y por otro de un excel que me he montado yo con todos los pueblos de España y sus coordenadas.
    Lo que he hecho es un script en Matlab que mira en el excel de socios el nombre del pueblo, busca en el otro excel qué coordenadas tiene y pone en el mapa de Google Maps tantos marcadores como socios tiene el pueblo.
    En principio el script es bastante autónomo. Lo ejecutas y genera el mapa completo. Puede haber problemas con el nombre de algún pueblo, que en un excel sea diferente que en el otro y entonces no lo encuentra, pero se corrige la primera vez que sale y listo.
    Luego habría detalles a mejorar. Por ejemplo, ahora cuando se aleja el mapa, cómo agrupar los marcadores está en forma automática  .
    Otro tema es que está hecho en Matlab, pq a mí es lo que más cómodo me resulta, aunque quizás no es muy ortodoxo. Si se quiere difundir o que lo use otra gente, probablemente habría que rehacerlo en Visual Basic, Java o similar.
    Vamos hablando.
     

Para que funcione hay que descomprimirlo cada uno en su ordenador, por ejemplo el escritorio, y ejecutar el fichero SomMapsv1
 
Decidme si le véis potencial y le comento a Javi a ver que se puede hacer. Y si hay informáticos que pueden sumar y tal, pues se hace un equipo y perfecto.
 
Un abrazo

ÁLVARO

    Roger
    Per Roger fa 941 dies

    Y esaaa!!! Muy buena Álvaro, la primera impresión es muy positiva! Así de bote pronto veo:

    - Algunos nombres de pueblos/ciudades quedan solapados por el número de socixs.

    - Se deberá ir actualizando manualmente o se podría aplicar algún método para que cuando suban las actualizaciones se agilice la tarea?

    - He visto que cuando le das a un número augmenta el zoom. Podría ser posible darle al númerito y que salga ciudad y núm de socixs y algún dato más que no se tenga que modificar temporalmente?

    Brillantes fenómenos! Abrazos energéticos!

    Roger, Baix Llobregat 
    Daniel Espinheira
        1 like
    Per Daniel Espinheira fa 940 dies

    Gracias por compartir, Álvaro. Yo siempre insisto en eso de compartir, en documentar y en hacer las cosas para que resulten facilmente replicables.

    Yo he estado jugando un poco con servicios online como Cartodb para hacer algunos mapas de socias para Galicia, aunque se me han ido al traste un par de veces y por falta de tiempo no he actualizado en los ultimos meses.

    Realmente, para trabajar con los mapas, en serio, necesitamos acceso a los datos de socias y contratos, si no en tiempo real, pues actualizados, mínimo, cada mes, y acceso en un formato que nos permitiese trabajar comodamente.

    A mi se me ocurre que para hacer maravillas sería suficiente con lo siguiente:

    Datos de socias:
        fecha de alta
        código postal


    Datos de contratos:
        fecha de alta
        código postal

    Y ojo, porque creo que hasta ahora no se nos dan datos de contratos a los grupos, sino solo de socias, y con los contratos también se puede jugar.

    Con una tabla con estos datos, o mejor, unha base de datos accesible, o un servicio web que nos contestase a preguntas sobre eso, podríamos hacer un montón de cosas, desde un mapa estático de número de socias de nuestra comunidad, por provincia, por municipio (incluso por código postal, claro), lo mismo para el número de contratos e incluso vídeos vistosillos sobre la evolución de la cooperativa vista sobre el territorio.

    Lo mejor es que teniendo los datos cada grupo podría hacer sus mapas propios, o copiar los de los demás, facilmente.

    Pero, lo dicho, lo importante es poder acceder a esos datos.

    Problemas:
        Técnico: no conozco los entresijos de la aplicación de gestión pero no debería ser demasiado difícil hacer una consulta a las bases de datos que nos saque los datos que indico, y otra para cargarlos en una base de datos externa que pudieramos utilizar para hacer los mapas
        Legal: creo que limitando tanto los datos que consultamos nos libramos del tema LOPD ya que no veo nadie identificable

    En algún momento se me dijo que desde el equipo técnico pensaban en hacer algo de mapeo, pero en mi opinión, lo que deben hacer es proporcionar los datos y dejar que los grupos locales y socias juguemos.

    Entonces, como lo veis??

    Saúde e mapping!
    dani
    Alvaro Campos
        1 like
    Per Alvaro Campos fa 940 dies

    Perfecto chicos, 

    He hablado con Javi (el creador) para comentarle que el tema ha tenido cierto interés y que se meta en la plataforma, pues sabrá llevarlo mejor que yo. Sería interesante juntar un grupito con interés en el tema para ir dando respuesta a las propuestas/dudas que habéis ido señalando.

    Un abrazo

    Álvaro
    Jon Terés
    Per Jon Terés fa 939 dies

    Buenas! 

    cuando entre Javi podrá arrojar un poco más de luz, pero a priori, creo que no sería complicado el mantener el mapa actualizado a socixs y contratos casi al día. Igual que ahora el mapa lo que hace es leer en una de las tablas el nombre del municipio y busca en otra tabla las coordenadas que corresponden a ese mapa (porque lo que tenía en el momento de la prueba era una tabla de socios por municipio) se podria hacer vinculado al código postal ( para evitar errores en el nombre del municipio). La cuestión sería que el mapa tuviera acceso a leer de forma automática el archivo donde se van incluyendo los nuevos socios y tener así un mapa actualizado en la web en todo momento. No sé si me he explicado bien. Esto de cara a tener actualizado el número de socixs y contratos, que serían lo que varían más rápido. Y como herramienta para incluir otros datos (comercios amigos, certificados de origen, ayuntamientos de SOM...) me parece de primera!

    Seguimos os explorando esta vía. Y a ver qué nos cuenta Javi

    un abrazo! 

     

    Jon
    Javi Arenas
    Per Javi Arenas fa 935 dies

    Muy buenas!

    Este primer mapa que hice fue bastante de andar por casa, el objetivo era sólo ilustrar cómo podía quedar. Es mejorable. De todas formas como habéis comentado la clave de todo esto es cómo podemos tener acceso a los datos.

    Lo ideal sería poder disponer de alguna herramienta que nos permita acceder a los datos en tiempo real pero no sé hasta qué punto esto es viable a corto plazo. No soy informático y el tema de programación de bases de datos se me escapa un poco.

    La otra alternativa es desarrollar alguna herramienta offline que permita generar los mapas a partir de los datos, aunque sea de una simple hoja excel y que podría utilizar todos los grupos locales. El problema es que requeriría de un proceso manual de actualización cada cierto tiempo, lo cual a largo plazo no parece muy sostenible, pero al menos serviría para echar a andar el asunto.

    Un saludo.

    Javi
    Ana Marco
    Per Ana Marco fa 934 dies

     

    Ya está en ello Francesc Casadella, del equipo técnico. Os copio su mensaje:
    "Es genial el ejemplo de mapa que propone Javi de Bilbo y estoy 100% de acuerdo en que nuestro trabajo seria facilitar esos datos. 
    Tengo varias sesiones de trabajo documentadas sobre los mapas desde mayo hasta octubre de 2015, veo que en octubre se estaba mejorando el ERP y el formulario de alta de socios y contratación de donde proceden los datos de ubicación y se quedó ahí parada la cosa. 
    La persona técnica para este trabajo es David García, hablo con Marc a ver si puedo coordinarme con David y con el nuevo grupo que se está creando en la plataforma."
    Aina Barcelo
        1 like
    Per Aina Barcelo fa 932 dies

    Hola!

    Quisiera compartir aquí también para que no se pierdan 4 mapas que un socio de Som Energía en Barcelona en una feria me ha dicho que hizo para un proyecto de fin de carrera. Me dijo que ya lo había mandado, pero mejor que esté todo aquí. Podemos preguntarle lo que sea, aunque no es activo en el grupo por ahora. Su email <joanf94@gmail.com>
    http://bit.ly/1LQrIDE - Plantes de SOM ENERGIA (per tipus de planta)
     
    http://bit.ly/1Q5eloc - Plantes de SOM ENERGIA (per producció energètica aprox.)​
     
    http://bit.ly/1Q5ehoC - Plantes de SOM ENERGIA (per potència instal·lada)
     
    http://bit.ly/1QjhyTI -Distribució socis SOM ENERGIA (novembre 2015)

     
    Francesc
    Per Francesc fa 927 dies

    Hola, he hablado con David García y Marc y todos compartimos las mismas ganas de abrir los datos necesarios para poder completar estos mapas. El reto es: cuales son los datos que se deben abrir y como deberían estar clasificados?

    Por esto, propongo que entre todos consensuemos un EXCEL o similar con los datos que creemos que nos puedan ser útiles (podemos partir de lo que ha ido saliendo ya en este debate). Si alguien se atreve, aquí tiene una hoja en blanco para colaborar en la primera versión: http://bit.ly/SomMaps 

    Si os parece bien, luego transladamos esa hoja de Excel al equipo técnico para implementarla. Seria bueno comparar también el nuevo documento con los datos que ya existen en la actualidad en el Github de Som Energia:  https://github.com/Som-Energia/somenergia-dataexports por cierto, en este repositorio, a parte del codigo que genera los datos (en formato csv con tabuladores) como los mapas que mandamos a los GL (formato SVG) podéis ver algunos ejemplos en el directorio "b2bdata/". Dice David que los no agregados (los que empiezan con "distribucio" a lo mejor son los más fáciles de trabajar, por ejemplo este). Por protección de datos no podremos dar acceso directo a la base de datos pero podriamos hacer algun script que fácilmente genere los ficheros con la info agregada.  

    Le he comentado también a Joan Fernández (el impulsor de los mapas que comenta Aina) a ver si se une a este debate, pues ahora mismo hay varias conversaciones paralelas al respecto y para llegar a buen puerto deberíamos transladarlas y focalizarnos tod@s en este grupo.

    ¿Cómo lo véis?

    Salud y mapas

     

     
    Daniel Espinheira
    Per Daniel Espinheira fa 927 dies

    Me he lanzado al documento para añadir mais o menos lo que había comentado en otro post. El caso es que ahora empiezo a tener dudas.

    Ahora he mirado además el curro de David en el github y lo del b2bdata es interesante, vamos, que veo que ya están algunos de los datos que me interesaban, en concreto pues los códigos postales.

    Me surge la duda de lo que pedía de las fechas de alta, pero ... creo que me sigue interesando, esto implica que se tendrían tantas líneas como socias (nada de agregados en el documento, pero se pueden procesar después).

    Lo que si que no veo, tal vez he mirado poco, es lo de los datos de contratos, porque una cosa son las socias y otra los contratos, y pienso que tenemos que empezar a jugar también con contratos, no?.

    En relación a la producción y todo eso... pues se lo dejo a otra, no me meto ;)
    Francesc
    Per Francesc fa 926 dies

    David comenta que aún NO estamos generando distribucion de contratos. Hace tiempo que tiene ganas de hacerla pero hay otras prioridades. De hecho seria mucho mas simple
    que la de socios pues la direccion es inequivoca. Si queréis avanzarlo, el resultado seria un csv igualito que el de socias porque asi podremos reutilizar todo.


Per Francesc fa 465 dies

Interesante propuesta de mapa de soci@s de Som Energia de la cooperativa "Solucions Geogràfiques de Sabadell":

http://solucionsgeografiques.blogspot.com.es/2017/06/el-mapa-dels-socis-i-socies-de-som.html
Rafael Bermúdez

Per Rafael Bermúdez fa 465 dies

Buenos días,

super interesante, en la Comunidad de Madrid habiamos hecho uno con capas a través de google maps, el problema es que la carga de datos no es dinámica y cada mes (o cuando lo hemos actualizado), hay que recargar los datos de forma manual y es un poco tostón...

Me parece muy interesante aunque quizá de cara a funcionamiento interno de los grupos y secciones ya que no se hasta que punto la Protección de datos permite publicar el número de socios o contratos en poblaciones de menos de "tantos mil" habitantes, gracias a estos mapas y con los códigos postales nos está permitiendo trazar "estrategias" de acercamiento como tratar de potenciar grupos locales en la Sierra de Madrid, Madrid Sur, Zona Sur Oeste....

Un saludo, Rafael Bermúdez.
Francesc

Per Francesc fa 361 dies

Uno de los proyectos del 1r HackaSom de la Escuela de Som Energia 2017 fue la visualizaicón on-line de un mapa para los socios, podéis uniros al grupo del HackaSom y ver los archivos subidos para más información: https://plataforma.somenergia.coop/groups/profile/273947/hackasom
