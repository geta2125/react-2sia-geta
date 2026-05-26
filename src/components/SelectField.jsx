export default function SelectField({
    label,
    options = [],
}) {
    return (
        <div>
            <label className="block mb-2 font-medium">
                {label}
            </label>

            <select className="w-full border rounded-lg px-4 py-3 outline-none">
                <option>Pilih Data</option>

                {options.map((option, index) => (
                    <option key={index}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}