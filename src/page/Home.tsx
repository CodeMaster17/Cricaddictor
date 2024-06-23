
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <p className="text-3xl">
                    Welcome to Cricadictor
                </p>
                <br />
                <button className="text-black">
                    <Link to="/team-selection">
                        Start Game
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Home
