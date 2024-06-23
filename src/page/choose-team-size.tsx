
const ChooseTeamSize = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="border-2 w-4/5 h-4/5 flex flex-col justify-center items-center">
                <p className="text-center text-2xl">Choose team size</p>
                <br />
                <div className="w-full flex flex-row wrap border-2 p-2 justify-between">
                    <button className="text-black">
                        2
                    </button>
                    <button className="text-black">
                        4
                    </button>
                    <button className="text-black">
                        6
                    </button>
                    <button className="text-black">
                        11
                    </button>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default ChooseTeamSize
