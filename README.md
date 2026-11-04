<div align="center">

<img src="assets/banner.svg" width="100%" alt="VertexAI banner" />

<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=3000&pause=1000&color=A78BFA&center=true&vCenter=true&width=760&lines=Write+code+with+AI+agents+%F0%9F%A4%96;Built+on+a+microservices+architecture+%F0%9F%A7%A9;Powered+by+LangGraph+%2B+LangChain+%F0%9F%A7%A0;Real-time+collaboration+with+Socket.IO+%E2%9A%A1;Containerized+with+Docker+%26+deployed+on+AWS+%F0%9F%90%B3" alt="Typing animation" />
</a>

<br/>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white)

![Stars](https://img.shields.io/github/stars/YOUR_USERNAME/YOUR_REPO?style=flat-square&color=a78bfa&logo=github)
![Forks](https://img.shields.io/github/forks/YOUR_USERNAME/YOUR_REPO?style=flat-square&color=8b5cf6&logo=github)
![Issues](https://img.shields.io/github/issues/YOUR_USERNAME/YOUR_REPO?style=flat-square&color=7c3aed)
![License](https://img.shields.io/github/license/YOUR_USERNAME/YOUR_REPO?style=flat-square&color=6d28d9)

<br/>

[**Live Demo**](#) · [**Report Bug**](../../issues) · [**Request Feature**](../../issues)

</div>

---

## 📖 About

**VertexAI** is a full-stack **AI-powered code editor and development environment**, inspired by modern AI development platforms. It lets you generate, edit, and manage code with the help of intelligent agents, all inside a browser-based IDE.

The project follows a **production-style microservices architecture** built on the MERN stack, with Redis for caching, LangGraph for AI agent workflows, Socket.IO for real-time communication, Docker for containerization, AWS for deployment, and Razorpay for payments.

<div align="center">

<!-- Swap with a real screenshot / demo GIF whenever you have one -->
<img src="assets/preview.svg" width="90%" alt="VertexAI editor preview" />

</div>

---

## 🔥 Features

<table>
  <tr>
    <td width="50%" valign="top">

### 🤖 AI Assistance
- AI-powered code generation
- Agent workflows using **LangGraph**
- Context-aware coding help

    </td>
    <td width="50%" valign="top">

### 💻 Developer Experience
- Online code editor / IDE
- Project and file management
- Real-time updates with **Socket.IO**

    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">

### 🔐 Security & Payments
- JWT authentication and authorization
- Subscriptions and payments via **Razorpay**

    </td>
    <td width="50%" valign="top">

### ⚡ Infrastructure
- **Redis** caching and fast data operations
- Containerized with **Docker Compose**
- Scalable microservices backend on **AWS**

    </td>
  </tr>
</table>

---

## 🧠 Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=react,vite,nodejs,express,mongodb,redis,docker,aws,socketio,js,html,css&perline=12" alt="Tech stack icons" />

</div>

| Layer | Technologies |
|:------|:-------------|
| **Frontend** | React.js, Vite |
| **Backend** | Node.js, Express.js, Microservices |
| **Database** | MongoDB, Redis |
| **AI** | LangGraph, LangChain |
| **Real-time** | Socket.IO |
| **DevOps** | Docker, Docker Compose, AWS |
| **Payments** | Razorpay |
| **Auth** | JWT |

---

## 🏗️ Architecture

Independent services communicate through a central **API Gateway**, making the system easy to scale, maintain, and deploy.

<div align="center">
  <img src="assets/architecture.svg" width="90%" alt="VertexAI architecture diagram" />
</div>

<br/>

| Service | Responsibility |
|:--------|:---------------|
| 🚪 **Gateway** | Single entry point: routing and request forwarding to services |
| 🔐 **Auth** | Registration, login, JWT authentication and authorization |
| 📂 **Project** | Project and workspace management |
| 📄 **File** | File creation, storage and management |
| 💳 **Payment** | Razorpay payments and subscriptions |
| 🤖 **AI** | LangGraph agent workflows and code generation |
| ⌨️ **Terminal** | Real-time terminal sessions over Socket.IO |
| 🧰 **Shared** | Common utilities, middleware and config used across services |

---

## 📁 Project Structure

```text
VertexAI/
├── backend/
│   ├── gateway/               # API Gateway
│   ├── services/
│   │   ├── ai/                # LangGraph agents & code generation
│   │   ├── auth/              # Authentication (JWT)
│   │   ├── file/              # File management
│   │   ├── payment/           # Razorpay payments & subscriptions
│   │   ├── project/           # Project management
│   │   └── terminal/          # Terminal service (Socket.IO)
│   ├── shared/                # Shared utils, middleware & config
│   ├── docker-compose.yml     # Runs all backend services
│   ├── package.json
│   └── package-lock.json
├── frontend/                  # React + Vite client
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

> Adjust folder names and commands to match your repository.

### Prerequisites

- Node.js 18+
- Docker & Docker Compose
- MongoDB and Redis (or use the Docker setup)

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO/backend

# Install backend dependencies
npm install

# Configure environment variables (see below)
# then start the gateway + all services
docker-compose up --build
```

### Run the frontend locally

```bash
cd frontend
npm install
npm run dev
```

<details>
<summary><b>🔑 Environment variables</b></summary>

<br/>

```env
MONGO_URI=
REDIS_URL=
JWT_SECRET=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
AI_API_KEY=
```

</details>

---

## 🗺️ Roadmap

- [x] Microservices architecture with API Gateway
- [x] AI code generation with LangGraph
- [x] Authentication and payments
- [ ] Real-time collaborative editing
- [ ] Git integration
- [ ] Plugin / extension support

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the project
2. Create your branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

<div align="center">

### ⭐ If you find this project interesting, please consider giving it a star!

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=16&duration=2500&pause=800&color=8B5CF6&center=true&vCenter=true&width=500&lines=Thanks+for+stopping+by!+%F0%9F%92%9C;Happy+coding!+%F0%9F%9A%80" alt="Footer typing" />

<img src="assets/footer.svg" width="100%" alt="Footer wave" />

</div>