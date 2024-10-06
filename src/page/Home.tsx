
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import NextButton from "@/components/NextButton";
const Home = () => {
    const navigate = useNavigate()
    return (
        <motion.div
            initial={{ opacity: 0, x: '-100vw' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100vw' }}
            transition={{ duration: 0.5 }}
            className="relative flex h-screen w-full items-center justify-center bg-zomato_red pl-4 pr-4">
            <div className="relative h-screen w-full">
                <p className="heading mt-8">PLAY</p>
                <p className="heading">CRICADDICTOR</p>
                <p className="text-[1.5rem] font-thin text-white">Getting bored in office, college or home? But also love cricket? </p>
                <NextButton text="Play Now" type="button" onClickHandler={() => { navigate("/size-selection") }} />
            </div>
            <img src="/hero-img.png" alt="hero-img" className="absolute bottom-0 w-full max-w-[412px] h-auto sm:max-w-[360px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] sm:h-auto" />
        </motion.div >
    )
}

export default Home
