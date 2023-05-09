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



