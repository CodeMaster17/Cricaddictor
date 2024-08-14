import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../../redux/store/store";
import TossResultModal from "./TossResultModal";
import TeamDisplay from "./TeamDisplay";
import CoinSelection from "./CoinSelection";

type TossResult = "win" | "lose" | "";

const TossPage = () => {
    const [selectedSide, setSelectedSide] = useState("heads");
    const [tossResult, setTossResult] = useState<TossResult>("");
    const [isTossDone, setIsTossDone] = useState<boolean>(false);
    const [gameEndModal, setGameEndModal] = useState(false);
    const [resultDescription, setResultDescription] = useState("");

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

        setIsTossDone(true);
        setGameEndModal(true);
    };

    const handleNextPage = () => {
        navigate(tossResult === "win" ? "/choose-bat-bowl" : "/opponent");
    };

    return (
        <>
            <TossResultModal
                open={gameEndModal}
                onOpenChange={setGameEndModal}
                resultDescription={resultDescription}
                onNext={handleNextPage}
            />
            <div className="w-full h-screen flex justify-center items-start">
                <div className="w-4/5 h-4/5 flex flex-col justify-start items-center">
                    <TeamDisplay team={team} />
                    <CoinSelection
                        selectedSide={selectedSide}
                        isTossDone={isTossDone}
                        onSelect={handleSelection}
                    />
                    <button
                        className="button mt-8"
                        onClick={handleToss}
                        disabled={isTossDone}
                    >
                        Toss
                    </button>
                </div>
            </div>
        </>
    );
};

export default TossPage;
