// this file will be for user batting second and cpu batting first
import GameAlertDialog from "@/components/Game-alert-dialog";
import TeamScoreHead from "@/components/TeamScoreHead";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import VersusLogo from "@/components/Versus-logo";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store/store";
import BallTracker from "../components/Ball-Tracker";
import { CPU_BATTING, CPU_BATTING_START, CPU_BOWLING, CPU_BOWLING_START, GAME_END, MATCH_START, USER_BOWLING, runButtons } from "../lib/constants";
import WicketAnimation from "./userBattingFirst/WicketAnimation";

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

    const [wicketAnimation, setWicketAnimation] = useState<boolean>(false);

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

                const cpuNumber = Math.floor(Math.random() * 7);
                setGuessedNumber(value);
                setCpuNumber(cpuNumber);
                if (value === cpuNumber) {
                    setCPUWickets(cpuWickets + 1);
                    setCpuBalls(cpuBalls + 1);
                    setCPURunsList([...cpuRunsList, "W"]);

                    // Start the wicket animation
                    setWicketAnimation(true);

                    // Stop the animation after 2 seconds
                    setTimeout(() => {
                        setWicketAnimation(false);
                    }, 3000);
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

            }
        }
        else if (gameStatus === CPU_BATTING) {
            if (cpuOvers < totalOVers) {

                const cpuNumber = Math.floor(Math.random() * 7);
                setGuessedNumber(value);
                setCpuNumber(cpuNumber);
                if (value === cpuNumber) {
                    setCPUWickets(cpuWickets + 1);
                    setCpuBalls(cpuBalls + 1);
                    setCPURunsList([...cpuRunsList, cpuNumber]);

                    // Start the wicket animation
                    setWicketAnimation(true);

                    // Stop the animation after 2 seconds
                    setTimeout(() => {
                        setWicketAnimation(false);
                    }, 3000);
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

            }

        }
        else if (gameStatus === CPU_BOWLING_START) {
            setGameStatus(USER_BOWLING)
            if (userOvers < totalOVers) {

                const cpuNumber = Math.floor(Math.random() * 7);
                setGuessedNumber(value);
                setCpuNumber(cpuNumber);
                if (value === cpuNumber) {
                    setUserWickets(userWickets + 1);
                    setCpuBalls(cpuBalls + 1);
                    setGuessedRuns([...guessedRuns, "W"]);

                    // Start the wicket animation
                    setWicketAnimation(true);

                    // Stop the animation after 2 seconds
                    setTimeout(() => {
                        setWicketAnimation(false);
                    }, 3000);
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

            }
        }
        else if (gameStatus === CPU_BOWLING) {
            if (userOvers < totalOVers) {

                const cpuNumber = Math.floor(Math.random() * 7);
                setGuessedNumber(value);
                setCpuNumber(cpuNumber);
                if (value === cpuNumber) {
                    setUserWickets(userWickets + 1);
                    setCpuBalls(cpuBalls + 1);
                    setGuessedRuns([...guessedRuns, "W"]);

                    // Start the wicket animation
                    setWicketAnimation(true);

                    // Stop the animation after 2 seconds
                    setTimeout(() => {
                        setWicketAnimation(false);
                    }, 3000);
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

    }, [gameStatus, userRuns, cpuRuns])


    return (
        <>
            <GameAlertDialog
                open={isModalOpen}
                onOpenChange={setIsModalOpen}
                title="Welcome to the Game!"
                description="The game is about to start. Prepare yourself and choose your runs wisely!
                The runs will be added to scoreboard until you and the CPU get the same number.
                If you and CPU get the same number, you are out!!!
                "
                actionText="Start"
                onActionClick={modalHandler}
            />

            {/* after  user batting finishes */}
            <GameAlertDialog
                open={userEndInninngModal}
                onOpenChange={setUserEndInningModal}
                title="End of Innings!"
                description="Your batting innings have ended. Get ready to start bowling!"
                actionText="Start Bowling"
                onActionClick={userBattingEndModalHanlder}
            />

            <GameAlertDialog
                open={gameEndModal}
                onOpenChange={setGameEndModal}
                title="Game Ends!"
                description={resultDescription}
                actionText="View Score"
                onActionClick={viewScore}
            />
            {wicketAnimation ? <WicketAnimation /> :
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
                </div>}


        </>
    );
};

export default UserBattingSecond;
