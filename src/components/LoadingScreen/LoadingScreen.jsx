import React from 'react';
import './LoadingScreen.css';
import { useNavigate } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
function MyComponent() {
    const navigate = useNavigate();

    // Show the loading screen for 20 seconds
    setTimeout(() => {
        // Navigate to the new component
        navigate("/DataAnalyzer")
    }, 20000);
    return (
        <div>
            <p className="loading-text">Loading...</p>
            <div className="spinner" />
        </div>
    );
}

export default MyComponent;
