export default function InputField() {

    return (
        <input
            type="text"
            placeholder="Search here..."
            className="
                w-72
                border
                border-gray-200
                px-4
                py-2
                rounded-xl
                outline-none
                focus:ring-2
                focus:ring-pink-300
            "
        />
    );
}