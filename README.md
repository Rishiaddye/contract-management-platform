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

contract-mg/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── BlueprintModal.jsx
│   │   ├── ContractDetailModal.jsx
│   │   ├── Header.jsx
│   │   ├── Modal.jsx
│   │   ├── StatusBadge.jsx
│   │   └── Tabs.jsx
│   ├── data/
│   │   ├── initialData.js
│   │   └── lifecycle.js
│   ├── pages/
│   │   ├── BlueprintsPage.jsx
│   │   └── ContractsPage.jsx
│   ├── styles/
│   │   ├── global.css
│   │   ├── header.css
│   │   ├── modal.css
│   │   ├── responsive.css
│   │   └── table.css
│   ├── utils/
│   │   └── storage.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js



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
