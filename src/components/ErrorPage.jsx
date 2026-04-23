import { Link } from "react-router-dom";

export default function ErrorPage({ code, message, image }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">

            {/* GAMBAR */}
            <img
                src={image}
                alt="error"
                className="w-72 mb-6"
            />

            {/* CODE */}
            <h1 className="text-6xl font-extrabold text-pink-500">
                {code}
            </h1>

            {/* DESKRIPSI */}
            <p className="text-gray-500 mt-2 mb-6">
                {message}
            </p>

            {/* BUTTON */}
            <Link
                to="/"
                className="bg-pink-500 text-white px-5 py-2 rounded-xl"
            >
                Back to Dashboard
            </Link>

        </div>
    );
}