import React from 'react'
import '../App/App.css'
import NavBar from '../NavBar/NavBar'
import { Route } from 'react-router-dom'
import Questions from '../Questions/Questions'


const App = () => {

  return (
    <main className="App">
      <NavBar />
      <Route exact path="/" component={ Questions } />
    </main>
  )
}

export default App
