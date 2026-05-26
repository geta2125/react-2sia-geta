import { useState } from "react";
import { 
    FaPlus, FaSearch, FaShoppingBag, FaCheckCircle, 
    FaClock, FaTimes, FaCalendarAlt, FaUser, FaTag 
} from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import { orders as initialData } from "../data/orders";

export default function Orders() {
    const [data, setData] = useState(initialData);
    const [showForm, setShowForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

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
        setData([form, ...data]);
        setForm({ id: "", customer: "", status: "Pending", total: "", date: "" });
        setShowForm(false);
    };

    const filteredData = data.filter(item => 
        item.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id.toString().includes(searchTerm)
    );

    return (
        <div className="p-4 md:p-8 space-y-8 animate-fadeIn bg-gray-50/50 min-h-screen">
            
            {/* HEADER & ACTION */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <PageHeader
                    title="Orders Management"
                    breadcrumb={["Dashboard", "Orders"]}
                />
                <button
                    onClick={() => setShowForm(true)}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-3 rounded-2xl shadow-lg shadow-pink-200 transition-all active:scale-95 font-bold"
                >
                    <FaPlus size={14} />
                    Add New Order
                </button>
            </div>

            {/* QUICK STATS CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center text-xl">
                        <FaShoppingBag />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-400">Total Orders</p>
                        <h3 className="text-2xl font-black text-gray-800">{data.length}</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 bg-yellow-50 text-yellow-500 rounded-2xl flex items-center justify-center text-xl">
                        <FaClock />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-400">Pending</p>
                        <h3 className="text-2xl font-black text-gray-800">
                            {data.filter(i => i.status === "Pending").length}
                        </h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-5">
                    <div className="w-14 h-14 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center text-xl">
                        <FaCheckCircle />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-400">Completed</p>
                        <h3 className="text-2xl font-black text-gray-800">
                            {data.filter(i => i.status === "Completed").length}
                        </h3>
                    </div>
                </div>
            </div>

            {/* SEARCH & FILTER */}
            <div className="relative group max-w-md">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
                <input 
                    type="text" 
                    placeholder="Search by Order ID or Customer..."
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-2xl outline-none focus:ring-4 focus:ring-pink-500/5 focus:border-pink-400 transition-all shadow-sm"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* MODAL FORM */}
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/20 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-lg overflow-hidden border border-white">
                        <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-pink-50/30">
                            <h2 className="text-2xl font-black text-gray-800">New Order</h2>
                            <button onClick={() => setShowForm(false)} className="p-2 hover:bg-red-50 hover:text-red-500 rounded-full transition-colors text-gray-400">
                                <FaTimes size={20} />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-8 space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-400 ml-1 uppercase">Order ID</label>
                                    <input name="id" onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-100 outline-none transition-all" placeholder="ORD-001" required />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-400 ml-1 uppercase">Total Price</label>
                                    <input name="total" type="number" onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-100 outline-none transition-all" placeholder="50000" required />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-400 ml-1 uppercase">Customer Name</label>
                                <input name="customer" onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-100 outline-none transition-all" placeholder="John Doe" required />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-400 ml-1 uppercase">Status</label>
                                    <select name="status" onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white outline-none font-medium">
                                        <option>Pending</option>
                                        <option>Completed</option>
                                        <option>Cancelled</option>
                                    </select>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-400 ml-1 uppercase">Order Date</label>
                                    <input name="date" type="date" onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white outline-none transition-all" required />
                                </div>
                            </div>
                            <div className="pt-4 flex gap-3">
                                <button type="button" onClick={() => setShowForm(false)} className="flex-1 py-4 rounded-2xl font-bold text-gray-500 hover:bg-gray-100 transition">Discard</button>
                                <button type="submit" className="flex-1 py-4 rounded-2xl font-bold bg-pink-500 text-white shadow-lg shadow-pink-100 hover:bg-pink-600 transition-all">Add Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* TABLE CONTAINER */}
            <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/40 border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-pink-50/50 text-pink-500 text-[11px] uppercase tracking-[0.2em]">
                                <th className="px-8 py-6 font-black">Order Info</th>
                                <th className="px-8 py-6 font-black text-center">Date</th>
                                <th className="px-8 py-6 font-black text-center">Status</th>
                                <th className="px-8 py-6 font-black text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredData.map((item) => (
                                <tr key={item.id} className="group hover:bg-pink-50/30 transition-all">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-pink-100 group-hover:text-pink-500 transition-colors">
                                                <FaTag size={14} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-800 text-base">#{item.id}</p>
                                                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                                                    <FaUser className="text-[10px]" />
                                                    {item.customer}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-center">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-lg text-xs font-bold text-gray-500 border border-gray-100">
                                            <FaCalendarAlt className="text-gray-300" />
                                            {item.date}
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-center">
                                        <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm
                                            ${item.status === "Completed" ? "bg-green-100 text-green-600" : 
                                              item.status === "Pending" ? "bg-yellow-100 text-yellow-600" : 
                                              "bg-red-100 text-red-600"}`}>
                                            <span className={`w-1.5 h-1.5 rounded-full animate-pulse
                                                ${item.status === "Completed" ? "bg-green-500" : 
                                                  item.status === "Pending" ? "bg-yellow-500" : 
                                                  "bg-red-500"}`} />
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-right font-black text-gray-800">
                                        Rp {parseInt(item.total).toLocaleString('id-ID')}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                {filteredData.length === 0 && (
                    <div className="p-20 text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-50 text-pink-200 rounded-full mb-4 text-4xl">
                            <FaShoppingBag />
                        </div>
                        <h3 className="text-lg font-bold text-gray-700">No orders found</h3>
                        <p className="text-sm text-gray-400">We couldn't find any orders matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}