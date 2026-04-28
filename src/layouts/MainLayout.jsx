import { Outlet } from "react-router-dom";
import Sidebar from "../pertemuan-5/components/Sidebar";
import Header from "../pertemuan-5/layouts/Header";

export default function MainLayout() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* SIDEBAR */}
            <Sidebar />
            {/* MAIN */}
            <div className="flex flex-col flex-1">

                {/* HEADER */}
                <Header />

                <Outlet />
            </div>
        </div>
    )
}