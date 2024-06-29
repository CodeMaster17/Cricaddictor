import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { AppDispatch, RootState } from "../../redux/store/store"
import { Button } from "../components/ui/button"

type TossResult = "win" | "lose" | "";

const Toss = () => {

    const [selectedSide, setSelectedSide] = useState("")
    const [tossResult, setTossResult] = useState<TossResult>()
    const [tossSideAppeared, setTossSideAppeared] = useState("")
    const [isTossDone, setIsTossDone] = useState<boolean>(false)
    const dispatch = useDispatch<AppDispatch>()

    const teamA: Object = useSelector((state: RootState) => state.game.teamName.teamA)
    const teamB: Object = useSelector((state: RootState) => state.game.teamName.teamB)
    console.log("teamA", teamA)
    console.log("teamB", teamB)

    const selectionHandler = (side: string) => {
        console.log(side)
        setSelectedSide(side)
        // dispatch({ type: "cricaddicor/reducer_chooseSide", payload: side })
    }

    // fixme: pull out choosen team from redux store and then compare 
    const tossHandler = (selectedSide: string) => {
        let number = Math.floor(Math.random() * 2)
        if (number == 0) {
            console.log("Tails")
            if (selectedSide == "tails") {
                console.log("You win the toss")
                setTossResult("win")
                dispatch({ type: "cricaddicor/reducer_setToss", payload: { winner: "teamA", choice: selectedSide } })
            } else {
                console.log("You lose the toss")
                setTossResult("lose")
                dispatch({ type: "cricaddicor/reducer_setToss", payload: { winner: "teamB", choice: "heads" } })
            }
            setTossSideAppeared("tails")
        }
        else {
            if (selectedSide == "heads") {
                console.log("You win the toss")
                setTossResult("win")
                dispatch({ type: "cricaddicor/reducer_setToss", payload: { winner: "teamA", choice: selectedSide } })
            } else {
                console.log("You lose the toss")
                setTossResult("lose")
                dispatch({ type: "cricaddicor/reducer_setToss", payload: { winner: "teamB", choice: "tails" } })
            }
            setTossSideAppeared("heads")
            console.log("Heads")
        }
        setIsTossDone(true)
    }

    return (
        <div className="w-full h-screen flex justify-center items-start">
            <div className="border-2 w-4/5 h-4/5 flex flex-col justify-start items-center">

                <p className="text-center text-2xl">Choose coin toss.</p>
                <div className="w-full flex">
                    <div className="border-2 w-40 h-40 border-2 rounded-xl flex justify-center items-center" >
                        {teamA.teamA}
                    </div>
                    <div className="border-2 w-1/2 text-center flex justify-center items-center" >
                        {teamB.teamB}
                    </div>
                </div>
                <div className="w-4/5 h-1/5 border-2 flex gap-8 mt-8 justify-center items-center">

                    <button className={selectedSide == 'heads' ? "card selected-card" : "card"}
                        disabled={isTossDone == true ? true : false}
                        onClick={() => selectionHandler('heads')}>
                        <h2>Heads</h2>
                    </button>
                    <button className={selectedSide == 'tails' ? "card selected-card" : "card"}
                        disabled={isTossDone == true ? true : false}

                        onClick={() => selectionHandler('tails')}>
                        <h2>Tails</h2>
                    </button>

                </div>
                <p>You chose : {selectedSide}</p>

                <button className="button mt-8" onClick={() => tossHandler(selectedSide)} disabled={isTossDone == true ? true : false}>
                    Toss
                </button>
                <p>Toss side appeared : {tossSideAppeared}</p>
                {tossResult != "" ? <p>Toss result : {tossResult}</p> : ""}
                <div className="w-full flex justify-end">
                    {tossResult == "win" ? <Button variant="default">
                        <Link to="/choose-bat-bowl">
                            Next
                        </Link>
                    </Button> : <Button variant="default">
                        <Link to="/opponent">
                            Next
                        </Link>
                    </Button>}

                </div>
            </div>
        </div>
    )
}

export default Toss
