## ApplianceRoutes.js
---

Add a New Appliance To Device

```http
POST /addappliance
```

| Parameter         | Type     | Description                             |
| :---------------- | :------- | :-------------------------------------- |
|  `applianceName`  |  `string`|   **Required**. Appliance Name          |
| `device_id`       | `string` | **Required**. Id of the Device          |
|`nodeIndex`        |  `string`|  **Required**. Node Index of the Device where Appliance is Connected|     


| Headers         | Type           | Description                                                           |
| :-------------- | :------------- | :-------------------------------------------------------------------- |
| `Authorization` | `Bearer token` | **Required**. JWT signed email token generated after user login       |


### Request Body

---

```json
{   
    
    "applianceName":"Kitchen Lamp",
    "device_id":"TH-N4D-v5.0-202305-0001",
    "nodeIndex":1

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
    "applianceName": "Kitchen Lamp",
    "nodeIndex": 1,
    "isAssigned": true,
    "switchStatus": false,
    "nodeStatus": false,
    "onTime": null,
    "capabilities": "switch",
    "userMail": "rohan.pratap15@gmail.com",
    "controller_id": "TH-N4D-v5.0-202305-0001",
    "_id": "645a0c206760889269c0d9ff",
    "createdAt": "2023-05-09T09:02:24.792Z",
    "__v": 0
}
```

---
---

Edit Appliance Name 

---
```http
PATCH /editappliancename
```

| Parameter         | Type     | Description                             |
| :---------------- | :------- | :-------------------------------------- |
|  `id`             |  `string`|   **Required**. Appliance id            |
| `newName`         | `string` | **Required**. New Name Of Appliance     |


| Headers         | Type           | Description                                                           |
| :-------------- | :------------- | :-------------------------------------------------------------------- |
| `Authorization` | `Bearer token` | **Required**. JWT signed email token generated after user login       |

### Request Body

```json
{
    
    "id":"645a0c206760889269c0d9ff",
    "newName":"Night Lamp"

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
    "message": "update success"
}
```

---
---

Delete Appliance

---
```http
DELETE /deleteappliance
```

| Parameter         | Type     | Description                             |
| :---------------- | :------- | :-------------------------------------- |
|  `id`             |  `string`|   **Required**. Appliance id            |



| Headers         | Type           | Description                                                           |
| :-------------- | :------------- | :-------------------------------------------------------------------- |
| `Authorization` | `Bearer token` | **Required**. JWT signed email token generated after user login       |

```json
{
    
    "id":"645a0c206760889269c0d9ff",
    

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
    "message": "Deletion success"
}
```
---
---

Get All Appliance Of User By Mail

---

```http
GET /alldevicebyemail/:{email}
```

Example

```http
GET /alldevicebyemail/:rohan.pratap15@gmail.com
```

### Response

```json
[
    {
        "_id": "645a0542fce672f2a1897e45",
        "createdAt": "2023-05-09T08:33:06.454Z",
        "device_id": "TH-N4D-v5.0-202305-0001",
        "device_owner": "rohan.pratap15@gmail.com",
        "isAssigned": false,
        "appliances": [
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
        ],
        "__v": 0
    }
]
```

---
---

Get Appliance By Id and Email

---

```http
GET/getApplianceByIdandEmail?mail={email of user}&id={appliance Id}
```

Example
```http
getApplianceByIdandEmail?mail=rohan.pratap15@gmail.com&id=645a057afce672f2a1897e50
```

### Response

```json
{
    
    "Topic": "TH-N4D-v5.0-202305-0001",
    "node": 2

}
```








     


