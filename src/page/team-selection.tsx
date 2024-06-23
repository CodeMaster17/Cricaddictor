
const TeamSelection = () => {

    const chooseSide = () => {
        // Add logic to choose a side
    }

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="border-2 w-4/5 h-4/5 flex flex-col justify-center items-center">
                <p className="text-center text-2xl">Choose your side.</p>
                <div className="w-4/5 h-4/5 border-2 flex gap-8 justify-center items-center">
                    <div className="card selected-card">
                        <h2>Team A</h2>
                    </div>
                    <div className="card">
                        <h2>Team B</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamSelection
