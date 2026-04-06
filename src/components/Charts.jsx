import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  PieChart, Pie, Cell, Legend
} from "recharts";

export default function Charts({ transactions }) {
  const data = transactions.map((t, i) => ({
    name: t.date,
    amount: t.amount
  }));

  const categoryData = Object.values(
    transactions.reduce((acc, curr) => {
      if (curr.type === "expense") {
        acc[curr.category] = acc[curr.category] || { name: curr.category, value: 0 };
        acc[curr.category].value += curr.amount;
      }
      return acc;
    }, {})
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 bg-white p-4 rounded-xl shadow">
      <LineChart width={400} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      </LineChart>
    
    <h3 className="text-sm text-gray-500 mb-2">
    Spending Breakdown
    </h3>
    <PieChart width={400} height={300}>
    <Pie
        data={categoryData}
        dataKey="value"
        nameKey="name"
        outerRadius={100}
        label={({ name, percent }) =>
        `${name} (${(percent * 100).toFixed(0)}%)`
        }
    >
        {categoryData.map((entry, index) => (
        <Cell
            key={`cell-${index}`}
            fill={["#4f46e5", "#22c55e", "#f59e0b", "#ef4444"][index % 4]}
        />
        ))}
    </Pie>

    <Tooltip
        formatter={(value) => `₹ ${value}`}
    />

    <Legend />
    </PieChart>

    </div>
  );
}