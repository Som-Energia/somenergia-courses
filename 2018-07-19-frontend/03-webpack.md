
# Webpack {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}

## ¿Qué aporta? {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}


A partir del codigo fuente, genera los ficheros que se bajará el navegador.

Vamos que compila, ¿pero Javascript no era interpretado?

A medida que los proyectos se hacen grandes, es necesario
modularizar, descartar modulos no usados, agregar el resto, optimizar, preprocesar...

## Ejemplo real {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}

Repositorio `webforms-mithril` ([link](https://github.com/Som-Energia/webforms-mithril/blob/master/webpack.config.js){ target=_blank })

La configuración de webpack en `webpack-config.js`

Comandos de `webpack` en los `scripts` del `package.json`



## Modulos en Javascript {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}


A pelo, Javascript ES5 no sabe de modulos.

Se incluye cada .js en el html con `<script>`.

Tambien las dependencias!

Todo va al scope global. No hay `namespaces`.

Se usan funciones auto-llamadas para aislar.

## ¿Cómo funciona? {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}


Explora las dependencias entre los módulos y genera código para:

- aislar el espacio de nombres de cada módulo
- indexar los módulos por el path
- implementar `require` para cargarlos

Tambien modifica el html para incluir los assets finales

## Definición de módulos {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}


```javascript
// mymodule.js
'use strict'; // Activa errors per variables no declarades

function myfunction() {
	return 'hello world';
}

module.exports = myfunction;
```

```javascript
// main.js
'use strict'; // Activa errors per variables no declarades

var imported = require('./mymodule');

console.debug(imported()); // should show 'hello world'
```

## El bundle (envoltorio) {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}


```javascript
(function(modules) { // funcion auto-llamada
	var installedModules = {}; // The module cache
	function require(moduleId) {
	    // Check if module is in cache
	    if(installedModules[moduleId]) {
	 	    return installedModules[moduleId].exports;
	    }
	    // Create a new module (and put it into the cache)
	    var module = installedModules[moduleId] = {
	 	    i: moduleId,
	 	    exports: {}
	    };
	    // Execute the module function
	    modules[moduleId].call(module, module.exports, require);
	    // Return the exports of the module
	    return module.exports;
	}
	require('./main'); // el entry point del bundle
}) ({
	'./mymodule': function(module, exports, require) {
		eval('string con el contenido del fichero');
	},
	'./main': function(module, exports, require) {
		eval('string con el contenido del fichero');
	},
});
```

## Entry points y bundles {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}


**Entry point:** Punto de partida (js) de donde estirar las dependencias.
Puede haber varios (diferentes páginas)

Los navegadores cargan más rápido un fichero mediano que muchos pequeños.

**Bundle:** Un fichero que junta las dependencias de un punto de partida.

## Configuración {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}


```javascript
var config = {
    context: path.resolve(__dirname, 'src'), // our code's root
    entry: {
        main: './main',   // bundle name -> src/main.js
    },
    output:
		// Apends a chunkhash to force reloading
        filename: 'bundle-[name]-[chunkhash].js',
    },
    plugins:[
		// webpack deals with js. html by plugins
        // Generaes html to insert generated css and js
        new HtmlWebpackPlugin({
            filename: 'index.html',
            }),
```

## Chunks {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}

Un fichero grande también es peor que varios medianos. Fragmentemos.

Los assets se generan con un **hash** en el nombre para forzar recarga de cache si hay cambios.

Las dependencias _vendor_ son menos proclives a cambiar, si las separamos tendran mas hits de cache.

Con varios _entry points_, habrá cosas comunes entre los bundles.
Separando lo común y lo particular, se optimiza la carga
de múltiples páginas.

## Múltiples entradas {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}

```javascript
	...
    entry: {
        main: './main',
		contact: './contact', // added: second entry point
    },
    output:
        filename: 'bundle-[name]-[chunkhash].js',
		// added: id would be 'main~contract` for the shared one
        chunkFilename: 'chunk-[id]-[chunkhash].js', // added
    },
    plugins:[
        new HtmlWebpackPlugin({filename: 'index.html'}),
		// Each page should have its html plugin
        new HtmlWebpackPlugin({filename: 'contact.html'}),
```

## Otros recursos (assets) {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}


Datos (json, xml, yaml),
estilos (css, sass, less, stylus),
imagenes (png, jpg, svg)
...

Se _requieren_ como si fueran javascripts.

Una cadena de _loaders_ se encarga
de que esten disponibles en el navegador.

<div class='notes'>

- Como string en el js, añaden codigo js para que este disponible
- En su propio bundle, modifican el html para incluirlo

</div>

## Transcripción {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}

Los loaders nos permiten **traducir recursos** en formatos
no soportados por los navegadores.

- CSS: Sass, Less, Stylus
- Javascript: ES6, CoffeScript, TypeScript
- HTML: Markdown, RST, Jade
- Datos: XML, JSON, YAML
- Imagenes, videos, fuentes...

También se usan para la **optimización**.
Minifiers, uglifiers, imagenes multiresolución...

## Disposición {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}

Los loaders determinan en que forma estará disponible
el recurso y lo hacen accesible de forma transparente

Como ficheros independientes

Como **strings en el bundle javascript**

Extraidos en **su propio bundle**

**Insertados** en otro recurso

## Loaders {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}

`config.module.rules` como cargar cada recurso.

```javascript
rules: [
	// yaml-loader: yaml data -> json data
	// json-loader: json data -> js object
	// you get it with 'require'
	{ test: /\.yaml$/, use: ["json-loader", "yaml-loader" ] },

	// stylus-loader:  stylus -> css
	// css-loader: css -> js code that adds the style
	// MiniCssExtractPlugin: extracts into a css bundle
	// 'require' ensures that the css is loaded
	// as any dependant assets (images, includes...)
	{ test: /\.styl$/, use: [ MiniCssExtractPlugin.loader,
			"css-loader", "stylus-loader"]},
	// The css bundle is configured in the plugin section
```
## Plugins {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}

Los _loaders_ son solo tuberias.

Los _plugins_ aportan loaders nuevos pero tambien otra funcionalidad.

`HtmlWebPackPlugin`: Genera un html a partir de un template incluyendo uno o varios chunks (js, css...)

```javascript
plugins: [
	new HtmlWebPackPlugin({
		filename: 'index.html',
		template: 'mithriltemplate.html',
		chunks: ['example', 'common'],
	}),
]
```


## Integración Back-end {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}


**Problema:** el HTML lo genera la aplicacion de backend (flask, django, php), no webpack.

Hay **plugins de webpack** que generan **manifiestos**
con la **lista de assets**.

Hay **extensiones para Flask y Django** que integran esa lista en las páginas.

**Estrategia:** en backend pocas páginas y mucha API.


## Servidor de desarrollo {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}


`webpack-dev-server --open -d `

o `npm run server`

Lanza un webserver NodeJS local con los assets

Apunta el navegador a la página principal.

Detecta cambios en los ficheros,
regenera los assets del servidor y
recarga el navegador.

Agiliza mucho el ciclo de desarrollo.


## Source Maps {
	data-background-image="../images/logo-webpack.svg"
	data-background-size='40%'
	}

Con tanta transformación, 
¿cómo relacionamos un error en el navegador con el código fuente?

En modo desarrollo webpack genera _source maps_.
Comentarios especiales que referencian al código original,
fichero y linia.

Los navegadores modernos los entienden y generan _stack traces_ usables.


