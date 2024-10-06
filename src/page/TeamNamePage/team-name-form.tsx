

import Heading from "@/components/Heading";
import TeamName from "../../components/forms/my-team-form"
import { motion } from 'framer-motion';
const TeamNameForm = () => {

    return (
        <motion.div
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100vw' }}
            transition={{ duration: 0.5 }}
            className='relative h-screen w-full border-2 bg-zomato_red pl-4 pr-4'>

            {/* cricaddictor heading */}
            <Heading />

            <div className="mt-4 min-h-[350px]  w-full  rounded-md border-2 bg-white shadow-shadow_custom2">
                <div className="mt-4">
                    <p className="text-2xl text-left text-bold ml-3">CHOOSE TEAM NAMES</p>
                </div>
                <TeamName />
            </div>
            <img src="/photo-2.png" alt="hero-img" className="absolute bottom-0 w-full max-w-[357px] h-auto sm:max-w-[320px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px]" />
        </motion.div>
    )
}

export default TeamNameForm
