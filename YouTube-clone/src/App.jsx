import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Video from './Pages/Videos/Video'
const App = () => {
  const [sidebar,setsidebar]=useState(true);
  return (
    <>
    <Navbar setsidebar={setsidebar}/>
    <Routes>
      <Route path='/' element={<Home sidebar={sidebar}/>}/>
      <Route path='/video' element={<Video/>}/>
    </Routes>
    </>
  )
}

export default App

// /:catogoryId/:videoId