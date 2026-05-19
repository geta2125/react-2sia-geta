export default function Modal({
    title,
    children,
    onClose,
}) {
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="bg-white p-6 rounded-2xl w-[400px]">

                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold">
                        {title}
                    </h1>

                    <button onClick={onClose}>
                        ✕
                    </button>
                </div>

                {children}

            </div>
        </div>
    );
}