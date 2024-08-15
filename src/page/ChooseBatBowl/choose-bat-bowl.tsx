import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { AppDispatch } from "../../../redux/store/store"
import { Button } from "../../components/ui/button"
import { motion } from 'framer-motion';
type userChoice = "bat" | "bowl" | ""

const ChooseBatBowl = () => {
    const [choice, setChoice] = useState<userChoice>("")
    const dispatch = useDispatch<AppDispatch>()
    const selectionHandler = (choice: userChoice) => {
        console.log(choice)
        setChoice(choice)
        dispatch({ type: "cricaddicor/reducer_setChooseTo", payload: choice })
    }
    return (
        <motion.div
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100vw' }}
            transition={{ duration: 0.5 }} className="w-full h-screen flex justify-center items-center bg-zomato_red">
            <div className="w-4/5 h-4/5 flex flex-col justify-center items-center">
                <p className="heading mt-8 text-center">CRICADDICTOR</p>
                <p className="text-center text-2xl text-white">Choose Batting or Bowling.</p>
                <div className="w-4/5 mt-4 h-1/5 shadow-shadow_custom rounded-md flex gap-8 justify-center items-center bg-white">

                    <div className={choice == 'bat' ? "card selected-card" : "card"} onClick={() => selectionHandler('bat')}>
                        <h2 className="text-white text-2xl">Bat</h2>
                    </div>
                    <div className={choice == 'bowl' ? "card selected-card" : "card"} onClick={() => selectionHandler('bowl')}>
                        <h2 className="text-white text-2xl">Bowl</h2>
                    </div>
                </div>
                <div className="w-full flex justify-end mt-8">
                    <Button variant="default" className="w-full !bg-white text-zomato_red text-2xl">
                        {
                            (choice == 'bowl') ? <Link to="/game/2">Next</Link> : <Link to="/game/1">Next</Link>
                        }

                    </Button>
                </div>
            </div>
        </motion.div>
    )
}

export default ChooseBatBowl
