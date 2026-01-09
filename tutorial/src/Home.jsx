import { useState, useEffect } from "react";
import pilani_img from "./assets/trend_pilani.png";

function Home() {

    const [input, setInput] = useState("");
    const [data, setData] = useState([]);
    const [result, setResult] = useState([]);

    useEffect(() => {
        fetch("/2026_most_likely.csv")
        .then((res) => res.text())
        .then((text) => {
            const rows = text.trim().split("\n").slice(1);

            const parsed = rows.map((row) => {
            const [campus, branch, marks, year] = row.split(",");

            return {
                campus: campus.trim(),
                branch: branch.trim(),
                marks: parseInt(marks.trim()),
                year: parseInt(year.trim()),
                };
            });

            parsed.sort((a, b) => a.score - b.score);
            setData(parsed);
      })
  } , []);

    const handlePredict = () => {
        const score = Number(input);

        if (isNaN(score) || score < 0) {    
            setResult(["Invalid score entered"]);
            return;
        }

        if(score > 400){
            setResult(["Please enter score within 400"]);
            return;
        }

        const matches = data.filter((row) => score >= row.marks);

        if (matches.length === 0) {
            setResult(["TOO_LOW"]);
        } 
        else {
            setResult(matches);
        }
    };


    return (
        <main className="mt-28 px-8 text-center">

        <div className="mb-12">
            <h4 className="text-center font-mono from-neutral-900 mb-6"> Trends for all 3 Campuses </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">

                <img src={pilani_img} alt="Pilani trends" className="rounded-xl shadow-lg mx-auto" />
                {/* <img src={goa} alt="Goa trend" className="rounded-xl shadow-lg mx-auto" />

                <img src={hyd} alt="Hyderabad trend" className="rounded-xl shadow-lg mx-auto" /> */}
            </div>
        </div>

        <div className="max-w-md mx-auto bg-[#242424] p-7 rounded-lg shadow">
            <h2 className="text-xl text-blue-100 mb-4 font-mono font-semibold">
                Enter Score
            </h2>

            <input type="number" value={input} onChange={(e) => setInput(e.target.value)}
            className="w-full px-4 py-2 rounded-lg text-beige mb-4" placeholder="Score"
            />

            <button onClick={handlePredict} className="w-full px-4 py-2 bg-violet-700 text-white rounded-lg hover:bg-violet-600 transition font-bold" >
                Predict
            </button>

            {(
                <div className="mt-4 text-blue-200 text-lg space-y-2 text-center">
                    {result[0] === "INVALID" && (
                    <p>Please enter a valid positive score.</p>
                    )}

                    {result[0] === "TOO_LOW" && (
                    <p> Score too low for any branch :( </p>
                    )}

                    {typeof result[0] === "object" &&
                    result.map((item, index) => (
                        <p key={index}>
                        {item.branch} - {item.campus}
                        </p>
                    ))}
                </div>
            )}


        </div>

        </main>
    );
}

export default Home;


