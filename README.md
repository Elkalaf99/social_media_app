# SocialTask Backend

A simple backend API with Node.js, Express, MongoDB, and Socket.IO. Features authentication, posts, comments, likes, and real-time private chat.

## Features

- User registration, login, profile update, and soft delete (JWT auth)
- CRUD for posts (with like and comment counts)
- Commenting and like/unlike on posts
- Real-time private chat (Socket.IO)
- MongoDB/Mongoose data modeling
- Centralized error handling and validation
- Clean, modular folder structure

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- MongoDB (local or Atlas)

### Installation

1. Clone the repo:
   ```sh
   git clone <repo-url>
   cd SocialTask
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root with:
   ```env
   MONGO_URI=mongodb://localhost:27017/socialtask
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
4. Start the server:
   ```sh
   npm run dev
   ```

## API Endpoints

### Auth

- `POST /api/auth/register` — Register
- `POST /api/auth/login` — Login
- `PUT /api/auth/profile` — Update profile (JWT)
- `DELETE /api/auth/delete` — Soft delete account (JWT)
- `GET /api/auth/users` — Get all users (JWT, paginated)

### Posts

- `POST /api/posts` — Create post (JWT)
- `GET /api/posts` — Get all posts (JWT)
- `GET /api/posts/:id` — Get single post (JWT)
- `PUT /api/posts/:id` — Update post (JWT, owner only)
- `DELETE /api/posts/:id` — Delete post (JWT, owner only)
- `POST /api/posts/:id/like` — Like post (JWT)
- `POST /api/posts/:id/unlike` — Unlike post (JWT)

### Comments

- `POST /api/comments/:postId` — Add comment (JWT)
- `DELETE /api/comments/:commentId` — Delete comment (JWT, author or post owner)

### Chat

- `GET /api/chat/:userId` — Fetch past messages (JWT, paginated)
- Real-time messaging via Socket.IO

## Socket.IO Events

- `userOnline` — Notify server of online status
- `privateMessage` — Send/receive private messages
- `onlineUsers` — Receive list of online users

## Folder Structure

```
SocialTask/
  src/
    config/
    controllers/
    middlewares/
    models/
    routes/
    sockets/
    utils/
    app.js
  package.json
  README.md
```

## License

MIT
