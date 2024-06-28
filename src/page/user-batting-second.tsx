// this file will be for user batting second and cpu batting first
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { CPU_ALL_OUT, CPU_BATTING, CPU_BATTING_START, CPU_BOWLING, GAME_END, MATCH_START, USER_ALL_OUT, USER_BATTING, USER_BOWLING, CPU_BOWLING_START, runButtons } from "../lib/constants";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "../components/ui/alert-dialog"

const UserBattingSecond = () => {
    const [guessedRuns, setGuessedRuns] = useState<any[]>([]);
    const [userRuns, setUserRuns] = useState<number>(0);
    const [cpuRuns, setCpuRuns] = useState<number>(0);
    const [guessedNumber, setGuessedNumber] = useState<number>(0);
    const [cpuNumber, setCpuNumber] = useState<number>(0);
    const [userWickets, setUserWickets] = useState<number>(0);
    const [cpuWickets, setCPUWickets] = useState<number>(0);
    const [gameStatus, setGameStatus] = useState<string>(MATCH_START);
    const [userOvers, setUserOvers] = useState<number>(1);
    const [userBalls, setUserBalls] = useState<number>(0);
    const [cpuOvers, setCpuOvers] = useState<number>(0);
    const [cpuBalls, setCpuBalls] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
    const [totalOVers, setTotalOvers] = useState<number>(2);


    const [userEndInninngModal, setUserEndInningModal] = useState(false)
    const [gameEndModal, setGameEndModal] = useState(false)
    const [resultDescription, setResultDescription] = useState<string>("")

    const modalHandler = () => {
        setGameStatus(CPU_BATTING_START)
        setIsModalOpen(false);
    }

    const userBattingEndModalHanlder = () => {
        setGameStatus(CPU_BOWLING_START)
        setUserEndInningModal(false)
    }

    const teamSize = useSelector((state: RootState) => state.game.teamSize);

    const guessedNumberHandler = (value: number) => {
        if (gameStatus === CPU_BATTING_START) {
            setGameStatus(CPU_BATTING)
            if (cpuOvers < totalOVers) {
                console.log("cpuOvers", cpuOvers)
                const cpuNumber = Math.floor(Math.random() * 7);
                setGuessedNumber(value);
                setCpuNumber(cpuNumber);
                if (value === cpuNumber) {
                    setCPUWickets(cpuWickets + 1);
                    setCpuBalls(cpuBalls + 1);
                    setGuessedRuns([...guessedRuns, "W"]);
                }
                else {
                    setCpuRuns(cpuRuns + value);
                    setCpuBalls(cpuBalls + 1);
                    setGuessedRuns([...guessedRuns, value]);
                }
                if (cpuBalls === 5) {
                    setCpuOvers(cpuOvers + 1);
                    setCpuBalls(0);
                }
                console.log(cpuBalls)
            }
        }
        else if (gameStatus === CPU_BATTING) {
            if (cpuOvers < totalOVers) {
                console.log("cpuOvers", cpuOvers)
                const cpuNumber = Math.floor(Math.random() * 7);
                setGuessedNumber(value);
                setCpuNumber(cpuNumber);
                if (value === cpuNumber) {
                    setCPUWickets(cpuWickets + 1);
                    setCpuBalls(cpuBalls + 1);
                    setGuessedRuns([...guessedRuns, "W"]);
                }
                else {
                    setCpuRuns(cpuRuns + value);
                    setCpuBalls(cpuBalls + 1);
                    setGuessedRuns([...guessedRuns, value]);
                }
                if (cpuBalls === 5) {
                    setCpuOvers(cpuOvers + 1);
                    setCpuBalls(0);
                    if (cpuOvers === totalOVers - 1) {
                        setGameStatus(CPU_BOWLING)
                        setUserEndInningModal(true)
                    }
                }
                console.log(cpuBalls)
            }

        }
        else if (gameStatus === CPU_BOWLING_START) {
            setGameStatus(USER_BOWLING)
            if (userOvers < totalOVers) {
                console.log("userOvers", userOvers)
                const cpuNumber = Math.floor(Math.random() * 7);
                setGuessedNumber(value);
                setCpuNumber(cpuNumber);
                if (value === cpuNumber) {
                    setUserWickets(userWickets + 1);
                    setCpuBalls(cpuBalls + 1);
                    setGuessedRuns([...guessedRuns, "W"]);
                }
                else {
                    setUserRuns(userRuns + value);
                    setUserBalls(userBalls + 1);
                    setGuessedRuns([...guessedRuns, value]);
                }
                if (userBalls === 5) {
                    setUserOvers(userOvers + 1);
                    setUserBalls(0);
                }
                console.log(cpuBalls)
            }
        }
        else if (gameStatus === CPU_BOWLING) {
            if (userOvers < totalOVers) {
                console.log("userOvers", userOvers)
                const cpuNumber = Math.floor(Math.random() * 7);
                setGuessedNumber(value);
                setCpuNumber(cpuNumber);
                if (value === cpuNumber) {
                    setUserWickets(userWickets + 1);
                    setCpuBalls(cpuBalls + 1);
                    setGuessedRuns([...guessedRuns, "W"]);
                }
                else {
                    setUserRuns(userRuns + value);
                    setUserBalls(userBalls + 1);
                    setGuessedRuns([...guessedRuns, value]);
                }
                if (userBalls === 5) {
                    setUserOvers(userOvers + 1);
                    setUserBalls(0);
                    if (userOvers === totalOVers - 1) {
                        setGameStatus(GAME_END)
                    }
                }
                console.log(cpuBalls)
            }
        }
    }

    useEffect(() => {
        if (gameStatus === CPU_BATTING_START) {
            setUserOvers(0)
            setUserBalls(0)
            setCpuBalls(0)
            setUserRuns(0)
            setCpuRuns(0)
            setUserWickets(0)
            setCPUWickets(0)
        } else if (gameStatus === CPU_BOWLING_START) {
            setUserBalls(0)
            setUserRuns(0)
            setUserWickets(0)
        } else if (gameStatus === GAME_END) {
            if (userRuns > cpuRuns) {
                setResultDescription("You win")
            }
            else if (userRuns < cpuRuns) {
                setResultDescription("You lose")
            }
            setGameEndModal(true)
        }
        console.log("gameStatus", gameStatus)
    }, [gameStatus])


    return (
        <>
            <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Welcome to the Game!</AlertDialogTitle>
                        <AlertDialogDescription>
                            The game is about to start. Prepare yourself and choose your runs wisely!
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => modalHandler()}>Start</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {/* after  user batting finishes */}
            <AlertDialog open={userEndInninngModal} onOpenChange={setUserEndInningModal}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Welcome to the Game!</AlertDialogTitle>
                        <AlertDialogDescription>
                            The game is about to start. Prepare yourself and choose your runs wisely!
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => userBattingEndModalHanlder()}>Start Bowling</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <AlertDialog open={gameEndModal} onOpenChange={setGameEndModal}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Game ends!</AlertDialogTitle>
                        <AlertDialogDescription>
                            {resultDescription}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => userBattingEndModalHanlder()}>View Score</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <div className="w-full h-screen flex justify-center items-center">
                <div className="border-2 w-3/5 h-4/5 flex flex-col items-center">
                    <div className="w-full flex justify-between items-center border-2">
                        <div className="w-2/5 flex flex-col justify-center items-center">
                            <div className="border-2 w-40 h-40 border-2 rounded-xl">
                                <p className="text-2xl">You</p>
                            </div>
                            {gameStatus === USER_BOWLING || gameStatus === GAME_END ? <>
                                <p>{userRuns}/{userWickets}</p>
                                <p>{userOvers}.{userBalls}/{totalOVers}(ov)</p>
                            </> : <p>Yet to bat</p>}
                        </div>
                        <div>
                            <img src="/versus.png" alt="versus" className="w-20 h-20" />
                        </div>
                        <div className="w-2/5 flex flex-col justify-center items-center">
                            <div className="border-2 w-40 h-40 border-2 rounded-xl">
                                <p className="text-2xl">Opponent</p>
                            </div>
                            <p>{cpuRuns}/{cpuWickets}</p>
                            <p>{cpuOvers}.{cpuBalls}/{totalOVers}(ov)</p>

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
                    <div className="w-full flex">
                        {guessedRuns.length > 0 && guessedRuns.map((item, index) => (
                            <p key={index} className="text-center">{item}</p>
                        ))}
                    </div>
                    {/* {(gameStatus === CPU_ALL_OUT || gameStatus === USER_ALL_OUT) && (
                        <p className="text-center text-2xl">{getResult()}</p>
                    )} */}
                </div>
            </div>


        </>
    );
};

export default UserBattingSecond;
