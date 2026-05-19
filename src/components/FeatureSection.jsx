export default function FeatureSection() {

    const features = [
        "Fast Performance",
        "Modern Design",
        "Easy Custom",
    ];

    return (
        <section>

            <h1 className="text-2xl font-bold mb-6">
                Features
            </h1>

            <div className="grid md:grid-cols-3 gap-4">

                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="border rounded-xl p-5 shadow-sm"
                    >
                        {feature}
                    </div>
                ))}

            </div>

        </section>
    );
}