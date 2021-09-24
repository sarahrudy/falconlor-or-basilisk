import React from 'react'
import '../App/App.css'
import NavBar from '../NavBar/NavBar'
import { Route } from 'react-router-dom'


const App = () => {

  return (
    <div className="App">
      <Route exact path="/" component={ NavBar } />
    </div>
  )
}

export default App
