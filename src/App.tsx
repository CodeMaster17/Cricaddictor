import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import MyTeam from './page/my-team'
import OpponentTeam from './page/opponent-team'
import TeamDetails from './page/team-details'
import ChooseTeamSize from './page/choose-team-size'
import Navbar from './components/Navbar'
import ChooseSide from './page/choose-side'
import Toss from './page/toss'
import ChooseBatBowl from './page/choose-bat-bowl'
import Batting from './page/batting'
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/size-selection" element={<ChooseTeamSize />} />
          {/* <Route path="/player-selection" element={<ChooseTeamSize />} /> */}
          <Route path="/my-team" element={<MyTeam />} />
          <Route path="/opponent-team" element={<OpponentTeam />} />
          <Route path="/choose-side" element={<ChooseSide />} />
          <Route path="/toss" element={<Toss />} />
          <Route path="/teams" element={<TeamDetails />} />
          <Route path="/choose-bat-bowl" element={<ChooseBatBowl />} />
          <Route path="/batting" element={<Batting />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
