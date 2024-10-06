import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { tossEvents, } from "@/constants";
import { getTossResult } from "@/lib/getTossResult";
import { ROUTE_CHOOSE_BAT_OR_BOWL, ROUTE_OPPONENT_CHOOSE_BAT_OR_BOWL } from "@/routes";
import { motion } from 'framer-motion';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../../redux/store/store";
import CoinSelection from "./CoinSelection";
import TeamDisplay from "./TeamDisplay";
import TossResultModal from "./TossResultModal";
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
        setSelectedSide(side)
        console.log(selectedSide)
    };

    const handleToss = () => {

        const isWin = getTossResult(selectedSide);

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
        navigate(tossResult === tossEvents.EVENT_TOSS_WIN ? ROUTE_CHOOSE_BAT_OR_BOWL : ROUTE_OPPONENT_CHOOSE_BAT_OR_BOWL);
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
                transition={{ duration: 0.5 }}
                className="w-full h-screen flex justify-center items-start bg-zomato_red">
                <div className="w-4/5 h-4/5 flex flex-col justify-start items-center">
                    <Heading />
                    <p className="text-center text-2xl mt-8 text-white">TOSS THE COIN</p>
                    <TeamDisplay team={team} />
                    <CoinSelection
                        selectedSide={selectedSide}
                        isTossDone={isTossDone}
                        onSelect={handleSelection}
                    />


                    <Button
                        className="mt-8 w-full !bg-white text-zomato_red text-lg"
                        onClick={handleToss}
                        disabled={isTossDone}
                    >
                        {isTossDone || isLoading ?
                            "Flipping the coin.."
                            : "Toss"}
                    </Button>
                    {isTossDone || isLoading ?
                        <iframe src="https://lottie.host/embed/18e10324-42b1-42b4-bc98-ab839f132a59/AWcOKCwdUw.json">
                        </iframe>
                        : ""}
                </div>
            </motion.div>
        </>
    );
};

export default TossPage;
