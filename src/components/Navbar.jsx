import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="bg-white">
            <div className="navbar container mx-auto bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">JawirNime</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/animelist"}>Anime List</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}