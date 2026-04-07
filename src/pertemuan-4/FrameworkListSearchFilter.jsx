import { useState, useMemo } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {

    /* STATE FORM */
    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: "",
    });

    /* HANDLE CHANGE */
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    /* HIGHLIGHT FUNCTION */
    const highlightText = (text, keyword) => {
        if (!keyword) return text;

        const regex = new RegExp(`(${keyword})`, "gi");
        const parts = text.split(regex);

        return parts.map((part, index) =>
            part.toLowerCase() === keyword.toLowerCase() ? (
                <span
                    key={index}
                    className="bg-[#F5E2E3] text-[#BFA3A3] font-bold px-1 rounded"
                >
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    /* FILTER */
    const filteredFrameworks = useMemo(() => {
        const _searchTerm = dataForm.searchTerm.toLowerCase();

        return frameworkData.filter((framework) => {
            const matchesSearch =
                framework.name.toLowerCase().includes(_searchTerm) ||
                framework.description.toLowerCase().includes(_searchTerm) ||
                framework.details.developer.toLowerCase().includes(_searchTerm);

            const matchesTag = dataForm.selectedTag
                ? framework.tags.includes(dataForm.selectedTag)
                : true;

            return matchesSearch && matchesTag;
        });
    }, [dataForm]);

    /* TAG */
    const allTags = useMemo(() => [
        ...new Set(frameworkData.flatMap((framework) => framework.tags)),
    ], []);

    return (
        <div className="min-h-screen bg-[#ECEBE8] text-[#5A4A4A] p-6 md:p-12 font-sans">

            {/* HEADER */}
            <header className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-serif text-[#BFA3A3] mb-4 tracking-tight">
                    Framework List
                </h1>
                <div className="h-1.5 w-24 bg-[#D0A0A3] mx-auto rounded-full mb-4"></div>
                <p className="text-[#8C7A7A] italic text-lg">
                    Temukan pustaka terbaik untuk pengembangan proyek kreatif Anda.
                </p>
            </header>

            {/* SEARCH */}
            <div className="max-w-xl mx-auto mb-16 space-y-4">

                <div className="relative">
                    <input
                        type="text"
                        name="searchTerm"
                        placeholder="Search framework..."
                        value={dataForm.searchTerm}
                        onChange={handleChange}
                        className="w-full p-4 pl-12 bg-white border border-[#E0C5C4] rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D0A0A3]"
                    />
                </div>

                <div className="relative">
                    <select
                        name="selectedTag"
                        value={dataForm.selectedTag}
                        onChange={handleChange}
                        className="w-full p-4 bg-white border border-[#E0C5C4] rounded-2xl shadow-sm"
                    >
                        <option value="">All Tags</option>
                        {allTags.map((tag, index) => (
                            <option key={index} value={tag}>
                                {tag}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* CARD GRID */}
            <div className="max-w-7xl mx-auto">
                {filteredFrameworks.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredFrameworks.map((item) => (
                            <div
                                key={item.id}
                                className="group bg-white rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[#F5E2E3] flex flex-col"
                            >

                                <div className="flex justify-between items-start mb-4">
                                    <h2 className="text-2xl font-serif font-bold text-[#BFA3A3] leading-tight">
                                        {highlightText(item.name, dataForm.searchTerm)}
                                    </h2>

                                    <span className="text-[10px] font-bold text-[#D0A0A3] bg-[#F5E2E3] px-2 py-1 rounded uppercase">
                                        {item.details?.releaseYear}
                                    </span>
                                </div>

                                <p className="text-[#7A6A6A] text-sm leading-relaxed mb-6 flex-grow">
                                    {highlightText(item.description, dataForm.searchTerm)}
                                </p>

                                <div className="space-y-5 pt-6 border-t border-[#F5E2E3]">

                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-[#BFA3A3] uppercase font-bold mb-1">
                                            Developer
                                        </span>
                                        <span className="text-sm font-semibold text-[#D0A0A3]">
                                            {highlightText(item.details?.developer, dataForm.searchTerm)}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-[#F5E2E3] text-[#BFA3A3] px-3 py-1 text-[10px] font-bold uppercase rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-[#BFA3A3] text-xl italic">
                            Hasil tidak ditemukan...
                        </p>

                        <button
                            onClick={() =>
                                setDataForm({
                                    searchTerm: "",
                                    selectedTag: "",
                                })
                            }
                            className="mt-4 underline text-[#D0A0A3]"
                        >
                            Reset
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}