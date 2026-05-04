---
title: 'AR Payment App'
description: 'Full-stack AR-powered payment application built with React Native, Expo, and the MERN stack. The application combines immersive augmented reality experiences with secure payment processing and real-time transaction management.'
image: 'paymentApp1.png'
tech: ['React Native','Expo','Express JS','Node JS','Firebase','Mongo DB','Axios','Viro JS', 'PostgreSQL', 'Cypress']
githubUrl: 'https://github.com/fredyvelasquezgt/my-payment-app'
demoUrl: 'https://personal-blog-next-js-eight.vercel.app/'
isFeatured: true
isMobile: true                                            
date: '2024-01-15'
---

## Description

Full-stack AR-powered payment application built with React Native, Expo, and the MERN stack. The application combines immersive augmented reality experiences with secure payment processing and real-time transaction management.

It is designed to deliver a seamless mobile-first experience while maintaining enterprise-grade security, scalability, and a clear separation between client (React Native frontend) and server (Node.js/Express backend) responsibilities.

The platform enables users to authenticate securely, capture AR camera views, process payments, and manage their complete transaction history—all in real-time with instant UI updates and persistent data synchronization.

## Key Features

- **Full-stack architecture** with React Native mobile frontend and RESTful API backend
- **Augmented Reality integration** using React Viro and Three.js for immersive experiences
- **Secure authentication** using JWT with bcryptjs password hashing and persistent AsyncStorage sessions
- **Complete CRUD operations** for payment processing and transaction management
- **Real-time UI updates** without page reloads using Axios with interceptors
- **Protected routes** and API endpoints with user authorization and role-based access control
- **Cross-platform support** (iOS, Android, Web) from single React Native codebase
- **Transaction history tracking** with filtering and detailed payment records
- **Payment confirmation flows** with success/failure feedback and detailed status messages
- **Per-user data isolation** ensuring privacy, security, and multi-tenant data separation
- **Responsive design** optimized for mobile devices with bottom tab navigation
- **Offline-first architecture** with AsyncStorage for local data caching and sync

## Tech Stack

## Tech Stack

### Frontend
- **Mobile Framework**: React Native 0.76+ with Expo 52.0+
- **Routing**: Expo Router (file-based routing)
- **AR Technology**: React Viro 2.41+, Three.js 0.166+
- **Navigation**: React Navigation 6.x+ (Bottom Tab Navigator)
- **State Management**: AsyncStorage for local persistence
- **HTTP Client**: Axios 1.7+ with JWT interceptors
- **Camera Access**: Expo Camera 16.0+
- **UI Components**: Custom themed components with React Native
- **Styling**: React Native StyleSheet with theme support

### Backend
- **Runtime**: Node.js 18+
- **Web Framework**: Express.js (latest)
- **Database**: MongoDB 8.0+ with Mongoose 8.6+ ODM
- **Authentication**: JWT 9.0+ + bcryptjs 2.4+
- **API Architecture**: RESTful endpoints with middleware pattern
- **Security**: CORS, helmet, input validation, rate limiting
- **Environment**: Dotenv for configuration management

### Testing & Quality
- **Unit Testing**: Jest 29.7+ with Jest-Expo preset
- **E2E Testing**: Cypress 13.17+ with TypeScript support
- **Code Linting**: ESLint 8.57+ with Expo configuration
- **Code Quality**: TypeScript for type safety across the stack
- **Mock Data**: Jest mocks and Cypress fixtures

### Development & Deployment
- **Version Control**: Git with GitHub integration
- **Mobile Deployment**: Expo Application Services (EAS)
- **Database Hosting**: MongoDB Atlas with automatic backups
- **CI/CD**: GitHub Actions for automated testing and deployment

## Architecture

### System Architecture Overview

The application follows a **three-tier architecture** with clear separation of concerns:

```
┌─────────────────────────────────────────────────────────┐
│  Presentation Layer (Mobile & Web)                      │
│  ├─ Authentication Screens (Login/Signup)              │
│  ├─ Payment Processing Screens (Forms & Confirmation)  │
│  ├─ AR Camera Integration (Viro + Three.js)           │
│  ├─ Transaction History (Filtered List View)          │
│  └─ Success/Failure Feedback (Modal Dialogs)          │
└──────────────────┬──────────────────────────────────────┘
                   │ (HTTP/REST + JSON)
                   ↓
┌──────────────────────────────────────────────────────────┐
│  Business Logic Layer (API & Middleware)                │
│  ├─ Authentication Service (JWT + Password Hash)       │
│  ├─ Payment Service (Validation & Processing)          │
│  ├─ User Service (Profile & Data Management)           │
│  ├─ Transaction Service (History & Records)            │
│  └─ Middleware (Auth, Validation, Error Handling)      │
└──────────────────┬──────────────────────────────────────┘
                   │ (Mongoose ODM)
                   ↓
┌──────────────────────────────────────────────────────────┐
│  Data Access Layer (MongoDB)                             │
│  ├─ Users Collection (Profiles, Credentials)           │
│  ├─ Payments Collection (Payment Records)              │
│  ├─ Transactions Collection (Complete History)         │
│  └─ Sessions Collection (Optional - Token Blacklist)   │
└──────────────────────────────────────────────────────────┘
```

