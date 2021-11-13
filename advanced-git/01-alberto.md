## Healthy branching

Problema: Código de la rama principal remota con errores, falta confianza en puesta producción.

Solución: Conjunto de test automatizados para control de errores.

Fuerzas: Grado de pruebas para proporcionar suficiente confianza. Crear test que cubran todos los casos es complicado.

# Integration Patterns

## Mainline Integration

Problema: Dificultad de integrar varios desarrollos dentro de un equipo de trabajo.

Solución: Los desarrolladores integran su trabajo dentro de una rama principal.

Fuerzas: En el caso que nuestro desarrollo en producción sea la rama mainline.

## Feature Branching

Problema: Dificultad de integrar funcionalidades en mainline.

Solución: Crear rama por funcionalidad e integración en mainline cuando se complete la funcionalidad.

Fuerzas: Agrupar funcionalidades en ramas permite activar y desactivar la nueva función. 

La función es muy grande(desarrollo de varios dias) dificulta la integración en mainline.

Alternativa: **Continuous Integration** integrar en mainline diariamente vs integrar por funcionalidad.
