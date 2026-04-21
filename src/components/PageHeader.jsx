export default function PageHeader({ onAdd }) {
    return (
        <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col">
                <span className="text-3xl font-semibold">
                    Dashboard
                </span>
                <div className="flex items-center font-medium space-x-2 mt-2">
                    <span className="text-gray-500">Dashboard</span>
                    <span className="text-gray-500">/</span>
                    <span className="text-gray-500">Order List</span>
                </div>
            </div>

            <button
                onClick={onAdd}
                className="bg-pink-500 text-white px-4 py-2 rounded-lg"
            >
                + Add Data
            </button>
        </div>
    );
}