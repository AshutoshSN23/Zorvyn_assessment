import { useState } from "react";

export default function AddTransactionModal({ onAdd, onClose }) {
  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  const handleSubmit = () => {
    onAdd({
      ...form,
      id: Date.now(),
      amount: Number(form.amount),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Add Transaction</h2>

        <input placeholder="Date" type="date"
          className="w-full mb-2 p-2 border"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <input placeholder="Amount"
          className="w-full mb-2 p-2 border"
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />

        <input placeholder="Category"
          className="w-full mb-2 p-2 border"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <select
          className="w-full mb-4 p-2 border"
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <div className="flex justify-end gap-2">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}