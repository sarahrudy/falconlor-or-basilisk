import React from 'react' 
import turingSortingHat from '../../Images/turing_sorting_hat.png'
import { Link } from 'react-router-dom'
import '../NavBar/NavBar.css'

const NavBar = () => {

  return (
    <nav>
      <Link to='/'>
        <img src={ turingSortingHat } className="turing-sorting-hat" alt="turing logo with sorting hat"></img>
      </Link>
      <h1>  Turing Sorting Hat</h1>
    </nav>
  )
}

export default NavBar