import { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import ChooseSide from './page/choose-side'
import ChooseBatBowl from './page/ChooseBatBowl/choose-bat-bowl'
import ChooseTeamSize from './page/ChooseTeamSize/ChooseTeamSize'
import CpuChooseBattingBowl from './page/CPUChooseBattingBowling/cpu-choose-batting-bowl'
import Home from './page/Home'
import OpponentTeam from './page/opponent-team'
import TeamDetails from './page/team-details'
import TeamNameForm from './page/TeamNamePage/team-name-form'
import TossPage from './page/TossPage/TossPage'
import UserBattingSecond from './page/user-batting-second'
import UserBattingFirst from './page/userBattingFirst/user-batting-first'
import ViewScore from './page/view-score'





function App() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust width as needed
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize); // Listen for window resize

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  return isMobile ? (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/size-selection" element={<ChooseTeamSize />} />
        <Route path="/team-name-form" element={<TeamNameForm />} />
        <Route path="/opponent-team" element={<OpponentTeam />} />
        <Route path="/choose-side" element={<ChooseSide />} />
        <Route path="/toss" element={<TossPage />} />
        <Route path="/opponent" element={<CpuChooseBattingBowl />} />
        <Route path="/teams" element={<TeamDetails />} />
        <Route path="/choose-bat-bowl" element={<ChooseBatBowl />} />
        <Route path="/game/1" element={<UserBattingFirst />} />
        <Route path="/game/2" element={<UserBattingSecond />} />
        <Route path="/view-score" element={<ViewScore />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  ) : (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Please open this app on a mobile device for the best experience.</h2>
    </div>
  );
}

export default App
