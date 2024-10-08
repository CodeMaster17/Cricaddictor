const TeamCard = ({ teamName }: { teamName: string }) => (
    <div className="xs:size-28 rounded-xl bg-white shadow-shadow_custom2 flex justify-center items-center">
        <p className="text-2xl">{teamName}</p>
    </div>
);

export default TeamCard;
