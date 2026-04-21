import { FaHome, FaClipboardList, FaFileAlt } from "react-icons/fa";
import { Link,NavLink } from "react-router-dom";

export default function Sidebar() {

    const menuClass = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative
        ${isActive
            ? "bg-pink-50 text-pink-500 font-semibold shadow-sm"
            : "text-gray-500 hover:bg-gray-100 hover:text-pink-500"
        }`;

    const menus = [
        { key: "/", label: "Dashboard", icon: <FaHome /> },
        { key: "/orders", label: "Orders", icon: <FaClipboardList /> },
        { key: "/customers", label: "Customers", icon: <FaFileAlt /> },
    ];

    return (
        <div className="w-64 h-[calc(100vh-2rem)] m-4 bg-white shadow-xl rounded-3xl flex flex-col justify-between px-5 py-6">

            {/* LOGO */}
            <div>
                <div className="mb-10">
                    <h1 className="text-2xl font-bold tracking-wide text-gray-800">
                        Sedap<span className="text-pink-500">.</span>
                    </h1>
                    <p className="text-gray-400 text-xs mt-1">
                        Modern Admin Dashboard
                    </p>
                </div>

                {/* MENU */}
                <ul className="space-y-2">
                    {menus.map((item) => (
                        <li key={item.key}>
                            <NavLink to={item.key} className={menuClass}>
                                {({ isActive }) => (
                                    <>
                                        {/* indikator kiri */}
                                        {isActive && (
                                            <div className="absolute left-0 top-2 bottom-2 w-1 bg-pink-500 rounded-r-full"></div>
                                        )}

                                        <div className="text-lg">{item.icon}</div>
                                        {item.label}
                                    </>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* CARD */}
            <div className="mt-10 bg-gradient-to-br from-pink-400 to-pink-600 text-white p-5 rounded-2xl shadow-lg">
                <p className="text-sm mb-4 leading-relaxed">
                    Please organize your menus through button below!
                </p>

                <button className="w-full bg-white text-pink-600 font-semibold py-2 rounded-xl hover:bg-gray-100 transition shadow-sm">
                    + Add Menus
                </button>
            </div>

        </div>
    );
}