import { useState } from "react";

// IMPORT KOMPONEN EKSTERNAL SESUAI DAFTAR FILE DAN STRUKTUR GAMBAR
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import InputField from "../Components/InputField";
import Avatar from "../Components/Avatar";
import Container from "../Components/Container";
import PageHeader from "../Components/PageHeader";
import Card from "../Components/Card";
import Button from "../Components/Button";
import ProductCard from "../Components/ProductCard";
import Table from "../Components/Table";
import Footer from "../Components/Footer";

// ICONS & RECHARTS
import {
    FaShoppingCart,
    FaTruck,
    FaTimesCircle,
    FaDollarSign,
    FaUsers,
    FaCalendarAlt,
    FaChevronDown,
} from "react-icons/fa";

import {
    PieChart,
    Pie,
    Cell,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
    // DATA STATE
    const [orders, setOrders] = useState(75);
    const [delivered, setDelivered] = useState(357); // Disesuaikan dengan mockup gambar
    const [canceled] = useState(65);               // Disesuaikan dengan mockup gambar
    const [revenue, setRevenue] = useState(128);
    const [customers, setCustomers] = useState(320);

    const [products] = useState([
        { id: 1, name: "Sepatu Sport", category: "Fashion", price: "Rp 450.000" },
        { id: 2, name: "Smartphone", category: "Elektronik", price: "Rp 4.500.000" },
        { id: 3, name: "Jaket Bomber", category: "Fashion", price: "Rp 250.000" },
    ]);

    const headers = ["No", "Nama Produk", "Kategori", "Harga", "Aksi"];

    // Data Donut Chart Tunggal Berdasarkan Desain Mockup
    const singlePieData = [
        { name: "Total Order", value: 81, color: "#ef4444" },
        { name: "Customer Growth", value: 22, color: "#10b981" },
        { name: "Total Revenue", value: 62, color: "#3b82f6" },
    ];

    const lineData = [
        { name: "Sunday", value: 120 },
        { name: "Monday", value: 160 },
        { name: "Tuesday", value: 380 },
        { name: "Wednesday", value: 240 },
        { name: "Thursday", value: 210 },
        { name: "Friday", value: 310 },
        { name: "Saturday", value: 140 },
    ];

    return (
        // LAYOUT UTAMA
        <div>

            {/* 1. SIDEBAR (Kiri) */}
            <Sidebar />

            {/* SISI KANAN LAYAR */}
            <div className="flex-1 flex flex-col overflow-hidden">

                {/* 2. HEADER */}
                <Header>
                    <div className="flex items-center justify-between w-full px-8 py-4 bg-white border-b border-gray-100">
                        {/* Search Bar */}
                        <div className="w-96 relative">
                            <InputField placeholder="Search anything..." />
                        </div>

                        {/* Profil */}
                        <div className="flex items-center gap-4">
                            <div className="text-right hidden sm:block">
                                <p className="text-xs text-gray-400 font-medium">Welcome back</p>
                                <p className="text-sm font-bold text-gray-800">Geta Dewi</p>
                            </div>
                            <Avatar name="Geta Dewi" />
                        </div>
                    </div>
                </Header>

                {/* AREA UTAMA UTK KONTEN */}
                <div className="
                                flex-1
                                overflow-y-auto
                                p-6
                                bg-[#f5f6fa]
                                ">
                    <Container className="w-full">

                        {/* SECTION JUDUL & FILTER PERIODE */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                            <div>
                                <PageHeader title="Dashboard" breadcrumb={["Dashboard"]} />
                                <p className="text-sm text-gray-400 mt-1">Hi, Geta. Welcome back to Sedap Admin!</p>
                            </div>

                            {/* FILTER PERIODE */}
                            <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl shadow-sm border border-gray-100/80 cursor-pointer hover:bg-gray-50/80 transition-all duration-200 self-start md:self-center">
                                <div className="p-2 bg-blue-50 text-blue-500 rounded-xl">
                                    <FaCalendarAlt size={15} />
                                </div>
                                <div className="text-left pr-4">
                                    <p className="text-xs font-bold text-gray-800">Filter Periode</p>
                                    <p className="text-[11px] text-gray-400 font-semibold tracking-wide">17 April 2020 - 21 May 2020</p>
                                </div>
                                <FaChevronDown size={11} className="text-gray-400" />
                            </div>
                        </div>

                        {/* STATISTIK GRID CARDS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                            <Card>
                                <CardStatIcon icon={<FaShoppingCart />} color="pink" value={orders} label="Total Orders" percent="-4% (30 days)" isUp={false} />
                            </Card>
                            <Card>
                                <CardStatIcon icon={<FaTruck />} color="blue" value={delivered} label="Total Delivered" percent="+4% (30 days)" isUp={true} />
                            </Card>
                            <Card>
                                <CardStatIcon icon={<FaTimesCircle />} color="red" value={canceled} label="Total Canceled" percent="-25% (30 days)" isUp={false} />
                            </Card>
                            <Card>
                                <CardStatIcon icon={<FaDollarSign />} color="yellow" value={`$${revenue}`} label="Total Revenue" percent="+12% (30 days)" isUp={true} />
                            </Card>
                            <Card>
                                <CardStatIcon icon={<FaUsers />} color="purple" value={customers} label="Customers" percent="+8% (30 days)" isUp={true} />
                            </Card>
                        </div>

                        {/* CHARTS ROW */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">

                            {/* PIE CHART (Satu atap 3 Ring Donut) */}
                            <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
                                <div>
                                    <h2 className="font-bold text-base text-gray-800">Pie Chart</h2>
                                    <p className="text-xs text-gray-400 mt-0.5">Distribution performance overview</p>
                                </div>

                                <div className="flex justify-around items-center my-6 gap-2">
                                    {singlePieData.map((entry, index) => (
                                        <div key={index} className="flex flex-col items-center relative">
                                            {/* Ring Donut Tunggal */}
                                            <div className="relative w-24 h-24 flex items-center justify-center">
                                                <PieChart width={96} height={96}>
                                                    <Pie
                                                        data={[
                                                            { value: entry.value },
                                                            { value: 100 - entry.value }
                                                        ]}
                                                        dataKey="value"
                                                        innerRadius={30}
                                                        outerRadius={40}
                                                        startAngle={90}
                                                        endAngle={-270}
                                                    >
                                                        <Cell fill={entry.color} />
                                                        <Cell fill="#f3f4f6" />
                                                    </Pie>
                                                </PieChart>
                                                {/* Teks Persentase di Tengah */}
                                                <span className="absolute font-extrabold text-sm text-gray-800">{entry.value}%</span>
                                            </div>
                                            <p className="text-xs font-semibold text-gray-400 mt-2 whitespace-nowrap">{entry.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* LINE CHART */}
                            <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h2 className="font-bold text-base text-gray-800">Chart Order</h2>
                                        <p className="text-xs text-gray-400 mt-0.5">Lorem ipsum dolor sit amet, consectetur adip</p>
                                    </div>
                                    <Button type="success">Save Report</Button>
                                </div>

                                <div className="w-full h-56 pt-2">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={lineData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 11, fontWeight: 500 }} />
                                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 11 }} />
                                            <Tooltip />
                                            <Line
                                                type="monotone"
                                                dataKey="value"
                                                stroke="#10b981"
                                                strokeWidth={3}
                                                dot={{ r: 4, strokeWidth: 2, fill: '#fff' }}
                                                activeDot={{ r: 6 }}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>

                        {/* PRODUCT CARDS SECTION */}
                        <div className="mb-8">
                            <h2 className="text-base font-bold text-gray-800 mb-4">Daftar Produk Terlaris</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <ProductCard
                                    image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                                    title="Sepatu Sport Velo"
                                    category="Fashion & Apparel"
                                    price="Rp 450.000"
                                    description="Sepatu sport modern dengan desain ergonomis, sirkulasi udara optimal, nyaman dipakai seharian."
                                />
                                <ProductCard
                                    image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
                                    title="Smartphone Prime X"
                                    category="Elektronik & Gadget"
                                    price="Rp 4.500.000"
                                    description="Smartphone masa kini dengan modul kamera ultra-jernih, performa chipset tinggi, daya baterai awet."
                                />
                            </div>
                        </div>

                        {/* QUICK ACTION CARDS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <Card>
                                <div className="p-2">
                                    <h2 className="text-base font-bold text-gray-800 mb-1">Aksi Cepat I</h2>
                                    <p className="text-gray-400 text-xs mb-5">Pengaturan data dasar untuk inventarisasi.</p>
                                    <div className="flex gap-2.5">
                                        <Button type="success">Simpan</Button>
                                        <Button type="danger">Hapus</Button>
                                    </div>
                                </div>
                            </Card>
                            <Card>
                                <div className="p-2">
                                    <h2 className="text-base font-bold text-gray-800 mb-1">Aksi Cepat II</h2>
                                    <p className="text-gray-400 text-xs mb-5">Duplikasi sistem aksi manajemen data.</p>
                                    <div className="flex gap-2.5">
                                        <Button type="success">Simpan</Button>
                                        <Button type="danger">Hapus</Button>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* INVENTORY TABLE SECTION */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm mb-8">
                            <h2 className="font-bold text-base text-gray-800 mb-4">Tabel Inventaris</h2>
                            <Table headers={headers}>
                                {products.map((product, index) => (
                                    <tr key={product.id} className="hover:bg-gray-50/80 border-b border-gray-100 last:border-b-0 transition-colors">
                                        <td className="px-4 py-3.5 text-sm font-medium text-gray-400">{index + 1}</td>
                                        <td className="px-4 py-3.5 text-sm font-bold text-gray-800">{product.name}</td>
                                        <td className="px-4 py-3.5 text-sm font-semibold text-gray-400">{product.category}</td>
                                        <td className="px-4 py-3.5 text-sm font-extrabold text-emerald-500">{product.price}</td>
                                        <td className="px-4 py-3.5 text-sm">
                                            <button className="bg-gray-50 text-gray-600 px-3 py-1.5 rounded-xl text-xs font-bold hover:bg-gray-100 transition-colors border border-gray-100">
                                                Detail
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </Table>
                        </div>

                        {/* FOOTER */}
                        <Footer />

                    </Container>
                </div>
            </div>
        </div>
    );
}

// Komponen Lokal Pembantu Render Kartu Statistik
function CardStatIcon({ icon, color, value, label, percent, isUp }) {
    const colorMap = {
        pink: "text-pink-500 bg-pink-50/60",
        blue: "text-blue-500 bg-blue-50/60",
        red: "text-red-500 bg-red-50/60",
        yellow: "text-amber-500 bg-amber-50/60",
        purple: "text-purple-500 bg-purple-50/60",
    };

    return (
        <div className="flex flex-col items-center text-center p-2 w-full">
            {/* Bagian Atas: Lingkaran Ikon & Nilai Utama */}
            <div className="p-3.5 rounded-full text-2xl mb-3 shadow-inner shadow-black/5 grid place-items-center h-14 w-14 chunk-icon shadow-sm">
                <span className={colorMap[color] + " p-3.5 rounded-full"}>{icon}</span>
            </div>

            <h3 className="font-black text-2xl text-gray-800 tracking-tight">{value}</h3>
            <p className="text-gray-400 text-xs font-bold mt-0.5 mb-2 whitespace-nowrap">{label}</p>

            {/* Bagian Indikator Tren Naik/Turun Kecil di Bawah */}
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold tracking-wide ${isUp ? 'text-emerald-600 bg-emerald-50' : 'text-red-500 bg-red-50'
                }`}>
                {percent}
            </span>
        </div>
    );
}