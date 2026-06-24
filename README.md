# Implementación de Formularios Dinámicos con Validación Personalizada

En el contexto de una aplicación de gestión de usuarios para una plataforma de fintech, necesitas implementar un formulario dinámico utilizando React Hooks. El formulario debe permitir la creación y edición de perfiles de usuario, incluyendo campos como nombre, email, contraseña y rol. Además, se requiere una validación personalizada para asegurar que los datos ingresados cumplan con ciertas reglas de negocio, como la unicidad del email y la fortaleza de la contraseña. El sistema debe manejar correctamente los errores de validación y proporcionar feedback al usuario.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | React Hooks |
| **Nivel** | junior-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 4 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Configuración del Entorno y Creación del Formulario

**Objetivo:** Configurar el entorno de desarrollo y crear la estructura básica del formulario utilizando React Hooks.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Configurar un proyecto de React con las dependencias necesarias.
- Crear un componente de formulario que incluya campos para nombre, email, contraseña y rol.
- Utilizar React Hooks para manejar el estado del formulario.

**Entregable:** Componente de formulario básico con React Hooks.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza `useState` para manejar el estado del formulario.
- Considera la estructura y el flujo de datos en el componente.

</details>

### Fase 2: Implementación de la Validación Personalizada

**Objetivo:** Implementar la validación personalizada para los campos del formulario, asegurando que los datos cumplan con las reglas de negocio.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Agregar funciones de validación personalizada para cada campo del formulario.
- Mostrar mensajes de error al usuario si la validación falla.
- Asegurar que el formulario solo se envíe si todos los campos son válidos.

**Entregable:** Formulario con validación personalizada y manejo de errores.

<details>
<summary>Pistas de conocimiento</summary>

- Crea funciones separadas para cada regla de validación.
- Utiliza `useEffect` para ejecutar la validación cuando los campos cambien.

</details>

### Fase 3: Mejora y Refactorización del Formulario

**Objetivo:** Mejorar la usabilidad del formulario y refactorizar el código para hacerlo más limpio y eficiente.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Agregar mejoras de usabilidad, como autocompletado y sugerencias.
- Refactorizar el código para mejorar la legibilidad y mantener las buenas prácticas de React.
- Asegurar que el formulario sea accesible y responsivo.

**Entregable:** Formulario refactorizado con mejoras de usabilidad y accesibilidad.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza componentes de terceros para mejorar la usabilidad si es necesario.
- Sigue las mejores prácticas de React para refactorizar el código.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los React Hooks y por qué se utilizan en este reto?
- **paraQueSirve**: ¿Para qué sirve la validación personalizada en el formulario?
- **comoSeUsa**: ¿Cómo se implementa la validación personalizada utilizando React Hooks?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar validaciones personalizadas y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones de diseño implica la refactorización del formulario para mejorar la usabilidad y la eficiencia?

## Criterios de Evaluacion

- Configuración correcta del entorno de desarrollo y creación del componente de formulario.
- Implementación de la validación personalizada con manejo adecuado de errores.
- Refactorización del código para mejorar la usabilidad y la eficiencia del formulario.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
