// this file will be for user batting first and cpu batting second
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store/store";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "../components/ui/alert-dialog";
import { GAME_END, MATCH_START, USER_BATTING, USER_BATTING_START, USER_BOWLING, USER_BOWLING_START, runButtons } from "../lib/constants";

const UserBattingFirst = () => {
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
    const [cpuOvers, setCpuOvers] = useState<number>(1);
    const [cpuBalls, setCpuBalls] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
    const [totalOVers] = useState<number>(2);


    const [userEndInninngModal, setUserEndInningModal] = useState(false)
    const [gameEndModal, setGameEndModal] = useState(false)
    const [resultDescription, setResultDescription] = useState<string>("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const teamA = useSelector((state: RootState) => state.game.teamName.teamA);
    // const teamB = useSelector((state: RootState) => state.game.teamName.teamB);
    const team = useSelector((state: RootState) => state.game.teamName);
    console.log("teamA", team.teamA)

    const modalHandler = () => {
        setGameStatus(USER_BATTING_START)
        setIsModalOpen(false);
    }

    const userBattingEndModalHanlder = () => {
        setGameStatus(USER_BOWLING_START)
        setUserEndInningModal(false)
    }

    const teamSize = useSelector((state: RootState) => state.game.teamSize);

    const guessedNumberHandler = (value: number) => {
        // user batting
        if (gameStatus === USER_BATTING_START) {
            setGameStatus(USER_BATTING)
            if (userOvers < totalOVers) {
                console.log("userOvers", userOvers)
                const cpuNumber = Math.floor(Math.random() * 7);
                setGuessedNumber(value);
                setCpuNumber(cpuNumber);
                if (value === cpuNumber) {
                    setUserWickets(userWickets + 1);
                    setUserBalls(userBalls + 1);
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
                if (userWickets === teamSize - 1) {
                    setGameStatus(USER_BOWLING_START)
                }
                console.log(userBalls)
            }
        }
        else if (gameStatus === USER_BATTING) {
            if (userOvers < totalOVers) {
                console.log("userOvers", userOvers)
                const cpuNumber = Math.floor(Math.random() * 7);
                setGuessedNumber(value);
                setCpuNumber(cpuNumber);
                if (value === cpuNumber) {
                    setUserWickets(userWickets + 1);
                    setUserBalls(userBalls + 1);
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
                        setGameStatus(USER_BOWLING)
                        setUserEndInningModal(true)
                    }
                }
                if (userWickets === teamSize) {
                    setGameStatus(USER_BOWLING_START)
                }
                console.log(userBalls)
            }

        }
        // cpu batting
        else if (gameStatus === USER_BOWLING_START) {
            setGameStatus(USER_BOWLING)
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
                if (cpuWickets === teamSize - 1) {
                    setGameStatus(GAME_END)
                }
                console.log(cpuBalls)
            }
        }
        else if (gameStatus === USER_BOWLING) {
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
                        setGameStatus(GAME_END)
                    }
                }
                if (cpuWickets === teamSize) {
                    setGameStatus(GAME_END)
                }
                console.log(cpuBalls)
            }
        }
    }

    const viewScore = () => {
        navigate('/view-score')
    }

    useEffect(() => {
        if (gameStatus === USER_BATTING_START) {
            setUserOvers(0)
            setUserBalls(0)
            setCpuBalls(0)
            setUserRuns(0)
            setCpuRuns(0)
            setUserWickets(0)
            setCPUWickets(0)
            setCpuOvers(0)

        } else if (gameStatus === USER_BOWLING_START) {
            setCpuBalls(0)
            setCpuRuns(0)
            setCPUWickets(0)
        } else if (gameStatus === GAME_END) {
            if (userRuns > cpuRuns) {
                setResultDescription("You win")

            }
            else if (userRuns < cpuRuns) {
                setResultDescription("You lose")
            }
            dispatch({ type: "cricaddicor/reducer_updateScore", payload: { team: "teamA", score: userRuns } })
            dispatch({ type: "cricaddicor/reducer_updateScore", payload: { team: "teamB", score: cpuRuns } })
            setGameEndModal(true)
        }
        else if (gameStatus === USER_BOWLING) {
            if (userRuns < cpuRuns) {
                setGameStatus(GAME_END)
                setResultDescription("CPU wins")
            }
        }
        console.log("gameStatus", gameStatus)
    }, [gameStatus, userRuns, cpuRuns])


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
                        <AlertDialogAction onClick={() => viewScore()}>View Score</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <div className="w-full h-screen flex justify-center items-start mt-2">
                <div className=" lg:w-3/5 xs:w-[90%] h-4/5 flex flex-col items-center">
                    <div className="w-full flex justify-between items-center ">
                        <div className="w-2/5 flex flex-col justify-center items-center mt-4">
                            <div className="shadow-shadow_custom2 size-32 flex justify-center items-center rounded-xl">
                                <p className="text-2xl">{team.teamA}</p>
                            </div>
                            <p className="mt-2">{userRuns}/{userWickets}</p>
                            <p>{userOvers}.{userBalls}/{totalOVers}(ov)</p>
                        </div>
                        <div>
                            <img src="/versus.png" alt="versus" className="w-16 h-16" />
                        </div>
                        <div className="w-2/5 flex flex-col justify-center items-center">
                            <div className="shadow-shadow_custom2 size-32 flex justify-center items-center rounded-xl">
                                <p className="text-2xl">{team.teamB}</p>
                            </div>
                            {gameStatus === USER_BOWLING || gameStatus === GAME_END ? <>
                                <p className="mt-2"> {cpuRuns}/{cpuWickets}</p>
                            </> : <p className="mt-2">Yet to bat</p>}
                            <p>{cpuOvers}.{cpuBalls}/{totalOVers}(ov)</p>
                        </div>
                    </div>

                    <div className="w-full  flex flex-col gap-8 shadow-shadow_custom2 rounded-xl p-4 mt-4">
                        <p className="text-center">Select runs you want to score.</p>
                        <div className="w-full flex gap-8 flex-wrap items-center justify-center">
                            {runButtons.map((item, index) => (
                                <button
                                    key={index}
                                    className="w-1/6 h-16 border-2 rounded-md border-red-500 hover:bg-red-400"
                                    onClick={() => guessedNumberHandler(item.value)}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <p className="text-center mt-4">The runs will be added to scoreboard until you and the CPU get the same number.</p>
                    <p className="text-center mt-2">If you and CPU get the same number, you are out!!!</p>
                    <div className="w-full mt-2 flex justify-between items-center ">
                        <div className="w-2/5 flex flex-col justify-center items-center">
                            <div className=" w-20 h-20  rounded-xl shadow-shadow_custom2 flex justify-center items-center">
                                <p className="text-2xl">{guessedNumber}</p>
                            </div>
                        </div>
                        <div>
                            <video src="/Cricket Ball.mp4" className="w-20 h-20"></video>
                        </div>
                        <div className="w-2/5 flex flex-col justify-center items-center">
                            <div className=" w-20 h-20  rounded-xl shadow-shadow_custom2 flex justify-center items-center">
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

export default UserBattingFirst;
