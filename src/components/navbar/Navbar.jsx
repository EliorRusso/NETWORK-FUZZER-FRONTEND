import React from 'react'
import networkfuzzer from '../../images/networkfuzzer.png'
import './navbar.css'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/dos');
    fetch('/execute-dos')
      .then(response => response.text())
      .then(text => console.log(text));
  }
  const handleClick3 = () => {
    navigate('/randominputs');
    fetch('/random-inputs')
      .then(response => response.text())
      .then(text => console.log(text));
  }
  const handleClickHome = () => {
    navigate('/Declaration');
    fetch('/jsonData')
      .then(response => response.text())
      .then(text => console.log(text));
  }
  return (
    <div className='fuzzernavbar'>
      <img src={networkfuzzer} alt="networkfuzzer" />
      <button onClick={handleClickHome}
        style={{
          position: 'absolute',
          top: '20px',
          left: '500px',
          background: '#FF4820',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '12px 24px',
          fontSize: '40px',
          fontFamily: 'Manrope',
          fontWeight: '100',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.2s ease-in-out'
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        Home
      </button>
      <button onClick={handleClick}
        style={{
          position: 'absolute',
          top: '20px',
          left: '700px',
          background: 'rgb(5, 0, 34)',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '12px 24px',
          fontSize: '40px',
          fontFamily: 'Manrope',
          fontWeight: '100',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.2s ease-in-out'
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        DDoS Testing
      </button>
      <button onClick={handleClick3}
        style={{
          position: 'absolute',
          top: '20px',
          left: '1050px',
          background: 'rgb(5, 0, 34)',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '12px 24px',
          fontSize: '40px',
          fontFamily: 'Manrope',
          fontWeight: '100',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.2s ease-in-out'
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        Random Inputs Generation
      </button>
    </div>
  )
}

export default Navbar
