import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Education from './Education'
import Contact from './Contact'
import Intro from './Intro'

const App = () => {
  return (
   
   <BrowserRouter>
   <div className='bg-blue-950 text-white'>
    <Header/>
   <Routes>
    <Route path='/' element={<Intro/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Skills' element={<Skills/>}></Route>
    <Route path='/Projects' element={<Projects/>}></Route>
    <Route path='/Education' element={<Education/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
   </Routes>
   <Footer/>
   </div>
   </BrowserRouter>
  
  )
  
}



export default App