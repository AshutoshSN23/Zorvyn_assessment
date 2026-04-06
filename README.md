FinTrack: 3D Pulse Dashboard
A high-fidelity, interactive finance dashboard built for Zorvyn FinTech. This application demonstrates modern frontend architecture, responsive Glassmorphism design, and simulated Role-Based Access Control (RBAC).

🚀 Key Features
3D Bento Grid UI: Uses deep shadows, mesh gradients, and Glassmorphism for a premium, tactile feel.

Role-Based UI (RBAC): Supports Admin and Viewer roles. Admins can record new transactions, while Viewers have read-only access.

Dynamic Analytics: Interactive line and pie charts providing spending breakdowns and balance trends.

Smart Insights: Automated logic to identify the highest spending category and total transaction counts.

Theme Engine: System-persistent Light and Dark modes with smooth transitions.

Data Persistence: Full integration with localStorage to ensure data and theme preferences survive browser refreshes.

🛠️ Tech Stack
Framework: React (Vite)

Styling: Tailwind CSS v4 (Glassmorphism & 3D Effects)

Icons: Lucide React

Charts: Recharts

State Management: React Hooks (useState, useEffect, useMemo)

🏗️ Technical Decisions
Local-First Persistence: I chose localStorage for data handling to simulate a persistent user experience without the overhead of a dedicated backend for this assignment.

RBAC Simulation: Implemented a global role state that conditionally renders action-oriented components (like the "Add Transaction" modal), demonstrating secure UI patterns.

Performance: Utilized useMemo for heavy financial calculations (Total Balance, Income, Expenses) to prevent unnecessary re-renders during search and filter operations.

Scalable Architecture: Components are modularized (Sidebar, SummaryCard, TransactionTable) to ensure the codebase is easy to maintain and extend.

🚦 Getting Started
Clone the repository:

Bash
git clone https://github.com/AshutoshSN23/Zorvyn_assessment.git
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev