
import React, { useEffect, useState } from 'react'
import { Component } from 'react';
import axios from 'axios';
import './form.css'
import setVar from '/home/elior/Downloads/t/src/App.js';
import {FilesReader,FilesWriter} from 'react-files-rwc';

const Form = (props) => {
  const [field, setField] = useState("")
  const [size, setSize] = useState(0)
  const [Valuerange, setValuerange] = useState(0)
  const [ValuerangeTo, setValuerangeTo] = useState(0)
  const [Temp, setTemp] = useState("")
  const [backendData, setBackendData] = useState([{}])

  const submit = async() => {
    if(field === "" || size === 0)
      return;

    props.data[`field${props.serialNumber}`] = field;
    props.data[`size${props.serialNumber}`] = size;
    props.data[`value${props.serialNumber}`] = Valuerange;
    props.data[`valueto${props.serialNumber}`] = ValuerangeTo;
    setTemp(props.data)

    const a = props.data

    const body = {a}
    const response =  await fetch(`http://localhost:5000/${props.apiendpoint}`, {
      method: 'POST',
      headers: { "content-type": "application/json"},
      body: JSON.stringify(body)
    });
//export NODE_OPTIONS=--openssl-legacy-provider

    const res = await response.json()
    console.log(res);
  }

  return (
    <div  className="gpt3__header-content__input">
      <input type="text" 
       placeholder='Field'
       
       value={field}
       onChange={(e) => {
        setField(e.target.value)
       }}/>
      <input type="text"
      placeholder='Size'
      value={size}
      onChange={(e) => {
        if(e.target.value <= 32)
          setSize(e.target.value)
       }}/>
       <input type="text"
      placeholder='Value'
      value={Valuerange}
      onChange={(e) => {
        if(e.target.value <= 65535)
          setValuerange(e.target.value)
       }}/>
       <input type="text"
      placeholder='ValueTo'
      value={ValuerangeTo}
      onChange={(e) => {
        if(e.target.value <= 65535)
          setValuerangeTo(e.target.value)
       }}/>
      <button onClick={submit}>submit</button>
    </div>
  )
}

export default Form
