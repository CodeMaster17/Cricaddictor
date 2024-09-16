import TeamCard from "./TeamCard";

const bounceTransition = {
    duration: 2, // Adjust duration for smoothness
    repeat: Infinity, // Repeat infinitely
    repeatType: "mirror" as const, // Reverses animation for zoom in and out effect
    ease: "easeInOut" as const, // Smooth easing function
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
                animate={{ scale: [1, 1.2] }} // Zoom in (1 -> 1.2) and out
                transition={bounceTransition} // Apply the zoom transition
            />
            <TeamCard teamName={team.teamB} />
        </div>
    </>
);

export default TeamDisplay;
