import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <div className="w-full h-20 border-2 shadow-md flex items-center text-2xl p-2">
            <Link to="/">
                <p>
                    🏏 CricAddictor
                </p>
            </Link>
        </div>
    )
}

export default Navbar
