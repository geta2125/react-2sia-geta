import { useParams, Link } from "react-router-dom";
import {
    FaArrowLeft,
    FaEnvelope,
    FaPhone,
    FaCrown,
    FaUser,
    FaIdCard,
    FaShieldAlt,
    FaStar
} from "react-icons/fa";

import { customers } from "../data/customers";

export default function CustomerDetail() {
    const { id } = useParams();
    const customer = customers.find((item) => item.id.toString() === id);

    if (!customer) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center p-6">
                <div className="bg-white rounded-[3rem] shadow-2xl p-12 text-center border border-red-50 max-w-md">
                    <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                        <FaUser />
                    </div>
                    <h1 className="text-3xl font-black text-gray-800 mb-4">Oops!</h1>
                    <p className="text-gray-500 mb-8">Data customer tidak ditemukan dalam sistem kami.</p>
                    <Link
                        to="/customers"
                        className="inline-block w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-pink-200 transition-all active:scale-95"
                    >
                        Kembali ke List Customer
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn p-4">
            
            {/* TOP NAVIGATION */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-black text-gray-800 tracking-tight">
                        Profile <span className="text-pink-500 underline decoration-pink-200 underline-offset-8">Detail</span>
                    </h1>
                    <nav className="flex gap-2 text-sm font-medium text-gray-400 mt-3">
                        <Link to="/" className="hover:text-pink-500 transition">Dashboard</Link>
                        <span>/</span>
                        <Link to="/customers" className="hover:text-pink-500 transition">Customers</Link>
                        <span>/</span>
                        <span className="text-gray-600 font-bold">{customer.name}</span>
                    </nav>
                </div>

                <Link
                    to="/customers"
                    className="flex items-center justify-center gap-2 bg-white border border-gray-100 hover:border-pink-200 hover:bg-pink-50 text-gray-600 hover:text-pink-600 px-6 py-3 rounded-2xl shadow-sm transition-all font-bold"
                >
                    <FaArrowLeft size={14} />
                    Back to Gallery
                </Link>
            </div>

            {/* MAIN CONTENT CARD */}
            <div className="bg-white rounded-[3rem] shadow-2xl shadow-pink-100/50 border border-gray-50 overflow-hidden lg:flex">
                
                {/* LEFT SIDE: AVATAR & BADGE */}
                <div className="lg:w-2/5 bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 p-12 flex flex-col items-center justify-center text-white relative">
                    {/* Decorative Elements */}
                    <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300/20 rounded-full blur-3xl"></div>

                    <div className="relative group">
                        <div className="w-48 h-48 rounded-[3rem] bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center text-8xl shadow-2xl transform group-hover:rotate-3 transition-transform duration-500">
                            <FaUser className="text-white drop-shadow-lg" />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-xl text-pink-500 border-4 border-pink-500 transform group-hover:-translate-y-2 transition-transform">
                            <FaShieldAlt size={24} />
                        </div>
                    </div>

                    <h2 className="text-3xl font-black mt-8 text-center leading-tight">
                        {customer.name}
                    </h2>
                    <div className="flex items-center gap-2 mt-3 px-4 py-1.5 bg-black/10 backdrop-blur-sm rounded-full text-xs font-bold tracking-widest uppercase">
                        <FaStar className="text-yellow-300" />
                        Loyal Partner
                    </div>
                </div>

                {/* RIGHT SIDE: INFORMATION GRID */}
                <div className="lg:w-3/5 p-8 md:p-14 bg-white">
                    <div className="flex items-center justify-between mb-10">
                        <h3 className="text-xl font-bold text-gray-800">Account Information</h3>
                        <span className={`px-5 py-2 rounded-2xl text-xs font-black uppercase tracking-tighter shadow-sm
                            ${customer.loyalty === "Gold" ? "bg-yellow-400 text-white" : 
                              customer.loyalty === "Silver" ? "bg-slate-400 text-white" : 
                              "bg-orange-500 text-white"}`}>
                            {customer.loyalty} Tier
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* ITEM: ID */}
                        <div className="group p-6 rounded-[2rem] bg-gray-50 border border-transparent hover:border-pink-100 hover:bg-white hover:shadow-xl hover:shadow-pink-50 transition-all duration-300">
                            <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <FaIdCard size={20} />
                            </div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Customer ID</p>
                            <h4 className="text-lg font-bold text-gray-700 mt-1">#{customer.id}</h4>
                        </div>

                        {/* ITEM: EMAIL */}
                        <div className="group p-6 rounded-[2rem] bg-gray-50 border border-transparent hover:border-pink-100 hover:bg-white hover:shadow-xl hover:shadow-pink-50 transition-all duration-300">
                            <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <FaEnvelope size={20} />
                            </div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</p>
                            <h4 className="text-lg font-bold text-gray-700 mt-1 break-all">{customer.email}</h4>
                        </div>

                        {/* ITEM: PHONE */}
                        <div className="group p-6 rounded-[2rem] bg-gray-50 border border-transparent hover:border-pink-100 hover:bg-white hover:shadow-xl hover:shadow-pink-50 transition-all duration-300">
                            <div className="w-12 h-12 bg-green-100 text-green-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <FaPhone size={20} />
                            </div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Number</p>
                            <h4 className="text-lg font-bold text-gray-700 mt-1">{customer.phone}</h4>
                        </div>

                        {/* ITEM: STATUS */}
                        <div className="group p-6 rounded-[2rem] bg-gray-50 border border-transparent hover:border-pink-100 hover:bg-white hover:shadow-xl hover:shadow-pink-50 transition-all duration-300">
                            <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <FaCrown size={20} />
                            </div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Membership</p>
                            <h4 className="text-lg font-bold text-gray-700 mt-1">{customer.loyalty} Class</h4>
                        </div>

                    </div>

                    {/* FOOTER ACTION */}
                    <div className="mt-12 flex gap-4">
                        <button className="flex-1 bg-gray-900 text-white font-bold py-4 rounded-2xl hover:bg-gray-800 transition shadow-lg active:scale-95">
                            Edit Profile
                        </button>
                        <button className="px-6 bg-pink-50 text-pink-500 font-bold py-4 rounded-2xl hover:bg-pink-100 transition active:scale-95">
                            Send Email
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}