import { useState } from "react";
import { Link } from "react-router-dom";
import { 
    FaUserPlus, FaSearch, FaEnvelope, FaPhone, 
    FaUserCircle, FaCrown, FaFilter, FaTimes 
} from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import { customers as initialData } from "../data/customers";

export default function Customers() {
    const [data, setData] = useState(initialData);
    const [showForm, setShowForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

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
        setData([form, ...data]); // Tambahkan yang baru di paling atas
        setForm({ id: "", name: "", email: "", phone: "", loyalty: "Silver" });
        setShowForm(false);
    };

    // Filter data berdasarkan search
    const filteredData = data.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4 md:p-8 space-y-8 animate-fadeIn">
            
            {/* HEADER SECTION */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <PageHeader
                    title="Customer Relationship"
                    breadcrumb={["Dashboard", "Customers"]}
                />
                <button
                    onClick={() => setShowForm(true)}
                    className="flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-2xl shadow-lg shadow-pink-200 transition-all active:scale-95 font-bold"
                >
                    <FaUserPlus />
                    Add New Customer
                </button>
            </div>

            {/* QUICK STATS & SEARCH */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1 group">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
                    <input 
                        type="text" 
                        placeholder="Search by name or email..."
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-pink-100 focus:border-pink-400 transition-all shadow-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button className="flex items-center justify-center gap-2 bg-white border border-gray-100 px-6 py-3 rounded-2xl text-gray-600 hover:bg-gray-50 transition shadow-sm font-medium">
                    <FaFilter className="text-xs" />
                    Filter
                </button>
            </div>

            {/* ADD CUSTOMER FORM (MODAL OVERLAY) */}
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden border border-gray-50">
                        <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-pink-50/30">
                            <h2 className="text-2xl font-black text-gray-800">Add Customer</h2>
                            <button onClick={() => setShowForm(false)} className="p-2 hover:bg-red-50 hover:text-red-500 rounded-full transition-colors text-gray-400">
                                <FaTimes size={20} />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-8 space-y-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Customer ID</label>
                                <input name="id" onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-100 outline-none transition-all" placeholder="CUST-001" required />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Full Name</label>
                                <input name="name" onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-100 outline-none transition-all" placeholder="John Doe" required />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-400 uppercase ml-1">Email</label>
                                    <input name="email" onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-100 outline-none transition-all" placeholder="mail@example.com" required />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-400 uppercase ml-1">Loyalty</label>
                                    <select name="loyalty" onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-100 outline-none transition-all font-medium">
                                        <option>Bronze</option>
                                        <option>Silver</option>
                                        <option>Gold</option>
                                    </select>
                                </div>
                            </div>
                            <div className="pt-4 flex gap-3">
                                <button type="button" onClick={() => setShowForm(false)} className="flex-1 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition">Cancel</button>
                                <button type="submit" className="flex-1 py-3 rounded-xl font-bold bg-pink-500 text-white shadow-lg shadow-pink-100 hover:bg-pink-600 transition-all">Save Member</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* CUSTOMER TABLE CARD */}
            <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-100/50 border border-gray-50 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-pink-50/50 text-pink-400 text-xs uppercase tracking-widest">
                                <th className="px-8 py-5 font-bold text-left">Customer Information</th>
                                <th className="px-6 py-5 font-bold text-center">Contact</th>
                                <th className="px-6 py-5 font-bold text-center">Tier Status</th>
                                <th className="px-8 py-5 font-bold text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-pink-50">
                            {filteredData.map((item) => (
                                <tr key={item.id} className="group hover:bg-pink-50/30 transition-colors">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center text-pink-500 shadow-inner">
                                                <FaUserCircle size={24} />
                                            </div>
                                            <div>
                                                <Link to={`/customers/${item.id}`} className="font-bold text-gray-800 hover:text-pink-500 transition-colors block">
                                                    {item.name}
                                                </Link>
                                                <span className="text-xs text-gray-400 font-medium">ID: #{item.id}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex flex-col items-center gap-1">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <FaEnvelope className="text-[10px] text-pink-300" />
                                                {item.email}
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                                                <FaPhone className="text-[10px] text-pink-300" />
                                                {item.phone}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm
                                            ${item.loyalty === "Gold" ? "bg-yellow-100 text-yellow-600" : 
                                              item.loyalty === "Silver" ? "bg-slate-100 text-slate-600" : 
                                              "bg-orange-100 text-orange-700"}`}>
                                            <FaCrown className={item.loyalty === "Gold" ? "animate-pulse" : ""} />
                                            {item.loyalty}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <Link to={`/customers/${item.id}`} className="px-4 py-2 text-xs font-bold text-pink-500 hover:bg-pink-500 hover:text-white border border-pink-100 rounded-xl transition-all">
                                            View Profile
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {filteredData.length === 0 && (
                    <div className="p-20 text-center text-gray-400">
                        <div className="mb-4 flex justify-center text-pink-100"><FaUserCircle size={64} /></div>
                        <p className="font-medium text-lg text-gray-500">No customers found</p>
                        <p className="text-sm text-gray-400">Try adjusting your search term.</p>
                    </div>
                )}
            </div>
        </div>
    );
}