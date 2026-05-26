import { useState } from "react";

import {
    FaBell,
    FaSearch,
    FaTimes
} from "react-icons/fa";

import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {

    const [openSearch, setOpenSearch] = useState(false);

    return (
        <>
            {/* HEADER */}
            <header className="
                fixed
                top-0
                left-64
                w-[calc(100%-16rem)]
                z-40
                flex
                justify-between
                items-center
                px-6
                py-4
                bg-white/90
                backdrop-blur-md
                border-b
                border-gray-100
            ">

                {/* SEARCH */}
                <button
                    onClick={() => setOpenSearch(true)}
                    className="
                        relative
                        w-full
                        max-w-md
                    "
                >

                    <input
                        type="text"
                        readOnly
                        placeholder="Search anything..."
                        className="
                            w-full
                            pl-4
                            pr-12
                            py-3
                            rounded-2xl
                            border
                            border-gray-200
                            bg-gray-50
                            cursor-pointer
                            outline-none
                        "
                    />

                    <FaSearch className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-gray-400
                    " />

                </button>

                {/* RIGHT */}
                <div className="flex items-center gap-4 ml-6">

                    {/* NOTIFICATION */}
                    <IconButton>
                        <FaBell />
                        <Badge value="50" />
                    </IconButton>

                    {/* CHART */}
                    <IconButton>
                        <FcAreaChart />
                    </IconButton>

                    {/* SETTINGS */}
                    <IconButton pink>
                        <SlSettings />
                    </IconButton>

                    {/* PROFILE */}
                    <div className="
                        flex
                        items-center
                        gap-3
                        border-l
                        border-gray-200
                        pl-4
                    ">

                        <div className="text-right">

                            <p className="text-xs text-gray-400">
                                Welcome back
                            </p>

                            <p className="font-semibold text-gray-700">
                                Geta Dewi
                            </p>

                        </div>

                        <img
                            src="/img/foto.jpeg"
                            alt="profile"
                            className="
                                w-11
                                h-11
                                rounded-full
                                object-cover
                                border-2
                                border-pink-200
                            "
                        />

                    </div>

                </div>

            </header>

            {/* SEARCH MODAL */}
            {openSearch && (

                <div className="
                    fixed
                    inset-0
                    bg-black/40
                    backdrop-blur-sm
                    flex
                    items-center
                    justify-center
                    z-50
                ">

                    {/* CLOSE AREA */}
                    <div
                        className="absolute inset-0"
                        onClick={() => setOpenSearch(false)}
                    />

                    {/* MODAL */}
                    <div className="
                        relative
                        bg-white
                        w-full
                        max-w-2xl
                        p-6
                        rounded-3xl
                        shadow-2xl
                    ">

                        <button
                            onClick={() => setOpenSearch(false)}
                            className="
                                absolute
                                top-5
                                right-5
                                text-gray-400
                                hover:text-pink-500
                            "
                        >
                            <FaTimes />
                        </button>

                        <div className="relative">

                            <input
                                autoFocus
                                type="text"
                                placeholder="Type to search..."
                                className="
                                    w-full
                                    pl-5
                                    pr-12
                                    py-4
                                    rounded-2xl
                                    border
                                    border-gray-200
                                    focus:border-pink-400
                                    focus:ring-4
                                    focus:ring-pink-100
                                    outline-none
                                "
                            />

                            <FaSearch className="
                                absolute
                                right-5
                                top-1/2
                                -translate-y-1/2
                                text-gray-400
                            " />

                        </div>

                        <p className="mt-4 text-sm text-gray-400">
                            Start typing to search...
                        </p>

                    </div>

                </div>

            )}
        </>
    );
}


/* ICON BUTTON */
function IconButton({
    children,
    pink
}) {

    return (
        <div className={`
            relative
            p-3
            rounded-2xl
            transition
            cursor-pointer
            ${pink
                ? "bg-pink-50 text-pink-500 hover:bg-pink-100"
                : "bg-gray-50 hover:bg-gray-100"}
        `}>
            {children}
        </div>
    );
}


/* BADGE */
function Badge({ value }) {

    return (
        <span className="
            absolute
            -top-1
            -right-1
            bg-pink-500
            text-white
            text-xs
            px-1.5
            rounded-full
            animate-pulse
        ">
            {value}
        </span>
    );
}