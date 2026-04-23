import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { customers as initialData } from "../data/customers";

export default function Customers() {

    const [data, setData] = useState(initialData);
    const [showForm, setShowForm] = useState(false);

    const [form, setForm] = useState({
        id: "",
        name: "",
        email: "",
        phone: "",
        loyalty: "Silver"
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setData([...data, form]);

        setForm({
            id: "",
            name: "",
            email: "",
            phone: "",
            loyalty: "Silver"
        });

        setShowForm(false);
    };

    return (
        <div className="p-6 space-y-6">

            <PageHeader
                title="Customers"
                breadcrumb={["Dashboard", "Customers"]}
            >
                <button
                    onClick={() => setShowForm(true)}
                    className="bg-gradient-to-r from-pink-400 to-pink-500 hover:scale-105 transition text-white px-5 py-2 rounded-xl shadow"
                >
                    + Add Customer
                </button>
            </PageHeader>

            {/* FORM */}
            {showForm && (
                <div className="bg-white/80 backdrop-blur border border-pink-100 p-6 rounded-3xl shadow-lg">
                    <h2 className="text-lg font-semibold text-pink-500 mb-4">
                        Add New Customer
                    </h2>

                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

                        <input name="id" placeholder="Customer ID" onChange={handleChange} className="input-pink col-span-1" />
                        <input name="name" placeholder="Customer Name" onChange={handleChange} className="input-pink col-span-1" />

                        <input name="email" placeholder="Email" onChange={handleChange} className="input-pink col-span-1" />
                        <input name="phone" placeholder="Phone" onChange={handleChange} className="input-pink col-span-1" />

                        <select name="loyalty" onChange={handleChange} className="input-pink col-span-2">
                            <option>Bronze</option>
                            <option>Silver</option>
                            <option>Gold</option>
                        </select>

                        <div className="col-span-2 flex justify-end gap-2">
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="px-4 py-2 rounded-xl bg-gray-200"
                            >
                                Cancel
                            </button>

                            <button className="btn-pink">
                                Save Customer
                            </button>
                        </div>

                    </form>
                </div>
            )}

            {/* TABLE */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

                <div className="p-4 border-b bg-pink-50">
                    <h2 className="font-semibold text-pink-600">Customer List</h2>
                </div>

                <table className="w-full text-sm">

                    <thead className="bg-pink-50 text-pink-600">
                        <tr>
                            <th className="p-3">ID</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Phone</th>
                            <th className="p-3">Loyalty</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id} className="border-b hover:bg-pink-50 transition">

                                <td className="p-3 font-medium">{item.id}</td>

                                <td className="p-3">{item.name}</td>

                                <td className="p-3 text-gray-500">{item.email}</td>

                                <td className="p-3">{item.phone}</td>

                                <td className="p-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold
                                        ${item.loyalty === "Gold"
                                            ? "bg-yellow-100 text-yellow-600"
                                            : item.loyalty === "Silver"
                                            ? "bg-gray-200 text-gray-600"
                                            : "bg-orange-100 text-orange-600"}`}>
                                        {item.loyalty}
                                    </span>
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>
    );
}