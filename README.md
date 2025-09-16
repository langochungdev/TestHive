Dưới đây là nội dung **README.md đầy đủ**, đã tích hợp cả badges block mà bạn yêu cầu:

---

```markdown
# 📚 Online Test Platform

![Build](https://img.shields.io/github/actions/workflow/status/<your-username>/<repo-name>/backend-ci.yml?branch=main&label=backend-build)
![Frontend Build](https://img.shields.io/github/actions/workflow/status/<your-username>/<repo-name>/frontend-ci.yml?branch=main&label=frontend-build)
![Tests](https://img.shields.io/github/actions/workflow/status/<your-username>/<repo-name>/test.yml?branch=main&label=tests)
![Coverage](https://img.shields.io/codecov/c/github/<your-username>/<repo-name>?label=coverage)  
![Release](https://img.shields.io/github/v/release/<your-username>/<repo-name>?sort=semver)
![License](https://img.shields.io/github/license/<your-username>/<repo-name>)  
![Java](https://img.shields.io/badge/Java-21-orange?logo=openjdk)
![Spring Boot](https://img.shields.io/badge/SpringBoot-3.3-green?logo=springboot)
![Vue.js](https://img.shields.io/badge/Vue.js-3-brightgreen?logo=vue.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue?logo=postgresql)
![Docker](https://img.shields.io/badge/Docker-enabled-blue?logo=docker)
![Prometheus](https://img.shields.io/badge/Prometheus-monitoring-orange?logo=prometheus)

Web app cho phép người học và giảng viên tạo, chia sẻ, và làm đề kiểm tra trực tuyến.  
Hỗ trợ nhiều loại câu hỏi: **trắc nghiệm, điền khuyết, kèm ảnh/audio**.  
Trong tương lai sẽ có **phân tích kết quả, gamification và mini-games**.

---

## 🚀 Tech Stack

- **Backend**: Java 21, Spring Boot 3.x, Spring Security, JPA/Hibernate  
- **Frontend**: Vue.js 3, Vite, Axios  
- **Database**: PostgreSQL 16  
- **Monitoring**: Prometheus + Micrometer  
- **Containerization**: Docker, Docker Compose  
- **IDE**: IntelliJ IDEA  

---

## 📂 Repository Structure

```

project-root/
├── backend/             # Spring Boot service
│   ├── src/
│   ├── pom.xml
│   ├── Dockerfile
│   └── .env
│
├── frontend/            # Vue.js app
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   ├── Dockerfile
│   └── .env
│
├── monitoring/          # Prometheus config
│   └── prometheus.yml
│
├── docker-compose.yml   # Run FE + BE + DB + Prometheus
├── README.md
└── .gitignore

````

---

## ⚙️ Installation & Setup

### 1. Clone repo
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
````

### 2. Backend

```bash
cd backend
./mvnw clean install
./mvnw spring-boot:run
```

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

### 4. Docker (all services)

```bash
docker-compose up --build
```

---

## 📊 Monitoring

Prometheus scrape metrics từ **Spring Boot Actuator** tại endpoint:

```
http://localhost:8080/actuator/prometheus
```

Dashboard Prometheus:

```
http://localhost:9090
```

---

## 📖 API Documentation

Swagger UI (nếu enable):

```
http://localhost:8080/swagger-ui.html
```

---

## 🧪 Testing

### Backend

```bash
cd backend
./mvnw test
```

### Frontend

```bash
cd frontend
npm run test
```

---

## 🤝 Contributing

1. Fork repo
2. Tạo branch mới (`feature/my-feature`)
3. Commit và push
4. Tạo Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for details.

---

## 👤 Maintainer

* [Your Name](https://github.com/<your-username>)

```

---

```
