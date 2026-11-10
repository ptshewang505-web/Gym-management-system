# Gym Management System – Basic Wireframes

## Wireframe 1: Login Page

```text
+--------------------------------------------------+
|              GYM MANAGEMENT SYSTEM               |
|                                                  |
|                Welcome Back                      |
|                                                  |
|               Email Address                      |
|             [____________________]               |
|                                                  |
|               Password                           |
|             [____________________]               |
|                                                  |
|                [ LOGIN ]                          |
|                                                  |
|           Forgot Password?                       |
|                                                  |
+--------------------------------------------------+
```

**Main elements:**
- Application logo and name.
- Email input.
- Password input.
- Login button.
- Forgot password link (optional feature).

## Wireframe 2: Admin Dashboard

```text
+----------------------------------------------------------+
| GYM MANAGEMENT SYSTEM              Admin       [Logout]  |
+------------------+---------------------------------------+
|                  |                                       |
| SIDEBAR          |             DASHBOARD                  |
|                  |                                       |
| Dashboard        |  +----------+ +----------+             |
| Members          |  | Members  | | Trainers |             |
| Trainers         |  |   150    | |    12    |             |
| Plans            |  +----------+ +----------+             |
| Attendance       |                                       |
| Payments         |  +----------+ +----------+             |
| Reports          |  | Active   | | Pending  |             |
| Profile          |  | Plans    | | Payments |             |
|                  |  |   120    | |   15     |             |
|                  |  +----------+ +----------+             |
|                  |                                       |
|                  |       Recent Activities               |
|                  |  -----------------------------------  |
|                  |  Member joined                        |
|                  |  Payment recorded                     |
|                  |  Attendance updated                   |
+------------------+---------------------------------------+
```

**Main elements:**
- Navigation sidebar.
- Admin profile and logout.
- Statistics cards.
- Recent activities.

## Wireframe 3: Member Management Page

```text
+----------------------------------------------------------+
| GYM MANAGEMENT SYSTEM                         [Logout]   |
+------------------+---------------------------------------+
| SIDEBAR          |          MEMBER MANAGEMENT            |
|                  |                                       |
| Dashboard        |  [ Search Members________ ]           |
| Members          |                     [+ Add Member]    |
| Trainers         |                                       |
| Plans            |  -----------------------------------  |
| Attendance       |  ID | Name | Email | Phone | Action   |
| Payments         |  -----------------------------------  |
| Reports          |  01 | User | ...   | ...   | Edit     |
| Profile          |  02 | User | ...   | ...   | Delete   |
|                  |  03 | User | ...   | ...   | View     |
|                  |  -----------------------------------  |
|                  |                                       |
+------------------+---------------------------------------+
```

**Main elements:**
- Search field.
- Add Member button.
- Member table.
- View, edit, and delete actions.

## Wireframe 4: Add/Edit Member Form

```text
+----------------------------------------------------------+
|                   ADD NEW MEMBER                         |
+----------------------------------------------------------+
|                                                          |
| Full Name                                                |
| [________________________________________]               |
|                                                          |
| Email Address                                            |
| [________________________________________]               |
|                                                          |
| Phone Number                                             |
| [________________________________________]               |
|                                                          |
| Address                                                  |
| [________________________________________]               |
|                                                          |
| Assign Trainer                                           |
| [ Select Trainer                       v ]               |
|                                                          |
| Membership Plan                                          |
| [ Select Membership Plan                v ]              |
|                                                          |
| Membership Start Date                                    |
| [____________________]                                   |
|                                                          |
|              [ SAVE MEMBER ] [ CANCEL ]                  |
|                                                          |
+----------------------------------------------------------+
```

**Main elements:**
- Member information fields.
- Trainer selection.
- Membership plan selection.
- Save and cancel buttons.

## Wireframe 5: Profile Page

```text
+----------------------------------------------------------+
| GYM MANAGEMENT SYSTEM                         [Logout]   |
+------------------+---------------------------------------+
| SIDEBAR          |              MY PROFILE                |
|                  |                                       |
| Dashboard        |           +----------------+          |
| Members          |           |                |          |
| Trainers         |           |  PROFILE PHOTO |          |
| Plans            |           |                |          |
| Attendance       |           +----------------+          |
| Payments         |                                       |
| Profile          |  Name:       __________________       |
|                  |  Email:      __________________       |
|                  |  Phone:      __________________       |
|                  |  Address:    __________________       |
|                  |  Role:       __________________       |
|                  |                                       |
|                  |           [ UPDATE PROFILE ]          |
|                  |                                       |
+------------------+---------------------------------------+
```

**Main elements:**
- Profile image placeholder.
- Name, email, phone, and address.
- User role.
- Update Profile button.

## Conclusion

These five wireframes provide the basic layout of the Gym Management System. They will be used as a guide during frontend development.