import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import NavBar from './components/Navbar'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  )
}

export default App
