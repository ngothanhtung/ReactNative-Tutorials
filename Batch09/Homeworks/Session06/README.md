# A. Bài tập chính:

## 🔶 API: Login

#### REQUEST:

- Url: https://training.softech.cloud/api/training/users/login
- Method: POST
- Body (Raw, JSON):

```json
{
  "username": "tungnt",
  "password": "123456789"
}
```

#### RESPONSE:

- If success:

```json
{
  "ok": true,
  "login": true,
  "user": {
    "_id": "628395a6effcfb0ae4fd1c25",
    "username": "tungnt",
    "password": "123456789",
    "email": "tungnt@softech.edu.vn",
    "fullName": "Ngô Thanh Tùng"
  },
  "token": "..."
}
```

- If failed:

```json
{
  "ok": true,
  "login": false
}
```

---

## 🔶 API: Register a new user

### REQUEST:

- Url: https://training.softech.cloud/api/training/users/register
- Method: POST
- Body (Raw, JSON):

```json
{
  "username": "tungnt",
  "email": "tungnt@softech.edu.vn",
  "password": "123456789",
  "fullName": "Ngô Thanh Tùng"
}
```

### RESPONSE:

- If user exists

```json
{
  "ok": true,
  "register": false,
  "message": "User is already exists"
}
```

- If success:

```json
{
  "ok": true,
  "register": true,
  "result": {
    "data": {
      "username": "tuana123",
      "password": "123456789",
      "email": "tuanna@softech.edu.vn",
      "fullName": "Nguyễn Anh Tuấn",
      "_id": "6283988ceffcfb0ae4fd1c2b"
    },
    "result": {
      "result": {
        "n": 1,
        "ok": 1
      }
    }
  }
}
```

---

## 🔶 API: Get all users (Authentication Bearer)

### REQUEST:

- Url: https://training.softech.cloud/api/training/users
- Authorization: Bearer
- Method: GET

### RESPONSE:

```json
[
  {
    "_id": "628395a6effcfb0ae4fd1c25",
    "username": "tungnt",
    "password": "123456789",
    "email": "tungnt@softech.com",
    "fullName": "Ngô Thanh Tùng"
  }
]
```

---

## 🔶 API: Get all users (Authentication Basic)

### REQUEST:

- Url: https://training.softech.cloud/api/training/users/auth/basic
- Authorization: Basic (username, password)
- Method: GET

### RESPONSE:

```json
[
  {
    "_id": "628395a6effcfb0ae4fd1c25",
    "username": "tungnt",
    "password": "123456789",
    "email": "tungnt@softech.com",
    "fullName": "Ngô Thanh Tùng"
  }
]
```

---

## 🔶 API: Get all users (Authentication API-KEY)

### REQUEST:

- Url: https://training.softech.cloud/api/training/users/auth/api-key
- Authorization:
  - Type: API KEY
  - Key: x-api-key
  - Value: aptech-tester-pro
  - Add to: Header
- Method: GET

### RESPONSE:

```json
[
  {
    "_id": "628395a6effcfb0ae4fd1c25",
    "username": "tungnt",
    "password": "123456789",
    "email": "tungnt@softech.com",
    "fullName": "Ngô Thanh Tùng"
  }
]
```

---

## API: Delete a user

### REQUEST:

- Url: https://training.softech.cloud/api/training/users/:id
- Authorization: Bearer Token
- Method: DELETE
- Params:

```
id = 615456cf4139ac6c5cc07fee
```

### RESPONSE:

```json
{
  "acknowledged": true,
  "deletedCount": 1
}
```

---

## API: Update a user

### REQUEST:

- Url: https://training.softech.cloud/api/training/users/:id
- Authorization: Bearer Token
- Method: PATCH
- Params:

```
id = 615456cf4139ac6c5cc07fee
```

- Body (Raw, JSON):

```json
{
  "email": "tungnt@softech.com",
  "password": "123456789",
  "fullName": "Ngô Thanh Tùng"
}
```

## RESPONSE

- If success:

```json
{
  "lastErrorObject": {
    "n": 1,
    "updatedExisting": true
  },
  "value": {
    "_id": "628395a6effcfb0ae4fd1c25",
    "username": "tungnt",
    "password": "123456789",
    "email": "tungnt@softech.edu.vn",
    "fullName": "Ngô Thanh Tùng"
  },
  "ok": 1
}
```

- If not found user

```json
{
  "lastErrorObject": {
    "n": 0,
    "updatedExisting": false
  },
  "value": null,
  "ok": 1
}
```

# C. Bài tập luyện tập với FPT AI (Text to speech)

- Đăng ký tài khoản tại (https://fpt.ai/tts) và thực hiện lệnh gọi API Text to Speech theo hướng dẫn

# D. Bài tập luyện tập với Open Weather

- Đăng ký tài khoản tại (https://openweathermap.org/api) và thực hiện lệnh gọi API theo hướng dẫn
