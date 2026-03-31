export default function Tailwindcss() {
    return (
        <div>
            <h1 class="bg-pink-200 m-4 p-2 rounded shadow-lg">Belajar Tailwind CSS 4</h1>
            <button className="bg-pink-500 text-white
                                px-4 py-2 mx-4 rounded
                                shadow-lg">Click Me</button>
            <FlexboxGrid />
            <Typography />
            <Spacing title="Card" content="ABCDEFGHIJ"></Spacing>
            <BorderRadius />
            <BackgroundColors />
            <ShadowEffects />
            <TailwindSuperUI />
        </div>
    )
}
function FlexboxGrid() {
    return (
        <nav className="flex items-center justify-between bg-blue-800 px-6 py-4 text-white rounded-xl shadow-lg m-4">
            <h1 className="text-xl font-bold tracking-wide">MyWebsite</h1>

            <ul className="flex space-x-6 text-sm font-medium">
                <li><a href="#" className="hover:text-pink-400 transition">Home</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">About</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Contact</a></li>
            </ul>

            <button className="bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600 transition">
                Logout
            </button>
        </nav>
    )
}

function Spacing(props) {
    return (
        <div className="bg-white shadow-lg p-5 m-4 rounded-xl border border-pink-100 hover:shadow-2xl transition">
            <h2 className="text-lg font-semibold text-pink-600">{props.title}</h2>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {props.content}
            </p>
        </div>
    )
}

function Typography() {
    return (
        <div className="m-4 text-center">
            <h1 className="text-3xl font-bold text-pink-600">
                Tailwind Typography
            </h1>
            <p className="text-gray-600 text-lg mt-2">
                Belajar Tailwind sangat menyenangkan dan cepat!
            </p>
        </div>
    )
}

function BorderRadius() {
    return (
        <div className="m-4">
            <button className="border-2 border-pink-500 text-pink-500 px-5 py-2 rounded-full hover:bg-pink-500 hover:text-white transition">
                Klik Saya
            </button>
        </div>
    )
}

function BackgroundColors() {
    return (
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 m-4 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold">Tailwind Colors</h3>
            <p className="mt-2 text-sm opacity-90">
                Belajar Tailwind itu seru dan fleksibel!
            </p>
        </div>
    )
}

function ShadowEffects() {
    return (
        <div className="bg-white shadow-lg p-6 m-4 rounded-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800">Hover me!</h3>
            <p className="text-gray-600 mt-2 text-sm">
                Lihat efek bayangan saat hover.
            </p>
        </div>
    )
}

function TailwindSuperUI() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-200 p-6">

            {/* HEADER */}
            <header className="flex justify-between items-center bg-white shadow-xl rounded-2xl px-6 py-4 mb-6">
                <h1 className="text-2xl font-bold text-pink-600 tracking-wide">
                    adudu-app
                </h1>

                <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
                    <a href="#" className="hover:text-pink-500 transition">Home</a>
                    <a href="#" className="hover:text-pink-500 transition">Features</a>
                    <a href="#" className="hover:text-pink-500 transition">Contact</a>
                </nav>

                <button className="bg-pink-500 text-white px-4 py-2 rounded-xl shadow-md hover:bg-pink-600 hover:scale-105 transition-all duration-300">
                    Login
                </button>
            </header>

            {/* GRID CONTENT */}
            <div className="grid md:grid-cols-3 gap-6">

                {/* CARD 1 */}
                <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl transition duration-300 border border-pink-100">
                    <h2 className="text-xl font-semibold text-pink-600 mb-2">
                        Typography
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Tailwind membuat styling jadi cepat dan fleksibel.
                    </p>
                    <button className="mt-4 text-sm bg-pink-500 text-white px-3 py-1 rounded-lg hover:bg-pink-600 transition">
                        Read More
                    </button>
                </div>

                {/* CARD 2 */}
                <div className="bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-2xl shadow-xl p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold">Colors & Background</h2>
                        <p className="mt-2 text-sm opacity-90">
                            Gunakan gradient untuk UI lebih modern.
                        </p>
                    </div>
                    <button className="mt-4 bg-white text-pink-600 px-4 py-2 rounded-xl font-medium hover:bg-gray-100 transition">
                        Explore
                    </button>
                </div>

                {/* CARD 3 */}
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-pink-300 transition">
                    <h2 className="text-lg font-semibold mb-2">Form Input</h2>
                    <input
                        type="text"
                        placeholder="Masukkan nama..."
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 mb-3"
                    />
                    <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
                        Submit
                    </button>
                </div>

            </div>

            {/* FLEX SECTION */}
            <div className="flex flex-col md:flex-row gap-6 mt-8">

                {/* PROFILE CARD */}
                <div className="flex items-center bg-white p-5 rounded-2xl shadow-lg w-full md:w-1/2">
                    <img
                        src="/img/get.jpg"
                        alt="profile"
                        className="w-16 h-16 rounded-full border-2 border-pink-400 object-cover"
                    />
                    <div className="ml-4">
                        <h3 className="font-semibold text-gray-800">Geta Dewi Artika Sari</h3>
                        <p className="text-gray-500 text-sm">Sistem Informasi</p>
                    </div>
                </div>

                {/* STAT CARD */}
                <div className="bg-pink-500 text-white p-6 rounded-2xl shadow-xl w-full md:w-1/2 flex justify-between items-center">
                    <div>
                        <p className="text-sm opacity-80">Total Points</p>
                        <h2 className="text-3xl font-bold">1500</h2>
                    </div>
                    <span className="bg-white text-pink-500 px-3 py-1 rounded-full text-sm font-semibold">
                        Active
                    </span>
                </div>

            </div>

            {/* FOOTER */}
            <footer className="mt-10 text-center text-gray-500 text-sm">
                © 2026 adudu-app — Built with Tailwind CSS 💖
            </footer>

        </div>
    );
}