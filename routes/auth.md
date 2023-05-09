# Api Endpoints

All API routes are present in this directory. Below are the files and their corresponding endpoints.

## authRoute.js

---

Register a new User for Twin V Digital App

```http
  POST /api/auth/createuser
```

| Parameter         | Type     | Description                             |
| :---------------- | :------- | :-------------------------------------- |
| `name`            | `string` | **Required**. Name of the user          |
| `mobile`          | `string` | **Required**. Mobile number of the user |
| `email`           | `string` | **Required**. Email of the user         |
| `password`        | `string` | **Required**. Login password            |

### Request Body

```json
{
    "name":"Test1", 
    "mobile":"9876543210", 
    "email":"Test1@test.com", 
    "password":"12345678"
}
```
### Response 

```json
    {
   "message":"User Created Successfully"
    }
```

### Request Body

```json
{
     
    "mobile":"9876543210", 
    "email":"Test1@test.com", 
    "password":"12345678"
}
```

### Response 

```json
    {
    "message": "Name Must Be Provided"
    }
```
### Request Body

```json
{
    "name":"Test1", 
     "email":"Test1@test.com", 
    "password":"12345678"
}
```

### Response 
```json
{
 "message": "Mobile Number Is Missing"
}
```

### Request Body

```json
{
    "name":"Test1", 
    "mobile":"9876543210", 
     "password":"12345678"
}
```
### Response 

```json
    {
    "message": "Email Must Be Provided"
    }
```
### Request Body

```json
{
    "name":"Test1", 
    "mobile":"9876543210", 
    "email":"Test1@test.com", 
    
}
```
### Response 

```json
    {
   "message": "Password Is Missing"
    }
```

```json
{
    "name":"Test1", 
    "mobile":"9876543210", 
    "email":"Test1@test.com", 
    "password":"12345678"
}
```
### Response 

```json
    {
   "message": "Mobile Number Already Exist"
    }
```


---

User Login for Twin V Digital App

```http 
api/auth/user_login
```



| Parameter         | Type     | Description                             |
| :---------------- | :------- | :-------------------------------------- |
| `email`           | `string` | **Required**. Email of the user         |
| `password`        | `string` | **Required**. Login password            |


### Request Body
```json
{
    "email":"Test1@test.com", 
    "password":"12345678"
}
```

### Response
```json
{
     "message": "Login Success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGI2MmIyYzY3YmM2MTU3NjZlYTNhMSIsImlhdCI6MTY4MjY2NTUzOSwiZXhwIjoxNjg1MjU3NTM5fQ.eq8RjKM8sqKUurlU5r_EtPrOt3YhsWOlWDwwLvJGoZQ"
}
```
### Request Body
```json
{
     "password":"12345678"
}
```

### Response
```json
{
 "Message": "Email Must Be Provided"
}
```

### Request Body
```json
{
     "email":"Test1@test.com",
    
}
```

### Response
```json
{
  "Message": "Password Is Missing"
}
```

### Request Body
```json
{
    "email":"Test1@test.com", 
    "password":"1234567"
}
```

### Response

```json
{
    "message": "Wrong Password"
}
```


## deviceRoutes.js
---
Add a New Device to Twin V Digital App 

```http
/api/device/adddevice
```

| Parameter         | Type     | Description                             |
| :---------------- | :------- | :-------------------------------------- |
| `device_id`       | `string` | **Required**. Id of the Device          |


| Headers         | Type           | Description                                                           |
| :-------------- | :------------- | :-------------------------------------------------------------------- |
| `Authorization` | `Bearer token` | **Required**. JWT signed email token generated after user login      |


### Request Body

---

```json
{
    "device_id":"TH-N4D-v5.0-YYYYMM-XXXX"
}

```

### This is the Device Id Format We are Using In this App
---



|    Type    |    Description          |
|:-------|:-------------|
| `TH`   | `TwinV Home` | 
|` N4D`  | `Node Four With Dimmer`|
|`N4`    | `Node Four` |
|`v5`    | `Version 5`  |
|`YYYYMM`| `Year and Month of Manufacture`|
|`XXXX`  | `Serial Number` |




### Request Headers

---

```json
{
  "headers": {
    "Authorization": "Bearer usertoken after login"
  }
}
```
### Response

---
```json
{
    "message": "New Device Created"
}
```
### Request
---
```json
{
    
}
```
### Request Headers

---

```json
{
  "headers": {
    "Authorization": "Bearer usertoken after login"
  }
}
```
### Response

---
```json
{
    "message": "Device Name Missing"
}
```

---


Get All Device of Particular User


```http
api/device/getdevicebyid
```
---

| Headers         | Type           | Description                                                           |
| :-------------- | :------------- | :-------------------------------------------------------------------- |
| `Authorization` | `Bearer token` | **Required**. JWT signed emailid token generated after user login      |

### Request Headers

```json
{
  "headers": {
    "Authorization": "Bearer usertoken after login"
  }
}
```

### Response

```json
[

    {
        "_id": "644b86a1627e8b312cadd30c",
        "createdAt": "2023-04-28T08:41:05.665Z",
        "device_id": "4302",
        "device_owner": "6446079c38116d47e28e0e05",
        "isAssigned": false,
        "appliances": [],
        "__v": 0
    },
    {
        "_id": "644b95f43c5bfc1177b34fb9",
        "createdAt": "2023-04-28T09:46:28.050Z",
        "device_id": "4301",
        "device_owner": "6446079c38116d47e28e0e05",
        "isAssigned": false,
        "appliances": [],
        "__v": 0
    }
]
    
```

### Request Headers

```json
{
  "headers": {
    "Authorization": 
  }
}
```
### Response



