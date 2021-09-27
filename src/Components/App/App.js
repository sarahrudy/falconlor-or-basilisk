import React from 'react'
import '../App/App.css'
import NavBar from '../NavBar/NavBar'
import { Route, Switch } from 'react-router-dom'
import Questions from '../Questions/Questions'
import Results from '../Results/Results'
import Error from '../Error/Error'


const App = () => {

  return (
    <main className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={ Questions } />
        <Route exact path="/results/:winningHouse" component={ Results } />
        <Route component={ Error } />
      </Switch>
    </main>
  )
}

export default App
