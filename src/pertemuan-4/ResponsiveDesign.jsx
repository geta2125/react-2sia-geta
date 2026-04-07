export default function ResponsiveDesign() {

    return (
        <div className="
            min-h-screen p-6 md:p-10 space-y-8
            bg-gradient-to-br from-[#f5f3ee] via-[#e8e4da] to-[#dcd7cc]
        ">
            <h1 className="
                text-3xl md:text-4xl font-serif text-center
                text-[#7a6a6a] tracking-wide
                drop-shadow-sm
            ">
                Responsive Design with Tailwind CSS
            </h1>

            <ResponsiveText />
            <ResponsiveWidth />
            <ResponsiveLayout />
        </div>
    );

    function Card({ title, children }) {
        return (
            <div className="
                relative backdrop-blur-xl bg-white/40 
                border border-white/30
                rounded-3xl p-6
                shadow-[0_8px_32px_rgba(0,0,0,0.1)]
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]
                transition duration-300
            ">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>

                <h2 className="text-xl font-bold text-[#7a6a6a] mb-3 relative z-10">
                    {title}
                </h2>

                <div className="relative z-10">
                    {children}
                </div>
            </div>
        );
    }

    function ResponsiveText() {
        return (
            <Card title="Responsive Text">
                <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-[#5f5555] leading-relaxed">
                    Coba lakukan zoom in atau zoom out. Perhatikan bahwa ukuran teks akan menyesuaikan dengan ukuran layar.
                    <br />
                    Hapus breakpoint untuk melihat perbedaannya.
                </p>
            </Card>
        );
    }

    function ResponsiveWidth() {
        return (
            <Card title="Responsive Flex">
                <p className="text-[#5f5555] mb-4">
                    Layout berubah sesuai ukuran layar:
                </p>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="
                        w-full md:w-1/2 p-4 rounded-2xl text-center font-semibold
                        bg-gradient-to-br from-pink-100 to-pink-200
                        shadow-md hover:scale-105 transition
                    ">
                        Kolom 1
                    </div>

                    <div className="
                        w-full md:w-1/2 p-4 rounded-2xl text-center font-semibold
                        bg-gradient-to-br from-blue-100 to-blue-200
                        shadow-md hover:scale-105 transition
                    ">
                        Kolom 2
                    </div>
                </div>
            </Card>
        );
    }

    function ResponsiveLayout() {
        return (
            <Card title="Responsive Grid">
                <p className="text-[#5f5555] mb-4">
                    Grid akan menyesuaikan jumlah kolom:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {[1, 2, 3, 4].map((num) => (
                        <div
                            key={num}
                            className="
                                p-5 rounded-2xl text-center font-semibold
                                bg-gradient-to-br from-[#F5E2E3] to-[#E8D4D6]
                                shadow-md
                                hover:scale-105 hover:shadow-xl
                                transition duration-300
                            "
                        >
                            Box {num}
                        </div>
                    ))}
                </div>
            </Card>
        );
    }
}