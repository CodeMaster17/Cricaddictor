
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"

const Home = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <p className="text-3xl">
                    Welcome to Cricadictor
                </p>
                <br />
                <Button variant="link">
                    <Link to="/team">
                        Start Game
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default Home
