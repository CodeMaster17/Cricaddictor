import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "../components/ui/alert-dialog";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { AppDispatch, RootState } from "../../redux/store/store"



type TossResult = "win" | "lose" | "";

const Toss = () => {

    const [selectedSide, setSelectedSide] = useState("heads")
    const [tossResult, setTossResult] = useState<TossResult>()
    const [, setTossSideAppeared] = useState("")
    const [isTossDone, setIsTossDone] = useState<boolean>(false)
    const dispatch = useDispatch<AppDispatch>()

    const team = useSelector((state: RootState) => state.game.teamName)


    const selectionHandler = (side: string) => {
        console.log(side)
        setSelectedSide(side)
        // dispatch({ type: "cricaddicor/reducer_chooseSide", payload: side })
    }

    const [gameEndModal, setGameEndModal] = useState(false)
    const [resultDescription, setResultDescription] = useState("")

    // fixme: pull out choosen team from redux store and then compare 
    const tossHandler = (selectedSide: string) => {
        let number = Math.floor(Math.random() * 2)
        if (number == 0) {
            console.log("Tails")
            if (selectedSide == "tails") {
                console.log("You win the toss")
                setTossResult("win")
                setResultDescription("You won the toss")
                dispatch({ type: "cricaddicor/reducer_setToss", payload: { winner: "teamA", choice: selectedSide } })
            } else {
                console.log("You lose the toss")
                setTossResult("lose")
                setResultDescription("You lose the toss")
                dispatch({ type: "cricaddicor/reducer_setToss", payload: { winner: "teamB", choice: "heads" } })
            }
            setTossSideAppeared("tails")
        }
        else {
            if (selectedSide == "heads") {
                console.log("You win the toss")
                setTossResult("win")
                setResultDescription("You won the toss")
                dispatch({ type: "cricaddicor/reducer_setToss", payload: { winner: "teamA", choice: selectedSide } })
            } else {
                console.log("You lose the toss")
                setTossResult("lose")
                setResultDescription("You lose the toss")
                dispatch({ type: "cricaddicor/reducer_setToss", payload: { winner: "teamB", choice: "tails" } })
            }
            setTossSideAppeared("heads")
            console.log("Heads")
        }
        setGameEndModal(true)

        setIsTossDone(true)
    }

    const navigate = useNavigate()
    const nextPage = () => {
        tossResult == "win" ? navigate("/choose-bat-bowl") : navigate("/opponent")

    }

    return (
        <>
            <AlertDialog open={gameEndModal} onOpenChange={setGameEndModal}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Toss Result </AlertDialogTitle>
                        <AlertDialogDescription>
                            {resultDescription}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => nextPage()}>Next</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            <div className="w-full h-screen flex justify-center items-start">
                <div className="w-4/5 h-4/5 flex flex-col justify-start items-center">

                    <p className="text-center text-2xl mt-8">Choose coin toss.</p>
                    <div className="w-full flex items-center justify-between mt-4">
                        <div className=" xs:size-32   rounded-xl shadow-shadow_custom2 flex justify-center items-center">
                            <p className="text-2xl">{team.teamA}</p>
                        </div>
                        <div>
                            <img src="/versus.png" alt="versus" className="size-16" />
                        </div>

                        <div className=" xs:size-32 rounded-xl shadow-shadow_custom2 flex justify-center items-center">
                            <p className="text-2xl">{team.teamB}</p>
                        </div>

                    </div>
                    <div className="w-4/5 h-1/5  flex gap-8 mt-8 justify-center items-center shadow-shadow_custom2 rounded-xl">

                        <button className={selectedSide == 'heads' ? "card selected-card" : "card"}
                            disabled={isTossDone == true ? true : false}
                            onClick={() => selectionHandler('heads')}>
                            <p className="text-white text-sm">Heads</p>
                        </button>
                        <button className={selectedSide == 'tails' ? "card selected-card" : "card"}
                            disabled={isTossDone == true ? true : false}

                            onClick={() => selectionHandler('tails')}>
                            <p className="text-white text-sm">Tails</p>
                        </button>

                    </div>

                    <button className="button mt-8" onClick={() => tossHandler(selectedSide)} disabled={isTossDone == true ? true : false}>
                        Toss
                    </button>

                    <div className="w-full flex justify-end">


                    </div>
                </div>
            </div>
        </>
    )
}

export default Toss
