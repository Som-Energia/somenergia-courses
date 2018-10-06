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





