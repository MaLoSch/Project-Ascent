import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import './App.css'
import Exercises from './components/Exercises/Exercises'
import SingleExercise from './components/SingleExercise/SingleExercise'
import Profile from './components/Profile/Profile'
import Timer from './components/Timer/Timer'
import Layout from './components/Layout/Layout'
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
          <Route path="/timer" element={<Timer />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/" element={<Outlet />}></Route>
        </Route>  
      </Routes>

      <nav className='main-nav'>
        <ul className='tab-bar'>
          <li><Link to='/exercises'>Exercises</Link></li>
          <li><Link to='/timer'>Timer</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
        </ul>
      </nav>
    </Router>
    </>
  )
}

export default App
