import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="min-h-screen bg-[#ECEBE8] p-10">
            <h1 className="text-4xl font-serif text-center text-[#BFA3A3] mb-12 tracking-wide">
                Framework List
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {frameworkData.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300 border border-[#F5E2E3]"
                    >
                        <h2 className="text-xl font-semibold text-[#BFA3A3] mb-2">
                            {item.name}
                        </h2>

                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                            {item.description}
                        </p>

                        <p className="text-gray-500 text-xs mb-4">
                            Developed by{" "}
                            <span className="font-semibold text-[#D0A0A3]">
                                {item.details?.developer}
                            </span>{" "}
                            ({item.details?.releaseYear})
                        </p>

                        <a
                            href={item.details?.officialWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-sm text-white bg-[#D0A0A3] hover:bg-[#BFA3A3] px-4 py-2 rounded-full transition"
                        >
                            Visit Website
                        </a>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {item.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-[#F5E2E3] text-[#BFA3A3] px-3 py-1 text-xs rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
