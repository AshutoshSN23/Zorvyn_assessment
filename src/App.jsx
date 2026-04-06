import { useState, useEffect, useMemo } from "react";
import { transactionsData } from "./data/mockData";
import SummaryCard from "./components/SummaryCard";
import TransactionTable from "./components/TransactionTable";
import Charts from "./components/Charts";
import Insights from "./components/Insights";
import AddTransactionModal from "./components/AddTransactionModal";
import { 
  LayoutDashboard, Receipt, BarChart3, Settings, 
  ShieldCheck, User, Sun, Moon, Zap, Sparkles 
} from "lucide-react";

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [role, setRole] = useState("viewer");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  
  // 1. Theme Engine with Persistence
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // 2. Data Hydration from LocalStorage or MockData
  useEffect(() => {
    const saved = localStorage.getItem("transactions");
    if (saved && JSON.parse(saved).length > 0) {
      setTransactions(JSON.parse(saved));
    } else {
      setTransactions(transactionsData);
    }
  }, []);

  // 3. Sync State to LocalStorage & HTML Classes
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [transactions, darkMode]);

  // 4. Advanced Financial Analytics (Requirement 1 & 4)
  const totals = useMemo(() => {
    return transactions.reduce((acc, t) => {
      if (t.type === "income") acc.income += t.amount;
      else acc.expense += t.amount;
      return acc;
    }, { income: 0, expense: 0 });
  }, [transactions]);

  const addTransaction = (newTx) => {
    setTransactions((prev) => [newTx, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#020617] transition-colors duration-700 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* 3D Depth: Ambient Background Gradients */}
      <div className="fixed -top-24 -left-24 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/20 blur-[120px] rounded-full animate-pulse pointer-events-none" />
      <div className="fixed top-1/2 -right-24 w-80 h-80 bg-purple-500/10 dark:bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex min-h-screen p-4 lg:p-8 gap-8">
        
        {/* Floating Glass Sidebar (Requirement 3: Role Display) */}
        <aside className="w-20 lg:w-72 bg-white/80 dark:bg-slate-900/80 backdrop-blur-3xl border border-white dark:border-slate-800 rounded-[3rem] shadow-2xl flex flex-col items-center lg:items-stretch p-8 transition-all duration-500 overflow-hidden">
          <div className="flex items-center gap-4 mb-16 self-center lg:self-start">
            <div className="w-12 h-12 bg-gradient-to-tr from-indigo-600 to-violet-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-500/40 transform hover:scale-110 transition-transform">
              <Zap size={26} fill="currentColor" />
            </div>
            <h2 className="hidden lg:block text-2xl font-black tracking-tighter dark:text-white uppercase">Zorvyn</h2>
          </div>

          <nav className="space-y-4 flex-1">
            <NavItem icon={<LayoutDashboard size={22}/>} label="Dashboard" active />
            <NavItem icon={<Receipt size={22}/>} label="Ledger" />
            <NavItem icon={<BarChart3 size={22}/>} label="Analytics" />
          </nav>

          <div className="hidden lg:block mt-auto p-6 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-[2rem] border border-indigo-500/10">
             <div className="flex items-center gap-2 font-black text-[10px] text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em] mb-2">
               <ShieldCheck size={14}/> Access Level
             </div>
             <p className="font-black text-slate-800 dark:text-white text-lg">{role.toUpperCase()}</p>
          </div>
        </aside>

        {/* Main Dashboard Canvas */}
        <main className="flex-1 space-y-10 max-w-[1400px] mx-auto w-full">
          
          {/* Header & Theme/Role Controls (Requirement 3) */}
          <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={16} className="text-indigo-500" />
                <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">FinTech UI v1.0</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
                Finance <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">Pulse</span>
              </h1>
            </div>

            <div className="flex items-center gap-4 self-end lg:self-center">
              {/* Dark Mode Toggle (Optional Enhancement) */}
              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className="p-4 rounded-[1.5rem] bg-white dark:bg-slate-900 border border-white dark:border-slate-800 shadow-xl hover:shadow-indigo-500/20 transition-all active:scale-90"
              >
                {darkMode ? <Sun size={22} className="text-yellow-400" /> : <Moon size={22} className="text-indigo-600" />}
              </button>

              {/* Role Switcher (Requirement 3) */}
              <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-md p-1.5 rounded-[1.5rem] border border-white dark:border-slate-800 shadow-xl flex gap-1">
                {['viewer', 'admin'].map((r) => (
                  <button 
                    key={r}
                    onClick={() => setRole(r)}
                    className={`px-8 py-3 rounded-2xl text-[10px] font-black tracking-widest transition-all ${role === r ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30" : "text-slate-500 hover:text-indigo-500"}`}
                  >
                    {r.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </header>

          {/* 3D Bento Grid: Financial Summary (Requirement 1) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SummaryCard title="Net Balance" value={totals.income - totals.expense} type="balance" />
            <SummaryCard title="Total Inflow" value={totals.income} type="income" />
            <SummaryCard title="Total Outflow" value={totals.expense} type="expense" />
          </div>

          {/* Analytics (Requirement 1) & Insights (Requirement 4) */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 items-start">
            <div className="xl:col-span-2 group bg-white/40 dark:bg-slate-900/40 backdrop-blur-3xl p-10 rounded-[3rem] border border-white dark:border-slate-800 shadow-2xl transition-all hover:border-indigo-500/20">
               <div className="flex items-center justify-between mb-10">
                 <h3 className="text-2xl font-black dark:text-white uppercase tracking-tighter italic">Spending Analytics</h3>
                 <div className="px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-black tracking-widest uppercase border border-emerald-500/20">
                    Live Analysis
                 </div>
               </div>
               <Charts transactions={transactions} darkMode={darkMode} />
            </div>
            
            <div className="space-y-10">
              <Insights transactions={transactions} />
              
              {/* Role-Based UI Action (Requirement 3) */}
              {role === "admin" && (
                <button 
                  onClick={() => setShowModal(true)} 
                  className="group relative w-full py-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[2.5rem] font-black text-xs tracking-[0.3em] shadow-2xl hover:scale-[1.02] active:scale-95 transition-all duration-500 overflow-hidden"
                >
                  <span className="relative z-10">RECORD TRANSACTION +</span>
                  <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              )}
            </div>
          </div>

          {/* Transaction Ledger (Requirement 2) */}
          <div className="pb-16">
            <TransactionTable 
              transactions={transactions} 
              role={role} 
              search={search} 
              setSearch={setSearch} 
            />
          </div>
        </main>
      </div>

      {/* Modal - Admin Exclusive Action (Requirement 3) */}
      {showModal && (
        <AddTransactionModal 
          onAdd={addTransaction} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </div>
  );
}

// Custom Sidebar Component for Nav UI
function NavItem({ icon, label, active = false }) {
  return (
    <div className={`flex items-center gap-5 px-7 py-6 rounded-[2rem] cursor-pointer transition-all duration-500 group ${active ? "bg-indigo-600 text-white shadow-2xl shadow-indigo-500/40 translate-x-2" : "text-slate-400 hover:text-indigo-500 hover:bg-white dark:hover:bg-slate-800"}`}>
      <span className="group-hover:rotate-12 transition-transform">{icon}</span>
      <span className="hidden lg:block font-black text-[11px] uppercase tracking-[0.2em]">{label}</span>
    </div>
  );
}