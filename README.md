```markdown
# Project Documentation

## Overview

This project is a comprehensive implementation of a **NestJS** application featuring robust modules and functionalities, including:

- **User Authentication and Authorization**: Implemented with JWT-based authentication and role-based access control (Admin, Manager, Member).  
- **Projects Module**: Fully functional CRUD operations for managing projects, including support for pagination and role-based project visibility.  
- **Tasks Module**: Task creation and management features with **Redis caching** for task summaries and analytics.  

---

## Features and Endpoints

### 1. User Module

#### Authentication and Authorization

- **Sign Up**  
  - **Endpoint**: `POST /api/v1/auth/signup`  
  - Allows users to create a new account with a hashed password.  

  **Request Body**:
  ```json
  {
    "fullName": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "role": "member"
  }
  ```

- **Login**  
  - **Endpoint**: `POST /api/v1/auth/login`  
  - Authenticates the user and returns a JWT token upon successful login.  

  **Request Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

- **Sign In**  
  - **Endpoint**: `POST /api/v1/auth/signin`  
  - Similar to login, this endpoint also validates user credentials and returns a JWT token.  

---

### 2. Projects Module

#### Features

- **Create Project**  
  - **Endpoint**: `POST /api/v1/projects`  
  - Role-based restriction: Only Admin and Manager roles can create projects.

- **Get All Projects**  
  - **Endpoint**: `GET /api/v1/projects`  
  - Includes pagination with query parameters `page` and `limit`.  

  **Role-Based Visibility**:  
  - **Admin**: Can view all projects.  
  - **Manager**: Can view projects they manage.  
  - **Member**: Can view projects they are part of.  

  **Example Request**:  
  `GET /api/v1/projects?page=1&limit=10`

---

### 3. Tasks Module

#### Features

- **Task Completion Summary**  
  - **Endpoint**: `GET /api/v1/tasks/summary`  
  - Provides a count of tasks grouped by their status (e.g., To Do, In Progress, Completed).  
  - Utilizes Redis caching for performance optimization.

- **Overdue Tasks Summary**  
  - **Endpoint**: `GET /api/v1/tasks/overdue`  
  - Lists overdue tasks grouped by their associated projects.  
  - Cache invalidation or updates can be implemented using task creation endpoints.

- **Project Task Summary**  
  - **Endpoint**: `GET /api/v1/tasks/project-summary/:projectId`  
  - Returns a detailed task breakdown by status and member contribution for a specific project.

---

## Installation and Setup

Follow these steps to set up the project in a local development environment:

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd <repository-name>
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Set Up Environment Variables

- Create a `.env` file in the root directory of the project.
- Add the following variables to the `.env` file:
  ```env
  PORT=3000
  DB_URL=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  REDIS_HOST=localhost
  REDIS_PORT=6379
  REDIS_PASSWORD=your_redis_password
  SECRET=your_app_specific_secret
  ```

### Step 4: Configure Redis

- Install and run a Redis server locally or ensure a hosted Redis instance is accessible.
- Default configuration:
  - Host: `localhost`
  - Port: `6379`

### Step 5: Start the Application
```bash
npm run start
```

The application will be available at:  
[http://localhost:3000/api/v1](http://localhost:3000/api/v1)

---

## Additional Authentication Routes

- **Login**  
  - **Endpoint**: `POST /api/v1/auth/login`  
  - **Request Body**:  
    ```json
    {
      "email": "john@example.com",
      "password": "password123"
    }
    ```

- **Sign Up**  
  - **Endpoint**: `POST /api/v1/auth/signup`  
  - **Request Body**:  
    ```json
    {
      "fullName": "Jane Doe",
      "email": "jane@example.com",
      "password": "password456",
      "role": "admin"
    }
    ```

---

## Key Features Recap

- **Role-Based Access Control**: Admins, Managers, and Members have distinct privileges.  
- **Redis Caching**: Used for optimizing task analytics and summaries.  
- **JWT Authentication**: Securely handles user sessions.  
- **Scalable Modules**: Separate and modularized implementation for users, projects, and tasks.  

Feel free to explore and enhance this project!
```# Task-Management-NestJs
