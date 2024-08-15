
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
            <p className="heading mt-8 text-center">CRICADDICTOR</p>
            <div className="mt-4  h-2/5 w-full  rounded-md border-2 bg-white shadow-shadow_custom2">
                <div className="mt-8">
                    <p className="text-2xl text-left text-bold ml-3">Write team names</p>
                </div>
                <TeamName />
            </div>
            <img src="/photo-2.png" alt="hero-img" className="absolute bottom-0" />
        </motion.div>
    )
}

export default TeamNameForm
