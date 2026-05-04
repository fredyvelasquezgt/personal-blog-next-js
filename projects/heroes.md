---
title: 'Heroes App - Search & Favorite Superhero Characters'
description: 'Modern React application for searching and managing favorite superhero characters. Built with React 19, React Query, React Router v7, and Tailwind CSS. Features real-time search, optimized data fetching with caching, and favorite management using Context API.'
image: 'heroes.png'
tech: ['React 19', 'React Query', 'React Router v7', 'Tailwind CSS', 'TypeScript', 'Vite', 'Radix UI', 'Axios']
githubUrl: 'https://github.com/fredyvelasquezgt/heroes-app'
demoUrl: 'https://chimerical-alpaca-52cb91.netlify.app/#/'
isFeatured: true
date: '2026-05-03'
---

## Description

Heroes App is a modern React frontend application that enables users to search, browse, and manage their favorite superhero characters. The application demonstrates best practices in state management, data fetching optimization, and component architecture using contemporary React patterns and tools.

Built as part of the React Zero to Expert course, this project showcases production-ready code with TypeScript, comprehensive error handling, and a responsive user interface optimized for all device sizes.

## Key Features

- **Real-time hero search** with optimized request deduplication
- **Efficient data fetching** powered by React Query with automatic caching
- **Favorite heroes management** using Context API with localStorage persistence
- **Detailed hero profiles** displaying stats, powers, and biographies
- **Responsive design** optimized for mobile, tablet, and desktop devices
- **Loading states and skeletons** for better user experience
- **Type-safe implementation** with full TypeScript support
- **Modern UI components** built with Radix UI and Tailwind CSS

## Tech Stack

- **Frontend Framework**: React 19 with React DOM
- **Routing**: React Router v7 with nested routes
- **Server State Management**: React Query (TanStack Query) v5.81
- **Client State Management**: Context API for favorites
- **HTTP Client**: Axios with interceptors
- **Styling**: Tailwind CSS v4.1 with responsive utilities
- **Component Library**: Radix UI for accessible components
- **Type Safety**: TypeScript v5.8
- **Build Tool**: Vite v7.0 with React SWC plugin
- **Testing**: Vitest v3.2 with React Testing Library
- **Icons**: Lucide React v0.525

## Architecture Highlights

### Separation of Concerns

The application follows a clear layered architecture:

```
API Layer → Actions Layer → Hooks Layer → Components
```

- **API Layer** (`heroes/api/`): Raw HTTP requests with Axios
- **Actions Layer** (`heroes/actions/`): Query functions for React Query
- **Hooks Layer** (`heroes/hooks/`): Custom hooks abstracting Redux/Query complexity
- **Components**: Presentation components consuming hooks

This separation makes the codebase highly maintainable and testable.

### React Query for Server State

React Query handles all server state with built-in benefits:

- **Automatic caching** of API responses
- **Request deduplication** preventing redundant API calls
- **Background refetching** for fresh data
- **Optimistic updates** for better UX
- **Stale state handling** and cache invalidation

```typescript
const { data: heroes, isLoading, error } = useQuery({
  queryKey: ['heroes'],
  queryFn: getAllHeroes,
  staleTime: 5 * 60 * 1000,
  gcTime: 10 * 60 * 1000,
});
```

### Context API for Client State

Client state (favorites) is managed elegantly with Context API:

- **No prop drilling** across component tree
- **Easy to understand** compared to Redux
- **Lightweight implementation** suitable for this use case
- **localStorage persistence** for data retention

### TypeScript for Type Safety

Full TypeScript implementation ensures:

- **Compile-time error detection**
- **Superior IDE autocomplete**
- **Self-documenting code** through type definitions
- **Refactoring confidence** with type checking

## Key Learnings

**React Query is transformative for data fetching.** Managing server state with useQuery eliminates countless edge cases around caching, deduplication, and background updates. Compared to manual useState + useEffect patterns, React Query provides production-ready solutions out-of-the-box.

**Layered architecture enables scalability.** By separating API calls from component logic, the codebase remains maintainable as it grows. Each layer has a single responsibility, making changes and testing straightforward.

**Context API is sufficient for moderate client state.** While Redux is powerful, Context API paired with custom hooks is ideal for applications with moderate state complexity like favorite management. The simpler mental model reduces overhead without sacrificing functionality.

**Tailwind CSS accelerates UI development.** Utility-first CSS enabled rapid iteration on responsive layouts without context-switching between files. The built-in responsive modifiers (`md:`, `lg:`) make cross-device design seamless.

**TypeScript prevents entire classes of bugs.** Type safety caught several potential issues during development, particularly around API response shapes and hero object properties. The investment in typing pays dividends immediately.

## Project Structure

```
src/
├── router/                 # React Router configuration
├── heroes/
│   ├── api/               # Axios API setup
│   ├── context/           # Context API (Favorites)
│   ├── hooks/             # Custom hooks (useQuery, useContext)
│   ├── actions/           # Query functions for React Query
│   ├── types/             # TypeScript interfaces
│   ├── components/        # UI components
│   ├── pages/             # Page components
│   └── layouts/           # Layout components
├── admin/                 # Admin section (extensible)
├── components/            # Shared components
└── lib/                   # Utility functions
```

## Development Experience

The development experience is excellent:

- **Vite** provides near-instant hot module replacement
- **React Query DevTools** enables debugging cached data
- **TypeScript** catches errors before runtime
- **Vitest** runs unit tests with fast feedback loops
- **Tailwind IntelliSense** offers real-time CSS suggestions

## Performance Optimizations

The application includes several performance considerations:

- **Query caching** reduces unnecessary API requests
- **Request deduplication** prevents duplicate fetches
- **Component memoization** avoids unnecessary re-renders
- **Code splitting** via React Router for lazy-loaded routes
- **Responsive images** with Tailwind's image utilities
- **CSS optimization** through Tailwind's purging

## Future Enhancements

Potential improvements for expanding the application:

- **Advanced filtering and sorting** by power levels
- **Hero comparison tool** side-by-side analysis
- **Dark mode toggle** with Tailwind CSS
- **Internationalization (i18n)** for multiple languages
- **Analytics integration** tracking user behavior
- **Offline mode** with service workers
- **E2E testing** with Cypress or Playwright
- **Component Storybook** for UI documentation
- **PWA support** for app-like experience

## Deployment

The application is deployment-ready and can be hosted on:

- **Vercel** (recommended for Next.js-like performance)
- **Railway** for containerized deployments
- **Netlify** for static hosting
- **GitHub Pages** for free static hosting

Environment variables are managed through `.env.local` and include:

```env
VITE_HERO_API_URL=https://superhero-api.com/api
```

## Conclusion

Heroes App demonstrates modern React development practices with emphasis on developer experience, performance, and maintainability. The combination of React Query, Context API, TypeScript, and Tailwind CSS creates a solid foundation for building scalable frontend applications.

The project serves as a reference implementation for team members learning React and as a template for similar data-driven applications.
