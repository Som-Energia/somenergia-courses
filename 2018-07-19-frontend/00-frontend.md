# Frontend {
	data-background-image="../images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

## Frontend vs Backend {
	data-background-image="../images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

- **Frontend:** se ejecutan en el **navegador**
	- Mithril, ReactJS, Angular...

- **Backend:** se ejecutan en el **servidor**
	- Flask, Django, NodeJS, PHP... 

## Objetivo {
	data-background-image="../images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}


Poner al día de las tecnologías de Frontend
que usamos en Som Energía
al personal que ya programa en Python temas de Backend.

Se supone una base en programación.

Haré paralelismos con tecnologías Python.


## Ecosistema de Frontend {
	data-background-image="../images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

<div class='columns'>
<div class='column'>
![Javascript (Lenguage)](../images/logo-js.svg){width=40%} 
</div>
<div class='columns'>
![NodeJS<br>(Paqueteria, Entorno)](../images/logo-nodejs.svg){width=45%}
</div>
<div class='columns'>
![Webpack (Builder)](../images/logo-webpack.svg){width=50%} 
</div>
</div>
<div class='columns'>
<div class='column'>
![Mithril (Control)](../images/logo-mithril.svg){width=40%} 
</div>
<div class='column'>
![Material (Widgets)](../images/logo-materialdesign.svg){width=35%} 
</div>
</div>

## Javascript {
	data-background-image='../images/logo-js.svg'
	data-background-size='40%'
	}

**Inevitable:** El único lenguage incluido en todos los navegadores (en cada uno a su manera)

Sintaxis familiar pero engañosa, no se comporta igual que C++ o Java.
Repasaremos algunas trampas.

Es necesario entender algunas construciones que usamos en **Mithril**.

## NodeJS {
	data-background-image='../images/logo-nodejs.svg'
	data-background-size='60%'
	}

Tecnologia de backend, sí, pero nos da un entorno de desarrollo
(como el que tenemos en python).

- Definicion de proyecto (setup.py -> package.json)
- Repositorio de paquetes (pip -> npm)
- Entorno local aislado (venv -> node_modules)
- Interprete interactivo (python -> node)
- Web server para desarrollo

## Webpack {
	data-background-image='../images/logo-webpack.svg'
	data-background-size='40%'
	}

Constructor: Prepara el paquete de ficheros que se bajará el navegador.
Deja obsoletos a Grunt, Gulp, Requirejs, Bower, Browserify...

- Aisla los .js en paquetes/namespaces
- Soluciona dependencias
- Transcompila lenguajes (scripts, estilos)
- Optimiza ficheros
- Empaqueta lo que puede ir junto
- Separa lo que puede ir separado
- Modifica el HTML para bajarselo todo

## Mithril   {
	data-background-image='../images/logo-mithril.svg'
	data-background-size='40%'
	}

Framework para desarrollar
aplicaciones de página única
que se ejecutan en el navegador.

- Definir **componentes** HTML dinámicos
- Sincronizar **vista** y **modelo**
- Acceder **asincronamente** a las **APIs**
- Pequeño, sencillo, rápido y potente

**Alternativas:** React, Vue, Angular...

## Material Design   {
	data-background-image='../images/logo-materialdesign.svg'
	data-background-size='40%'
	}

Especificación de componentes gráficos.
Originalmente para Android.

Define aspecto, comportamiento, variaciones...
de botones, menus, radio buttons...

Hay muchas implementaciones (incompletas todas)
Usamos la de Google para Web:

**Material Design Components for the Web**

Agnóstica al framework, la adaptamos a Mithril



