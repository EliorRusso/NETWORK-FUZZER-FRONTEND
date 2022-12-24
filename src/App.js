
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Header from './components/Header/Header'
import Createfield from './components/CreateField/Createfield'
import Ip from './components/Ip/Ip'
import { FilesReader, FilesWriter } from 'react-files-rwc';
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import Udp from './components/Udp/Udp'
import TextDisplay from './components/TextDisplay/TextDisplay'
{/* <Header />
<Createfield />
<Ip />
<Udp /> */}
var cors = require('cors')
const App = () => {
  const [Var, setVar] = useState("")
  return (
    <Router>
      <div className="App">
        <div className="gradient_bg">
        </div>
      </div>
      <Routes>
        <Route exact path = "/" element = {<><Navbar/><Header/><Createfield/><Ip/><Udp/></>} />
        <Route path = "/DataAnalyzerLoading" element = {<><Navbar /><LoadingScreen/></>} />
        <Route path = "/DataAnalyzer" element = {<><Navbar /><TextDisplay/></>} />
      </Routes>
    </Router>
  )
}

export default App
