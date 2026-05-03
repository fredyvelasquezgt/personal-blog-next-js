---
title: 'Calendar'
description: 'Full-stack calendar application built with the MERN stack, featuring a modern React frontend and a robust Node.js/Express backend API.'
image: 'calendar1.png'
tech: ['React 18','Node JS','Express JS','Mongo DB','Redux Toolkit','React Redux','Vite','JWT']
githubUrl: 'https://github.com/fredyvelasquezgt/react-calendar-MERN-frontend'
demoUrl: 'https://react-mern-backend-production-31e9.up.railway.app/auth/login'
isFeatured: true
date: '2024-01-15'
---

## Description

Full-stack calendar application built with the MERN stack, featuring a modern React frontend and a robust Node.js/Express backend API. The application enables real-time event management with secure authentication and a scalable architecture.

It is designed to deliver a seamless user experience while maintaining a clear separation between client and server responsibilities.

## Key Features

- **Full-stack architecture** with React frontend and RESTful API backend
- **Secure authentication** using JWT with persistent sessions
- **Complete CRUD** operations for calendar events
- **Real-time UI updates** without page reloads
- **Protected routes** and user authorization
- **Centralized state management** using Redux Toolkit
- **Responsive and modern UI** optimized for all devices
- **Per-user data isolation** ensuring privacy and security

## Tech Stack

- **Frontend**: React 18 with Vite, React Router
- **Styling**: CSS
- **State Management**: Redux Toolkit + React-Redux
- **Backend**: Node.js with Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT + bcrypt
- **HTTP Client**: Axios
- **UI Components**: React Big Calendar, SweetAlert2
- **Deployment**: GitHub Actions → Vercel or custom hosting

## Architecture

The application follows a scalable full-stack architecture with clear separation of concerns:

Frontend (Client)
- Handles UI rendering and user interactions
- Uses Redux for centralized state management
- Communicates with backend via HTTP requests

Backend (Server)
- Exposes RESTful API endpoints
- Handles authentication, authorization, and business logic
- Manages data persistence with MongoDB

Data Flow
- User actions trigger frontend state updates
- Async operations call the backend API
- Backend processes requests and returns JSON responses
- Redux updates the UI in real time

This layered approach ensures maintainability, scalability, and testability across the entire application.

## Key Learnings

Building a full-stack application highlighted the importance of separating concerns between frontend and backend while maintaining a consistent data flow.

On the frontend, using Redux Toolkit enables predictable state management and real-time UI updates. On the backend, implementing stateless authentication with JWT improves scalability and simplifies session handling.

Additionally, structuring both layers with clear responsibilities (API, state management, UI, and database) results in a more maintainable and extensible system, making it easier to scale and introduce new features over time.