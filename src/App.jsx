import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.scss'
import Exercises from './components/Exercises/Exercises'
import SingleExercise from './components/SingleExercise/SingleExercise'
import Profile from './components/Profile/Profile'
import Timer from './components/Timer/Timer'
import MiniTimer from './components/Timer/MiniTimer/MiniTimer'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import { exercises } from './data/exercises.json'
import { useState, useContext } from 'react'
import { TimerContext } from './components/Timer/TimerContext/TimerContext'

function AppContent() {
  const location = useLocation();
  const { timerState } = useContext(TimerContext);
  const [exerciseData] = useState(exercises);

  const showMiniTimer = timerState === 'running' && location.pathname !== '/timer';

  return (
    <>
      {showMiniTimer && <MiniTimer />} {/* 🛠 Fixed typo in component name */}

      <Routes>
        <Route element={<Layout data={exerciseData} />}>
          <Route path="/exercises" element={<Exercises data={exerciseData} />} />
          <Route path="/exercises/:id" element={<SingleExercise data={exerciseData} />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;