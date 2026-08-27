# An AI-Assisted Microservices Platform for Personal Budgeting

## Course Information
* **Department:** Computer Science and Engineering (CSE)
* **Course:** SOA Programming and Microservices (24SDCS03)
* **Academic Year:** 2026 - 2027
* **Project Guide:** Krishnanjaneyulu Payala

## Team Members

| S. No. | University ID | Name |
|--------|---------------|------|
| 1      | 2420030100    | G. Manaswi |
| 2      | 2420030168    | K. Sai Sree Chowdary |
| 3      | 2420030182    | G. Manaswi |

---

## Project Overview
Managing personal finances is increasingly challenging due to multiple income streams, frequent digital transactions, and recurring expenses. Traditional budgeting apps require manual data analysis and offer only basic tracking. 

This project delivers an **intelligent, scalable, and service-oriented personal budgeting platform** that automates financial analysis and provides personalized insights. By merging **Artificial Intelligence (AI)** with **Service-Oriented Architecture (SOA)**, the system shifts personal finance from reactive tracking to proactive assistance.

### Key Features
* **Automated Financial Tracking:** Record income/expenses and automatically categorize transactions.
* **AI-Driven Insights:** Detect unusual spending behavior, predict budget overruns, and receive personalized savings recommendations.
* **Smart Budgeting:** Define, track, and adjust budgets and savings goals dynamically.
* **Interactive Dashboard:** Visualize budget utilization, cash flow patterns, and savings progress.

---

## Project Architecture
The application uses a modular, cloud-native **Microservices Architecture**. Features are broken down into independent services that communicate asynchronously or via lightweight REST APIs.

### Core Microservices Description

1. **Authentication Service**
   * **Responsibility:** Secure user registration, authentication (JWT/OAuth), and session management.
   * **Scope:** Ensures isolated data privacy across financial portfolios.

2. **Transaction Service**
   * **Responsibility:** Core ledger engine to record, modify, and delete transactions.
   * **Scope:** Handles categorization mapping (e.g., Food, Utilities, Rent) and multi-source income tracking.

3. **Budget Service**
   * **Responsibility:** Handles lifecycle management of budgeting parameters and savings objectives.
   * **Scope:** Sets target spend limits and calculates real-time margin balances.

4. **AI Analysis Service**
   * **Responsibility:** Runs analytical evaluations on historic user transaction datasets.
   * **Scope:** Flags predictive anomalies, maps future outlays, and crafts contextual financial guidance.

5. **Notification Service**
   * **Responsibility:** Multi-channel alerting pipeline.
   * **Scope:** Dispatches instantaneous push events or emails regarding threshold overruns and bill deadlines.

---

## Tech Stack (Suggested)
* **Backend Framework:** Java Spring Boot / Node.js (Express) / Python (FastAPI)
* **AI/ML Engine:** Python (Scikit-Learn, Pandas, NumPy)
* **Database:** PostgreSQL / MongoDB (Polyglot persistence per service)
* **Communication:** REST APIs / gRPC (Synchronous), Apache Kafka / RabbitMQ (Asynchronous events)
* **Containerization & Deployment:** Docker, Kubernetes

---

## Getting Started

### Prerequisites
* Docker & Docker Compose installed
* Node.js / Java SDK (depending on specific service runtimes)
* Python 3.10+ (for the AI Analysis Service)

### Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd 24SDCS03-Personal-Budgeting
   ```

2. **Environment Configuration:**
   Create a `.env` file in the root directory and define environmental variables for each microservice port and database URI connection string.

3. **Spin up Infrastructure via Docker Compose:**
   ```bash
   docker-compose up --build
   ```

4. **Accessing the Application:**
   * API Gateway Portal: `http://localhost:8080`
   * Interactive UI Dashboard: `http://localhost:3000`
