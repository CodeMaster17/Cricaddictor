
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center p-4">
            <div className="flex  flex-col justify-center items-center  xs:mt-[-100px] ">
                <p className="text-3xl text-center">
                    Welcome  to
                    <span className="text-[#1479EA]">
                        Cricadictor🏏
                    </span>
                </p>
                <br />
                <p className="font-bold">
                    Getting bored in <span className="text-[#1479EA]">office</span>, <span className="text-[#1479EA]">college</span> or <span className="text-[#1479EA]">home</span>?
                </p>
                <br />
                <p className="font-bold">
                    But love <span className="text-[#1479EA]">cricket</span>?
                </p>
                <br />
                <p className="font-bold">
                    Play <span className="text-[#1479EA]">anywhere</span>, <span className="text-[#1479EA]">anytime</span>!!!
                </p>
                <div className="mt-3">
                    <button className="text-black selected_button">
                        <Link to="/size-selection">
                            Start Game
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
