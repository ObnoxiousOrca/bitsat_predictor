function About() {

    return (
        <main className="max-w-4xl mx-auto mt-24 px-6 text-gray-200">
        
            {/* <h1 className="text-4xl font-bold text-center text-blue-100 mb-8">
                About BITSAT Branch Predictor
            </h1> */}

            <section className="space-y-6 border-separate m-5 text-lg leading-relaxed">
                <p>
                The <span className="font-semibold text-blue-200">
                BITSAT Branch Predictor 2026
                </span>{" "}
                helps students estimate their expected Branch based on their mock exam score
                using historical data and statistical modeling.
                </p>

                <p>
                This tool is designed for aspirants preparing for BITSAT who want
                realistic expectations before counselling begins.
                </p>
            </section>

            <section className="mt-12 border-separate grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-900 p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-2 text-blue-300">
                    Accurate
                </h3>
                <p>
                    Uses past-year trends and score normalization to reduce guesswork.
                </p>
                </div>

                <div className="bg-slate-900 p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-2 text-blue-300">
                    Student-focused
                </h3>
                <p>
                    Built with clarity and simplicity — no confusing jargon.
                </p>
                </div>

                <div className="bg-slate-900 p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-2 text-blue-300">
                    Transparent
                </h3>
                <p>
                    Clear assumptions and logic behind predictions.
                </p>
                </div>
            </section>

        </main>
    );
}

export default About;
