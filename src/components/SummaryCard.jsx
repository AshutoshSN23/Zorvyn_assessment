import { Wallet, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function SummaryCard({ title, value, type }) {
  const isIncome = type === "income";
  const isExpense = type === "expense";

  return (
    <div className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white dark:border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-2 hover:shadow-indigo-500/10 cursor-default overflow-hidden">
      
      {/* 3D Glow Effect */}
      <div className={`absolute -right-4 -top-4 w-24 h-24 blur-3xl opacity-20 rounded-full transition-all group-hover:scale-150 ${isIncome ? "bg-emerald-500" : isExpense ? "bg-rose-500" : "bg-indigo-500"}`} />

      <div className="flex items-center justify-between mb-6">
        <div className={`p-4 rounded-2xl shadow-inner ${isIncome ? "bg-emerald-50 text-emerald-600" : isExpense ? "bg-rose-50 text-rose-600" : "bg-indigo-50 text-indigo-600"}`}>
          {isIncome ? <ArrowUpRight size={24}/> : isExpense ? <ArrowDownRight size={24}/> : <Wallet size={24}/>}
        </div>
      </div>
      
      <h3 className="text-slate-400 dark:text-slate-500 font-bold uppercase text-[10px] tracking-widest">{title}</h3>
      <p className="text-4xl font-black text-slate-900 dark:text-white mt-1 tracking-tighter">
        ₹{value.toLocaleString()}
      </p>

      <div className="mt-6 flex items-center gap-2">
        <div className={`h-1.5 w-16 rounded-full ${isIncome ? "bg-emerald-500" : isExpense ? "bg-rose-500" : "bg-indigo-500"}`} />
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Real-time Data</span>
      </div>
    </div>
  );
}