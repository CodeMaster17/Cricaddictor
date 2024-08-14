import TeamCard from "./TeamCard";

const TeamDisplay = ({ team }: { team: { teamA: string; teamB: string } }) => (
    <>
        <p className="text-center text-2xl mt-8">Choose coin toss.</p>
        <div className="w-full flex items-center justify-between mt-4">
            <TeamCard teamName={team.teamA} />
            <img src="/versus.png" alt="versus" className="size-16" />
            <TeamCard teamName={team.teamB} />
        </div>
    </>
);

export default TeamDisplay;
