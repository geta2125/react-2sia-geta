export default function ProductSection() {

    const products = [
        "Sepatu",
        "Laptop",
        "Smartphone",
    ];

    return (
        <section>

            <h1 className="text-2xl font-bold mb-6">
                Product Section
            </h1>

            <div className="grid md:grid-cols-3 gap-4">

                {products.map((product, index) => (
                    <div
                        key={index}
                        className="border rounded-xl p-5 shadow-sm"
                    >
                        {product}
                    </div>
                ))}

            </div>

        </section>
    );
}