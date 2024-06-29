import { useState } from "react"
import { AppDispatch, store } from "../../redux/store/store"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"


const ChooseSide = () => {

    const [selectedSide, setSelectedSide] = useState("")
    const dispatch = useDispatch<AppDispatch>()
    const selectionHandler = (side: string) => {
        console.log(side)
        setSelectedSide(side)
        dispatch({ type: "cricaddicor/reducer_chooseSide", payload: side })
    }

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="border-2 w-4/5 h-4/5 flex flex-col justify-center items-center">
                <p className="text-center text-2xl">Choose your side.</p>
                <div className="w-4/5 h-4/5 border-2 flex gap-8 justify-center items-center">

                    <div className={selectedSide == 'teamA' ? "card selected-card" : "card"} onClick={() => selectionHandler('teamA')}>
                        <h2>Team A</h2>
                    </div>
                    <div className={selectedSide == 'teamB' ? "card selected-card" : "card"} onClick={() => selectionHandler('teamB')}>
                        <h2>Team B</h2>
                    </div>
                </div>
                <div className="w-full flex justify-end">
                    <Button variant="default">
                        <Link to="/toss">
                            Next
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ChooseSide
