## Roomsroute.js

---

Create New Room in App

```http
POST /createrooms
```

| Parameter         | Type     | Description                             |
| :---------------- | :------- | :-------------------------------------- |
| `room_name`           | `string` | **Required**. Name of the Room      |

| Headers         | Type           | Description                                                           |
| :-------------- | :------------- | :-------------------------------------------------------------------- |
| `Authorization` | `Bearer token` | **Required**. JWT signed email token generated after user login       |

### Request Body

---

```json
{
    "room_name":"living room"
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
    "room_name": "living room",
    "devices": [],
    "room_owner": "rohan.pratap15@gmail.com",
    "_id": "645b6296819bc1b2af9efab6",
    "createdAt": "2023-05-10T09:23:34.583Z",
    "__v": 0
}

```

---
---

Add Device To Room

---
```http
PATCH /adddevicetoroom
```

| Parameter         | Type     | Description                             |
| :---------------- | :------- | :-------------------------------------- |
| `room_name`           | `string` | **Required**. Name of the Room      |
| `_device`           | `string` | **Required**. Device_id of the Device |

| Headers         | Type           | Description                                                           |
| :-------------- | :------------- | :-------------------------------------------------------------------- |
| `Authorization` | `Bearer token` | **Required**. JWT signed email token generated after user login       |


### Request Body

---
```json
{
    "room_name":"Bed room",
    "_device":"TH-N4D-v5.0-202305-0021"
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
    "message": "Devices Added Successfully"
}
```

---
---

Edit Room Name

---

```http
PATCH /editroomname
```

| Parameter         | Type     | Description                             |
| :---------------- | :------- | :-------------------------------------- |
| `room_name`           | `string` | **Required**. Name of the Room      |
| `new_room_name`           | `string` | **Required**. Name of the Room      |

| Headers         | Type           | Description                                                           |
| :-------------- | :------------- | :-------------------------------------------------------------------- |
| `Authorization` | `Bearer token` | **Required**. JWT signed email token generated after user login       |

### Request Body

---
```json
{
    "room_name":"living room",
    "new_room_name":"Bed room"
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
    "message": "Edit Success"
}
```

---
---
Delete a Room

---
```http
DELETE /deleteroom
```
| Parameter         | Type     | Description                             |
| :---------------- | :------- | :-------------------------------------- |
| `room_name`           | `string` | **Required**. Name of the Room      |

| Headers         | Type           | Description                                                           |
| :-------------- | :------------- | :-------------------------------------------------------------------- |
| `Authorization` | `Bearer token` | **Required**. JWT signed email token generated after user login       |

### Request Body

---

```json
{
    "room_name":"living room"
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
    "Message": "Deletion Success"

}
```

---
---

Get All Details Of Room

---

```http
GET /getroomofuser

```

| Parameter         | Type     | Description                             |
| :---------------- | :------- | :-------------------------------------- |
| `room_name`           | `string` | **Required**. Name of the Room      |

| Headers         | Type           | Description                                                           |
| :-------------- | :------------- | :-------------------------------------------------------------------- |
| `Authorization` | `Bearer token` | **Required**. JWT signed email token generated after user login       |

### Request Body

---

```json
{
    "room_name":"living room"
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
    "_id": "645b476b9b32b89700147961",
    "room_name": "living room",
    "devices": [
        {
            "_id": "645b585d90ea8402c3636883",
            "createdAt": "2023-05-10T08:39:57.477Z",
            "device_id": "TH-N4D-v5.0-202305-0009",
            "device_owner": "rohan.pratap15@gmail.com",
            "isAssigned": true,
            "appliances": [],
            "__v": 0
        },
        {
            "_id": "645b589190ea8402c363688f",
            "createdAt": "2023-05-10T08:40:49.615Z",
            "device_id": "TH-N4D-v5.0-202305-0010",
            "device_owner": "rohan.pratap15@gmail.com",
            "isAssigned": true,
            "appliances": [],
            "__v": 0
        }
    ],
    "room_owner": "rohan.pratap15@gmail.com",
    "createdAt": "2023-05-10T07:27:39.307Z",
    "__v": 0
}
```

---
---

Get All Appliances Connected In a Room

---

```http
GET /allappliancesinroom
```

| Parameter         | Type     | Description                             |
| :---------------- | :------- | :-------------------------------------- |
| `room_name`           | `string` | **Required**. Name of the Room      |

| Headers         | Type           | Description                                                           |
| :-------------- | :------------- | :-------------------------------------------------------------------- |
| `Authorization` | `Bearer token` | **Required**. JWT signed email token generated after user login       |

### Request Body

---

```json
{
    "room_name":"living room"
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
[
    {
        "_id": "645b64dbee6acffd91c5af00",
        "applianceName": "Fan",
        "nodeIndex": 1,
        "isAssigned": true,
        "switchStatus": false,
        "nodeStatus": false,
        "onTime": null,
        "capabilities": "switch",
        "userMail": "rohan.pratap15@gmail.com",
        "controller_id": "TH-N4D-v5.0-202305-0021",
        "createdAt": "2023-05-10T09:33:15.294Z",
        "__v": 0
    },
    {
        "_id": "645b64f2ee6acffd91c5af04",
        "applianceName": "Bedroom Fan",
        "nodeIndex": 0,
        "isAssigned": true,
        "switchStatus": false,
        "nodeStatus": false,
        "onTime": null,
        "capabilities": "regulator",
        "userMail": "rohan.pratap15@gmail.com",
        "controller_id": "TH-N4D-v5.0-202305-0021",
        "createdAt": "2023-05-10T09:33:38.406Z",
        "__v": 0
    },
    {
        "_id": "645b6504ee6acffd91c5af08",
        "applianceName": "Lamp",
        "nodeIndex": 2,
        "isAssigned": true,
        "switchStatus": false,
        "nodeStatus": false,
        "onTime": null,
        "capabilities": "switch",
        "userMail": "rohan.pratap15@gmail.com",
        "controller_id": "TH-N4D-v5.0-202305-0021",
        "createdAt": "2023-05-10T09:33:56.069Z",
        "__v": 0
    },
    {
        "_id": "645b6510ee6acffd91c5af0c",
        "applianceName": "TV",
        "nodeIndex": 3,
        "isAssigned": true,
        "switchStatus": false,
        "nodeStatus": false,
        "onTime": null,
        "capabilities": "switch",
        "userMail": "rohan.pratap15@gmail.com",
        "controller_id": "TH-N4D-v5.0-202305-0021",
        "createdAt": "2023-05-10T09:34:08.797Z",
        "__v": 0
    }
]
```
---