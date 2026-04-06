# 💰 FinTrack: 3D Pulse Dashboard

> A high-fidelity, interactive finance dashboard built for the **Zorvyn FinTech Internship Assignment**.  
> Designed with modern frontend practices, premium UI/UX, and scalable architecture.

---

## 🌐 Live Demo
🚀 _Add your deployed link here (Vercel/Netlify)_  
👉 https://your-live-link.vercel.app

---

## 📸 Preview

![Dashboard Preview](https://via.placeholder.com/1000x500.png?text=Finance+Dashboard+Preview)

---

## 🚀 Key Features

### 🎨 3D Bento Grid UI
- Modern **Glassmorphism design**
- Soft shadows, gradients, and depth
- Clean and premium dashboard layout

### 🔐 Role-Based UI (RBAC Simulation)
- **Admin Role** → Add transactions  
- **Viewer Role** → Read-only access  
- UI dynamically adapts based on role

### 📊 Dynamic Analytics
- 📈 Line chart → Balance trends over time  
- 🥧 Pie chart → Category-wise spending breakdown  
- Interactive tooltips + legends

### 🧠 Smart Insights
- Detects **highest spending category**
- Displays meaningful financial observations

### 🌗 Theme Engine (Optional Enhancement)
- Light / Dark mode support  
- Smooth transitions and persistence

### 💾 Data Persistence
- Uses **localStorage**
- Transactions & preferences saved across sessions

---

## 🛠️ Tech Stack

| Category        | Technology |
|----------------|-----------|
| Framework      | React (Vite) |
| Styling        | Tailwind CSS v4 |
| Charts         | Recharts |
| Icons          | Lucide React |
| State Mgmt     | React Hooks |
| Persistence    | localStorage |

---

## 🏗️ Architecture
src/
├── components/
│ ├── SummaryCard.jsx
│ ├── TransactionTable.jsx
│ ├── Charts.jsx
│ ├── Insights.jsx
│ ├── AddTransactionModal.jsx
│
├── data/
│ └── mockData.js
│
├── App.jsx
└── main.jsx


---

## ⚙️ Technical Decisions & Trade-offs

### 📌 Local-First Persistence
- Used **localStorage** instead of backend
- Simulates real-world persistence efficiently
- Keeps scope aligned with frontend-focused assignment

### 📌 RBAC Simulation
- Global role state (`Admin` / `Viewer`)
- Conditional rendering of actions
- Demonstrates scalable UI security patterns

### 📌 Performance Optimization
- Used `useMemo` for:
  - Balance calculations
  - Income & expense aggregation
- Prevents unnecessary re-renders

### 📌 Scalable Component Design
- Modular architecture:
  - `Sidebar`
  - `SummaryCard`
  - `Charts`
  - `Transactions`
- Easy to extend and maintain

---

## 🚦 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/AshutoshSN23/Zorvyn_assessment.git
cd Zorvyn_assessment

2️⃣ Install dependencies
npm install
3️⃣ Run development server
npm run dev