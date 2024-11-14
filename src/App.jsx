import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import Exercises from './components/Exercises/Exercises'
import SingleExercise from './components/SingleExercise/SingleExercise'
import Profile from './components/Profile/Profile'
import TimerTest from './components/Timer/TimerTest'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import { exercises } from './data/exercises.json' // import the exercises.json file
import { useState } from 'react'


function App() {

  const [exerciseData] = useState(exercises);

  return (
    <>
    <Router>
      <Routes>
        <Route element={<Layout data={exerciseData} />}>
          <Route path="/exercises" element={<Exercises data={exerciseData}/>}></Route>
          <Route path="/exercises/:id" element={<SingleExercise data={exerciseData}/>}></Route>
          <Route path="/timer" element={<TimerTest />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Route>  
      </Routes>
    </Router>
    </>
  )
}

export default App
