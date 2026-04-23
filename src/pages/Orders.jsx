import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { orders as initialData } from "../data/orders";

export default function Orders() {

    const [data, setData] = useState(initialData);
    const [showForm, setShowForm] = useState(false);

    const [form, setForm] = useState({
        id: "",
        customer: "",
        status: "Pending",
        total: "",
        date: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data, form]);
        setShowForm(false);
    };

    return (
        <div className="p-6 space-y-6">

            <PageHeader
                title="Orders"
                breadcrumb={["Dashboard", "Orders"]}
            >
                <button
                    onClick={() => setShowForm(true)}
                    className="bg-gradient-to-r from-pink-400 to-pink-500 hover:scale-105 transition text-white px-5 py-2 rounded-xl shadow"
                >
                    + Add Orders
                </button>
            </PageHeader>

            {/* FORM */}
            {showForm && (
                <div className="bg-white/80 backdrop-blur border border-pink-100 p-6 rounded-3xl shadow-lg">
                    <h2 className="text-lg font-semibold text-pink-500 mb-4">
                        Add New Order
                    </h2>

                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

                        <input name="id" placeholder="Order ID" onChange={handleChange} className="input-pink col-span-1" />
                        <input name="customer" placeholder="Customer Name" onChange={handleChange} className="input-pink col-span-1" />

                        <select name="status" onChange={handleChange} className="input-pink col-span-1">
                            <option>Pending</option>
                            <option>Completed</option>
                            <option>Cancelled</option>
                        </select>

                        <input name="total" type="number" placeholder="Total Price" onChange={handleChange} className="input-pink col-span-1" />

                        <input name="date" type="date" onChange={handleChange} className="input-pink col-span-2" />

                        <div className="col-span-2 flex justify-end gap-2">
                            <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 rounded-xl bg-gray-200">
                                Cancel
                            </button>
                            <button className="btn-pink">
                                Save Order
                            </button>
                        </div>

                    </form>
                </div>
            )}

            {/* TABLE */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

                <div className="p-4 border-b bg-pink-50">
                    <h2 className="font-semibold text-pink-600">Order List</h2>
                </div>

                <table className="w-full text-sm">

                    <thead className="bg-pink-50 text-pink-600">
                        <tr>
                            <th className="p-3">ID</th>
                            <th className="p-3">Customer</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Total</th>
                            <th className="p-3">Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id} className="border-b hover:bg-pink-50 transition">

                                <td className="p-3 font-medium">{item.id}</td>

                                <td className="p-3">{item.customer}</td>

                                <td className="p-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold
                                        ${item.status === "Completed"
                                            ? "bg-green-100 text-green-600"
                                            : item.status === "Pending"
                                            ? "bg-yellow-100 text-yellow-600"
                                            : "bg-red-100 text-red-500"}`}>
                                        {item.status}
                                    </span>
                                </td>

                                <td className="p-3 font-semibold text-gray-700">
                                    Rp {item.total}
                                </td>

                                <td className="p-3 text-gray-500">
                                    {item.date}
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>
    );
}