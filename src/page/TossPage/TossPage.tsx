import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../../redux/store/store";
import TossResultModal from "./TossResultModal";
import TeamDisplay from "./TeamDisplay";
import CoinSelection from "./CoinSelection";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
type TossResult = "win" | "lose" | "";

const TossPage = () => {
    const [selectedSide, setSelectedSide] = useState("heads");
    const [tossResult, setTossResult] = useState<TossResult>("");
    const [isTossDone, setIsTossDone] = useState<boolean>(false);
    const [gameEndModal, setGameEndModal] = useState(false);
    const [resultDescription, setResultDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const team = useSelector((state: RootState) => state.game.teamName);

    const handleSelection = (side: string) => {
        setSelectedSide(side);
    };

    const handleToss = () => {
        const randomSide = Math.random() < 0.5 ? "tails" : "heads";
        const isWin = selectedSide === randomSide;

        setTossResult(isWin ? "win" : "lose");
        setResultDescription(isWin ? "You won the toss" : "You lose the toss");

        dispatch({
            type: "cricaddicor/reducer_setToss",
            payload: { winner: isWin ? "teamA" : "teamB", choice: selectedSide },
        });
        setIsLoading(true);
        setTimeout(() => {
            setIsTossDone(true);
            setIsLoading(false);
            setGameEndModal(true);
        }, 2000)
    };

    const handleNextPage = () => {
        navigate(tossResult === "win" ? "/choose-bat-bowl" : "/opponent");
    };

    return (
        <>
            {!isLoading ? <TossResultModal
                open={gameEndModal}
                onOpenChange={setGameEndModal}
                resultDescription={resultDescription}
                onNext={handleNextPage}
            /> : ""}

            <motion.div
                initial={{ opacity: 0, x: '100vw' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '-100vw' }}
                transition={{ duration: 0.5 }} className="w-full h-screen flex justify-center items-start bg-zomato_red">
                <div className="w-4/5 h-4/5 flex flex-col justify-start items-center">
                    <p className="heading mt-8 text-center">CRICADDICTOR</p>
                    <p className="text-center text-2xl mt-8 text-white">Choose coin toss.</p>
                    <TeamDisplay team={team} />
                    <CoinSelection
                        selectedSide={selectedSide}
                        isTossDone={isTossDone}
                        onSelect={handleSelection}
                    />

                    {isTossDone || isLoading ?
                        <iframe src="https://lottie.host/embed/18e10324-42b1-42b4-bc98-ab839f132a59/AWcOKCwdUw.json"></iframe>
                        : ""}
                    <Button
                        className="mt-8 !bg-white text-zomato_red text-lg"
                        onClick={handleToss}
                        disabled={isTossDone}
                    >
                        {isTossDone || isLoading ?
                            "Flipping the coin.."
                            : "Toss"}
                    </Button>
                </div>
            </motion.div>
        </>
    );
};

export default TossPage;
