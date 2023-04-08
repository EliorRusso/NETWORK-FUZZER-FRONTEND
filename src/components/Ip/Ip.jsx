
import React, { useEffect, useState } from 'react'
import { Component } from 'react';
import axios from 'axios';
import './Ip.css'

const Ip = (props) => {
    const [value, setValue] = useState()//version
    const [valueTo, setValueTo] = useState()
    const [value2, setValue2] = useState()//IHL
    const [valueTo2, setValueTo2] = useState()
    const [value3, setValue3] = useState()//TOS
    const [valueTo3, setValueTo3] = useState()
    const [value4, setValue4] = useState()//TOTAL LENGTH
    const [valueTo4, setValueTo4] = useState()
    const [value5, setValue5] = useState()//Identification
    const [valueTo5, setValueTo5] = useState()
    const [value6, setValue6] = useState()//Flags
    const [valueTo6, setValueTo6] = useState()
    const [value7, setValue7] = useState()//Fragment Offset
    const [valueTo7, setValueTo7] = useState()
    const [value8, setValue8] = useState()//Time to live
    const [valueTo8, setValueTo8] = useState()
    const [value9, setValue9] = useState()//Protocol
    const [valueTo9, setValueTo9] = useState()
    const [value10, setValue10] = useState()//Header Checksum
    const [valueTo10, setValueTo10] = useState()
    var jsonObj = {
            version: "value1",
            version1: "value2",
            IHL: "value3",
            IHL1: "value",
            TOS:"value",
            TOS1:"value1",
            TLEN:"value",
            TLEN1:"value",
            ID:"value",
            ID1:"value",
            FLAGS:"value",
            FLAGS1:"value",
            OFFSET:"value",
            OFFSET1:"value",
            Ttl:"value",
            Ttl1:"value",
            Protocol:"value",
            Protocol1:"value",
            Checksum:"value",
            Checksum1:"value"
    }
    const submit = async() => {
        if (value === 0 || valueTo === 0)
            return;
        // props.data[`value${props.serialNumber}`] = value;
        // props.data[`value2${props.serialNumber}`] = valueTo;
        jsonObj.version = value;
        jsonObj.version1 = valueTo;
        jsonObj.IHL = value2;
        jsonObj.IHL1 = valueTo2;
        jsonObj.TOS = value3;
        jsonObj.TOS1 = valueTo3;
        jsonObj.TLEN = value4;
        jsonObj.TLEN1 = valueTo4;
        jsonObj.ID = value5;
        jsonObj.ID1 = valueTo5;
        jsonObj.FLAGS = value6;
        jsonObj.FLAGS1 = valueTo6
        jsonObj.OFFSET = value7;
        jsonObj.OFFSET1 = valueTo7;
        jsonObj.Ttl = value8;
        jsonObj.Ttl1 = valueTo8;
        jsonObj.Protocol = value9;
        jsonObj.Protocol1 = valueTo9;
        jsonObj.Checksum = value10;
        jsonObj.Checksum1 = valueTo10;
        const a = jsonObj
        const body = { a }
        const response = await fetch('http://localhost:5000/api2', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(body)
        });
        //export NODE_OPTIONS=--openssl-legacy-provider

        const res = await response.json()
        console.log(res);
    }
    return (
        <div className="gpt3__header-content__input">
            <br>
            </br>
            <h1 className = "gpt3__title">
                Internet Protocol Header
            </h1>
            <br/>
            <h1 className="gpt3__text">
                Version:
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
            <br/>

            <br/>
            <h1 className="gpt3__text">
                Internet Header Length:
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
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
            <br/>
            
            <br/>
            <h1 className="gpt3__text">
                Type Of Service:
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
            <br/>

            <br/>
            <h1 className="gpt3__text">
                Total Length:
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"
                placeholder='ValueFrom'
                value={value4}
                onChange={(e) => {
                    setValue4(e.target.value)
                }} />
                <input type="text"
                placeholder='ValueTo'
                value={valueTo4}
                onChange={(e) => {
                    setValueTo4(e.target.value)
                }} />
            </h1>
            <br/>

            <br/>
            <h1 className="gpt3__text">
                Identification:
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"
                placeholder='ValueFrom'
                value={value5}
                onChange={(e) => {
                    setValue5(e.target.value)
                }} />
                <input type="text"
                placeholder='ValueTo'
                value={valueTo5}
                onChange={(e) => {
                    setValueTo5(e.target.value)
                }} />
            </h1>
            <br/>
            

            <br/>
            <h1 className="gpt3__text">
                Flags:
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"
                placeholder='ValueFrom'
                value={value6}
                onChange={(e) => {
                    setValue6(e.target.value)
                }} />
                <input type="text"
                placeholder='ValueTo'
                value={valueTo6}
                onChange={(e) => {
                    setValueTo6(e.target.value)
                }} />
            </h1>
            <br/>
            
            <br/>
            <h1 className="gpt3__text">
                Fragment Offset:
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;
                <input type="text"
                placeholder='ValueFrom'
                value={value7}
                onChange={(e) => {
                    setValue7(e.target.value)
                }} />
                <input type="text"
                placeholder='ValueTo'
                value={valueTo7}
                onChange={(e) => {
                    setValueTo7(e.target.value)
                }} />
            </h1>
            <br/>
            
            <br/>
            <h1 className="gpt3__text">
                Time to live:
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;
                <input type="text"
                placeholder='ValueFrom'
                value={value8}
                onChange={(e) => {
                    setValue8(e.target.value)
                }} />
                <input type="text"
                placeholder='ValueTo'
                value={valueTo8}
                onChange={(e) => {
                    setValueTo8(e.target.value)
                }} />
            </h1>
            <br/>

            <br/>
            <h1 className="gpt3__text">
                Protocol:
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                <input type="text"
                placeholder='ValueFrom'
                value={value9}
                onChange={(e) => {
                    setValue9(e.target.value)
                }} />
                <input type="text"
                placeholder='ValueTo'
                value={valueTo9}
                onChange={(e) => {
                    setValueTo9(e.target.value)
                }} />
            </h1>
            <br/>

            <br/>
            <h1 className="gpt3__text">
                Header Checksum:
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"
                placeholder='ValueFrom'
                value={value10}
                onChange={(e) => {
                    setValue10(e.target.value)
                }} />
                <input type="text"
                placeholder='ValueTo'
                value={valueTo10}
                onChange={(e) => {
                    setValueTo10(e.target.value)
                }} />
            </h1>
            <br/>
            <button onClick={submit}>Submit Values</button>
        </div>
    )
}

export default Ip
