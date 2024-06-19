import TeamSelectorA from "../components/forms/my-team-form"

const MyTeam = () => {
    return (
        <div className='w-full h-screen'>
            <div>
                <p className="text-3xl text-center">Your team</p>
            </div>
            <TeamSelectorA />
        </div>
    )
}

export default MyTeam
