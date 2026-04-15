import { useState } from "react";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";

import {
    FaShoppingCart,
    FaTruck,
    FaTimesCircle,
    FaDollarSign,
    FaUsers,
} from "react-icons/fa";

import {
    PieChart,
    Pie,
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function Dashboard() {

    // DATA DINAMIS
    const [orders, setOrders] = useState(75);
    const [delivered, setDelivered] = useState(175);
    const [canceled] = useState(40);
    const [revenue, setRevenue] = useState(128);
    const [customers, setCustomers] = useState(320);

    const pieData = [
        { name: "Orders", value: orders },
        { name: "Customers", value: customers },
        { name: "Revenue", value: revenue },
    ];

    const lineData = [
        { name: "Sun", value: 100 },
        { name: "Mon", value: 200 },
        { name: "Tue", value: 350 },
        { name: "Wed", value: 200 },
        { name: "Thu", value: 150 },
        { name: "Fri", value: 250 },
        { name: "Sat", value: orders },
    ];

    const COLORS = ["#ef4444", "#10b981", "#3b82f6"];

    return (
        // IMPROVISASI: background + layout clean
        <div className="flex bg-gray-100 min-h-screen">

            <Sidebar />

            <div className="flex-1 p-6">
                <Header />

                {/* HEADER DASHBOARD */}
                <div className="flex justify-between items-center mt-6 mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                        <p className="text-gray-400 text-sm">Dashboard / Order List</p>
                    </div>

                    {/* IMPROVISASI: tombol modern */}
                    <button
                        onClick={() => {
                            setOrders(orders + 5);
                            setDelivered(delivered + 3);
                            setRevenue(revenue + 20);
                            setCustomers(customers + 10);
                        }}
                        className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl shadow transition"
                    >
                        + Tambah Data
                    </button>
                </div>

                {/* CARD */}
                {/* IMPROVISASI: gap lebih besar + hover */}
                <div className="grid grid-cols-5 gap-5">
                    <Card icon={<FaShoppingCart />} color="green" value={orders} label="Total Orders" />
                    <Card icon={<FaTruck />} color="blue" value={delivered} label="Delivered" />
                    <Card icon={<FaTimesCircle />} color="red" value={canceled} label="Canceled" />
                    <Card icon={<FaDollarSign />} color="yellow" value={`Rp ${revenue}`} label="Revenue" />
                    <Card icon={<FaUsers />} color="purple" value={customers} label="Customers" />
                </div>

                {/*  CHART */}
                <div className="grid grid-cols-2 gap-6 mt-6">

                    {/* PIE */}
                    {/* IMPROVISASI: card modern */}
                    <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition">
                        <h2 className="font-semibold mb-4 text-gray-700">Pie Chart</h2>

                        <div className="flex justify-around">
                            {pieData.map((entry, index) => (
                                <div key={index} className="text-center">
                                    <PieChart width={120} height={120}>
                                        <Pie
                                            data={[entry]}
                                            dataKey="value"
                                            innerRadius={30}
                                            outerRadius={50}
                                            fill={COLORS[index]}
                                        />
                                    </PieChart>
                                    <p className="font-bold">{entry.value}</p>
                                    <p className="text-gray-400 text-xs">{entry.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* LINE */}
                    <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition">
                        <h2 className="font-semibold mb-4 text-gray-700">Chart Orders</h2>

                        {/* IMPROVISASI: tinggi chart ditambah */}
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={lineData}>
                                <XAxis dataKey="name" />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#3b82f6"
                                    strokeWidth={3}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                </div>

            </div>
        </div>
    );
}


/* CARD COMPONENT */
function Card({ icon, color, value, label }) {

    // IMPROVISASI: warna dinamis
    const colorMap = {
        green: "bg-green-100 text-green-500",
        blue: "bg-blue-100 text-blue-500",
        red: "bg-red-100 text-red-500",
        yellow: "bg-yellow-100 text-yellow-500",
        purple: "bg-purple-100 text-purple-500",
    };

    return (
        // IMPROVISASI: rounded besar + hover + shadow
        <div className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition flex items-center gap-4">
            <div className={`p-3 rounded-xl ${colorMap[color]}`}>
                {icon}
            </div>
            <div>
                <h2 className="font-bold text-lg">{value}</h2>
                <p className="text-gray-400 text-sm">{label}</p>
            </div>
        </div>
    );
}