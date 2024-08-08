# Identification Management - Auth(entication/orization)

## Damn Acronnyms, let's define!

CAS, SASL, SAML, OAuth, OAuth2, OpenID, OIDC, SSO, AD, LDAP, OpenLDAP, MFA, SCIM, PKCE, JWT...

Let's start with some human-like definitions.

Both start with _auth_, but are meant different:

- **Authentication:** Ensure someone is who says it is
- **Authorization:** Ensure someone (or something) may access some resource or service

### Authentication elements

- **Identity:** who someone is
- **Credentials:** anything used to ensure the identity
- **Authentication factors:** Kinds of credentials that may be combined to provide more security
	- knowledge factor: something the user _knows_ (password, partial password, passphrase, challenge token...)
	- ownership factor: something the user _has_ (id card, cell phone, digital certificate, mail account...)
	- inherent factor: something the user _is_ or _does_ (fingerprint, dna, signature, voice...) 

Use cases:

- **Multi-Factor Authentication (MFA):** Combines several authentication factors to endure authentication
- **Enrollment:** The process of a new identity by its own initiative, being incorporated as identity (donar-se d'alta)
	- The first time someone approaches to a service we have no reference on who it is
	- We can just trust it, or relay on official certificates, visual ids checks... or relay on external services
	- Warning: External services might not have enough endurance on the identity themselves
- **Channel Verification:** Verify that the person owns a given channel (sms, email...).
	- A channel being verified or not is important claim to do.
	- Ara mateix a Som Energia, verifiquem el correu pero no ens guardem quan ho fem o quan modifiquem o afegim correus. Perdem la constancia de verificació.
- **Provision:** The proces of adding identities to be able to authenticate
	- For example, staff in a firm is provisioned
	- A different way for an identity to be added, in contrast to enrollment, there is no person initiative
	- Often the act of granting access to an existing identity is also called provisioning.
- **Deprovision:** Removing an identity or removing any grant it has
	- Important to propagate Deprovisioning to all the apps (SCIM)

### Authorization elements

- **Resource:** Some data or device that can be enumerated in a system
- **Operation:** An action someone can perform with the system
- **Service:** Can be use to refer an operations or a resource or an operation over a resource
- **Permission/Grant:** Entitlement to access a given service
- **Role:** Set of operations and resources that may be granted as a block for convenience of management.
- **Delegation:** Ability for an owner of a resource to give others a certain grant on it

Use cases:

- **Delegated authorization/Third-party authorization:**
A user enables a third party to use a set of limited services in its behalf.
Avoids having to give your own password to get the full access to a third party.

### Common concerns and use cases


- User network is not a trusted medium
	- Web hijacking (like the one used by the access portals) can replace authentication site and perform man in the middle attacks
	- Use https for all communications
- User device is not a trusted device
	- Malicious application may generate login ui's simulating the real ones
	- Virus, keyloggers...
	- Device as a double factor might not be reliable
- The browser is an insecure platform, not controlled neither by the Service Provider nor by third parties
	- Cookies can be inspected by browser extensions or other applications
	- Any information in the url can be visually spotted
	- Cookies might be vulnerable to CSRF attacks
	- LocalStorage might be vulnerable to XSS attacks
- Many applications of the same coorporation have to authenticate a similar set of users
	- Directory service: Have a common repository of users, resources and grants and let all apps use it to
	- This way, user management is centralized, still...
- Authenticate in diferent unrelated services with different domains may lead to phishing attacks
	- Delegated Authentication: Centralize authentication in a single service the other applications relay on
- The user has to identify again and again to access the many service
	- Single Sign-on: The authentication server provides a common session to the apps
- Users have to remaind different passwords for many services
	- Third party authentication: You can use authentication on widespread services (google, facebook, github...) to authenticate into your system
- A third party application wants to use some owned resource but the owner does not want to give full credentials
	- Third party authorization: Users grants the third party to access just that resource for a limited time


### Authentification architectures

- **Integrated:** The same app provides authentification for its own users.
	- TODO: Term invented by myself for the sake of completeness. If you find an standard one, use it instead.

- **External:** A _Service Provider (SP)_ uses a third parthy, called _Identity Provider (IP)_, to provide the authentification service.
	- TODO: Term invented by myself for the sake of completeness. If you find an standard one, use it instead.

	- **Centralized:** Many apps uses a common authentication server (CAS, SASL, SAML)
		- Use case: You own the user db, you have many apps that share them
		- **Single sign-on (SSO):** The session state (login/logout) is shared by the many apps (CAS)

	- **Decentralized:** An app may use several authentication servers (ie. OpenID)
		- Use case: Your application relay on authentication provided by in third parties (google, github, twitter, facebook...)
		- **Relying party (RP):** A third party service which provides you authentication

Authorization:

- **Directory service:** One that provides information about services, users, devices... (LDAP, AD)
	- User information might include the **authentication data** (password, fingerprint...)
	- **Access control:** The part of the DS that gives information on which persons may access which resources
	- When the directory is shared among apps you may have the same users and passwords everywhere
	- Differences with a centralized authentification
		- Users have to establish the session in each application
		- Each application should have its login which now queries to the LDAP
	- Why not a plain database?
		- Many apps/frameworks have LDAP validation plugin.
		- Existing applications to maintain the directory.
		- All that for free.
	- You can rely a CAS/SASL/OAuth service on it.

Authentication may rely on a directory to check, several directories, or a plain database, or...


## SCIM - System for Crossdomain Identity Management


Purpose: Centralize the provision and deprovision of users and propagate it where it is needed

- Its a REST/JSON protocol.
- The client is the Identity Provider
- Servers are the Service Providers
- CRUD changes to identities in the IdP are propagated through the SPs
- IdP can also read profiles in SP's to update info and detect vulnerabilites (how?)
- Means synced profile information and also grants

Free Server Implementations:

- [django-scim](https://bitbucket.org/atlassian/django_scim/src/master/) "provider side" (no se mantiene desde 2019)
- [django-scim2](https://github.com/15five/django-scim2) directorio en postgres, forkeado del anterior, ultimos cambios hace dias

Provide framework to map your user info from/to SCIM messages

## Extra use cases

- **Nonrepudiation:** the feature of a protocol that ensures,
once a message has been sent and received,
the sender cannot later deny having sent it and
the receiver cannot later deny having received it.

This is what we would like to have on contracts, other legal stuff and action confirmation.


## SAML

- Single Sign-On
- Hard to work with (SOAP)
- Mobile Apps


## CAS - Central Authentication Service

Es un protocolo que sirve para centralizar la autenticación y las sesiones de un conjunto de aplicaciones diversas.
Los usuarios se autentifican en un servidor único y establecen ahi la sessión. Se le llama ticket.
Las aplicaciones pueden comprobar que el usuario tiene una sesión abierta valida en el servidor de autenticación,
y pueden pedir al servidor información adicional que puede servir si hiciera falta para autorizar el acceso a recursos.

Por tanto es una arquitectura de autenticación centralizada con single sign-on.
A diferencia de otros protocolos, también tiene single sign-off:
cuando se cierra la sesión, se cierra en todas las applicaciones. Se elimina el ticket.

Un **servidor CAS** es el proveedor de autenticación.

Un **cliente CAS** es una aplicación que usa esa autenticación.

Existen diversas implementaciones de clientes y servidores.

No quiere decir que no se pueda pero no hemos encontrado de momento,
una forma correcta de trabajar con Single Page Apps y acceso a API's por terceras personas.
La documentación dice que la hay, pero no hemos encontrado la manera.


## OAuth2

Es un protocolo de autorización. Sirve para que el propietario de un recurso
garantice el acceso a dicho recurso a un tercero, normalmente a una aplicación.

Se puede usar como base para una autentificación.
El servidor OAuth2 tiene que autenticar al usuario para que el usuario garantice acceso.
Si el recurso al que se autoriza es a la identidad, tienes un esquema de autentificación externa.
Por desgracia proliferaron muchas formas diferentes de hacerlo.
OpenID Connect (OIDC) es un esquema de identificacion montado sobre OAuth2 de este modo con un protocolo concreto.

Pero el OAuth2 tiene muchas otras aplicaciones a parte de autenticar.

- Permitir a aplicaciones usar datos privados del usuario de forma segura o hacer acciones en su nombre
- Podemos ver las Sigle Page Applications como applicaciones de esta manera y simplemente tener API's

Google Accounts provee servicio de OAuth2.
Podemos hacerlo servir cuando el usuario se identifica como un email, puesto que google los valida.
Pero no podemos hacerlo servir, por ejemplo, si la identidad es el DNI.


### Terminology

- **Resource owner:** The user who owns the data/services
- **Client:** The third party application (tomatic.somenergia.coop)
- **Authorization server:** System used to give authorization (accounts.google.com)
- **Resource server:** System providing the owned data/services
- **Authorization grant:** The fact that the owner allowed the client to access the resource
- **Redirect URI:** The address the authorization will go back once authorized.
- **Access token:** Temporary code generated by the authorization server that grants access to a service
- **Refresh token:** Less temporary code generated by the authorization server that allows obtaining a new Access Token when the former expires
- **Flow:** Different multi party protocols in oauth standard to achieve autorization
- **Scope:** A list of resources/services to be granted or accessed
- **Consent:** Explicit hability the owner has to give permissions to the asked scopes
- **Client ID:** Client identification (Publica)
- **Client Secret:** Client private code used to authenticate itself (not the user) to the the resource serer


### Authorization Code Flow

Use case a Client wants to access services from a resource server that are owned by the user on its behalf.

- The _client app_ redirects _owner_'s browser to the _authorization server_
	- The redirect url includes info like:
		- Callback url
		- The response type: "code"
		- The required _scopes_ needed to be granted
		- The client id
		- A state (info that is returned back to the callback)
- If the _owner_ has no open session, the _authorization server_ ask the _owner_ to authenticate
- The _authorithation server_ asks the _owner_ consent to grant this access to the _client app_
- If so, the owner is redirected back to the _client app_ with an _authorization code_
- The _client app_ sends the _authorization code_ to the _authorization server_ in exchange of an _access code_
- The _client app_ uses the _access code_ to access the _resource server_

¿Porque no basta con el código que se devuelve?

- Back channel: high secure channel
- Front channel: less secure channel

Los browsers se consideran un front channel porque no tenemos demasiado control de lo que pasa.
Cualquiera puede acceder a la url, la historia, las cookies, las extensiones instaladas...

Authorization code is sent through the browser.
While the _access code_ is exchanged in the back channel from the client app to the servers.

Los clientes tienen que crear un client id y un client secret.
El client secret se usa para el intercanvio en el backchannel para obtener el client id.

El access code es un token: Client, User, Expiration, Scopes... codificado y firmado por el authentication server.
Ojo: Aunque este codificado y firmado, no esta cifrado!!


Other flows:

- Implicit: only front channel available
- Resource owner password credentials (all backchannel) (server to server)
- Client credentials (backchannel only) (legacy systems)
- Device code: Cuando el usuario usa el cliente sin navegador, necesita validar por otro medio.

The only flow is currently recommended is 

### Password flow

Why not to use it:

- Legacy transition flow
- Exposes username and password to the application
- Even on trusted applications, it increases the attack surface
- Users get used to enter their password in multiples places
- Unable to upgrade and use multifactor or passwordless authentication


### Implicit Flow

Implicit flow is (was) used when there is no backchannel available.
It means that there is no backend server to rely on.

Compromise for this scenario years ago. Just use Authorization Code + PKCE

(CAUTION: This flow is now not recommended to be used in SPA's)

- response type: token

Obtenemos el token directamente, sin tener que intercambiarlo por el code.


### Extension use cases

Primary use of oauth Delegated authorization.
But ended being used for authentication uses cases.

- Simple login (authentication)
- Single sign-on across sites (authentication)
- Mobile app login (authentication)

Because the owner has to be authenticated
in the authorization server, it also provides proof of identity.
OAuth2 just lacked of standarized way to do it and provide user information.
Indeed you can provide it as part of the token, as the resource you can access with the authorization...

So they added a new standard layer to OAuth2.0 called OpenId Connect.



### OpenID connect

A layer on the top of OAuth2 that standardizes ways for implementing authentication over OAuth2.
The things that get standardized are:

- **ID Token:** standard token content
- **Userinfo end-point:** to obtain extra info not included in the token once authenticated
- **Stardard on scopes:** `openid`, `profile` (profile para el userinfo endpoint?)
- **Standard on implementaton:** 

Terminology (slightly different of OAuth2 as they are convergent standards from different):

- **OpenID provider:** The authorization server that issues the ID token.
- **End user:** Whose information is contained in the ID token
- **Relying party:** The client application that requests the ID token from the OpenID provider
- **Claim:** A piece of information about the user contained in the ID token

The token is a JWT


```
response_type=id_token
```

[charla que explica como usar jwt para ](https://www.youtube.com/watch?v=ZjPF8yZ83Wo)

Claims to check:

- iss: (issuer) issuer of the token (uri)
- sub: (subject) the authenticated-authorized subject (uri)
- aud: (audience) who is released to (uri)
- exp: (expiration) reduces the exposition if the token is leaked (timestamp)
- nbf: (not-before) if present must to be checket too (timestamp)
- iat: (issued-at) when the token was created (timestamp)
- jti: (token-id) must be validated to avoid replay attack
- Public claims: (name, profile, email...) useful or not, have to be avoided in private claims
- Private claims: any custom data, warning, not encrypted, so do not include any sensible information, do not use jwt as private session storage

SECURITY WARNING:
The JWT specification treats the signature as optional.
An the algorith to be either "None" or any symetrical key algorithms.
**Expect and ensure that the signature algorithm is the one you expect**.
Las implementaciones modernas, piden como parametro el algoritmo.

- jku (json web key) donde estan las claves publicas (!!!! Un atacante puede poner las suyas!!)
- kid (key id) referencia a la clave usada para cifrar

Guias de seguridad:

- Siempre verificar el algorithmo del header (ignorarlo, o rechazar si no es el que esperamos)
	- Una atacante puede crear un token y ponerle que va sin firma y seria un jwt valido.
	- Una atacante puede crear un token y ponerle un algoritmo fragil o una clave debil
- Usar algoritmos de firma buenos: No clave simetrica, no hmac...
- Usar claves fuertes
- Validarlo todo: expiration, audience...


### Access token types

**Reference token:**
The token is a long string with no information encoded.
The server has a private record of the information related to this token.

- :+1: Easy to revoke: remove/deactivate the DB entry
- :+1: Easy to list active tokens: list active DB entries
- :-1: Uses DB space (do not scale on huge systems)
- :-1: Latency: Requires access to the database or http call to the auth server if separated

**Self-Encoded token:**
They encode the information related to the token.
The content is signed by the originator, so the content can be trusted by checking the signature.

- :+1: No storage required
- :+1: Fast to check, no DB or http access
- :-1: Cannot be revoked
- :-1: Active tokens unknown

### Json Web Token (JWT)

Estandard  para self-encoded tokens.
Tres partes uuencoded separadas por puntos: Cabecera, payload y firma.

- La cabera tiene informacion sobre el algoritmo de firma
- El payload contiene los campos
- La firma representa una tira de bits que sirve de firma sobre el contenido del resto del token

DUDA: La firma cubre el payload o tambien la cabecera?

**OJO!** No esta cifrado, solo firmado.
No se puede suponer que la información que ponemos en el token esta protegida por el codificado.
Se usa un codificado base64 que cualquiera puede descodificar.

**OJO!** Es un error de seguridad fiarse del algoritmo que pone en la cabecera.
Se puede construir un token con algoritmo "none" sin firma o incluso poner un
algoritmo de clave simetrica y firmarlo con la clave publica del originador.

**OJO!:** Por lo mismo, evidentemente, es error de seguridad fiarse del contenido del token sin comprobar la firma.


### Refresh token

It is a technique to avoid XSS and XCSF attacks.

JS apps have to store credentials in order to resend them to the service.
The only way for a JS app to persist credentials is using either cookies or local/session storage.
They are vulnerable to XSS and XCSF attacks that can obtain them from a different website.


Doubt: How does the refresh sequence works if we send parallel asyncrounous queries?

### Security recommendation as for 2020

https://www.youtube.com/watch?v=g_aVPdwBTfw

- Use authcode + pkce in all applications (even on non-public clients)
- Restrict redirections to exact matching registerd url
- Do not send access tokens in the query string (was allowed because old technology limitations before broadspread of API's)
- Refresh tokens must be sender constrained (not the only piece of information, client secret) or if not possible (public clients) make it single use token
- Refresh tokens with maximum life.


## References


- [IT Security and Privacy - A framework for identity management - Part 1: Terminology and concepts](https://webstore.iec.ch/publication/65242&preview)
- https://en.wikipedia.org/wiki/Authorization
- https://en.wikipedia.org/wiki/Authentication
- https://en.wikipedia.org/wiki/Access_control (Phisical access theory)
- https://en.wikipedia.org/wiki/Computer_access_control (Computer related theory)
- https://en.wikipedia.org/wiki/Identity_management
- https://en.wikipedia.org/wiki/Federated_identity
- https://en.wikipedia.org/wiki/Claims-based_identity The JWT model
- https://en.wikipedia.org/wiki/Security_token_service The more specific JWT model
- https://en.wikipedia.org/wiki/Single_sign-on
- https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol
- https://en.wikipedia.org/wiki/Directory_service
- https://en.wikipedia.org/wiki/OpenID
- https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language
- https://en.wikipedia.org/wiki/Mozilla_Persona (Interesting but dropped)
- https://en.wikipedia.org/wiki/OpenID#OpenID_Connect_(OIDC)
- https://en.wikipedia.org/wiki/System_for_Cross-domain_Identity_Management (SCIM)
- https://stackoverflow.com/questions/2033026/sso-with-cas-or-oauth
- https://www.apereo.org/projects/cas
- https://oauth.net/
- https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2 (intoduccion buena de varios casos de uso)
- https://www.clickittech.com/tutorial/understanding-oauth2-as-a-sso/ (explicacion buena de varios casos de uso)
- https://www.youtube.com/watch?v=996OiexHze0&t=0s (OAuth2 in plain English)
- https://blog.postman.com/pkce-oauth-how-to/ "OAuth 2.0: Implicit Flow is Dead, Try PKCE Instead" Diferencias entre Implicit, Auth Code y PKCE

## Implementation

- https://django-oauth-toolkit.readthedocs.io/en/latest/tutorial/tutorial_01.html
- https://github.com/AxaGuilDEv/react-oidc (Implementacion en react con pkce, muy encapsulada y bien integrada con el framework)

### Authorization servers / Identity providers

Servers we can deploy in our network to be Authentication providers.

[Authentik](https://goauthentik.io)
- OpenSource [Code](https://github.com/goauthentik/authentik)
- basado en Python (Django)
- Single Sign-on basado en SAML
- Hosteable (no dan el servicio ellos)
- Directorios: LDAP
- External Identity Providers:  OIDC

[Keycloak](https://www.keycloak.org/)

- OpenSource [Code](https://github.com/keycloak/keycloak) [Extensions](https://www.keycloak.org/extensions.html)
- Setup en segundos con docker
- Single Sign-On
- External Identity Providers: OIDC, Kerberos, SAML2
- Directorios: LDAP, AD, Database...
- Plugin for serving clients CAS protocol: https://github.com/jacekkow/keycloak-protocol-cas (Not for relying on an existing CAS service that would be useful for us)
- How to add a custom provider: https://www.baeldung.com/java-keycloak-custom-user-providers (In order to use OV users) [The code](https://github.com/Baeldung/spring-security-oauth/tree/master/oauth-rest/keycloak-custom-providers)

[Shibboleth](https://www.shibboleth.net/)

- OpenSource
- Paid support
- Basado en Java
- Hosteable
- Basado en SAML
- Lo lleva un consorcio de empresas usuarias/desarrolladoras

[Apereo CAS](https://www.apereo.org/projects/cas)

- OpenSource (Apache License) [Code](https://github.com/apereo/cas)
- Basado Java
- Hosteable
- Soporta CAS2/3 SAML1/2 OAuth2 OIDC
- Arquitectura Plugins para authenticacion (LDAP, MongoDb, 
- Authenticacion delegada
- Interfaz de administración y monitorización
- Lo lleva una empresa (Apereo) con bastante aportes de la comunidad

[Gluu](https://gluu.org/)

- Opensource (MIT) [Code](https://github.com/GluuFederation)
- Linux Fundation
- Java
- OIDC(client/server), SCIM(client/server)



[MiniOrange](https://idp.miniorange.com/)

- Privative. SSAS/Hosteable.

[Okta](https://www.okta.com/)

- Privative and Paid. SASS/Hosteable









