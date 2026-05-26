import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout() {
    return (
        <div className="bg-gray-100 min-h-screen">

            {/* SIDEBAR */}
            <Sidebar />

            {/* MAIN CONTENT */}
            <div className="ml-64 pt-28">

                {/* HEADER */}
                <Header />

                {/* PAGES */}
                <main className="p-6">
                    <Outlet />
                </main>

            </div>

        </div>
    );
}