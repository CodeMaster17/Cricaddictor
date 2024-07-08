
interface TeamAboutProps{
    teamName: string,
    runs: number,
    wickets: number,
    overs: number,
    balls:number,
    total_overs:number
}

const TeamScoreHead: React.FC<TeamAboutProps> = ({teamName, runs, wickets, overs, balls, total_overs}) => {
    return (
        <div className="w-2/5 flex flex-col justify-center items-center mt-4">
            <div className="shadow-shadow_custom2 size-32 flex justify-center items-center rounded-xl">
                <p className="text-2xl">{teamName}</p>
            </div>
            <p className="mt-2">{runs}/{wickets}</p>
            <p>{overs}.{balls}/{total_overs}(ov)</p>
        </div>
    )
}

export default TeamScoreHead
