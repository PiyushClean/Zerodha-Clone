# Zerodha Clone

A full-stack stock trading platform clone inspired by the core UI and workflow of Zerodha. This project was built to practice full-stack development, authentication, REST APIs, database integration, and deployment.

## 🚀 Live Demo

- Frontend: https://zerodha-clone-frontend-kappa.vercel.app/
- Dashboard: https://dashboard-zerodha-clone.vercel.app/
- Backend: https://zerodha-clone-2n8x.onrender.com/

> This is a learning project and is not affiliated with or endorsed by Zerodha.

## ✨ Features

### Authentication
- User signup and login
- Password authentication
- JWT-based authentication
- Protected dashboard
- Authentication check before accessing dashboard
- Secure frontend/backend communication

### Dashboard
- Watchlist
- Holdings
- Positions
- Funds
- Buy action window
- Trading dashboard interface
- Interactive charts

### Frontend
- Responsive landing pages
- Home
- About
- Products
- Pricing
- Support
- Signup/Login
- Navigation and footer

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- React Router
- Axios
- Bootstrap
- Font Awesome

### Dashboard
- React
- Create React App
- React Router
- Axios
- Material UI
- Chart.js
- react-chartjs-2

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- CORS
- Cookie Parser

### Deployment
- Vercel
- Render
- MongoDB Atlas

 ## 📚 Authentication Learning Resource
The authentication system was implemented as part of the learning process using authentication concepts from freeCodeCamp, including:

- JWT authentication
- Password hashing with bcrypt
- Authentication cookies
- Protected routes
- User verification

Learning resource: [freeCodeCamp](https://www.freecodecamp.org/learn/)

## 📁 Project Structure

```text
Zerodha Clone/
│
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── dashboard/
│   ├── src/
│   └── package.json
│
└── Backend/
    ├── Controllers/
    ├── Routes/
    ├── model/
    ├── util/
    └── index.js
