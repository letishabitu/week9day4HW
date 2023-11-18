import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import About from '../Pages.jsx/About';
import Dashboard from '../Pages.jsx/Dashboard';
import Homepage from '../Pages.jsx/Homepage';
import Stock from '../Pages.jsx/Stock';
import Nav from './components/Nav';


function App() {
  

  return (
    
    <div className='App'>
    <Nav />
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/stock/:symbol/' element={<Stock/>} />
      <Route path='/about' element={<About/>} />

    </Routes>
    </div>
     
  )
}

export default App
