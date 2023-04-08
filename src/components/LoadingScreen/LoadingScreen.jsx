import React from 'react';
import './LoadingScreen.css';
import { useNavigate } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import { useEffect } from 'react';
function MyComponent() {
    const navigate = useNavigate();
    let timeoutId;
    // Show the loading screen for 40 seconds
    useEffect(() => {
        timeoutId = setTimeout(() => {
            navigate("/DataAnalyzer")
        }, 40000);
        return () => clearTimeout(timeoutId);
    }, []);
    return (
        <div>
            <p className="loading-text">Loading</p>
            <div className="spinner" />
        </div>
    );
}

export default MyComponent;
