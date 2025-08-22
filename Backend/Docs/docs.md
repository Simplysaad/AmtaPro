# Athlete API Documentation

## Authentication
- Most routes require authentication via session, API key, or JWT cookie.

---

## GET /athletes

**Description:** Retrieve a list of athletes with optional filters.

**Query Parameters:**
- `positions` (array or string): Filter by position(s).
- `nationality` (string): Filter by nationality.
- `min_age`, `max_age` (number): Filter by age range.
- `min_height`, `max_height` (number): Filter by height range (cm).
- `min_weight`, `max_weight` (number): Filter by weight range (kg).

**Response:**
```json
{
  "success": true,
  "message": "N athletes retrieved",
  "filters": { ... },
  "data": [ ...athlete objects... ]
}
```

---

## GET /athletes/:id

**Description:** Retrieve a single athlete by ID.

**Path Parameters:**
- `id` (string): Athlete ID or User ID.

**Response:**
```json
{
  "success": true,
  "message": "athlete info retrieved",
  "data": {
    "isCurrentUser": true/false,
    "currentAthlete": { ...athlete object... }
  }
}
```

---

## POST /athletes

**Description:** Create a new athlete profile.

**Body Parameters:**
- `bio` (string): Athlete biography.
- `dob` (string, date): Date of birth (YYYY-MM-DD).
- `height` (number): Height in cm.
- `weight` (number): Weight in kg.
- `positions` (array): List of positions.
- `nationality` (string): Nationality (default: "nigerian").

**File**
- `profilePic` (image/*): profile image

**Note: make sure to use `enctype:"multipart/formdata"`**

**Response:**
```json
{
  "success": true,
  "message": "new athlete profile created",
  "data": {
    "newAthlete": { ...athlete object... }
  }
}
```

**Errors:**
- 403: User not logged in.
- 400: Athlete profile already exists.

---

## PUT /athlete/:id  
## PUT /athlete/

**Description:** Edit an existing athlete profile.

**Path Parameters:**
- `id` (string, optional): Athlete ID.

**Body Parameters:**
- `bio` (string, optional)
- `dob` (string, date, optional)
- `height` (number, optional)
- `weight` (number, optional)
- `positions` (array, optional)
- `nationality` (string, optional)

**Response:**
```json
{
  "success": true,
  "message": "athlete profile edited successfully",
  "data": {
    "updates": { ... },
    "updatedAthlete": { ...athlete object... }
  }
}
```

**Errors:**
- 403: User not logged in.
- 404: Athlete profile does not exist.

---

## POST /auth/register
**Description**
QueryParameters
Body Parameters
Response 
Errors

## POST /auth/login
Description
QueryParameters
Body Parameters
Response 
Errors


## Notes

- All responses include a `success` boolean and a `message`.
- Authentication may be required for POST and PUT routes.
- Data models may include nested fields like `physical` (for age, height, weight).
- Use session, API key, or JWT for authentication as described in the middleware.

---