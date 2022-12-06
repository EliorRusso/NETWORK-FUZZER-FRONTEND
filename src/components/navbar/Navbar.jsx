import React from 'react'
import networkfuzzer from '../../images/networkfuzzer.png'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='fuzzernavbar'>
      <img src = {networkfuzzer} alt="networkfuzzer"/>
    </div>
  )
}

export default Navbar
