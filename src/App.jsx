import './assets/tailwind.css';
import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "./Components/Loading";
// import Dashboard from "./pages/Dashboard";
// import Customers from "./pages/Customers";
// import Orders from "./pages/Orders";
// import NotFound from "./pages/NotFound";
// import Error400 from "./pages/Error400";
// import Error401 from "./pages/Error401";
// import Error403 from "./pages/Error403";
// import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./pages/auth/AuthLayout";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";

function App() {
  const Dashboard = React.lazy(() => import("./pages/Dashboard"))
  const Customers = React.lazy(() => import("./pages/Customers"))
  const CustomerDetail = React.lazy(() => import("./pages/CustomerDetail"))
  const Orders = React.lazy(() => import("./pages/Orders"))
  const Products = React.lazy(() => import("./pages/Products"))
  const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))
  const Component = React.lazy(() => import("./pages/Component"))
  const Calender = React.lazy(() => import("./pages/Calendar"))
  const Reviews = React.lazy(() => import("./pages/Reviews"))
  const NotFound = React.lazy(() => import("./pages/error/NotFound"))
  const Error400 = React.lazy(() => import("./pages/error/Error400"))
  const Error401 = React.lazy(() => import("./pages/error/Error401"))
  const Error403 = React.lazy(() => import("./pages/error/Error403"))
  const Login = React.lazy(() => import("./pages/auth/Login"))
  const Register = React.lazy(() => import("./pages/auth/Register"))
  const Forgot = React.lazy(() => import("./pages/auth/Forgot"))
  const AuthLayout = React.lazy(() => import("./pages/auth/AuthLayout"))
  const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
  const FiturXyz = React.lazy(() => import("./pages/FiturXyz"))
  // const loading = React.lazy(() => import("./components/Loading")) -> KARENA DIA GA DIDALAM PAGES
  return (
    // main content
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/:id" element={<CustomerDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/Component" element={<Component />} />
          <Route path="/FiturXyz" element={<FiturXyz />} />

          {/* ERROR */}
          <Route path="/error400" element={<Error400 />} />
          <Route path="/error401" element={<Error401 />} />
          <Route path="/error403" element={<Error403 />} />

          <Route path="*" element={<NotFound />} />
        </Route>
        {/*Route MainLayout*/}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;