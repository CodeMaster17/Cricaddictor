import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import UserBattingFirst from './page/userBattingFirst/user-batting-first'
import ChooseBatBowl from './page/ChooseBatBowl/choose-bat-bowl'
import ChooseSide from './page/choose-side'
import ChooseTeamSize from './page/choose-team-size'
import OpponentTeam from './page/opponent-team'
import TeamDetails from './page/team-details'
import UserBattingSecond from './page/user-batting-second'
import ViewScore from './page/view-score'
import TeamNameForm from './page/TeamNamePage/team-name-form'
import CpuChooseBattingBowl from './page/CPUChooseBattingBowling/cpu-choose-batting-bowl'
import TossPage from './page/TossPage/TossPage'
function App() {
  return (
    <Router >

      {/* <Navbar /> */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/size-selection" element={<ChooseTeamSize />} />
        {/* <Route path="/player-selection" element={<ChooseTeamSize />} /> */}
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
  )
}

export default App
