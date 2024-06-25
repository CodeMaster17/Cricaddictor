import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store/store"
import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"

const ChooseTeamSize = () => {

    const [teamSize, setTeamSize] = useState(0)
    const [buttonClicked, setButtonClicked] = useState(false)
    const [buttonClickedId, setButtonClickedId] = useState(0)
    const dispatch = useDispatch<AppDispatch>()
    const gameState = useSelector((state: RootState) => state.game.gameState)
    const teamSizeState = useSelector((state: RootState) => state.game.teamSize)


    const clickHandler = (size: number) => {
        console.log(gameState)
        setTeamSize(size)
        dispatch({ type: "cricaddicor/reducer_setTeamSize", payload: size })
        dispatch({ type: "cricaddicor/reducer_setGameState", payload: "chooseTeam" })
        setButtonClicked(true)
        setButtonClickedId(size)
    }

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="border-2 w-4/5 h-4/5 flex flex-col justify-center items-center">
                <p className="text-center text-2xl">Choose team size</p>
                <p>{gameState}</p>
                <br />
                <div className="w-full flex flex-row wrap border-2 p-2 justify-between">
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
                <div className="w-full flex justify-end border-2 mt-8 p-4">
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
