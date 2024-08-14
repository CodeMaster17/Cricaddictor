import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { AppDispatch, RootState } from "../../redux/store/store"
import { teamSize } from "../lib/constants"
import Divider from "../components/Divider"

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

    const navigate = useNavigate()

    return (
        <div className="relative h-screen w-full border-2 bg-zomato_red pl-4 pr-4">
            <p className="heading mt-8 text-center">CRICADDICTOR</p>
            <div className="mt-8  h-2/5 w-full  rounded-md border-2 bg-white shadow-shadow_custom2">
                <p className="text-left text-2xl ml-1 mt-2">CHOOSE TEAM SIZE</p>
                <br />
                <div className="flex w-full flex-wrap justify-between gap-1 p-2">
                    {teamSize.map((item) => (
                        <button
                            key={item.id}
                            className={`button-select ${buttonClicked && buttonClickedId === item.size ? "text-black !border-zomato_red !border-2" : " "}`}
                            onClick={() => clickHandler(item.size)}
                        >
                            {item.size}
                        </button>
                    ))}
                    <Divider />
                </div>
                <img src="/dhoni.png" alt="hero-img" className="absolute bottom-0" />
                <button className="button-custom !w-[90%]" onClick={() => navigate("/team-name-form")}>
                    CHOOSE TEAM NAME
                </button>
            </div>
        </div>
    )
}

export default ChooseTeamSize
