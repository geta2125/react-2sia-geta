import { useState } from "react";
import { FaBell, FaSearch, FaTimes } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {

    const [openSearch, setOpenSearch] = useState(false);

    return (
        <>
            {/* HEADER */}
            <div className="w-full flex justify-between items-center px-6 py-4 bg-white border-b border-gray-100">

                {/* SEARCH */}
                <div
                    onClick={() => setOpenSearch(true)}
                    className="relative w-full max-w-md cursor-pointer"
                >
                    <input
                        type="text"
                        readOnly
                        placeholder="Search anything..."
                        className="w-full pl-4 pr-12 py-2.5 rounded-xl border border-gray-200 bg-gray-50 cursor-pointer"
                    />
                    <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-4 ml-6">

                    {/* NOTIF */}
                    <div className="relative cursor-pointer">
                        <div className="p-3 bg-pink-50 rounded-xl text-pink-500 hover:bg-pink-100 transition">
                            <FaBell />
                        </div>
                        <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs px-1.5 rounded-full animate-pulse">
                            50
                        </span>
                    </div>

                    {/* CHART */}
                    <div className="p-3 bg-pink-50 rounded-xl hover:bg-pink-100 transition">
                        <FcAreaChart />
                    </div>

                    {/* SETTINGS */}
                    <div className="p-3 bg-pink-50 rounded-xl text-pink-500 hover:bg-pink-100 transition">
                        <SlSettings />
                    </div>

                    {/* PROFILE */}
                    <div className="flex items-center gap-3 border-l pl-4 border-gray-200">
                        <div>
                            <p className="text-gray-400 text-xs">Welcome back</p>
                            <p className="font-semibold text-gray-700">Geta Dewi Artika Sari</p>
                        </div>

                        <img
                            src="/img/foto.jpeg"
                            alt="profile"
                            className="w-10 h-10 rounded-full object-cover border"
                        />
                    </div>

                </div>
            </div>

            {/* MODAL */}
            {openSearch && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

                    <div
                        className="absolute inset-0"
                        onClick={() => setOpenSearch(false)}
                    />

                    <div className="relative bg-white w-full max-w-xl p-6 rounded-2xl shadow-xl">

                        <button
                            onClick={() => setOpenSearch(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-pink-500"
                        >
                            <FaTimes />
                        </button>

                        <div className="relative">
                            <input
                                autoFocus
                                type="text"
                                placeholder="Type to search..."
                                className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 
                                focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none"
                            />
                            <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>

                        <div className="mt-4 text-sm text-gray-400">
                            Start typing to search...
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}