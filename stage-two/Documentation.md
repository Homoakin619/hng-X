# PERSON API Documentation
This API allows you to Creat Read Update and Delete a person entity;

## BASE URL
The base url is : https://

## AUTHENTICATION
No authentication is required

## ENDPOINTS

**Endpoint :** `GET /api/{user_id}`
**Description :** Fetch a Person details based on unique ID

**Endpoint Example**
**Request**
-Headers: None
**Response :**
- Status Code: `200 OK` if person exists
- Status Code: `400 Not Found` if person not found
- Content-Type: `application/json`

**Response Body Sample (Success):**
```json
{
    "id": 1,
    "name": "Mark Essien",
    "message": "User fetched Successfully"
}
```
**Response Body Sample (Not Found):**
```json
{
    "message": "User with provided id does not exist"
}
```

**Endpoint**: `POST /api`

**Description**: Create a new Person entity.

**Request:**

-- Headers:
- Content-Type: `application/json`

-- Request Body:`{ "name": "Mark Essien"}`

**Response:**
- Status Code: `201 Created` person created successfully
- Status Code: `403 Forbidden` Error creating person

**Response Body Sample (Created):**
```json
{
    "id": 1
    "name": "Mark Essien"
}
``` 

**Response Body Sample (Forbidden):**
```json
{
    "message": "Error occured try again, enter a valid name string "
}
``` 

**Endpoint**: `PATCH /api/{user_id}`

**Description**: Create a new Person entity.

**Request:**

-- Headers:
- Content-Type: `application/json`

-- Request Body:`{ "name": "Mark Essien"}`

**Response:**
- Status Code: `200 OK` person updated successfully
- Status Code: `403 Forbidden` Error updating person, invalid name value
- Status Code: `404 Not Found` Person does not exist

**Response Body Sample (Created):**
```json
{
    "id": 1
    "name": "Mark Essien"
}
``` 

**Response Body Sample (Forbidden):**
```json
{
    "message": "Error occured try again, enter a valid name string "
}
``` 

**Response Body Sample (Not Found):**
```json
{
    "message": "Person with specified ID does not exist"
}
``` 

Delete Book by ID
**Endpoint**: DELETE /books/{id}

**Description**: Delete a book by its ID.

**Request:**

**Headers:** None
**Response:**

- Status Code: 204 No Content if the book was successfully deleted
- Status Code: 404 Not Found if the book does not exist

# Error Handling
When an error occurs, the API will return an appropriate HTTP status code along with a JSON response containing an error message.

# Rate Limiting
This API does not have rate limiting for public access.


# Contact
If you have any questions or need assistance, please contact our support team at support@example.com.

