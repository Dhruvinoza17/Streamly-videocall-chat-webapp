# Streamly

Streamly is a full-stack real-time chat and video call application built with React, Vite, MongoDB, and Stream (for chat and video). It features authentication, friend management, notifications, profile editing, and a modern themed UI with DaisyUI and TailwindCSS.

## Highlights

🌐 Real-time Messaging with Typing Indicators & Reactions  
📹 1-on-1 and Group Video Calls with Screen Sharing & Recording  
🔐 JWT Authentication & Protected Routes  
🌍 Language Exchange Platform with 32 Unique UI Themes  
⚡ Tech Stack: React + Express + MongoDB + TailwindCSS + TanStack Query  
🧠 Global State Management with Zustand  
🚨 Error Handling (Frontend & Backend)  
🚀 Free Deployment  
🎯 Built with Scalable Technologies like Stream  
⏳ And much more!

## Features
- Real-time chat powered by Stream
- Video calls with Stream Video SDK
- User authentication (signup, login, logout)
- Friend requests and management
- Notifications
- Profile editing with avatar upload
- Themed UI with DaisyUI and TailwindCSS

## Tech Stack
- **Frontend:** React, Vite, TailwindCSS, DaisyUI, Zustand, React Query, Stream Chat & Video SDKs
- **Backend:** Node.js, MongoDB, Mongoose, JWT, Stream Chat SDK

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)
- Stream API credentials (get from [getstream.io](https://getstream.io/))

### Environment Variables

#### Backend (`backend/.env`)
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
```

#### Frontend (`frontend/.env`)
```
VITE_STREAM_API_KEY=your_stream_api_key
```

### Installation & Running

#### 1. Clone the repository
```bash
git clone https://github.com/yourusername/streamly.git
cd streamly
```

#### 2. Install dependencies
```bash
cd backend
npm install
cd ../frontend
npm install
```

#### 3. Set up environment variables
- Create `.env` files in both `backend` and `frontend` as shown above.

#### 4. Start the backend server
```bash
cd backend
npm run dev
```

#### 5. Start the frontend dev server
```bash
cd frontend
npm run dev
```

- Frontend will run at [http://localhost:5173](http://localhost:5173)
- Backend will run at [http://localhost:5000](http://localhost:5000)

## Project Structure
```
Streamly/
  backend/
    src/
      controllers/
      lib/
      middleware/
      models/
      routes/
      server.js
    package.json
  frontend/
    src/
      components/
      constants/
      hooks/
      lib/
      pages/
      store/
      index.css
      main.jsx
    package.json
```

## License
MIT 
