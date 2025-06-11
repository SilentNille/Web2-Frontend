# REST Server API Endpoints

## Public User Management (No Authentication)
- **GET /api/publicUsers** - Get all users (including password hashes)
- **GET /api/publicUsers/:userID** - Get specific user by userID
- **POST /api/publicUsers** - Create new user
- **PUT /api/publicUsers/:userID** - Update user
- **DELETE /api/publicUsers/:userID** - Delete user

## Authentication
- **GET /api/authenticate** - Authenticate user via Basic Auth, returns JWT token

## User Management (Authentication Required)
- **GET /api/users** - Get all users (admin only) or own user data
- **GET /api/users/:userID** - Get specific user (admin or own data)
- **POST /api/users** - Create new user (admin only)
- **PUT /api/users/:userID** - Update user (admin or own data)
- **DELETE /api/users/:userID** - Delete user (admin only)

## Degree Courses
- **GET /api/degreeCourses** - Get all degree courses
- **GET /api/degreeCourses?universityShortName=X** - Search courses by university
- **GET /api/degreeCourses/:id** - Get specific degree course
- **POST /api/degreeCourses** - Create degree course (admin only)
- **PUT /api/degreeCourses/:id** - Update degree course (admin only)
- **DELETE /api/degreeCourses/:id** - Delete degree course (admin only)

## Degree Course Applications
- **GET /api/degreeCourseApplications** - Get all applications (admin) or own applications
- **GET /api/degreeCourseApplications/:id** - Get specific application
- **POST /api/degreeCourseApplications** - Create new application
- **PUT /api/degreeCourseApplications/:id** - Update application (admin or own)
- **DELETE /api/degreeCourseApplications/:id** - Delete application (admin or own)

## Authorization Notes
- **Admin only**: Requires administrator privileges
- **Authentication required**: Requires valid JWT token
- **Own data**: Users can only access/modify their own resources
