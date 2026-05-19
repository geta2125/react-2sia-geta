import { Link } from "react-router-dom";

export default function NotFound({
    title = "404",
    subtitle = "Page Not Found",
    message = "Halaman yang kamu cari tidak ditemukan.",
    showButton = true
}) {
    return (
        <div className="relative flex items-center justify-center min-h-[70vh] overflow-hidden">

            {/* CARD */}
            <div className="relative bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl px-10 py-12 text-center max-w-lg">

                {/* TITLE */}
                <h1 className="text-8xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text mb-4 tracking-tight">
                    {title}
                </h1>

                {/* SUBTITLE */}
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                    {subtitle}
                </h2>

                {/* MESSAGE */}
                <p className="text-gray-500 mb-8 leading-relaxed">
                    {message}
                </p>

                {/* BUTTON */}
                {showButton && (
                    <Link
                        to="/"
                        className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2.5 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                        ← Back to Dashboard
                    </Link>
                )}

            </div>

        </div>
    );
}