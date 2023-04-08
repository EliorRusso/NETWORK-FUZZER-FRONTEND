import React from 'react';
import './MainMenu.css';
import bamza from '/home/elior/Downloads/t/src/images/Bamza_108 (1).png'
import IDF from '/home/elior/Downloads/t/src/images/IAF_New_Logo_2018.png'
import IDF2 from '/home/elior/Downloads/t/src/images/Badge_of_the_Israel_Defense_Forces.new.svg.png'
import {useNavigate, Link, Navigate} from "react-router-dom"
const MainMenu = () => {
    const navigate = useNavigate();
    const submit = async (req, res) => {
        navigate('/Declaration');
    }
    return (
        <div>
            <h className="main-menu-text" >
                NETWORK FUZZER
            </h>
            <h className="main2" >
                Fuzz testing, simplified.
            </h>
            

            <img style={{
                position: 'absolute',
                bottom: 'px',
                width: '10%',
                left: '500px',
                bottom: '300px',
                animation: 'fadeIn 1s ease-in-out forwards',
                opacity: '0',
                animationDelay: '3s',
            }} src={bamza} alt="bamza" />
            <img
                style={{
                    position: 'absolute',
                    bottom: 'px',
                    width: '10%',
                    left: '800px',
                    bottom: '300px',
                    opacity: '0',
                    animation: 'fadeIn 1s ease-in-out forwards',
                    animationDelay: '4s',
                }}
                src={IDF}
                alt="IDF"
            />

            <img style={{
                position: 'absolute',
                bottom: 'px',
                width: '10%',
                left: '1100px',
                bottom: '300px',
                opacity: '0',
                animation: 'fadeIn 1s ease-in-out forwards',
                animationDelay: '5s',
            }} src={IDF2} alt="IDF2" />
            <button className='button1' onClick={submit}>START</button>
        </div>
        

    );
};

export default MainMenu;
