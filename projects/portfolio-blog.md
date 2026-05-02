---
title: 'Portfolio + Blog Personal'
description: 'Sitio web personal construido con Next.js 13 y CSS Modules. Blog con soporte para markdown, markdown syntax highlighting, y despliegue automático vía GitHub Actions.'
image: 'screenshot.svg'
tech: ['Next.js 13', 'React 18', 'CSS Modules', 'Markdown', 'GitHub Actions']
githubUrl: 'https://github.com/fredyvelasquez/personal-blog'
demoUrl: 'https://fredyvelasquez.dev'
isFeatured: true
date: '2024-01-15'
---

## Descripción

Este es el sitio web que estás viendo en este momento. Un portafolio profesional combinado con un blog personal, construido con Next.js 13 usando Pages Router y generación estática completa para un deploy ultra rápido.

## Características principales

- **Blog completo** con archivos Markdown y frontmatter
- **Sección de proyectos** para mostrar tu trabajo a reclutadores
- **Syntax highlighting** con react-syntax-highlighter
- **Diseño moderno y profesional** con tema oscuro
- **Deploy automático** vía GitHub Actions
- **Totalmente estático** — sin base de datos, sin API calls en build time
- **Responsive** — se ve bien en móvil, tablet y desktop
- **SEO optimizado** con Next.js Head y meta tags

## Tecnología

- **Frontend**: React 18 con Next.js 13 (Pages Router)
- **Estilos**: CSS Modules con variables CSS
- **Contenido**: Markdown + gray-matter para frontmatter
- **Tipografía**: Oswald (headings), Roboto (body), Source Code Pro (code)
- **Deploy**: GitHub Actions → Vercel / propio servidor

## Lo que aprendí

La separación clara entre la capa de datos (`lib/projects-util.js` y `lib/posts-util.js`) y los componentes de presentación hace el código mucho más mantenible y testeable. Usar CSS Modules en lugar de un framework CSS mantiene el CSS scopeado y evita conflictos.

El tema oscuro profesional con tokens CSS bien definidos hace que agregar nuevas características sea consistente y rápido.
