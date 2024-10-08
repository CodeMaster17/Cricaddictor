
interface BallTrackerPropes {
    guessedRuns: number[]
}

const BallTracker: React.FC<BallTrackerPropes> = ({ guessedRuns }) => {
    return (
        <div className="w-full bg-white flex flex-wrap gap-4  shadow-shadow_custom mt-8 p-4 rounded-md">
            {guessedRuns.length > 0 && guessedRuns.map((item, index) => (
                <>
                    <div key={index} className="bg-gray-300 p-1  rounded-md">
                        <p className="text-center px-2">{item} </p>
                    </div>
                </>
            ))}
        </div>
    )
}

export default BallTracker
