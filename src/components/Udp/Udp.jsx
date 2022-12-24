import React, { useEffect, useState } from 'react'
import { Component } from 'react';
import axios from 'axios';
import './Udp.css'
import {useNavigate, Link, Navigate} from "react-router-dom"
const Udp = () => {
    var testobj ={
        destport:"value",
        destport1:"value",
        length:"value",
        length1:"value",
        checksum:"value",
        checksum1:"value"
    }
    const navigate = useNavigate();
    const [value, setValue]= useState();
    const [valueTo, setValueTo]= useState();
    const [value2, setValue2]= useState();
    const [valueTo2, setValueTo2]= useState();
    const [value3, setValue3]= useState();
    const [valueTo3, setValueTo3]= useState();
    const submit = async() => {
        testobj.destport = value;
        testobj.destport1 = valueTo;
        testobj.length = value2;
        testobj.length1 = valueTo2;
        testobj.checksum = value3;
        testobj.checksum1 = valueTo3;
        const a = testobj
        const body = { a }
        const response = await fetch('http://localhost:5000/api3', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(body)
        });
        
        const res = await response.json()
        console.log(res);
        navigate("/DataAnalyzerLoading")
    }  
  return (
    <div className="gpt3__header-content__input">
        <br>
        </br>
        <h1 className="gpt3__title">
            Udp Header
        </h1>
        <h1 className="gpt3__text">
            Destination Port:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text"
            placeholder='ValueFrom'
            value={value}
            onChange={(e) => {
                setValue(e.target.value)
            }} />
            <input type="text"
            placeholder='ValueTo'
            value={valueTo}
            onChange={(e) => {
                setValueTo(e.target.value)
            }} />
        </h1>
        <h1 className="gpt3__text">
            Length:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            <input type="text"
            placeholder='ValueFrom'
            value={value2}
            onChange={(e) => {
                setValue2(e.target.value)
            }} />
            <input type="text"
            placeholder='ValueTo'
            value={valueTo2}
            onChange={(e) => {
                setValueTo2(e.target.value)
            }} />
        </h1>
        <h1 className="gpt3__text">
            Checksum: 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text"
            placeholder='ValueFrom'
            value={value3}
            onChange={(e) => {
                setValue3(e.target.value)
            }} />
            <input type="text"
            placeholder='ValueTo'
            value={valueTo3}
            onChange={(e) => {
                setValueTo3(e.target.value)
            }} />
        </h1>
        <br>
        </br>
        <button onClick={submit}>submit</button>
    </div>
  )
}

export default Udp
