
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
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
                <button className="button-custom" onClick={() => navigate("/size-selection")}>
                    PLAY NOW
                </button>
            </div>
            <img src="/hero-img.png" alt="hero-img" className="absolute bottom-0" />
        </motion.div>
    )
}

export default Home
