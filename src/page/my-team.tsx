import MyTeamForm from "../components/forms/my-team-form"
import OpponentTeamForm from "../components/forms/opponent-team-form"

const MyTeam = () => {
    return (
        <div className='w-full h-screen'>
            <div>
                <p className="text-3xl text-center text-bold">Team A</p>
            </div>
            <div className="border-2 flex justify-center items-center ">
                <MyTeamForm />
            </div>

            {/* <OpponentTeamForm /> */}
        </div>
    )
}

export default MyTeam
