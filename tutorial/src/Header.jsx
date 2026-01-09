import { Link, useLocation } from "react-router-dom";

function Header() {

    const location = useLocation();

    const map = {
        "/": "BITSAT Branch Predictor 2026",
        "/about": "About",
        "/working": "How It Works"
    };

    const title = map[location.pathname] || "BITSAT Branch Predictor";

    return (
        <header className="w-full">
            <nav className="relative flex items-center justify-end p-4">

                <h1 className="absolute left-1/2 -translate-x-1/2 text-blue-100 text-3xl font-semibold font-mono">
                    {title}
                </h1>

                <div className="flex gap-2">
                    <Link to="/">
                        <button className="px-5 py-2 text-cyan-300 bg-slate-950 rounded-full hover:bg-slate-800  font-mono">
                            Home
                        </button>
                    </Link>

                    <Link to="/about">
                        <button className="px-5 py-2 text-cyan-300 bg-slate-950 rounded-full hover:bg-slate-800 transition font-mono">
                            About
                        </button>
                    </Link>
                    <Link to="/working">
                        <button className="px-5 py-2 text-cyan-300 bg-slate-950 rounded-full hover:bg-slate-800 transition font-mono">
                            Working
                        </button>
                    </Link>
                </div>

                

            </nav>
            
        </header>
        );
    }

export default Header;
