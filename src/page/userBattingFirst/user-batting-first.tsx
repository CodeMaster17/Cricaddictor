// this file will be for user batting first and cpu batting second
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../redux/store/store";
import BallTracker from "../../components/Ball-Tracker";
import GameAlertDialog from "../../components/Game-alert-dialog";
import TeamScoreHead from "../../components/TeamScoreHead";
import VersusLogo from "../../components/Versus-logo";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { GAME_END, MATCH_START, USER_BATTING, USER_BATTING_START, USER_BOWLING, USER_BOWLING_START, runButtons } from "../../lib/constants";
import WicketAnimation from "./WicketAnimation";

const UserBattingFirst = () => {
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
    const [cpuOvers, setCpuOvers] = useState<number>(1);
    const [cpuBalls, setCpuBalls] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
    const [totalOVers] = useState<number>(2);
    const [wicketAnimation, setWicketAnimation] = useState<boolean>(false);

    const [userEndInninngModal, setUserEndInningModal] = useState(false)
    const [gameEndModal, setGameEndModal] = useState(false)
    const [resultDescription, setResultDescription] = useState<string>("")

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const teamA = useSelector((state: RootState) => state.game.teamName.teamA);
    // const teamB = useSelector((state: RootState) => state.game.teamName.teamB);
    const team = useSelector((state: RootState) => state.game.teamName);
    const modalHandler = () => {
        setGameStatus(USER_BATTING_START)
        setIsModalOpen(false);
    }

    const userBattingEndModalHanlder = () => {
        console.log("Modal appear")
        setUserEndInningModal(true)
        setGameStatus(USER_BOWLING_START)
    }

    const teamSize = useSelector((state: RootState) => state.game.teamSize);

    const guessedNumberHandler = (value: number) => {
        // user batting
        if (gameStatus === USER_BATTING_START) {
            setGameStatus(USER_BATTING)
            if (userOvers < totalOVers) {

                // const cpuNumber = Math.floor(Math.random() * 7);
                const cpuNumber = Math.floor(Math.random() * 7)
                setGuessedNumber(value);
                setCpuNumber(cpuNumber);
                if (value === cpuNumber) {
                    setUserWickets(userWickets + 1);
                    setUserBalls(userBalls + 1);
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
                    setGameStatus(USER_BOWLING_START)
                }
            }
        }
        else if (gameStatus === USER_BATTING) {
            if (userOvers < totalOVers) {
                // const cpuNumber = Math.floor(Math.random() * 7);
                const cpuNumber = Math.floor(Math.random() * 7)
                setGuessedNumber(value);
                setCpuNumber(cpuNumber);
                if (value === cpuNumber) {
                    setUserWickets(userWickets + 1);
                    setUserBalls(userBalls + 1);
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
                        setGameStatus(USER_BOWLING)
                        setUserEndInningModal(true)
                    }
                }
                if (userWickets === teamSize - 1) {
                    setGameStatus(USER_BOWLING_START)
                    setUserEndInningModal(true)
                }
            }

        }
        // --------------------------- cpu batting ---------------------------
        else if (gameStatus === USER_BOWLING_START) {
            setGameStatus(USER_BOWLING)
            if (cpuOvers < totalOVers) {
                const cpuNumber = Math.floor(Math.random() * 7);
                setGuessedNumber(value);
                setCpuNumber(cpuNumber);
                if (value === cpuNumber) {
                    setCPUWickets(cpuWickets + 1);
                    setCpuBalls(cpuBalls + 1);
                    setCPURunsList([...cpuRunsList, "W"]);
                }
                else {
                    setCpuRuns(cpuRuns + value);
                    setCpuBalls(cpuBalls + 1);
                    setCPURunsList([...cpuRunsList, cpuNumber]);
                }
                if (cpuBalls === 5) {
                    setCpuOvers(cpuOvers + 1);
                    setCpuBalls(0);
                }
                if (cpuWickets === teamSize - 1) {
                    setGameStatus(GAME_END)
                }
            }
        }
        else if (gameStatus === USER_BOWLING) {
            if (cpuOvers < totalOVers) {
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
                    if (cpuOvers === totalOVers - 1) {
                        setGameStatus(GAME_END)
                    }
                }
                if (cpuWickets === teamSize) {
                    setGameStatus(GAME_END)
                }
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
            {wicketAnimation ? <WicketAnimation /> : <div className=" flex h-screen w-full items-start justify-center bg-zomato_red">
                <div className="flex h-4/5 flex-col items-center xs:w-[90%] lg:w-3/5">
                    <p className="heading mt-8 text-center">CRICADDICTOR</p>
                    <div className="flex w-full items-center justify-between">
                        <TeamScoreHead
                            teamName={team.teamA}
                            runs={userRuns}
                            wickets={userWickets}
                            overs={userOvers}
                            balls={userBalls}
                            total_overs={totalOVers}
                        />
                        <VersusLogo />
                        <div className="flex w-2/5 flex-col items-center justify-center">
                            <div className="flex size-32 flex-col items-center justify-center rounded-xl shadow-shadow_custom2 bg-white">
                                <Avatar>
                                    <AvatarImage sizes="48" src="/avatars/avatar-sepcs-child.jpeg" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <p className="text-lg">{team.teamB}</p>
                            </div>
                            {gameStatus === USER_BOWLING || gameStatus === GAME_END ? <>
                                <p className="mt-2 text-white text-xl"> {cpuRuns}/{cpuWickets}</p>
                            </> : <p className="mt-2 text-white text-xl">Yet to bat</p>}
                            <p className="text-white text-xl">{cpuOvers}.{cpuBalls}/{totalOVers}(ov)</p>
                        </div>

                    </div>

                    <div className="mt-4 flex w-full flex-col gap-8 rounded-xl p-4 shadow-shadow_custom2 bg-white">
                        <p className="text-center">Select runs you want to score.</p>
                        <div className="flex w-full flex-wrap items-center justify-center gap-8">
                            {runButtons.map((item, index) => (
                                <button
                                    key={index}
                                    className="h-16 w-1/6 rounded-md border-2 border-red-500 hover:bg-red-400"
                                    onClick={() => guessedNumberHandler(item.value)}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="mt-2 flex w-full items-center justify-between">
                        <div className="flex w-2/5 flex-col items-center justify-center">
                            <div className="flex h-20 w-20 items-center justify-center rounded-xl shadow-shadow_custom2 bg-white">
                                <p className="text-2xl">{guessedNumber}</p>
                            </div>
                        </div>
                        <div>
                            <video src="/Cricket Ball.mp4" className="h-20 w-20"></video>
                        </div>
                        <div className="flex w-2/5 flex-col items-center justify-center">
                            <div className="flex h-20 w-20 items-center justify-center rounded-xl shadow-shadow_custom2 bg-white">
                                <p className="text-2xl">{cpuNumber}</p>
                            </div>
                        </div>
                    </div>
                    {gameStatus === USER_BATTING ? <BallTracker guessedRuns={guessedRuns} /> : ""}
                    {gameStatus === USER_BOWLING ? <BallTracker guessedRuns={cpuRunsList} /> : ""}

                </div>
            </div>}

        </>
    );
};

export default UserBattingFirst;
