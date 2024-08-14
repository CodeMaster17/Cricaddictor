import TeamCard from "./TeamCard";
const bounceTransition = {
    y: {
        duration: 0.6,
        yoyo: Infinity, // makes the animation repeat
        repeat: Infinity, // repeat infinitely
        repeatType: "loop", // loop the animation
        ease: "easeInOut",
    },
};
import { motion } from 'framer-motion';
const TeamDisplay = ({ team }: { team: { teamA: string; teamB: string } }) => (
    <>

        <div className="w-full flex items-center justify-between mt-4 bg-white p-4 rounded-md">
            <TeamCard teamName={team.teamA} />
            <motion.img
                src="/versus.png"
                alt="versus"
                className="size-16"
                animate={{ y: ["-10%", "-20%"] }} // bounce up and down
                transition={bounceTransition} // apply the bounce transition
            />
            <TeamCard teamName={team.teamB} />
        </div>
    </>
);

export default TeamDisplay;
