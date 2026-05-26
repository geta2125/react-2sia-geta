export default function TextArea({
    label,
    placeholder,
}) {
    return (
        <div>
            <label className="block mb-2 font-medium">
                {label}
            </label>

            <textarea
                placeholder={placeholder}
                className="w-full border rounded-lg px-4 py-3 outline-none"
                rows="4"
            ></textarea>
        </div>
    );
}