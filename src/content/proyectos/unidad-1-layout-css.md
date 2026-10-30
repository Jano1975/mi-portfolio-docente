---
title: "Unidad Didáctica 1: Arquitectura de Layouts e Interfaces Web con CSS Moderno"
description: "Planificación didáctica completa de 14 horas para el módulo de Diseño de Interfaces Web (DAW) utilizando Aprendizaje Basado en Proyectos (ABP) y Coevaluación."
pubDate: 2026-10-30
nivelEducativo: "FP Grado Superior (DAW)"
metodologias: ["ABP", "Evaluación Formativa"]
tagsTecnicos: ["CSS Grid", "Flexbox", "Accesibilidad"]
downloadUrl: "/docs/unidad-1-layouts.pdf"
---

## 1. Justificación Pedagógica

En el desarrollo web actual, la maquetación ya no se limita a colocar cajas fijas; requiere interfaces fluidas, accesibles y adaptables a cualquier dispositivo. Esta unidad didáctica está diseñada bajo la normativa vigente de la Formación Profesional, promoviendo la autonomía del alumnado mediante retos técnicos que simulan los flujos de trabajo de una empresa de desarrollo de software real.

### Resultados de Aprendizaje (RA) asociados:

- **RA 1:** Planifica y diseña interfaces web considerando criterios de usabilidad y experiencia de usuario (UX).
- **RA 2:** Implementa hojas de estilo utilizando selectores y propiedades avanzadas para estructurar páginas web de alta complejidad.

---

## 2. El Proyecto del Aula: "El Dashboard Educativo"

En lugar de realizar exámenes teóricos tradicionales, la unidad se articula en torno a un proyecto central. Los alumnos, organizados en parejas (simulando células de desarrollo _Agile_), deben diseñar e implementar la interfaz de un **panel de control para la gestión de un centro escolar**.

### Requisitos Técnicos del Reto:

1. Estructura principal construida íntegramente con **CSS Grid Layout**.
2. Componentes internos (tarjetas de datos, barras de navegación) organizados mediante **Flexbox**.
3. Uso estricto de unidades relativas (`rem`, `em`, `vh`, `vw`) para garantizar la adaptabilidad.
4. Cumplimiento de las pautas de accesibilidad web **WCAG 2.2** (contraste de color y navegación por teclado).

---

## 3. Secuenciación Didáctica (Cronograma de Sesiones)

### Sesión 1 y 2: Descubriendo las dos dimensiones (4 horas)

- **Contenido técnico:** Anatomía de una cuadrícula. Líneas de grid, áreas explícitas e implícitas. Las funciones `repeat()` y `minmax()`.
- **Actividad didáctica:** _Grid-Combat_. Una dinámica gamificada donde los alumnos deben replicar layouts de sitios web conocidos (como Spotify o Twitch) en el menor tiempo posible usando herramientas visuales de desarrollo.

### Sesión 3 y 4: Integración de componentes y responsive (4 horas)

- **Contenido técnico:** Flexbox para componentes lineales. Combinación de Grid y Flexbox en una misma interfaz. Media queries modernas y `clamp()`.
- **Actividad didáctica:** Integración del menú de navegación lateral y las tarjetas de analíticas en el Dashboard del proyecto principal.

### Sesión 5 y 6: Accesibilidad e Inspección técnica (4 horas)

- **Contenido técnico:** Criterios de contraste WCAG, semántica HTML5 orientada al diseño y uso del inspector de estilos del navegador.
- **Actividad didáctica:** Auditoría de accesibilidad cruzada. Cada pareja audita el código de otra utilizando la extensión _Lighthouse_ y propone mejoras de refactorización en un reporte técnico.

### Sesión 7: Sprint Review y Coevaluación (2 horas)

- **Actividad didáctica:** Presentación de los dashboards terminados. La evaluación se realiza mediante una rúbrica compartida donde el 50% de la nota depende de la coevaluación entre pares y el otro 50% de la evaluación del docente.

---

## 4. Criterios y Herramientas de Evaluación

La evaluación se plantea de forma continua e integrada en el proceso de aprendizaje:

| Instrumento                          | Porcentaje | Criterios Clave a Evaluar                                                                       |
| :----------------------------------- | :--------- | :---------------------------------------------------------------------------------------------- |
| **Código del Dashboard (GitHub)**    | 60%        | Limpieza del código, uso correcto de Grid/Flexbox, responsive sin _media queries_ innecesarias. |
| **Informe de Accesibilidad**         | 20%        | Capacidad crítica, propuestas de refactorización técnica correctas.                             |
| **Coevaluación y Trabajo en Equipo** | 20%        | Cumplimiento de tareas asignadas en la pareja, feedback constructivo.                           |
