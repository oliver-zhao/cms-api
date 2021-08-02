# Content Management System (CMS API V1.0.0)

## 1. User API
### 1.1 Add user
```http
POST /api/v1/users
```
Request body:
```javascript
{
  "firstName" : string,
  "lastName" : string,
  "email"    : string,
  "password" : string
}
```
Response code: 201

### 1.2 Get users list
```http
GET /api/v1/users
```
Response code: 200
Responses body:
```javascript
[{
  "firstName" : string,
  "lastName" : string,
  "email"    : string
},
{
  "firstName" : string,
  "lastName" : string,
  "email"    : string
}]
```

### 1.3 Delete user
```http
DELETE /api/v1/users/{email}
```
Response code: 200
Response body: 
```javascript
{
    "message": "Delete user successfully."
}
```
## 2. Category API
## 3. Article API
## 4. Comment API 
## 5. Authentication (JWT)