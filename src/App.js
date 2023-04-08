
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Header from './components/Header/Header'
import Createfield from './components/CreateField/Createfield'
import Ip from './components/Ip/Ip'
import DosLoading from './components/DosLoading/DosLoading'
import { FilesReader, FilesWriter } from 'react-files-rwc';
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import Udp from './components/Udp/Udp'
import TextDisplay from './components/TextDisplay/TextDisplay'
import PacketInspection from './components/PacketInspection/PacketInspection'
import StatisticsText from './components/StatisticsText/StatisticsText'
import MainMenu from './components/MainMenu/MainMenu'
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
        <Route exact path="/" element={<><MainMenu /></>} />
        {/* <Route exact path = "/" element = {<><Navbar/></>} /> */}
        <Route exact path="/Declaration" element={<><Navbar /><Header /><Createfield /><Ip /><Udp /></>} />
        <Route exact path="/dos" element={<><Navbar /><DosLoading /></>} />
        <Route path="/DataAnalyzerLoading" element={<><Navbar /><LoadingScreen /></>} />
        <Route path="/DataAnalyzer" element={<><Navbar /><PacketInspection /><TextDisplay /><StatisticsText /></>} />
      </Routes>
    </Router>
  )
}

export default App
