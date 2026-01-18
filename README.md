
# contract-management-platform
Frontend Contract Management Platform built with React and Vite, featuring reusable contract blueprints, controlled lifecycle states, and a clean component-based architecture.

#  Contract Management Platform

A professional, frontend-only Contract Management Platform built using **React + Vite**.  
This application allows users to manage contracts, reusable blueprints, and track contract lifecycle states through a clean and responsive UI.

---

##  Features

###  Dashboard
- Overview of contract activity
- Displays:
  - Total Contracts
  - Active Contracts
  - Signed Contracts
  - Locked Contracts
- Data updates dynamically based on contract state

###  Contracts Management
- Create contracts from reusable blueprints
- Track contract lifecycle:
  - Created → Approved → Sent → Signed → Locked
- Filter contracts by status:
  - All, Active, Pending, Signed
- View contract details
- Delete contracts

###  Blueprint Management
- Create reusable contract blueprints
- Supported field types:
  - Text
  - Date
  - Checkbox
  - Signature
- Delete blueprints
- Use blueprint to create new contracts

---

##  Architecture & Design

- **React Functional Components**
- **Custom Hooks** for state management
- **Single Source of Truth** using in-memory storage
- **Mock Data Initialization** (no backend required)
- Fully responsive UI (desktop, tablet, mobile)

---

##  Tech Stack

- **React 18**
- **Vite**
- **JavaScript (ES6+)**
- **CSS (custom, responsive)**
- **Lucide React Icons**

---

##  Project Structure

contract-management/
├── src/
│ ├── components/
│ ├── pages/
│ ├── data/
│ ├── utils/
│ ├── styles/
│ ├── App.jsx
│ └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md


---

##  Mock Data

This project uses **mock seed data** to simulate backend responses:
- Initial Blueprints
- Initial Contracts

Mock data is stored in: src/data/initialData.js


This allows easy replacement with real APIs in the future.

---

## ▶️ How to Run Locally


# Install dependencies
npm install

# Start development server
npm run dev


## App will run on:-
http://localhost:5173


##  Author
Rishi Addye  
BCA Student – Frontend Development Project

>>>>>>> b485f6d (Initial commit: Contract Management Platform)
