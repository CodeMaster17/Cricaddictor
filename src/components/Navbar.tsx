import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <div className="w-full h-20 border-2 shadow-md">
            <Link to="/">
                <p>
                    CricAddictor
                </p>
            </Link>
        </div>
    )
}

export default Navbar
