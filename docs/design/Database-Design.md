# Gym Management System – MongoDB Database Design

## 1. Database Name

`gym_management`

## 2. Collections

The system will use six MongoDB collections.

### 2.1 Users Collection

Stores authentication details and basic information for all system users.

| Field | Data Type | Description |
|---|---|---|
| _id | ObjectId | Unique user ID |
| name | String | Full name |
| email | String | Email address (unique) |
| password | String | Hashed password |
| role | String | admin, trainer, or member |
| phone | String | Contact number |
| address | String | Residential address |
| isActive | Boolean | Account status |
| createdAt | Date | Account creation date |
| updatedAt | Date | Last update date |

### 2.2 Members Collection

Stores gym member profile and membership information.

| Field | Data Type | Description |
|---|---|---|
| _id | ObjectId | Unique member ID |
| userId | ObjectId | Reference to Users |
| memberCode | String | Unique member code |
| trainerId | ObjectId | Reference to Trainers |
| membershipPlanId | ObjectId | Reference to MembershipPlans |
| joinDate | Date | Date of joining |
| membershipStartDate | Date | Membership start date |
| membershipEndDate | Date | Membership expiry date |
| status | String | active, inactive, or expired |

### 2.3 Trainers Collection

Stores trainer information.

| Field | Data Type | Description |
|---|---|---|
| _id | ObjectId | Unique trainer ID |
| userId | ObjectId | Reference to Users |
| specialization | String | Training specialization |
| experience | String | Work experience |
| qualification | String | Educational qualification |
| createdAt | Date | Record creation date |

### 2.4 MembershipPlans Collection

Stores the available gym membership plans.

| Field | Data Type | Description |
|---|---|---|
| _id | ObjectId | Unique plan ID |
| planName | String | Name of the plan |
| duration | Number | Duration in months |
| price | Number | Plan price |
| description | String | Plan details |
| isActive | Boolean | Plan availability |

### 2.5 Attendance Collection

Stores member attendance records.

| Field | Data Type | Description |
|---|---|---|
| _id | ObjectId | Unique attendance ID |
| memberId | ObjectId | Reference to Members |
| attendanceDate | Date | Attendance date and time |
| status | String | present or absent |
| recordedBy | ObjectId | User who recorded attendance |

### 2.6 Payments Collection

Stores member payment information.

| Field | Data Type | Description |
|---|---|---|
| _id | ObjectId | Unique payment ID |
| memberId | ObjectId | Reference to Members |
| membershipPlanId | ObjectId | Reference to MembershipPlans |
| amount | Number | Payment amount |
| paymentDate | Date | Payment date |
| paymentMethod | String | Cash, card, or other |
| paymentStatus | String | paid, pending, or failed |

## 3. Database Relationships

1. Users and Members: A user account may have one member profile.
2. Users and Trainers: A user account may have one trainer profile.
3. Trainers and Members: One trainer can manage multiple members.
4. MembershipPlans and Members: One membership plan can be assigned to multiple members.
5. Members and Attendance: One member can have multiple attendance records.
6. Members and Payments: One member can have multiple payment records.
7. MembershipPlans and Payments: One membership plan can be associated with multiple payments.

## 4. Database Design Notes

- MongoDB will store the collections inside the `gym_management` database.
- ObjectId references will connect related documents.
- User passwords must be stored as hashes, never as plain text.
- Email and memberCode should have unique indexes.
- Timestamps should be maintained where useful.
- Validation should be applied to required fields and allowed status values.

## 5. Conclusion

The proposed MongoDB database structure organizes gym information into six collections. It supports user management, member and trainer records, membership plans, attendance, and payments.