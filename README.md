# 📍 Location-Based Chat App (Backend)

A Node.js and Express.js backend for a real-time chat application where users can connect and chat with others within a specific geographical radius. It uses JWT for authentication and MongoDB for storing user and chat data.

---

## 🌐 Features

- 🧑‍💼 User registration and login
- 🔐 Secure JWT authentication
- 📍 Location-based user matching
- 💬 Real-time chat endpoints
- 🧾 MongoDB for storing users and messages
- 🌍 CORS enabled for frontend integration

---

## 🛠 Tech Stack

| Component     | Tech               |
|---------------|--------------------|
| Runtime       | Node.js            |
| Framework     | Express.js         |
| Database      | MongoDB + Mongoose |
| Auth          | JWT                |
| Config        | dotenv             |
| Middleware    | CORS               |

---

## 🧪 Installation

### 📥 Clone & Install

```bash
git clone https://github.com/WorkMohit17/location-chat-backend.git
cd location-chat-backend
npm install
```

---

### 🧪 Setup `.env` file

Create a `.env` file in the root directory and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

### ▶️ Run Server

```bash
npm start
```

Server will run at: [http://localhost:5000](http://localhost:5000)

---

## 📘 Basic API Endpoints

### 🔐 Auth Routes

#### POST /register

| Parameter | Type     | Description              |
|-----------|----------|--------------------------|
| name      | string   | **Required**. User name  |
| email     | string   | **Required**. Email ID   |
| password  | string   | **Required**. Password   |
| location  | object   | **Required**. Coordinates|


#### POST /login

| Parameter | Type     | Description            |
|-----------|----------|------------------------|
| email     | string   | **Required**. Email ID |
| password  | string   | **Required**. Password |


### 📍 Match Users Nearby

#### GET /nearby?lat={latitude}&lng={longitude}

| Query Param | Type     | Description                        |
|-------------|----------|------------------------------------|
| lat         | number   | **Required**. Current latitude     |
| lng         | number   | **Required**. Current longitude    |

### 💬 Chat Routes 

#### POST /message

| Parameter   | Type     | Description                      |
|-------------|----------|----------------------------------|
| senderId    | string   | **Required**. ID of sender       |
| receiverId  | string   | **Required**. ID of receiver     |
| message     | string   | **Required**. Message text       |


## 📄 License

This project is licensed under the **MIT License**.


## 🧑‍💻 Author
**Mohit Bansal**  
🔗 [GitHub](https://github.com/WorkMohit17) | 💼 [LinkedIn](https://www.linkedin.com/in/workmohit17/)
