import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import MyTeam from './page/my-team'
import OpponentTeam from './page/opponent-team'
import TeamDetails from './page/team-details'
import TeamSelection from './page/team-selection'
import ChooseTeamSize from './page/choose-team-size'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player-selection" element={<ChooseTeamSize />} />
          <Route path="/team-selection" element={<TeamSelection />} />
          <Route path="/my-team" element={<MyTeam />} />
          <Route path="/opponent-team" element={<OpponentTeam />} />
          <Route path="/teams" element={<TeamDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
