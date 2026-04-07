export default function Tailwindcss() {
    return (
        <div>
            <h1 className="bg-[#ECCBC9] m-4 p-2 rounded-xl shadow-lg text-[#5A4A4A]">
                Belajar Tailwind CSS 4
            </h1>

            <button className="bg-[#D0A0A3] text-white px-4 py-2 mx-4 rounded-xl shadow-lg hover:bg-[#E0C5C4] hover:text-[#5A4A4A] transition">
                Click Me
            </button>

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
        <nav className="flex items-center justify-between bg-[#D0A0A3] px-6 py-4 text-white rounded-xl shadow-lg m-4">
            <h1 className="text-xl font-bold tracking-wide">MyWebsite</h1>

            <ul className="flex space-x-6 text-sm font-medium">
                <li><a href="#" className="hover:text-[#F5E2E3] transition">Home</a></li>
                <li><a href="#" className="hover:text-[#F5E2E3] transition">About</a></li>
                <li><a href="#" className="hover:text-[#F5E2E3] transition">Contact</a></li>
            </ul>

            <button className="bg-[#ECCBC9] px-4 py-2 rounded-lg hover:bg-[#E0C5C4] transition">
                Logout
            </button>
        </nav>
    )
}

function Spacing(props) {
    return (
        <div className="bg-white shadow-lg p-5 m-4 rounded-2xl border border-[#F5E2E3] hover:shadow-2xl transition">
            <h2 className="text-lg font-semibold text-[#D0A0A3]">{props.title}</h2>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {props.content}
            </p>
        </div>
    )
}

function Typography() {
    return (
        <div className="m-4 text-center">
            <h1 className="text-3xl font-bold text-[#D0A0A3]">
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
            <button className="border-2 border-[#D0A0A3] text-[#D0A0A3] px-5 py-2 rounded-full hover:bg-[#D0A0A3] hover:text-white transition">
                Klik Saya
            </button>
        </div>
    )
}

function BackgroundColors() {
    return (
        <div className="bg-gradient-to-r from-[#ECCBC9] to-[#D0A0A3] text-white p-6 m-4 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold">Tailwind Colors</h3>
            <p className="mt-2 text-sm opacity-90">
                Belajar Tailwind itu seru dan fleksibel!
            </p>
        </div>
    )
}

function ShadowEffects() {
    return (
        <div className="bg-white shadow-lg p-6 m-4 rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition duration-300 border border-[#F5E2E3]">
            <h3 className="text-xl font-semibold text-[#5A4A4A]">Hover me!</h3>
            <p className="text-gray-600 mt-2 text-sm">
                Lihat efek bayangan saat hover.
            </p>
        </div>
    )
}

function TailwindSuperUI() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F5E2E3] via-white to-[#ECCBC9] p-6">

            {/* HEADER */}
            <header className="flex justify-between items-center bg-white shadow-xl rounded-2xl px-6 py-4 mb-6">
                <h1 className="text-2xl font-bold text-[#D0A0A3] tracking-wide">
                    adudu-app
                </h1>

                <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
                    <a href="#" className="hover:text-[#D0A0A3] transition">Home</a>
                    <a href="#" className="hover:text-[#D0A0A3] transition">Features</a>
                    <a href="#" className="hover:text-[#D0A0A3] transition">Contact</a>
                </nav>

                <button className="bg-[#D0A0A3] text-white px-4 py-2 rounded-xl shadow-md hover:bg-[#E0C5C4] hover:text-[#5A4A4A] transition-all duration-300">
                    Login
                </button>
            </header>

            {/* GRID */}
            <div className="grid md:grid-cols-3 gap-6">

                <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl transition border border-[#F5E2E3]">
                    <h2 className="text-xl font-semibold text-[#D0A0A3] mb-2">
                        Typography
                    </h2>
                    <p className="text-gray-600 text-sm">
                        Tailwind membuat styling jadi cepat dan fleksibel.
                    </p>
                    <button className="mt-4 text-sm bg-[#D0A0A3] text-white px-3 py-1 rounded-lg hover:bg-[#E0C5C4] hover:text-[#5A4A4A] transition">
                        Read More
                    </button>
                </div>

                <div className="bg-gradient-to-r from-[#E0C5C4] to-[#D0A0A3] text-white rounded-2xl shadow-xl p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold">Colors & Background</h2>
                        <p className="mt-2 text-sm opacity-90">
                            Gunakan gradient untuk UI lebih modern.
                        </p>
                    </div>
                    <button className="mt-4 bg-white text-[#D0A0A3] px-4 py-2 rounded-xl font-medium hover:bg-[#ECEBE8] transition">
                        Explore
                    </button>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border border-[#ECEBE8] hover:border-[#D0A0A3] transition">
                    <h2 className="text-lg font-semibold mb-2">Form Input</h2>
                    <input
                        type="text"
                        placeholder="Masukkan nama..."
                        className="w-full border border-[#ECCBC9] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ECCBC9] mb-3"
                    />
                    <button className="w-full bg-[#D0A0A3] text-white py-2 rounded-lg hover:bg-[#E0C5C4] hover:text-[#5A4A4A] transition">
                        Submit
                    </button>
                </div>

            </div>

            {/* FLEX */}
            <div className="flex flex-col md:flex-row gap-6 mt-8">

                <div className="flex items-center bg-white p-5 rounded-2xl shadow-lg w-full md:w-1/2">
                    <img
                        src="/img/get.jpg"
                        alt="profile"
                        className="w-16 h-16 rounded-full border-2 border-[#D0A0A3] object-cover"
                    />
                    <div className="ml-4">
                        <h3 className="font-semibold text-[#5A4A4A]">Geta Dewi Artika Sari</h3>
                        <p className="text-gray-500 text-sm">Sistem Informasi</p>
                    </div>
                </div>

                <div className="bg-[#D0A0A3] text-white p-6 rounded-2xl shadow-xl w-full md:w-1/2 flex justify-between items-center">
                    <div>
                        <p className="text-sm opacity-80">Total Points</p>
                        <h2 className="text-3xl font-bold">1500</h2>
                    </div>
                    <span className="bg-white text-[#D0A0A3] px-3 py-1 rounded-full text-sm font-semibold">
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