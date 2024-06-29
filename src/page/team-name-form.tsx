import TeamName from "../components/forms/my-team-form"

const TeamNameForm = () => {
    return (
        <div className='w-full h-screen flex justify-center items-start mt-8 '>
            <div className="flex flex-col w-[90%] justify-center items-center pb-2 shadow-shadow_custom2 rounded-md">
                <div className="mt-8">
                    <p className="text-3xl text-center text-bold">Write team names</p>
                </div>
                <TeamName />
            </div>

            {/* <OpponentTeamForm /> */}
        </div>
    )
}

export default TeamNameForm
