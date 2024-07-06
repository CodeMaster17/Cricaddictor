import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './page/Home'
import UserBattingFirst from './page/user-batting-first'
import ChooseBatBowl from './page/choose-bat-bowl'
import ChooseSide from './page/choose-side'
import ChooseTeamSize from './page/choose-team-size'
import OpponentTeam from './page/opponent-team'
import TeamDetails from './page/team-details'
import Toss from './page/toss'
import UserBattingSecond from './page/user-batting-second'
import ViewScore from './page/view-score'

import TeamNameForm from './page/team-name-form'
import CpuChooseBattingBowl from './page/cpu-choose-batting-bowl'
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/size-selection" element={<ChooseTeamSize />} />
          {/* <Route path="/player-selection" element={<ChooseTeamSize />} /> */}
          <Route path="/my-team" element={<TeamNameForm />} />
          <Route path="/opponent-team" element={<OpponentTeam />} />
          <Route path="/choose-side" element={<ChooseSide />} />
          <Route path="/toss" element={<Toss />} />
          <Route path="/opponent" element={<CpuChooseBattingBowl />} />
          <Route path="/teams" element={<TeamDetails />} />
          <Route path="/choose-bat-bowl" element={<ChooseBatBowl />} />
          <Route path="/game/1" element={<UserBattingFirst />} />
          <Route path="/game/2" element={<UserBattingSecond />} />
          <Route path="/view-score" element={<ViewScore />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
