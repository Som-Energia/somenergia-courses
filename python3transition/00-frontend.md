# La transición {
	data-background-image="../images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

## Por qué transición {
	data-background-image="../images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

2020: Acaba soporte a Python 2

Gisce no tendrá el ERP migrado

Aún estaremos con Python 2 por un tiempo

Cuando se pongan las pilas, puede que no tengamos tiempo
de migrarlo todo, hay que ir haciéndolo


## Propuesta {
	data-background-image="../images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

Migrar el código para que funcione en ambos.

[Manual de idiomas de compatibilidad](https://python-future.org/compatible_idioms.html)

Ante dos opciones de portabilidad,
la que más se acerque a al Py3 final.

Importante: Cobertura previa de tests

Código erppeek/ooop puede ser sólo Py3

## Herramientas {
	data-background-image="../images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

Six: Libreria de cross portabilidad.

2to3: Convierte a Py3, pero no portable.

Lo usamos para detectar las incompatibilidades.

## Novedades Py3 {
	data-background-image="../images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

- Strings, unicode, bytes, entrada y salida
- Función `print`
- Iterables: (`x`)`range`, (`iter`)`items`
- `except Exception as e`
- API de algunas librerías standard
- Otras features que no usamos directamente


# Iterables {
	data-background-image="../images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

## Problema {
	data-background-image="../images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

`keys`/`iterkeys`
`values`/`itervalues`,
`items`/`iteritems`,
`range`/`xrange`,
`map`/`imap`,
`zip`/`izip`,
`filter`/`ifilter`,
...

En Py2 retornan listas, la alternativa retorna generadores.

En Py3 los primeros retornan generadores, los segundos no existen.

## Estrategia {
	data-background-image="../images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

2to3 convierte:

- `d.iterkeys()` -> `d.keys()`
- `d.keys()` - `list(d.keys()` 

Propuesta: usar `keys()` sin `list` casi siempre

En Py2, listas grandes intermedias son lentas.
Usar `builtin.iterkeys` en esos casos.

En Py3, los generadores se gastan.
Si hay manipulaciones más allá de **una sola** iteración,
convertir a lista.

## Ejemplo {
	data-background-image="../images/logo-somenergia-nobg.svg"
	data-background-size="80%"
	}

```python
# original
for k in d.keys()
# 2to3
for k in list(d.keys())
# propuesta
for k in d.keys()
# mejora: de itera en keys
for k in d
# asegurar que no haya list intermedias
from builtins import iterkeys
for k in iterkeys(d)
```




