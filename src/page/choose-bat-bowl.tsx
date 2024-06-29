import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { AppDispatch } from "../../redux/store/store"
import { Button } from "../components/ui/button"

type userChoice = "bat" | "bowl" | ""

const ChooseBatBowl = () => {
    const [choice, setChoice] = useState<userChoice>("")
    const dispatch = useDispatch<AppDispatch>()
    const selectionHandler = (choice: userChoice) => {
        console.log(choice)
        setChoice(choice)
        dispatch({ type: "cricaddicor/reducer_setChooseTo", payload: choice })
    }
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="border-2 w-4/5 h-4/5 flex flex-col justify-center items-center">
                <p className="text-center text-2xl">Choose Batting or Bowling.</p>
                <div className="w-4/5 h-4/5 border-2 flex gap-8 justify-center items-center">

                    <div className={choice == 'bat' ? "card selected-card" : "card"} onClick={() => selectionHandler('bat')}>
                        <h2>Bat</h2>
                    </div>
                    <div className={choice == 'bowl' ? "card selected-card" : "card"} onClick={() => selectionHandler('bowl')}>
                        <h2>Bowl</h2>
                    </div>
                </div>
                <div className="w-full flex justify-end">
                    <Button variant="default">
                        {

                            (choice == 'bowl') ? <Link to="/game/2">Next</Link> : <Link to="/game/1">Next</Link>
                        }

                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ChooseBatBowl
