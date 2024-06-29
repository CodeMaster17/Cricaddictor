import TeamName from "../components/forms/my-team-form"

const TeamNameForm = () => {
    return (
        <div className='w-full h-screen'>
            <div className="mt-8">
                <p className="text-3xl text-center text-bold">Write team names</p>
            </div>
            <div className="border-2 flex justify-center items-center ">
                <TeamName />
            </div>

            {/* <OpponentTeamForm /> */}
        </div>
    )
}

export default TeamNameForm
