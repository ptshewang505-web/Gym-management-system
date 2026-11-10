# Functional Requirements
## Gym Management System

### 1. Introduction
The Gym Management System is a web-based application developed using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). It helps gym administrators and trainers manage members, trainers, membership plans, attendance, and payments.

### 2. User Roles

The system supports three main user roles:

- **Admin:** Manages the overall gym operations, users, trainers, members, membership plans, payments, and reports.
- **Trainer:** Views assigned members and manages their attendance records.
- **Member:** Views personal profile, membership details, attendance history, and payment information.

### 3. Functional Requirements

#### FR-01: User Authentication
- The system shall allow users to log in using their email and password.
- The system shall validate login credentials.
- The system shall allow users to log out securely.
- The system shall provide role-based access for Admin, Trainer, and Member.
- The system shall prevent unauthorized users from accessing restricted pages.

#### FR-02: Member Management
- The admin shall be able to add new gym members.
- The admin shall be able to view the list of members.
- The admin shall be able to update member information.
- The admin shall be able to delete member records.
- The system shall allow searching and filtering of members.
- The system shall maintain member details such as name, email, phone number, address, and membership information.

#### FR-03: Trainer Management
- The admin shall be able to add new trainers.
- The admin shall be able to view trainer details.
- The admin shall be able to update trainer information.
- The admin shall be able to delete trainer records.
- The admin shall be able to assign trainers to members.
- Trainers shall be able to view their assigned members.

#### FR-04: Membership Plan Management
- The admin shall be able to create membership plans.
- The admin shall be able to view available membership plans.
- The admin shall be able to update existing plans.
- The admin shall be able to delete membership plans.
- Each membership plan shall contain details such as plan name, duration, price, and description.
- The system shall maintain membership validity information.

#### FR-05: Attendance Management
- Trainers or authorized users shall be able to record member attendance.
- The system shall store attendance dates and member details.
- Authorized users shall be able to view attendance records.
- Members shall be able to view their attendance history.
- The system shall maintain attendance information for reporting purposes.

#### FR-06: Payment Management
- The admin shall be able to record member payments.
- The system shall maintain payment details such as member, amount, payment date, and payment status.
- The admin shall be able to view payment history.
- The system shall display pending or outstanding payments.
- Members shall be able to view their payment information.

#### FR-07: Dashboard Management
- The admin shall be able to access a dashboard.
- The dashboard shall display the total number of members.
- The dashboard shall display the total number of trainers.
- The dashboard shall display active memberships.
- The dashboard shall display pending payments.
- The dashboard shall provide an overview of gym activities.

#### FR-08: Reports Management
- The admin shall be able to view attendance reports.
- The admin shall be able to view payment reports.
- The admin shall be able to view revenue information.
- The system shall organize records to support report generation.

#### FR-09: Profile Management
- Users shall be able to view their profile information.
- Users shall be able to update permitted personal information.
- Users shall be able to change their password securely.

### 4. Expected Outcome

The system will provide a centralized platform for managing gym operations. It will reduce manual work, improve record accuracy, and make it easier to manage members, trainers, memberships, attendance, and payments.

### 5. Conclusion

These functional requirements define the main features and operations of the Gym Management System. They will guide the development of the frontend, backend, database, and user interfaces.