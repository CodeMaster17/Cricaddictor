import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { AppDispatch, RootState } from "../../redux/store/store"
import { Button } from "../components/ui/button"

const ChooseTeamSize = () => {

    const [buttonClicked, setButtonClicked] = useState(false)
    const [buttonClickedId, setButtonClickedId] = useState(0)
    const dispatch = useDispatch<AppDispatch>()
    const gameState = useSelector((state: RootState) => state.game.gameState)


    const clickHandler = (size: number) => {
        console.log(gameState)
        dispatch({ type: "cricaddicor/reducer_setTeamSize", payload: size })
        dispatch({ type: "cricaddicor/reducer_setGameState", payload: "chooseTeam" })
        setButtonClicked(true)
        setButtonClickedId(size)
    }

    return (
        <div className="w-full h-screen flex justify-center items-start">
            <div className="w-[90%] h-2/5 mt-8 flex  flex-col justify-center items-center shadow-shadow_custom2 rounded-md">
                <p className="text-center text-2xl">Choose team size</p>
                <br />
                <div className="w-full flex flex-row flex-wrap gap-2 p-2 justify-between">
                    <button className={buttonClicked && buttonClickedId === 2 ? "selected_button text-black" : "text-black button"}
                        onClick={() => clickHandler(2)}>
                        2
                    </button>
                    <button
                        className={buttonClicked && buttonClickedId === 4 ? "selected_button text-black" : "text-black button"}
                        onClick={() => clickHandler(4)}>
                        4
                    </button>
                    <button
                        className={buttonClicked && buttonClickedId === 6 ? "selected_button text-black" : "text-black button"}
                        onClick={() => clickHandler(6)}>
                        6
                    </button>
                    <button className={buttonClicked && buttonClickedId === 11 ? "selected_button text-black" : "text-black button"}
                        onClick={() => clickHandler(11)}>
                        11
                    </button>
                </div>
                <div className="w-full flex justify-between items-center  mt-8 p-4">
                    <div>
                        {
                            buttonClicked ?
                                <p>
                                    Total wickets: {" "}
                                    <span className="bg-gray-200 p-2 rounded-md">
                                        {buttonClickedId}
                                    </span>
                                </p>
                                : ""
                        }
                    </div>
                    <Button variant="default">
                        <Link to="/my-team">
                            Next
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ChooseTeamSize
