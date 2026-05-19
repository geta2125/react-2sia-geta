import { useState } from "react";

// Layout Components
import Container from "../Components/Container";
import Footer from "../Components/Footer";
import PageHeader from "../Components/PageHeader";

// Basic Components
import Button from "../Components/Button";
import Badge from "../Components/Badge";
import Avatar from "../Components/Avatar";

// Data Display Components
import Card from "../Components/Card";
import ProductCard from "../Components/ProductCard";
import Table from "../Components/Table";

// Form Components
import InputField from "../Components/InputField";
import TextArea from "../Components/TextArea";
import SelectField from "../Components/SelectField";

// Feedback Components
import Alert from "../Components/Alert";
import Modal from "../Components/Modal";
import Loading from "../Components/Loading";

// Section Components
import HeroSection from "../Components/HeroSection";
import FeatureSection from "../Components/FeatureSection";
import ProductSection from "../Components/ProductSection";

export default function Component() {
    const [openModal, setOpenModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const headers = ["No", "Nama Produk", "Kategori", "Harga", "Aksi"];

    const products = [
        { id: 1, name: "Laptop Asus", category: "Elektronik", price: "Rp 8.000.000" },
        { id: 2, name: "Sepatu Sport", category: "Fashion", price: "Rp 450.000" },
        { id: 3, name: "Jam Tangan", category: "Aksesoris", price: "Rp 799.000" },
    ];

    const handleLoading = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <Container className="max-w-7xl mx-auto p-4 md:p-8 space-y-10 bg-slate-50/50 min-h-screen antialiased">

            {/* PAGE HEADER */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md">
                <PageHeader
                    title="Component"
                    breadcrumb={["Dashboard", "Component"]}
                />
            </div>

            {/* TWO-COLUMN LAYOUT FOR BASIC & FORM COMPONENTS */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* BASIC COMPONENTS (2 Columns Wide on Large Screens) */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="border-b border-slate-100 pb-4 mb-6">
                            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                                Basic Components
                            </h2>
                            <p className="text-sm text-slate-500 mt-1">
                                Elemen dasar UI untuk interaksi, identitas, dan status aplikasi.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* BUTTONS */}
                            <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-100">
                                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                    Buttons
                                </h3>
                                <div className="flex gap-2 flex-wrap">
                                    <Button type="primary">Edit</Button>
                                    <Button type="success">Simpan</Button>
                                    <Button type="danger">Hapus</Button>
                                </div>
                            </div>

                            {/* AVATAR */}
                            <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-100">
                                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                    Avatar Group
                                </h3>
                                <div className="flex -space-x-3 overflow-hidden p-1">
                                    <Avatar name="Fikri" className="ring-2 ring-white" />
                                    <Avatar name="Hendra" className="ring-2 ring-white" />
                                    <Avatar name="Suci" className="ring-2 ring-white" />
                                </div>
                            </div>

                            {/* BADGE */}
                            <div className="bg-slate-50/70 p-5 rounded-xl border border-slate-100">
                                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                                    Badges
                                </h3>
                                <div className="flex gap-2 flex-wrap items-center">
                                    <Badge type="success">Success</Badge>
                                    <Badge type="warning">Warning</Badge>
                                    <Badge type="danger">Danger</Badge>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* DYNAMIC FEEDBACK ACTION INSIDE BASIC COMP */}
                    <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
                        <Alert type="success">
                            Sistem berjalan dengan optimal. Data berhasil disinkronisasi!
                        </Alert>
                        <div className="flex gap-3">
                            <Button type="primary" onClick={() => setOpenModal(true)}>
                                Buka Modal Konfirmasi
                            </Button>
                            <Button type="success" onClick={handleLoading}>
                                {isLoading ? "Memuat..." : "Uji Efek Loading"}
                            </Button>
                        </div>
                        {isLoading && (
                            <div className="flex justify-center py-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                                <Loading />
                            </div>
                        )}
                    </div>
                </div>

                {/* FORM COMPONENTS (1 Column Wide) */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="border-b border-slate-100 pb-4 mb-6">
                            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                                Form Input
                            </h2>
                            <p className="text-sm text-slate-500 mt-1">
                                Input standard untuk entri data pengguna.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <InputField label="Nama Lengkap" placeholder="Masukkan nama lengkap Anda..." />
                            <SelectField
                                label="Kategori Produk"
                                options={["Elektronik", "Fashion", "Aksesoris"]}
                            />
                            <TextArea label="Deskripsi Lengkap" placeholder="Berikan detail deskripsi produk..." rows={4} />
                        </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100">
                        <Button type="primary" className="w-full justify-center">Submit Formulir</Button>
                    </div>
                </div>

            </div>

            {/* PRODUCT CARD GRID */}
            <div className="space-y-4">
                <h2 className="text-lg font-bold text-slate-900 px-1">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50/30">
                        <h3 className="text-xl font-bold text-slate-900">Info Panel</h3>
                        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                            Gunakan section ini untuk mempromosikan produk terbaru atau menampilkan highlight analitik penting.
                        </p>
                    </Card>

                    <ProductCard
                        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                        title="Sepatu Sport Casual"
                        category="Fashion"
                        price="Rp 450.000"
                        description="Sepatu modern, ringan, dan sangat nyaman digunakan untuk kebutuhan harian."
                    />

                    <ProductCard
                        image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
                        title="Smartphone X1 Pro"
                        category="Elektronik"
                        price="Rp 4.500.000"
                        description="Smartphone masa kini dengan performa chipset ngebut dan baterai tahan lama."
                    />
                </div>
            </div>

            {/* TABLE SECTION */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                            Daftar Inventaris Produk
                        </h2>
                        <p className="text-sm text-slate-500 mt-1">
                            Manajemen stok barang dan kategori toko Anda.
                        </p>
                    </div>
                    <Button type="primary" className="sm:w-auto w-full">+ Tambah Produk</Button>
                </div>

                <div className="overflow-x-auto">
                    <Table headers={headers}>
                        {products.map((product, index) => (
                            <tr key={product.id} className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium text-slate-400">{index + 1}</td>
                                <td className="px-6 py-4 text-sm font-semibold text-slate-900">{product.name}</td>
                                <td className="px-6 py-4 text-sm">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                                        {product.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-slate-900">{product.price}</td>
                                <td className="px-6 py-4 text-sm">
                                    <Button type="primary" className="py-1 px-3 text-xs rounded-lg">
                                        Detail
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </Table>
                </div>
            </div>

            {/* LANDING PAGE SECTIONS CONTAINER */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden divide-y divide-slate-100">
                <div className="p-8"><HeroSection /></div>
                <div className="p-8"><FeatureSection /></div>
                <div className="p-8"><ProductSection /></div>
            </div>

            {/* FOOTER */}
            <Footer />

            {/* MODAL */}
            {openModal && (
                <Modal title="Konfirmasi Tindakan" onClose={() => setOpenModal(false)}>
                    <div className="p-1">
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Apakah Anda yakin ingin melanjutkan proses ini? Tindakan ini akan tercatat langsung ke dalam sistem log.
                        </p>
                    </div>
                </Modal>
            )}

        </Container>
    );
}