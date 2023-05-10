## deviceRoutes.js
---



Add a New Device to Twin V Digital App 

```http
POST/api/device/adddevice
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
---


Get All Device of Particular User
---




```http
GET /api/device/getdeviceofuser
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
        "device_id": "TH-N4D-v5.0-202305-0001",
        "device_owner": "Test1@test.com",
        "isAssigned": false,
        "appliances": [],
        "__v": 0
    },
    {
        "_id": "644b95f43c5bfc1177b34fb9",
        "createdAt": "2023-04-28T09:46:28.050Z",
        "device_id": "TH-N4D-v5.0-202305-0002",
        "device_owner": "Test1@test.com",
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
```json
{
    "mesage": "Token Missing"
}
```


---
---


Delete device by ID
---


```http
DELETE /api/device/deletedevice


```
 Parameter         | Type     | Description                             |
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

```json
{
    "message": "Deletion Success"
}
```

---
---

Get All Appliances Connected To a Device
---



```http
GET /api/device/getAllApplianceById
```
 Parameter         | Type     | Description                             |
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

```json
[
    {
        "_id": "645a0557fce672f2a1897e48",
        "applianceName": "Kitchen Lamp",
        "nodeIndex": 0,
        "isAssigned": true,
        "switchStatus": false,
        "nodeStatus": false,
        "onTime": null,
        "capabilities": "regulator",
        "userMail": "rohan.pratap15@gmail.com",
        "controller_id": "TH-N4D-v5.0-202305-0001",
        "createdAt": "2023-05-09T08:33:27.213Z",
        "__v": 0
    },
    {
        "_id": "645a0567fce672f2a1897e4c",
        "applianceName": "Bedroom Lamp",
        "nodeIndex": 1,
        "isAssigned": true,
        "switchStatus": false,
        "nodeStatus": false,
        "onTime": null,
        "capabilities": "switch",
        "userMail": "rohan.pratap15@gmail.com",
        "controller_id": "TH-N4D-v5.0-202305-0001",
        "createdAt": "2023-05-09T08:33:43.272Z",
        "__v": 0
    },
    {
        "_id": "645a057afce672f2a1897e50",
        "applianceName": "Livingroom Lamp",
        "nodeIndex": 2,
        "isAssigned": true,
        "switchStatus": false,
        "nodeStatus": false,
        "onTime": null,
        "capabilities": "switch",
        "userMail": "rohan.pratap15@gmail.com",
        "controller_id": "TH-N4D-v5.0-202305-0001",
        "createdAt": "2023-05-09T08:34:02.765Z",
        "__v": 0
    }
]
```

