import { Lightbulb, TrendingDown, Target } from "lucide-react";

export default function Insights({ transactions }) {
  const categoryTotals = {};
  let totalExpense = 0;

  transactions.forEach(t => {
    if (t.type === "expense") {
      categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
      totalExpense += t.amount;
    }
  });

  const sorted = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1]);
  const highest = sorted[0];

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
      <div className="flex items-center gap-2 text-indigo-600 mb-2">
        <Lightbulb size={20} />
        <h2 className="font-bold uppercase text-xs tracking-widest">Smart Insights</h2>
      </div>

      {highest ? (
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="mt-1"><TrendingDown className="text-rose-500" size={16}/></div>
            <p className="text-sm text-slate-600">
              Highest spending is <span className="font-bold text-slate-900">{highest[0]}</span>, accounting for 
              <span className="text-rose-600 font-bold"> {((highest[1]/totalExpense)*100).toFixed(0)}%</span> of total expenses.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="mt-1"><Target className="text-indigo-500" size={16}/></div>
            <p className="text-sm text-slate-600">
              You've recorded <span className="font-bold text-slate-900">{transactions.length}</span> transactions this period. Keep it up!
            </p>
          </div>
        </div>
      ) : (
        <p className="text-slate-400 text-sm italic">Add some expenses to see your financial patterns.</p>
      )}
    </div>
  );
}