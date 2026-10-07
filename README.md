# 🚀 VertexAI — AI-Powered Code Editor

VertexAI is a full-stack **AI-powered code editor and development environment** inspired by modern AI development platforms.

The project is built using a **production-style microservices architecture** with the MERN stack, Redis, LangGraph, Docker, Socket.IO, AWS, and Razorpay.

## 🧠 Tech Stack

- React.js + Vite
- Node.js + Express.js
- MongoDB
- Microservices Architecture
- LangGraph & LangChain
- AI-powered code generation
- Redis
- Socket.IO
- Docker & Docker Compose
- AWS
- Razorpay
- JWT Authentication

## 🔥 Features

- 🤖 AI-powered code generation and assistance
- 🧠 AI agent workflows using LangGraph
- 💻 Online code editor / IDE
- 📁 Project and file management
- 🔐 Authentication and authorization
- ⚡ Redis caching and fast data operations
- 🔄 Real-time communication using Socket.IO
- 💳 Payments and subscriptions with Razorpay
- 🐳 Containerized services using Docker
- 🧩 Scalable microservices-based backend

## 🏗️ Architecture

The application is divided into multiple independent services that communicate through an API Gateway.

```text
Frontend
   │
   ▼
API Gateway
   │
   ├── Auth Service
   ├── Project Service
   ├── File Service
   ├── AI Service
   └── Terminal Service
          │
          ├── MongoDB
          ├── Redis
          └── AI / LangGraph
```

The architecture is designed to make the application easier to **scale, maintain, and deploy** using Docker and AWS.

---

⭐ **If you find this project interesting, please consider giving it a star!**