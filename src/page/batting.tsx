// this file will be for user batting first and cpu batting second
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { CPU_ALL_OUT, MATCH_START, USER_ALL_OUT, USER_BATTING, USER_BOWLING, runButtons } from "../lib/constants";

type BattingFirst = "user" | "cpu";

const Batting = () => {
    const [guessedRuns, setGuessedRuns] = useState<number[]>([]);
    const [userRuns, setUserRuns] = useState<number>(0);
    const [cpuRuns, setCpuRuns] = useState<number>(0);
    const [guessedNumber, setGuessedNumber] = useState<number>(0);
    const [cpuNumber, setCpuNumber] = useState<number>(0);
    const [userWickets, setUserWickets] = useState<number>(0);
    const [cpuWickets, setCPUWickets] = useState<number>(0);
    const [gameStatus, setGameStatus] = useState<string>(MATCH_START);
    const [battingFirst, setBattingFirst] = useState<BattingFirst>("user");
    const [overs, setOvers] = useState<number>(0);
    const [balls, setBalls] = useState<number>(0);

    const teamSize = useSelector((state: RootState) => state.game.teamSize);

    const guessedNumberHandler = (value: number) => {
        setGuessedNumber(value);
        let cpuNum = Math.floor(Math.random() * runButtons.length);
        setCpuNumber(runButtons[cpuNum].value);
        setGameStatus(USER_BATTING);
    };

    useEffect(() => {
        if (gameStatus === USER_BATTING) {
            if (guessedNumber === cpuNumber) {
                if (userWickets === teamSize - 1) {
                    setGameStatus(USER_ALL_OUT);
                } else {
                    setUserWickets(userWickets + 1);
                }
            } else {
                setUserRuns(userRuns + guessedNumber);
                updateOversAndBalls();
            }
        } else if (gameStatus === USER_BOWLING) {
            if (guessedNumber === cpuNumber) {
                if (cpuWickets === teamSize - 1) {
                    setGameStatus(CPU_ALL_OUT);
                } else {
                    setCPUWickets(cpuWickets + 1);
                }
            } else {
                setCpuRuns(cpuRuns + cpuNumber);
                updateOversAndBalls();
            }
        } else if (gameStatus === MATCH_START) {
            setUserWickets(0)
        }
    }, [guessedNumber, cpuNumber]);

    useEffect(() => {
        if (overs >= 5 && battingFirst === "user" && gameStatus === USER_BATTING) {
            setBattingFirst("cpu");
            setGameStatus(USER_BOWLING);
            resetInnings();
        }
    }, [overs, battingFirst, gameStatus]);

    const updateOversAndBalls = () => {
        setBalls(balls + 1);
        if (balls === 5) {
            setOvers(overs + 1);
            setBalls(0);
        }
        if (overs === 2) {
            setGameStatus(USER_BOWLING);
        }
    };

    const resetInnings = () => {
        setGuessedNumber(0);
        setCpuNumber(0);
        setUserWickets(0);
        setCPUWickets(0);
        setOvers(0);
        setBalls(0);
    };

    const getResult = () => {
        if (gameStatus === CPU_ALL_OUT || gameStatus === USER_ALL_OUT) {
            if (userRuns > cpuRuns) {
                return "User wins!";
            } else if (cpuRuns > userRuns) {
                return "CPU wins!";
            } else {
                return "It's a tie!";
            }
        }
    };

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="border-2 w-3/5 h-4/5 flex flex-col items-center">
                <div className="w-full flex justify-between items-center border-2">
                    <div className="w-2/5 flex flex-col justify-center items-center">
                        <div className="border-2 w-40 h-40 border-2 rounded-xl">
                            <p className="text-2xl">You</p>
                        </div>
                        <p>{userRuns}/{userWickets}</p>
                        <p>{overs}.{balls}/2(ov)</p>
                    </div>
                    <div>
                        <img src="/versus.png" alt="versus" className="w-20 h-20" />
                    </div>
                    <div className="w-2/5 flex flex-col justify-center items-center">
                        <div className="border-2 w-40 h-40 border-2 rounded-xl">
                            <p className="text-2xl">Opponent</p>
                        </div>
                        {battingFirst === "user" ? <p>Yet to bat</p> : <p>{cpuRuns}/{cpuWickets}</p>}
                    </div>
                </div>

                <div className="w-full border-2 flex flex-col gap-8">
                    <p className="text-center">Select runs you want to score.</p>
                    <div className="w-full flex gap-8">
                        {runButtons.map((item, index) => (
                            <button
                                key={index}
                                className="w-1/6 h-16 border-2 border-red-500 hover:bg-red-400"
                                onClick={() => guessedNumberHandler(item.value)}
                                disabled={gameStatus === USER_ALL_OUT || gameStatus === CPU_ALL_OUT}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
                <p>The runs will be added to scoreboard until you and the CPU get the same number.</p>
                <p>If you and CPU get the same number, you are out!!!</p>
                <div className="w-full flex justify-between items-center border-2">
                    <div className="w-2/5 flex flex-col justify-center items-center">
                        <div className="border-2 w-40 h-40 border-2 rounded-xl">
                            <p className="text-2xl">{guessedNumber}</p>
                        </div>
                    </div>
                    <div>
                        <img src="/versus.png" alt="versus" className="w-20 h-20" />
                    </div>
                    <div className="w-2/5 flex flex-col justify-center items-center">
                        <div className="border-2 w-40 h-40 border-2 rounded-xl">
                            <p className="text-2xl">{cpuNumber}</p>
                        </div>
                    </div>
                </div>
                {(gameStatus === CPU_ALL_OUT || gameStatus === USER_ALL_OUT) && (
                    <p className="text-center text-2xl">{getResult()}</p>
                )}
            </div>
        </div>
    );
};

export default Batting;
