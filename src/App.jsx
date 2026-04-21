import './assets/tailwind.css';
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";
import { Link } from "react-router-dom";

function App() {

  return (

    <div id="app-container" className="bg-gray-100 min-h-screen flex p-4">
      <Sidebar />
      <div id="layout-wrapper" className="flex flex-col flex-1">         
        <Header />
        <div id="main-content" className="flex-1 p-4">
          {/* <Dashboard /> */}
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
