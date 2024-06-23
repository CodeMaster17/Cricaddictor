// components/TeamDetails.js
import { useSelector } from "react-redux";

const TeamDetails = () => {
    // Access team details from the Redux store
    const result = useSelector((state) => state);
    console.log(result)
    return (
        <div>
            <h1>Team Details</h1>
            <div>
                <h2>Team A</h2>
                {/* <p>Player 1: {teamA.player1}</p> */}
                {/* <p>Player 2: {teamA.player2}</p> */}
            </div>
            <div>
                <h2>Team B</h2>
                {/* <p>Player 1: {teamB.player1}</p> */}
                {/* <p>Player 2: {teamB.player2}</p> */}
            </div>
        </div>
    );
};

export default TeamDetails;
