
import React, {useState} from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Header from './components/Header/Header'
import Createfield from './components/CreateField/Createfield'
import Ip from './components/Ip/Ip'
import {FilesReader,FilesWriter} from 'react-files-rwc';
import Udp from './components/Udp/Udp'
var cors = require('cors')
const App = () => {
  const [Var, setVar] = useState("")
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
        <Createfield />
        <Ip />
        <Udp />
      </div>
    </div>
  )
}

export default App
