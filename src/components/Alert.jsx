export default function Alert({
    type = "success",
    children,
}) {

    const colors = {
        success: "bg-green-100 text-green-700",
        danger: "bg-red-100 text-red-700",
        warning: "bg-yellow-100 text-yellow-700",
    };

    return (
        <div className={`p-4 rounded-lg ${colors[type]}`}>
            {children}
        </div>
    );
}