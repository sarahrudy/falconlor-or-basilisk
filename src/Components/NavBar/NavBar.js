import React from 'react' 
import turingSortingHat from '../../Images/turing_sorting_hat.png'
import '../NavBar/NavBar.css'

const NavBar = () => {

  return (
    <nav>
      <Link to='/'>
        <img src={ turingSortingHat } className="turing-sorting-hat" alt="turing logo with sorting hat"></img>
      </Link>
    </nav>
  )
}

export default NavBar