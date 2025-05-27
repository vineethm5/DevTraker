
DevTasker - Developer Task Manager API
A backend API built with Node.js and Express to help developers or teams manage their coding tasks efficiently. It features user authentication, task CRUD operations, filtering, and optional collaborative tools.
________________________________________
🔧 Features
•	User Registration and Login (JWT Authentication)
•	Create, Read, Update, Delete (CRUD) for tasks
•	Filter tasks by status, priority, or due date
•	Assign tasks to self or others (optional)[Not done]
•	Email notification support (optional)[Not done]
•	RESTful API with proper validation and error handling
________________________________________
🛠️ Tech Stack
•	Node.js + Express.js
•	MongoDB with Mongoose (or switch to PostgreSQL)
•	JWT for authentication
•	bcrypt for password hashing
•	express-validator for request validation
•	nodemailer for email (optional)[Not done]
•	dotenv for environment variable management
________________________________________
📁 Project Structure
/devtasker-api
│
├── /controllers     # Logic for each route
├── /models          # Mongoose models (User, Task)
├── /routes          # Route definitions
├── /middleware      # Auth and error handling middleware
├── /validators      # Request validation logic
├── /config          # DB and env configuration
├── .env             # Environment variables
└── index.js        # Entry point
________________________________________
📦 Installation
git clone https://github.com/vineethm5/DevTraker.git
cd devtasker-api
npm install
cp .env.example .env # Fill in your values
npm run dev # or npm start
________________________________________
🔐 Authentication
Uses JWT for secure API access.
•	POST /api/auth/register – Register a new user
•	POST /api/auth/login – Login and receive a JWT
Include the token in requests:
Authorization: Bearer <your_token>
________________________________________
📘 API Endpoints
👤 Users
•	POST /api/auth/register – Register user
•	POST /api/auth/login – Login user
📝 Tasks (Protected Routes)
•	GET /api/tasks – Get all your tasks
•	POST /api/tasks – Create a new task
•	GET /api/tasks/:id – Get single task
•	PUT /api/tasks/:id – Update task
•	DELETE /api/tasks/:id – Delete task
🔍 Filters
•	/api/tasks?status=pending [Yet to be done]
•	/api/tasks?priority=high&sort=dueDate [Yet to be done]
________________________________________
🧪 Example Task Schema
{
  "title": "Fix login bug",
  "description": "Handle expired token issue",
  "status": "pending",
  "priority": "high",
  "dueDate": "2025-05-10"
}
________________________________________
💡 Future Enhancements
•	Real-time task updates using Socket.io
•	Role-based access (admin, user)
•	File uploads for task attachments
•	Swagger API documentation
•	Pagination & search
________________________________________
📄 License
MIT
________________________________________
🙌 Contributing
Pull requests are welcome! For major changes, please open an issue first.
________________________________________
📬 Contact
Vineeth.apple5@gmail.com
Project Link: https://github.com/vineethm5/DevTraker