### Data Flow & Request/Response Cycle

```
User Interaction (Payment Submission)
        ↓
Frontend: Form Validation + State Management
        ↓
Axios HTTP POST with JWT Authorization Header
        ↓
Express Route Handler
    ├─ CORS Validation
    ├─ JWT Token Verification (Middleware)
    ├─ Input Sanitization & Validation
    ├─ Business Logic Processing
    └─ Mongoose Query to MongoDB
        ↓
MongoDB: Insert/Update Document
        ↓
Backend Response with Status & Data
        ↓
Axios Response Interceptor Handling
        ↓
Frontend: Async State Update via AsyncStorage
        ↓
Navigation & UI Render
        ↓
Success/Failure Screen Display ✓
```

### Authentication & Security Flow

```
Registration/Login Screen
        ↓
User Submits Email + Password
        ↓
Express Route Handler
    ├─ Validate Email Format
    ├─ Check User Exists (Registration) or Verify (Login)
    ├─ Hash Password with bcryptjs
    └─ Generate JWT Token
        ↓
Token Sent to Frontend
        ↓
AsyncStorage: Store Token Securely
        ↓
Axios Interceptor: Add Token to Every Request
        ↓
Protected Routes Unlocked
        ↓
Redux/Context: Auth State Updated
        ↓
Dashboard & Payment Screens Accessible ✓
```

### Component Architecture (Frontend)

```
Root App (_layout.tsx)
├── Bottom Tab Navigator
│   ├── Home (Index Screen)
│   ├── ARCamera Screen
│   ├── History Screen
│   └── Profile Screen
│
├── Modal Navigation (Non-Tab Routes)
│   ├── Login Screen
│   ├── Signup Screen
│   ├── Payment Confirmation
│   └── Success/Failure Screens
│
└── Navigation Context
    ├── Auth State Management
    ├── User Session Management
    └── Deep Linking Support
```

### Backend API Structure

```
/api
├── /auth
│   ├── POST /register       → Create new user
│   ├── POST /login          → Authenticate & get token
│   ├── POST /logout         → Invalidate token
│   └── GET /verify          → Check token validity
│
├── /payments
│   ├── POST /process        → Process new payment
│   ├── GET /status/:id      → Get payment status
│   ├── PUT /update/:id      → Update payment record
│   └── DELETE /:id          → Cancel payment
│
├── /transactions
│   ├── GET /                → Get user's transactions
│   ├── GET /:id             → Get single transaction
│   ├── GET /filter          → Filter by date/status
│   └── POST /export         → Export history (CSV)
│
├── /users
│   ├── GET /profile         → Get user profile
│   ├── PUT /profile         → Update profile
│   └── POST /upload-avatar  → Upload user avatar
│
└── Middleware
    ├── Auth Verification    → JWT validation
    ├── Error Handler        → Centralized error handling
    ├── Logger               → Request/response logging
    └── Rate Limiter         → API rate limiting
```

## Key Design Patterns

### 1. **JWT-Based Stateless Authentication**
- Frontend stores JWT in AsyncStorage
- Every API request includes token in Authorization header
- Backend verifies token signature and expiration
- **Benefit**: Scalable, stateless, no server-side sessions needed

### 2. **Axios Interceptors for API Consistency**
- Request interceptor: Auto-attach JWT token
- Response interceptor: Handle 401 errors globally
- Error interceptor: Centralized error handling
- **Benefit**: DRY principle, consistent API behavior

### 3. **Component-Based UI Architecture**
- Reusable components (ThemedText, ThemedView)
- Screen components for routing
- Navigation container for state
- **Benefit**: Modular, maintainable, testable UI

### 4. **Mongoose Schema Validation**
- Define data structure at database level
- Automatic validation on insert/update
- Type enforcement and default values
- **Benefit**: Data consistency, prevents invalid records

### 5. **Express Middleware Pipeline**
- Request flows through middleware chain
- Each middleware adds functionality (auth, validation, logging)
- Error handling middleware catches all errors
- **Benefit**: Clean separation of concerns, reusable logic

