import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import MyTeam from './page/my-team'
import OpponentTeam from './page/opponent-team'
import TeamDetails from './page/team-details'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-team" element={<MyTeam />} />
          <Route path="/opponent-team" element={<OpponentTeam />} />
          <Route path="/teams" element={<TeamDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
