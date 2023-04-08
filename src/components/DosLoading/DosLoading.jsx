import React, { useState, useEffect } from 'react';
import './DosLoading.css'

const LoadingScreen = () => {
  const [percent, setPercent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (percent < 100) {
        setPercent(prev => prev + 1);
      } else {
        setLoading(false);
        clearInterval(interval);
      }
    }, 50);
    
    const timeout = setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, 5000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    }
  }, [percent]);

  return (
    <div style={{ display: loading ? 'flex' : 'none', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'Lato Black' }}>
      <h2 style={{ color: '#ff6106', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '30px', fontSize: '2em' }}>Loading...</h2>
      <div style={{ width: '50%', height: '10px', borderRadius: '5px', overflow: 'hidden', background: '#ffff' }}>
        <div style={{ width: `${percent}%`, height: '100%', borderRadius: '5px', background: '#ff6106', transition: 'width 0.5s ease' }}></div>
      </div>
      <p style={{ marginTop: '20px', color: '#ff6106', fontWeight: 'bold', textShadow: '0 0 5px #ff6106', fontSize: '1.5em' }}>{percent}%</p>
    </div>
  );
};

export default LoadingScreen;
