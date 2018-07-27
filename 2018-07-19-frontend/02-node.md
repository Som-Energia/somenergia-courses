
# NodeJS {
	data-background-image='../images/logo-nodejs.svg'
	data-background-size='60%'
	}

## Definición del proyecto {
	data-background-image='../images/logo-nodejs.svg'
	data-background-size='60%'
	}


La definición del proyecto se guarda en `package.json`.

Se crea con el comando `npm init` a partir de preguntas interactivas.


## Repositorio de paquetes {
	data-background-image='../images/logo-nodejs.svg'
	data-background-size='60%'
	}


`npm` es un gestor de paquetes parecido a `pip`

`npm search`, `npm install`...

Se baja los paquetes de un repositorio online
y los instala en local, en la carpeta `node_modules`.

Cada proyecto tiene su `node_modules` propio y
aislado como un `virtualenv` en Python.

## Dependencias del proyecto {
	data-background-image='../images/logo-nodejs.svg'
	data-background-size='60%'
	}


**Dependencias (de run-time):** de uso del paquete

**Dependencias de desarrollo:** de construcción del paquete

Para nosotros, que no hacemos paquete (aun), las de run-time son las que se usan en el navegador.

Se definen en el `package.json` y se instalan con `npm install` sin especificar paquete.


## Añadiendo dependencias {
	data-background-image='../images/logo-nodejs.svg'
	data-background-size='60%'
	}


Se añaden con `npm install --save paquete` o con `--save-dev` si es de desarrollo.

Con las opciones _save_ quedan guardadas en las claves `dependencies` y `devDependencies`

Si no, no se actualiza (los marca _straneous_)


Queda guardada la versión.
Para actualizarlas: `npm update --save paquete`

## Comandos extra {
	data-background-image='../images/logo-nodejs.svg'
	data-background-size='60%'
	}


Podemos añadir comandos personalizados para el desarrolo de nuestro proyecto.

El `package.json` contiene la clave `scripts`
con comandos personalizados de `npm`.

```json
	"scripts": {
		"server": "webpack-dev-server --open --watch -d",
	},
```

```bash
$ npm run server
```


## Chuleta {
	data-background-image='../images/logo-nodejs.svg'
	data-background-size='60%'
	}


```bash
npm init # Crea el package.json a base de preguntas

npm install # Instal·la les dependencies del package.js

npm search <words> # busca paquetes con words en la descripción

npm install --save <package> # añade la dependencia al proyecto

npm install --save-dev package # añade dependencia de desarrollo

npm update --save/--save-dev # actualiza versión (menores) de los paquetes

npm run test # Ejecuta el script `test` definido en `package.json`
```
<div class="notes">

El update no actualiza las versiones mayores.
Hay que editarlas a mano en el fichero

</div>



