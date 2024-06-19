import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import MyTeam from './page/MyTeam'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-team" element={<MyTeam />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
