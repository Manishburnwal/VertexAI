# 🚀 VertexAI — AI-Powered Code Editor

VertexAI is a **full-stack AI-powered code editor and development environment** inspired by modern AI coding platforms.

The project is built with a **production-style architecture** using the MERN stack, Microservices, Redis, LangGraph, Docker, AWS, Socket.IO, and Razorpay.

The goal isn't to build just another AI chatbot — we're building an **AI development environment** where users can create projects, manage files, generate and modify code, interact with AI agents, and communicate with backend services in real time.

---

## 🧠 Technologies Used

### Frontend

- ⚛️ React.js
- ⚡ Vite
- 🎨 Modern responsive UI
- 🔄 Redux Toolkit
- 🔌 Socket.IO Client

### Backend

- 🟢 Node.js
- 🚂 Express.js
- 🧩 Microservices Architecture
- 🔐 JWT Authentication & Authorization
- 🔄 Socket.IO
- 🍃 MongoDB
- ⚡ Redis

### AI & Agentic Systems

- 🤖 AI-powered code generation
- 🧠 LangGraph
- 🔗 LangChain
- 🔍 RAG / Vector Search
- 🛠️ AI Tool Calling
- 💬 Streaming AI Responses

### DevOps & Infrastructure

- 🐳 Docker
- 🐳 Docker Compose
- ☁️ AWS
- 🌐 Nginx
- ⚖️ Load Balancing
- 📈 Scalable backend architecture

### Payments

- 💳 Razorpay
- 📦 Subscription management

---

# 🔥 What We're Building

VertexAI is designed to provide an **AI-first development experience** where developers can work on their projects directly inside the platform.

Users will be able to:

- 📁 Create and manage projects
- 📄 Create, edit, and delete files
- 💻 Work inside an online code editor
- 🤖 Ask AI agents for coding assistance
- ✨ Generate code using AI
- 🔧 Modify existing code using AI
- 🧠 Interact with agentic AI workflows
- 🔍 Search and retrieve project knowledge
- ⚡ Receive real-time updates
- 🖥️ Interact with backend services through real-time communication
- 💳 Manage subscriptions and payments

---

# 🏗️ Architecture

VertexAI follows a **microservices-based architecture** instead of putting the entire backend into a single monolithic server.

```text
                         ┌─────────────────────┐
                         │      Frontend       │
                         │   React + Vite      │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │    API Gateway      │
                         └──────────┬──────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ▼                     ▼                     ▼
       ┌─────────────┐       ┌─────────────┐       ┌─────────────┐
       │    Auth     │       │   Project   │       │    File     │
       │   Service   │       │   Service   │       │   Service   │
       └─────────────┘       └─────────────┘       └─────────────┘
              │                     │                     │
              └─────────────────────┼─────────────────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │     AI Service      │
                         │ LangGraph + Agents  │
                         └──────────┬──────────┘
                                    │
                     ┌──────────────┼──────────────┐
                     ▼              ▼              ▼
                ┌─────────┐   ┌──────────┐   ┌──────────┐
                │ MongoDB │   │  Redis   │   │ Vector DB│
                └─────────┘   └──────────┘   └──────────┘

                         ┌─────────────────────┐
                         │ Docker + AWS        │
                         │ Deployment Layer    │
                         └─────────────────────┘
```

Each service is responsible for a specific domain, making the application easier to **develop, maintain, scale, and deploy independently**.

---

# 🧩 Microservices

The backend is divided into multiple services:

| Service | Responsibility |
|---|---|
| 🔐 Auth Service | Authentication & authorization |
| 📁 Project Service | Project creation & management |
| 📄 File Service | File & document management |
| 🤖 AI Service | AI agents, code generation & assistance |
| 💻 Terminal Service | Online terminal / execution environment |
| 🌐 Gateway | Routing requests between services |

This architecture allows individual services to evolve and scale independently.

---

# 🤖 AI Architecture

The AI layer is built around **agentic workflows** rather than simple prompt → response interactions.

```text
User Request
     │
     ▼
┌───────────────┐
│   AI Agent    │
└───────┬───────┘
        │
        ▼
┌───────────────────┐
│    LangGraph      │
│ Agent Workflow    │
└─────────┬─────────┘
          │
    ┌─────┼─────┐
    ▼     ▼     ▼
  Tools  RAG   LLM
    │     │     │
    └─────┼─────┘
          ▼
   Code Generation
          │
          ▼
     Project Files
```

