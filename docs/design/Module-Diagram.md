
# Gym Management System – Module Diagram


flowchart TD
    A[Gym Management System]

    A --> B[Authentication and User Management]
    A --> C[Member Management]
    A --> D[Trainer Management]
    A --> E[Membership Plan Management]
    A --> F[Attendance Management]
    A --> G[Payment Management]
    A --> H[Dashboard and Reports]
    A --> I[Profile Management]

    B --> B1[Login]
    B --> B2[Logout]
    B --> B3[Role-Based Access]

    C --> C1[Add Member]
    C --> C2[View Members]
    C --> C3[Edit Member]
    C --> C4[Delete Member]

    D --> D1[Add Trainer]
    D --> D2[View Trainers]
    D --> D3[Assign Trainer]

    E --> E1[Create Plan]
    E --> E2[Update Plan]
    E --> E3[Manage Plan Validity]

    F --> F1[Mark Attendance]
    F --> F2[View Attendance History]

    G --> G1[Record Payment]
    G --> G2[Payment History]
    G --> G3[Pending Payments]

    H --> H1[Gym Statistics]
    H --> H2[Attendance Reports]
    H --> H3[Payment Reports]

    I --> I1[View Profile]
    I --> I2[Update Profile]

