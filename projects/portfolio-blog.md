---
title: 'Portfolio + Personal Blog'
description: 'Personal website built with Next.js. Includes a blog with Markdown support and syntax highlighting, automatic deployment via GitHub Actions, deployed on Vercel. Redesigned with Claude Code.'
image: 'screenshot.svg'
tech: ['Next.js 13', 'React 18', 'CSS Modules', 'Markdown', 'GitHub Actions']
githubUrl: 'https://github.com/fredyvelasquezgt/personal-blog-next-js'
demoUrl: 'https://personal-blog-next-js-eight.vercel.app/'
isFeatured: true
date: '2024-01-15'
---

## Description

This is the website you are currently viewing—a professional portfolio combined with a personal blog. It is built with Next.js 13 using the Pages Router and leverages full static generation to ensure fast and efficient deployment.

## Key Features

- **Fully featured blog** powered by Markdown files with frontmatter support
- **Projects section** designed to showcase work to recruiters and collaborators
- **Syntax highlighting** implemented with react-syntax-highlighter
- **Modern and professional** design with a dark theme
- **Automated deployment** via GitHub Actions
- **Fully static architecture** — no database and no API calls at build time
- **Responsive design** — optimized for mobile, tablet, and desktop
- **SEO optimized** using Next.js Head and meta tags

## Tech Stack

- **Frontend**: React 18 with Next.js 13 (Pages Router)
- **Styling**: CSS Modules with CSS variables
- **Content Management**: Markdown with gray-matter for frontmatter parsing
- **Typography**: Oswald (headings), Roboto (body), Source Code Pro (code)
- **Deployment**: GitHub Actions → Vercel or custom hosting

## Key Learnings

Maintaining a clear separation between the data layer (`lib/projects-util.js` and `lib/posts-util.js`) and presentation components significantly improves code maintainability and testability.

Using CSS Modules instead of a CSS framework ensures proper style scoping and prevents conflicts across components.

Additionally, implementing a well-structured dark theme with clearly defined CSS tokens enables consistent and efficient feature development.