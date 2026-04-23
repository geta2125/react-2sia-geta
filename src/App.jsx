import './assets/tailwind.css';
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";
import Error400 from "./pages/Error400";
import Error401 from "./pages/Error401";
import Error403 from "./pages/Error403";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex flex-col flex-1">

        {/* HEADER */}
        <Header />

        {/* CONTENT */}
        <div className="flex-1 p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />

            {/* ERROR */}
            <Route path="/error400" element={<Error400 />} />
            <Route path="/error401" element={<Error401 />} />
            <Route path="/error403" element={<Error403 />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

      </div>
    </div>
  );
}

export default App;