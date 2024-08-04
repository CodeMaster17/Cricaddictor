import { useSelector } from "react-redux"
import TeamName from "../components/forms/my-team-form"
import { RootState } from "../../redux/store/store"

const TeamNameForm = () => {

    const totalWickets = useSelector((state: RootState) => state.game.teamSize)
    return (
        <div className='w-full h-screen flex justify-center items-start mt-8 '>
            <div className="flex flex-col w-[90%] justify-center items-center pb-2 shadow-shadow_custom2 rounded-md">
                <div className="mt-8">
                    <p className="text-3xl text-center text-bold">Write team names</p>
                </div>
                <div className="mt-8">
                    <p className="text-center text-bold">

                        Total wickets: {" "}
                        <span className="bg-gray-200 p-2 rounded-md">
                            {totalWickets}
                        </span>

                    </p>
                </div>
                <TeamName />
            </div>

            {/* <OpponentTeamForm /> */}
        </div>
    )
}

export default TeamNameForm
