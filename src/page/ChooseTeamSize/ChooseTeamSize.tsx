import DhoniImage from "@/assets/DhoniImage"
import Heading from "@/components/Heading"
import NextButton from "@/components/NextButton"
import { motion } from 'framer-motion'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../redux/store/store"
import Divider from "../../components/Divider"
import OversSelectionButton from "./OversSelectionButton"
import { useNavigate } from "react-router-dom"

const ChooseTeamSize = () => {

    const [buttonClicked, setButtonClicked] = useState(false)
    const [buttonClickedId, setButtonClickedId] = useState(0)

    const dispatch = useDispatch<AppDispatch>()

    const navigate = useNavigate()

    const clickHandler = (size: number) => {
        dispatch({ type: "cricaddicor/reducer_setTeamSize", payload: size })
        dispatch({ type: "cricaddicor/reducer_setGameState", payload: "chooseTeam" })
        setButtonClicked(true)
        setButtonClickedId(size)
    }

    const nextButtonHandler = () => {
        navigate("/team-name-form")
    }
    return (
        <motion.div
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100vw' }}
            transition={{ duration: 0.5 }}
            className="relative h-screen w-full border-2 bg-zomato_red pl-4 pr-4">

            {/* cricaddictor heading */}
            <Heading />

            <div className="mt-8  h-2/5 w-full  rounded-md border-2 bg-white shadow-shadow_custom2">

                {/* componet heading */}
                <p className="text-left text-2xl ml-1 mt-2">CHOOSE TEAM SIZE</p>

                <br />
                <div className="flex w-full flex-wrap justify-between gap-1 p-2">
                    <OversSelectionButton buttonClicked={buttonClicked} buttonClickedId={buttonClickedId} clickHandler={clickHandler} />
                    <Divider />
                </div>

                {/* bottom image */}
                <DhoniImage />

                {/* button to next page */}
                <NextButton type="button" onClickHandler={nextButtonHandler} text="CHOOSE TEAM NAME" />

            </div>
        </motion.div>
    )
}

export default ChooseTeamSize