The AI system can reason about the project, interact with tools, retrieve relevant information, and perform development-related operations.

---

# ⚡ Redis

Redis is used for high-speed data operations such as:

- ⚡ API caching
- 🔐 Session management
- 🔑 OTP storage
- 🚦 Rate limiting
- 📦 Temporary data
- 🔄 Queue-based processing
- ⚙️ Background jobs

This reduces unnecessary database operations and improves application responsiveness.

---

# 🔄 Real-Time Communication

**Socket.IO** is used to enable real-time communication between the frontend and backend.

Potential use cases include:

- 💻 Live terminal output
- 🤖 Streaming AI responses
- 📁 Real-time file updates
- 🔔 Notifications
- ⚡ Service communication
- 👥 Collaborative development features

---

# 💳 Payments & Subscriptions

Razorpay is integrated to support:

- 💳 Online payments
- 📦 Subscription plans
- 🔄 Subscription management
- 💰 Payment verification

---

# 🐳 Docker

The application is containerized using Docker.

Docker Compose can be used to run multiple services together during development.

```text
Frontend
   │
   ├── Auth Service
   ├── Project Service
   ├── File Service
   ├── AI Service
   ├── Terminal Service
   ├── Redis
   └── MongoDB
```

This provides a consistent development environment and makes the application easier to move toward production.

---

# ☁️ AWS Deployment

The project is designed with cloud deployment in mind.

The infrastructure can include:

- ☁️ AWS
- 🐳 Docker
- 🌐 Nginx
- ⚖️ Load Balancing
- 📈 Horizontal Scaling
- 🔐 Environment-based configuration
- 📦 Containerized services

The objective is to take the application from **local development → containerized environment → production deployment**.

---

# 📂 Project Structure

```text
VertexAI/
│
├── frontend/
│
├── backend/
│   │
│   ├── gateway/
│   │
│   └── services/
│       ├── auth/
│       ├── project/
│       ├── file/
│       ├── ai/
│       └── terminal/
│
├── docker-compose.yml
├── .gitignore
├── README.md
└── ...
```

---

# 🔐 Environment Variables

Sensitive credentials are **not committed to the repository**.

Create `.env` files for the required services and configure variables such as:

```env
MONGO_URI=
JWT_SECRET=
REDIS_URL=
OPENROUTER_API_KEY=
QDRANT_API_KEY=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

For Google Cloud authentication, keep the service-account credentials outside Git:

```text
serviceAccountKey.json
```

Make sure sensitive files remain covered by `.gitignore`.

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/Manishburnwal/VertexAI.git
cd VertexAI
```

## 2. Install Dependencies

Install dependencies for the frontend and individual backend services.

```bash
npm install
```

Repeat inside the required service directories.

## 3. Configure Environment Variables

Create the required `.env` files and add your credentials.

## 4. Start the Services

Run the individual services during development or use Docker Compose:

```bash
docker compose up --build
```

## 5. Start the Frontend

```bash
npm run dev
```

---

# 🛣️ Roadmap

- [x] MERN foundation
- [x] Microservices architecture
- [x] Authentication
- [x] Project management
- [x] File management
- [x] Redis integration
- [x] Socket.IO integration
- [x] Docker setup
- [ ] Advanced AI agent workflows
- [ ] RAG pipeline
- [ ] AI code modification
- [ ] AI-powered debugging
- [ ] Online code execution
- [ ] Subscription system
- [ ] Production AWS deployment
- [ ] Horizontal scaling
- [ ] Advanced monitoring & observability

---

# 🎯 Vision

The long-term goal of VertexAI is to build a **complete AI-powered development environment** where developers can go from:

```text
Idea
  ↓
AI-assisted planning
  ↓
Project creation
  ↓
Code generation
  ↓
Code modification
  ↓
Testing & debugging
  ↓
Deployment
```

all within a single platform.

---

# 👨‍💻 Author

**Manish Kumar**

Final-year Computer Science & Engineering student passionate about:

- 💻 Full-Stack Development
- 🤖 AI & LLMs
- 🧠 Agentic AI
- 🏗️ System Design
- ☁️ Cloud & Distributed Systems
- 🔗 Blockchain

---

⭐ If you find this project interesting, consider giving the repository a star!