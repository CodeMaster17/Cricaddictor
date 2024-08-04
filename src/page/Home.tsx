
import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <div className="z-10 flex flex-col items-center justify-center bg-white xs:mt-[-100px]">
                <p className="text-center text-3xl">
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
                    <button className="selected_button text-black">
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
