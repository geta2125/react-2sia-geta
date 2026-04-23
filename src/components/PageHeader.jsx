export default function PageHeader({ title, breadcrumb, children }) {
    return (
        <div className="flex justify-between items-center mb-6">

            <div>
                <h1 className="text-3xl font-bold text-gray-800">
                    {title}
                </h1>

                <div className="text-gray-400 text-sm mt-1">
                    {Array.isArray(breadcrumb)
                        ? breadcrumb.join(" / ")
                        : breadcrumb}
                </div>
            </div>

            {/* BUTTON / ACTION */}
            <div>
                {children}
            </div>

        </div>
    );
}