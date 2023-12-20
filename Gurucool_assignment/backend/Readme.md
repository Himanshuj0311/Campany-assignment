Welcome to Your URL Shortening and User Management API 🚀[ baseUrl`http://localhost:8000`]


Table of Contents 

Introduction
🚀 API Usage
URL Shortening
User Management
🌟 Key Functionalities
💻 Implementation Details


1. Introduction
Welcome to the documentation for your supercharged URL Shortening and User Management API! Below, you'll find everything you need to know to get started.


2. 🚀 API Usage
URL Shortening
2.1 Shorten URL
   
Endpoint: POST /url/shorten

Description: Shorten a given URL.

Request:
JSON
Copy code
{
  "url": "https://www.example.com"
}


Response:
Success (200 OK):
JSON
Copy code
{
  "shortenedUrl": "https://short.url/abc123",
  "originalUrl": "https://www.example.com",
  "expiresAt": "2023-12-31T23:59:59.999Z"
}


Error (4xx or 5xx):
JSON
Copy code
{
  "error": "Error message here"
}


2.2 Custom Shorten URL

Endpoint: POST /url/customShorten

Description: Shorten a URL with a custom path.

Request:
JSON
Copy code
{
  "url": "https://www.example.com",
  "customPath": "my-custom-path"
}

Response:
Success (200 OK):
JSON
Copy code
{
  "shortenedUrl": "https://short.url/my-custom-path",
  "originalUrl": "https://www.example.com",
  "expiresAt": "2023-12-31T23:59:59.999Z"
}

Error (4xx or 5xx):
JSON
Copy code
{
  "error": "Error message here"
}


2.3 Get All Shortened URLs

Endpoint: GET /url/getall

Description: Retrieve all shortened URLs.

Response:
Success (200 OK):
JSON
Copy code
[
  {
    "shortenedUrl": "https://short.url/abc123",
    "originalUrl": "https://www.example.com",
    "expiresAt": "2023-12-31T23:59:59.999Z"
  },
  // ... other URLs
]


Error (4xx or 5xx):
JSON
Copy code
{
  "error": "Error message here"
}


2.4 Redirect to the Original URL

Endpoint: GET /url/:shortenedPath

Description: Redirect to the original URL associated with the given shortened path.

Response: Redirects to the original URL.


User Management

2.5 User Register

Endpoint: POST /user/register

Description: register as a user.

Request:
JSON
Copy code
{
    "name": "Example Company",
    "logo": "https://example.com/logo.png",
    "email": "example@example.com",
    "password": "hashed_password_here",
    "role": "Admin",
    "urlPreferences": {
      "allowCustomAlias": true,
      "expireAfter": 30
    }
  }

2.6 User Login

Endpoint: POST /user/login

Description: Log in as a user.

Request:
JSON
Copy code
{
  "email": "user@example.com",
  "password": "supersecurepassword"
}

Response:
Success (200 OK):
JSON
Copy code
{
  "token": "jwt_token_here"
}

Error (4xx or 5xx):
JSON
Copy code
{
  "error": "Error message here"
}

2.7 User Logout

Endpoint: POST /user/logout

Description: Log out the authenticated user.

Authorization Header: Bearer token.

Response:

JSON
Copy code
{
  "message": "Logout successful"
}

2.8 Update User Details

Endpoint: PATCH /user/update/:id

Description: Update user details.

Authorization Header: Bearer token.

JSON
Copy code
{
  // ... fields to be updated
}
Response:
JSON
Copy code
{
  "message": "User details updated successfully"
}



Key Functionalities
URL Shortening:
Shorten a URL.
Shorten a URL with a custom path.
Retrieve all shortened URLs.
Redirect to the original URL using the shortened path.
User Management:
User login with JWT authentication.
User logout.
User registration.
Could you update the user details?

Implementation Details
Technologies Used
Express.js
MongoDB
Winston Logger
JWT for Authentication
Middleware
CORS
Request Logging Middleware
Routes
/URL: URL Shortening Routes
/user: User Management Routes
Database
MongoDB Atlas
