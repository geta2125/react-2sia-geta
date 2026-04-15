import { useState } from "react";
import { FaBell, FaSearch, FaTimes } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {

    // STATE MODAL
    const [openSearch, setOpenSearch] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center px-6 py-4 bg-white shadow-sm rounded-2xl">

                {/*  SEARCH BAR */}
                {/* IMPROVISASI: klik buka modal */}
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

                {/* ICON */}
                <div className="flex items-center gap-4 ml-6">

                    <div className="relative cursor-pointer">
                        <div className="p-3 bg-blue-50 rounded-xl text-blue-500 hover:bg-blue-100 transition">
                            <FaBell />
                        </div>
                        <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs px-1.5 rounded-full animate-pulse">
                            50
                        </span>
                    </div>

                    <div className="p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                        <FcAreaChart />
                    </div>

                    <div className="p-3 bg-red-50 rounded-xl text-red-500 hover:bg-red-100 transition">
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
                            className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                        />
                    </div>

                </div>
            </div>

            {/* MODAL (WAJIB DI LUAR HEADER) */}
            {openSearch && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

                    {/* klik luar untuk close */}
                    <div
                        className="absolute inset-0"
                        onClick={() => setOpenSearch(false)}
                    />

                    {/* BOX */}
                    <div className="relative bg-white w-full max-w-xl p-6 rounded-2xl shadow-xl">

                        {/* CLOSE */}
                        <button
                            onClick={() => setOpenSearch(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
                        >
                            <FaTimes />
                        </button>

                        {/* INPUT */}
                        <div className="relative">
                            <input
                                autoFocus
                                type="text"
                                placeholder="Type to search..."
                                className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 
                                focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none"
                            />
                            <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>

                        {/* TEXT */}
                        <div className="mt-4 text-sm text-gray-400">
                            Start typing to search...
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}