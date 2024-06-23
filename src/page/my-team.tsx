import MyTeamForm from "../components/forms/my-team-form"

const MyTeam = () => {
    return (
        <div className='w-full h-screen'>
            <div>
                <p className="text-3xl text-center text-bold">Your team</p>
            </div>
            <MyTeamForm />
        </div>
    )
}

export default MyTeam
