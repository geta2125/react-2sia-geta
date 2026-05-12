import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaPlus, FaSearch, FaFilter, FaChevronRight, FaTimes } from "react-icons/fa";

import PageHeader from "../components/PageHeader";

export default function Products() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const [form, setForm] = useState({
        title: "",
        category: "",
        price: "",
        stock: "",
        thumbnail: ""
    });

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then((response) => {
                setData(response.data.products);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: data.length + 1,
            ...form,
            price: Number(form.price),
            stock: Number(form.stock),
        };
        setData([newProduct, ...data]);
        setForm({ title: "", category: "", price: "", stock: "", thumbnail: "" });
        setShowForm(false);
    };

    // Filter data berdasarkan search
    const filteredData = data.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4 md:p-8 space-y-8 animate-fadeIn">
            {/* HEADER SECTION */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <PageHeader
                    title="Products Management"
                    breadcrumb={["Dashboard", "Products"]}
                />
                <button
                    onClick={() => setShowForm(true)}
                    className="flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 hover:shadow-pink-200 shadow-lg text-white px-6 py-3 rounded-2xl transition-all active:scale-95 font-bold"
                >
                    <FaPlus className="text-sm" />
                    Add New Product
                </button>
            </div>

            {/* QUICK ACTIONS & SEARCH */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1 group">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
                    <input 
                        type="text" 
                        placeholder="Cari produk berdasarkan nama..."
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

            {/* ADD PRODUCT FORM (MODAL STYLE OVERLAY) */}
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-2xl overflow-hidden border border-gray-50">
                        <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-pink-50/30">
                            <h2 className="text-2xl font-black text-gray-800">Add New Product</h2>
                            <button onClick={() => setShowForm(false)} className="p-2 hover:bg-red-50 hover:text-red-500 rounded-full transition-colors text-gray-400">
                                <FaTimes size={20} />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-bold text-gray-600">Product Name</label>
                                <input type="text" name="title" value={form.title} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-100 outline-none transition-all" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-600">Category</label>
                                <input type="text" name="category" value={form.category} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-100 outline-none transition-all" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-600">Price (USD)</label>
                                <input type="number" name="price" value={form.price} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-100 outline-none transition-all" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-600">Stock</label>
                                <input type="number" name="stock" value={form.stock} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-100 outline-none transition-all" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-600">Image URL</label>
                                <input type="text" name="thumbnail" value={form.thumbnail} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-pink-100 outline-none transition-all" required />
                            </div>
                            <div className="md:col-span-2 flex justify-end gap-3 pt-4">
                                <button type="button" onClick={() => setShowForm(false)} className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition">Cancel</button>
                                <button type="submit" className="px-8 py-3 rounded-xl font-bold bg-pink-500 text-white shadow-lg shadow-pink-100 hover:bg-pink-600 transition-all">Save Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* TABLE SECTION */}
            <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-100/50 border border-gray-50 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-pink-50/50 text-pink-400 text-xs uppercase tracking-widest">
                                <th className="px-6 py-5 font-bold text-left">Product</th>
                                <th className="px-6 py-5 font-bold text-center">Category</th>
                                <th className="px-6 py-5 font-bold text-center">Price</th>
                                <th className="px-6 py-5 font-bold text-center">Stock Status</th>
                                <th className="px-6 py-5 font-bold text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-pink-50">
                            {loading ? (
                                <tr>
                                    <td colSpan="5" className="p-20 text-center">
                                        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-pink-500 mx-auto"></div>
                                    </td>
                                </tr>
                            ) : filteredData.length > 0 ? (
                                filteredData.map((item) => (
                                    <tr key={item.id} className="group hover:bg-pink-50/30 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 rounded-2xl overflow-hidden bg-gray-100 border border-gray-50 flex-shrink-0">
                                                    <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-gray-800 text-sm">{item.title}</p>
                                                    <p className="text-xs text-gray-400 font-medium tracking-tight">ID: #{item.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-bold uppercase tracking-tighter">
                                                {item.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center font-black text-gray-700">
                                            Rp {(item.price * 15000).toLocaleString('id-ID')}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <div className="flex flex-col items-center gap-1">
                                                <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm
                                                    ${item.stock > 20 ? "bg-green-100 text-green-600" : item.stock > 0 ? "bg-orange-100 text-orange-600" : "bg-red-100 text-red-600"}`}>
                                                    {item.stock > 0 ? 'In Stock' : 'Out of Stock'}
                                                </span>
                                                <span className="text-xs text-gray-400 font-bold">{item.stock} Available</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <Link to={`/products/${item.id}`} className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-gray-100 text-pink-500 hover:bg-pink-500 hover:text-white transition-all shadow-sm">
                                                <FaChevronRight size={12} />
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="p-20 text-center text-gray-400 font-medium">Data tidak ditemukan.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}