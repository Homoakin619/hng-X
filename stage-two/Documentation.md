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

- Headers: None

**Response :**
- Status Code: `200 OK` if person exists
- Status Code: `404 Not Found` if person not found
- Status Code: `500 Internal Server Error` Error occured processing request
- Content-Type: `application/json`

**Response Body Sample (Success):**
```json
{
    "id": 1,
    "name": "Mark Essien",
    "message": "Operation successful"
}
```
**Response Body Sample (Not Found):**
```json
{
    "message": "User with provided id does not exist"
}
```
**Response Body Sample (Internal Server Error):**
```json
{
    "message": "Error occured fetching Person"
}
``` 


# **Endpoint**: `POST /api`

**Description**: Create a new Person entity.

**Request:**

-- Headers:
- Content-Type: `application/json`

-- Request Body:`{ "name": "Mark Essien"}`

**Response:**
- Status Code: `201 Created` person created successfully
- Status Code: `403 Forbidden` Error creating person
- Status Code: `500 Internal Server Error` Error occured processing request

**Response Body Sample (Created):**
```json
{
    "id": 1,
    "name": "Mark Essien",
    "message": "Operation successful"
}
``` 

**Response Body Sample (Forbidden):**
```json
{
    "message": "Error occured try again, enter a valid name string "
}
``` 

**Response Body Sample (Internal Server Error):**
```json
{
    "message": "Error occured creating Person"
}
``` 


# **Endpoint**: `PATCH /api/{user_id}`

**Description**: Update a Person entity.

**Request:**

## **Headers:**
- Content-Type: `application/json`

## **Request Body:**`{ "name": "Mark Essien"}`

**Response:**
- Status Code: `200 OK` person updated successfully
- Status Code: `403 Forbidden` Error updating person, invalid name value
- Status Code: `404 Not Found` Person does not exist
- Status Code: `500 Internal Server Error` Error occured processing request

**Response Body Sample (Successful):**
```json
{
    "id": 1,
    "name": "Mark Essien",
    "message": "Operation successful"
}
``` 

**Response Body Sample (Forbidden):**
```json
{
    "message": "Enter a valid string for name, Special characters not allowed"
}
``` 

**Response Body Sample (Not Found):**
```json
{
    "message": "Person with specified ID does not exist"
}
``` 
**Response Body Sample (Internal Server Error):**
```json
{
    "message": "Error occured updating Person"
}
``` 

Delete Person by ID

# **Endpoint**: `DELETE /api/{user_id}`

**Description**: Delete a Person by ID.

## **Request:**

**Headers :** None

**Response:**

- Status Code: `204 No Content` if the was successfully deleted
- Status Code: `404 Not Found` if the Person with id does not exist
- Status Code: `500 Internal Server Error` Error occured processing request

**Response Body Sample (Internal Server Error):**
```json
{
    "message": "Error occured updating Person"
}
``` 

**Response Body Sample (Not Found):**
```json
{
    "message": "Person with specified ID does not exist"
}
``` 

# Error Handling
When an error occurs, the API will return an appropriate HTTP status code along with a JSON response containing an error message.

# Rate Limiting
This API does not have rate limiting for public access.


# Contact
If you have any questions or need assistance, please contact our support team at support@example.com.

