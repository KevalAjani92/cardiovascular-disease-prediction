# 🫀 Cardiovascular Disease Prediction System

## 📌 Project Description
This project predicts the risk of cardiovascular disease using Machine Learning.
It provides a web-based interface where users can enter health parameters and
receive real-time predictions using a trained Logistic Regression model.

The system is designed as a full-stack application with a React frontend and
a Flask-based ML backend, deployed on cloud platforms.

---

## 🛠 Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Flask (Python)
- **ML Model:** Logistic Regression
- **Deployment:**
  - Frontend: Netlify
  - Backend: Render

---

## 🚀 Live Demo
🔗 **Live Project URL:**  
https://cardio-prediction-ak92.netlify.app/

---

## 📊 Features Used for Prediction
- Age
- Height
- Weight
- Systolic & Diastolic Blood Pressure
- Cholesterol Level
- Glucose Level
- Lifestyle Factors (Smoking, Alcohol Intake, Physical Activity)

---

## 🧠 Machine Learning Workflow
1. Exploratory Data Analysis (EDA)
2. Data preprocessing and feature engineering
3. Model training using Logistic Regression
4. Model serialization using Pickle
5. Real-time inference through Flask REST API

---

## 📂 Project Folder Structure

```
Cardiovascular-Disease-Prediction/
│
├── frontend/ # React + Tailwind frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── services/
│ │ └── api.js # Backend API configuration
│ ├── public/
│ │ └── _redirects
│ ├── package.json
│ └── vite.config.js
│
├── backend/ # Flask + ML backend
│ ├── model/
│ │ └── cardio_model.pkl
│ ├── app.py
│ ├── requirements.txt
│ └── Procfile
│
├── notebooks/ # EDA & model training notebooks
├── dataset/ # Dataset files
├── screenshots/ # UI & result screenshots
├── README.md
└── .gitignore
```

---

## ▶️ How to Run the Project Locally

### 🔹 1. Backend (Flask API)

```
cd backend
pip install -r requirements.txt
python app.py
Backend runs at:
http://127.0.0.1:5000
```

### 🔹 2. Frontend (React + Tailwind CSS)
```
Copy code
cd frontend
npm install
npm run dev
Frontend runs at:
http://localhost:5173
(or http://localhost:3000 depending on setup)
```
### 🔁 API URL Configuration (IMPORTANT)
```
The frontend communicates with the backend through a configurable API base URL.

📁 File Location
frontend/src/services/api.js
🔹 Example Configuration
// For local development
const API_BASE_URL = "http://127.0.0.1:5000";

// For production (Render deployment)
// const API_BASE_URL = "https://<your-backend-name>.onrender.com";
Make sure only one URL is active at a time.
```