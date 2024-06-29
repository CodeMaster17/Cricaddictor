import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"


const ViewScore = () => {

    const score = useSelector((state: any) => state.game.score)
    const team = useSelector((state: any) => state.game.teamName)
    const [result, setResult] = useState("")

    const decideMatchResult = () => {
        if (score.teamA > score.teamB) {
            setResult(`${team.teamA} won`)
        }
        else if (score.teamA < score.teamB) {
            setResult(`${team.teamB} won`)
        }
        else {
            setResult("Match Draw")
        }
    }
    // if (score.teamA > score.teamB) {
    //     setResult("Team A won")
    // }
    // else if (score.teamA < score.teamB) {
    //     setResult("Team B won")
    // }
    // else {
    //     setResult("Match Draw")
    // }

    useEffect(() => {
        decideMatchResult()
    }, [])

    return (
        <>
            <div className="w-full h-screen flex flex-col  items-center">
                <div className="bg-light_blue w-full h-40">

                </div>
                <div className="border-2 mt-[-4rem] p-4 rounded-xl bg-white w-4/5 h-40 flex flex-col items-center shadow-shadow_custom2">
                    <div className="w-full flex  justify-between items-center border-2">
                        <p>
                            Match Finished
                        </p>
                    </div>
                    <div className="flex w-full mt-2 justify-between items-center">
                        <p>
                            {team.teamA}
                        </p>
                        <p>
                            {score.teamA}
                        </p>
                    </div>
                    <div className="flex w-full mt-2 justify-between items-center">
                        <p>
                            {team.teamB}
                        </p>
                        <p>
                            {score.teamB}
                        </p>
                    </div>
                    <div className="flex w-full mt-2 justify-between items-center">
                        <p>
                            {result}
                        </p>
                    </div>
                </div>
                <div>
                </div>
                <Button>
                    <Link to="/">Play Again</Link>
                </Button>
            </div>
        </>
    )
}

export default ViewScore
