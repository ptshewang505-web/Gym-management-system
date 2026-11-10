<<<<<<< HEAD

# Gym Management System

## Project Information

- **Template ID:** T8
- **Project Domain:** Fitness & Health
- **Difficulty Level:** Medium
- **Team Size:** 3–5 Students

## Team Members

1. Pema Tshewang Norbu
2. Sonam Yangchen
3. Tshering Lhamo
4. Dhan Maya Adhikar
5. Sanele Yann Sichela

## Project Description

The Gym Management System is a web-based application
developed to simplify and digitize gym operations.

The system allows administrators to manage gym members,
trainers, membership plans, attendance records, payments,
and management reports.

Trainers can view assigned members and record attendance,
while members can access their membership details,
attendance history, payment status, and personal profiles.

The application provides role-based access for
administrators, trainers, and members.

## Project Objectives

- Manage gym members.
- Manage trainer profiles.
- Create and manage membership plans.
- Record member attendance.
- Track membership validity.
- Manage payment records.
- Monitor gym activities.
- Generate management reports.
- Provide role-based access.

## Technology Stack

### Frontend
- React.js
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Development Tools
- Visual Studio Code
- Git
- GitHub
- npm
- Postman

## Project Structure

Gym-Management-System/
- client/
- server/
- docs/
- README.md
- .gitignore

## Project Status

Sprint 1 - Project Foundation &
Development Environment Setup: Completed.
=======

# Gym Management System

## Project Information

- **Template ID:** T8
- **Project Domain:** Fitness & Health
- **Difficulty Level:** Medium
- **Team Size:** 3–5 Students

## Team Members

1. Pema Tshewang Norbu
2. [Team Member 2]
3. [Team Member 3]
4. [Team Member 4]
5. [Team Member 5]

## Project Description

The Gym Management System is a web-based application
developed to simplify and digitize gym operations.

The system allows administrators to manage gym members,
trainers, membership plans, attendance records, payments,
and management reports.

Trainers can view assigned members and record attendance,
while members can access their membership details,
attendance history, payment status, and personal profiles.

The application provides role-based access for
administrators, trainers, and members.

## Project Objectives

- Manage gym members.
- Manage trainer profiles.
- Create and manage membership plans.
- Record member attendance.
- Track membership validity.
- Manage payment records.
- Monitor gym activities.
- Generate management reports.
- Provide role-based access.

## Technology Stack

### Frontend
- React.js
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Development Tools
- Visual Studio Code
- Git
- GitHub
- npm
- Postman

## Project Structure

Gym-Management-System/
- client/
- server/
- docs/
- README.md
- .gitignore

  

## Project Status

Sprint 1 - Project Foundation &
Development Environment Setup: Completed.

# Gym Management System

A web-based Gym Management System developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application aims to simplify gym operations by managing members, trainers, membership plans, attendance, payments, and reports.

## 1. Project Overview

The Gym Management System provides a centralized platform for gym administrators, trainers, and members.

### Main Objectives
- Manage gym members and trainers.
- Create and manage membership plans.
- Track member attendance.
- Record and monitor payments.
- Provide role-based access.
- Generate dashboard information and reports.

## 2. Technology Stack

| Technology | Purpose |
|---|---|
| MongoDB | Database |
| Express.js | Backend framework |
| React.js | Frontend library |
| Node.js | JavaScript runtime |
| Vite | Frontend development tool |
| Axios | API communication |
| React Router DOM | Frontend navigation |
| Nodemon | Backend development server |

## 3. Project Structure

```text
Gym-Management-System/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   └── utils/
│   ├── package.json
│   └── index.html
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   ├── .env
│   ├── .gitignore
│   └── package.json
│
├── docs/
│   ├── design/
│   ├── Functional-Requirements.md
│   ├── Non-Functional-Requirements.md
│   └── Project-Planning.md
│
├── .gitignore
└── README.md
```

## 4. Installation and Setup

### Prerequisites

Install the following software:
- Node.js
- npm
- Visual Studio Code
- Git
- MongoDB Community Server or MongoDB Atlas

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Gym-Management-System
```

### Step 2: Install Frontend Dependencies

```bash
cd client
npm install
```

### Step 3: Start Frontend

```bash
npm run dev
```

Frontend URL:

http://localhost:5173

### Step 4: Install Backend Dependencies

Open another terminal:

```bash
cd server
npm install
```

### Step 5: Configure Environment Variables

Create a `.env` file inside the server folder:

```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/gym_management
```

### Step 6: Start Backend

```bash
npm run dev
```

Backend URL:

http://localhost:5000

## 5. Backend API Testing

The following endpoints are available in the initial backend setup:

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | API welcome message |
| GET | `/api/health` | Server health check |

## 6. Planned Application Modules

1. Authentication and User Management
2. Member Management
3. Trainer Management
4. Membership Plan Management
5. Attendance Management
6. Payment Management
7. Dashboard and Reports
8. Profile Management

## 7. User Roles

- **Admin:** Manages members, trainers, plans, attendance, payments and reports.
- **Trainer:** Views assigned members and manages relevant attendance records.
- **Member:** Views personal profile, membership information, attendance and payments.

## 8. Database Collections

The planned MongoDB collections are:

- Users
- Members
- Trainers
- MembershipPlans
- Attendance
- Payments

## 9. Development Status

| Sprint | Description |
|---|---|
| Sprint 1 | Project Foundation and Development Environment Setup |
| Sprint 2 | Project Planning and Requirement Analysis |
| Sprint 3 | System Design and Architecture |
| Sprint 4 | Project Scaffolding and Development Environment Initialization |

## 10. Future Enhancements

- Secure user authentication and authorization.
- MongoDB database integration.
- REST API development.
- Membership renewal notifications.
- Payment tracking and reporting.
- Responsive dashboard for all user roles.

## 11. Project Conclusion

The Gym Management System is designed to improve gym administration by replacing manual record-keeping with a centralized digital platform. The project uses the MERN stack to provide a scalable and maintainable web application.
