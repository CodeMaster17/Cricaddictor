// this file will be for user batting second and cpu batting first
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
import { CPU_BATTING, CPU_BATTING_START, CPU_BOWLING, CPU_BOWLING_START, GAME_END, MATCH_START, USER_BOWLING, runButtons } from "../lib/constants";
import BallTracker from "../components/Ball-Tracker";
import VersusLogo from "@/components/Versus-logo";
import TeamScoreHead from "@/components/TeamScoreHead";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserBattingSecond = () => {
    const [guessedRuns, setGuessedRuns] = useState<any[]>([]);
    const [cpuRunsList, setCPURunsList] = useState<any[]>([]);
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
    const [totalOVers] = useState<number>(2);


    const [userEndInninngModal, setUserEndInningModal] = useState(false)
    const [gameEndModal, setGameEndModal] = useState(false)
    const [resultDescription, setResultDescription] = useState<string>("")

    // const teamA = useSelector((state: RootState) => state.game.teamName.teamA);
    // const teamB = useSelector((state: RootState) => state.game.teamName.teamB);
    const team = useSelector((state: RootState) => state.game.teamName);

    const modalHandler = () => {
        setGameStatus(CPU_BATTING_START)
        setIsModalOpen(false);
    }

    const userBattingEndModalHanlder = () => {
        setGameStatus(CPU_BOWLING_START)
        setUserEndInningModal(false)
    }


    const dispatch = useDispatch();
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
                    setCPURunsList([...cpuRunsList, "W"]);
                }
                else {
                    setCpuRuns(cpuRuns + cpuNumber);
                    setCpuBalls(cpuBalls + 1);
                    setCPURunsList([...cpuRunsList, cpuNumber]);
                }
                if (cpuBalls === 5) {
                    setCpuOvers(cpuOvers + 1);
                    setCpuBalls(0);
                }
                if (cpuWickets === teamSize - 1) {
                    setGameStatus(CPU_BOWLING_START)
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
                    setCPURunsList([...cpuRunsList, cpuNumber]);
                }
                else {
                    setCpuRuns(cpuRuns + value);
                    setCpuBalls(cpuBalls + 1);
                    setCPURunsList([...cpuRunsList, cpuNumber]);
                }
                if (cpuBalls === 5) {
                    setCpuOvers(cpuOvers + 1);
                    setCpuBalls(0);
                    if (cpuOvers === totalOVers - 1) {
                        setGameStatus(CPU_BOWLING)
                        setUserEndInningModal(true)
                    }
                }
                if (cpuWickets === teamSize - 1) {
                    setGameStatus(CPU_BOWLING_START)
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
                if (userWickets === teamSize - 1) {
                    setGameStatus(GAME_END)
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
                if (userWickets === teamSize - 1) {
                    setGameStatus(GAME_END)
                }
                console.log(cpuBalls)
            }
        }
    }
    const navigate = useNavigate()
    const viewScore = () => {
        navigate('/view-score')
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
            dispatch({ type: "cricaddicor/reducer_updateScore", payload: { team: "teamA", score: userRuns } })
            dispatch({ type: "cricaddicor/reducer_updateScore", payload: { team: "teamB", score: cpuRuns } })
            setGameEndModal(true)
        } else if (gameStatus === CPU_BOWLING) {
            if (userRuns > cpuRuns) {
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

            <div className="w-full h-screen flex justify-center items-start bg-zomato_red">
                <div className=" lg:w-3/5 xs:w-[90%] h-4/5 flex flex-col items-center">
                    <p className="heading mt-8 text-center">CRICADDICTOR</p>
                    <div className="w-full flex justify-between items-center mt-4">
                        <TeamScoreHead
                            teamName={team.teamA}
                            runs={userRuns}
                            wickets={userWickets}
                            overs={userOvers}
                            balls={userBalls}
                            total_overs={totalOVers}
                        />
                        <VersusLogo />
                        <div className="w-2/5 flex flex-col justify-center items-center">
                            <div className="shadow-shadow_custom2 size-32 flex flex-col justify-center items-center rounded-xl bg-white">
                                <Avatar>
                                    <AvatarImage sizes="48" src="/avatars/avatar-sepcs-child.jpeg" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <p className="text-lg ">{team.teamB}</p>
                            </div>
                            <p className="mt-4 text-white">{cpuRuns}/{cpuWickets}</p>
                            <p className="text-white">{cpuOvers}.{cpuBalls}/{totalOVers}(ov)</p>

                        </div>
                    </div>

                    <div className="w-full  flex flex-col gap-8 p-4 mt-8 shadow-shadow_custom2 rounded-xl bg-white">
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
                    <div className="w-full mt-4 flex justify-between items-center ">
                        <div className="w-2/5 flex flex-col justify-center items-center">
                            <div className=" w-20 h-20  rounded-xl flex justify-center items-center shadow-shadow_custom2 bg-white">
                                <p className="text-2xl">{guessedNumber}</p>
                            </div>
                        </div>
                        <div>
                            {/* <img src="/versus.png" alt="versus" className="w-20 h-20" /> */}
                            <video src="/Cricket Ball.mp4" className="w-20 h-20"></video>
                        </div>
                        <div className="w-2/5 flex flex-col justify-center items-center">
                            <div className=" w-20 h-20  rounded-xl flex justify-center items-center shadow-shadow_custom2 bg-white">
                                <p className="text-2xl">{cpuNumber}</p>
                            </div>
                        </div>
                    </div>
                    {gameStatus === CPU_BOWLING ? <BallTracker guessedRuns={guessedRuns} /> : ""}
                    {gameStatus === CPU_BATTING ? <BallTracker guessedRuns={cpuRunsList} /> : ""}
                </div>
            </div>


        </>
    );
};

export default UserBattingSecond;
