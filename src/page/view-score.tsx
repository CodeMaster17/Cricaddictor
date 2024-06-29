import { useSelector } from "react-redux"


const ViewScore = () => {

    const score = useSelector((state: any) => state.game.score)
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="border-2 w-3/5 h-4/5 flex flex-col items-center">
                <div className="w-full flex justify-between items-center border-2">
                    View Score : {score.teamA} & {score.teamB}
                </div>
            </div>
        </div>
    )
}

export default ViewScore