### 6. **AsyncStorage for Offline-First Architecture**
- Cache user data locally
- Sync with backend when online
- Survives app restart and network disconnects
- **Benefit**: Better UX, reduced API calls

## Key Learnings & Best Practices

### Frontend Insights

Building a cross-platform mobile app with React Native revealed the importance of:

1. **Platform-Specific Considerations**: iOS and Android have different UI patterns, camera permissions, and storage mechanisms. Using Expo abstracts much of this, but understanding platform differences remains crucial.

2. **Efficient State Management**: AsyncStorage for persistence and Expo Router for navigation provide a simpler alternative to Redux for many use cases. Start simple, add complexity only when needed.

3. **AR Integration Complexity**: React Viro requires careful handling of camera permissions, Three.js transforms, and memory management. Testing on real devices is essential—simulators can hide performance issues.

4. **Real-time Updates**: Using Axios interceptors and proper error handling ensures consistent API behavior across all requests. This is more effective than prop drilling and callback hell.

5. **Testing Strategy**: With Jest and Cypress, unit test components and integration test critical flows (auth, payment). E2E tests should focus on user journeys, not implementation details.

### Backend Insights

Designing a scalable Node.js/Express API highlighted:

1. **Middleware-Oriented Architecture**: Express middleware provides a clean pattern for cross-cutting concerns (logging, validation, auth). Order matters—middleware executes top to bottom.

2. **Database Design Matters**: Proper MongoDB schema design with indexes on frequently queried fields (userId, paymentStatus, createdAt) significantly impacts performance.

3. **Security as Default**: Always validate input, hash passwords with bcryptjs, use HTTPS in production, implement rate limiting, and store secrets in environment variables—never in code.

4. **Error Handling Consistency**: A centralized error handler middleware ensures all errors return consistent HTTP status codes and JSON structures, making frontend error handling predictable.

5. **Stateless Design**: JWT-based authentication eliminates the need for server-side sessions, making horizontal scaling trivial. Multiple server instances can handle requests independently.

6. **API Versioning**: Design APIs with versioning in mind (`/api/v1/`, `/api/v2/`) from the start to avoid breaking existing clients during updates.

### Full-Stack Integration

The complete system demonstrates:

1. **Separation of Concerns**: The frontend focuses on UX, the backend on data integrity and security. Neither should leak into the other's domain.

2. **Contract-Based Development**: Define API contracts (request/response schemas) upfront. This allows frontend and backend development to proceed in parallel.

3. **Type Safety**: Using TypeScript on both frontend and backend catches errors at development time, reducing runtime bugs and improving developer productivity.

4. **Observability**: Implement logging on both sides. Frontend logs to analytics service, backend logs to centralized logging (ELK stack, Datadog, etc.). This helps diagnose production issues.

5. **Continuous Deployment**: Automate testing and deployment with GitHub Actions. This catches integration issues early and enables frequent, low-risk releases.

## Scalability & Future Extensions

### Current Scalability
- **Horizontal**: Stateless API design allows multiple server instances
- **Vertical**: Efficient database queries with proper indexing
- **Database**: MongoDB sharding for very large datasets

### Potential Enhancements
- **Payment Gateway Integration**: Stripe, PayPal, or local payment providers
- **Push Notifications**: Real-time payment confirmations via Expo Notifications
- **Advanced AR**: 3D models, body tracking, environmental understanding
- **Analytics Dashboard**: Charts and metrics for transaction analysis
- **Admin Panel**: Management interface for payments and users
- **Social Features**: Share transactions, split payments, payment links
- **Internationalization**: Multi-language support with i18n
- **Dark Mode**: Theme toggle with persistent preference
- **Offline Mode**: Complete offline capability with sync queue
- **AI/ML**: Fraud detection, spending predictions, recommendations

## Deployment Strategy

### Frontend
1. Build with EAS (`eas build --platform ios` and `android`)
2. Test on TestFlight (iOS) and Google Play Beta (Android)
3. Submit to App Store and Google Play
4. Monitor crash reports and user feedback

### Backend
1. Push to GitHub
2. GitHub Actions runs tests and builds Docker image
3. Deploy to Railway or Heroku with automatic scaling
4. MongoDB Atlas handles database backups and recovery
5. Monitor with logging and error tracking (Sentry)

## Conclusion

This AR payment application demonstrates a complete full-stack implementation with modern technologies and best practices. It balances rapid development with code quality, scalability with simplicity, and user experience with security.

The separation between frontend and backend, combined with clear data contracts and comprehensive testing, creates a maintainable foundation for future growth and feature expansion.

Key takeaway: **Start simple with a clean architecture, test thoroughly, and scale incrementally**—this approach has proven effective for both the calendar app and this more complex payment system.

---
