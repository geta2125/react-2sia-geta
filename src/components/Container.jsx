export default function Container({
    children,
    className = ""
}) {

    return (
        <div
            className={`
                w-full
                min-h-screen
                bg-white/90
                backdrop-blur-md
                rounded-[40px]
                shadow-[0_8px_30px_rgb(0,0,0,0.05)]
                border
                border-white/30
                px-8
                py-8
                transition-all
                duration-300
                ${className}
            `}
        >
            {children}
        </div>
    );
}