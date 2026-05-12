import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
    FaArrowLeft,
    FaStar,
    FaBoxOpen,
    FaTag,
    FaShoppingCart,
    FaRegHeart
} from "react-icons/fa";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (error) return (
        <div className="flex flex-col items-center justify-center min-h-[400px] text-red-500">
            <p className="text-xl font-bold">Oops! Terjadi kesalahan</p>
            <p>{error}</p>
        </div>
    );

    if (loading) return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8 animate-fadeIn">
            
            {/* BREADCRUMB & BACK BUTTON */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <nav className="flex text-sm text-gray-400 mb-2">
                        <Link to="/" className="hover:text-pink-500 transition">Dashboard</Link>
                        <span className="mx-2">/</span>
                        <Link to="/products" className="hover:text-pink-500 transition">Products</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-600 font-medium">Detail</span>
                    </nav>
                    <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
                        Product Details
                    </h1>
                </div>

                <Link
                    to="/products"
                    className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-100 hover:border-pink-500 hover:text-pink-500 text-gray-600 px-6 py-2.5 rounded-xl transition-all duration-300 shadow-sm"
                >
                    <FaArrowLeft className="text-sm" />
                    <span className="font-semibold">Kembali</span>
                </Link>
            </div>

            {/* MAIN CONTENT CARD */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-pink-100/50 overflow-hidden border border-gray-50 grid grid-cols-1 lg:grid-cols-12">
                
                {/* LEFT COLUMN: IMAGE */}
                <div className="lg:col-span-5 bg-gradient-to-br from-pink-50 to-white p-8 md:p-12 flex items-center justify-center relative group">
                    <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm z-10">
                        <p className="text-pink-500 font-bold">-{product.discountPercentage}%</p>
                    </div>
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-auto max-h-[450px] object-contain mix-blend-multiply transform group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* RIGHT COLUMN: INFO */}
                <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
                    <div className="space-y-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <span className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                    <FaTag className="text-[10px]" />
                                    {product.category}
                                </span>
                                <h2 className="text-4xl font-black text-gray-900 leading-tight">
                                    {product.title}
                                </h2>
                                <p className="text-gray-400 font-medium mt-1">Brand: <span className="text-gray-700">{product.brand || 'Generic'}</span></p>
                            </div>
                            <button className="p-4 rounded-2xl bg-gray-50 text-gray-400 hover:text-pink-500 hover:bg-pink-50 transition-all">
                                <FaRegHeart size={24} />
                            </button>
                        </div>

                        {/* RATING */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-lg">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-200"} />
                                ))}
                            </div>
                            <span className="text-sm font-bold text-gray-700">{product.rating}</span>
                            <span className="text-sm text-gray-400 border-l pl-3 border-gray-200">240+ Reviews</span>
                        </div>

                        {/* DESCRIPTION */}
                        <p className="text-gray-500 text-lg leading-relaxed">
                            {product.description}
                        </p>

                        <hr className="border-gray-100" />

                        {/* INFO GRID */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-4 bg-gray-50/50 p-4 rounded-2xl border border-transparent hover:border-pink-100 transition">
                                <div className="bg-white p-3 rounded-xl shadow-sm text-pink-500">
                                    <FaBoxOpen size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-bold">Stok Ready</p>
                                    <h3 className="font-bold text-gray-800">{product.stock} unit</h3>
                                </div>
                            </div>
                            {/* Tambahan Info lain bisa di sini */}
                        </div>
                    </div>

                    {/* PRICE & ACTION */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 pt-8 border-t border-gray-100">
                        <div className="flex-1 w-full sm:w-auto">
                            <p className="text-gray-400 font-medium mb-1">Harga Special</p>
                            <div className="flex items-baseline gap-2">
                                <h1 className="text-5xl font-black text-pink-500">
                                    Rp {(product.price * 15000).toLocaleString('id-ID')}
                                </h1>
                            </div>
                        </div>
                        
                        <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gray-900 hover:bg-black text-white px-10 py-5 rounded-2xl font-bold transition-all transform active:scale-95 shadow-xl shadow-gray-200">
                            <FaShoppingCart />
                            Tambah ke Keranjang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}