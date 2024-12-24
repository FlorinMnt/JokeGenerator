import "./Navbar.css"
import { Link } from "react-router-dom"


export const Navbar = () => {
    return(
        <div className="bg-gray-700 text-white flex justify-center items-center gap-14 p-5">
            <Link className="text-2xl font-mono" to="/">Home</Link>
            <Link className="text-2xl font-mono" to="/joke">Jokes</Link>
            <Link className="text-2xl font-mono" to="/test">Test</Link>
            <Link className="text-2xl font-mono" to="/jokes_list">Jokes List</Link>
        </div>
    )
}