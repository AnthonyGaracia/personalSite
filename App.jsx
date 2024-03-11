import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import emailjs from '@emailjs/browser';
import NavBar from './navBar' 
import About from './About'
import Contact from './Contact'
import Home from './Home'





function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
       
        <NavBar/>

       <div>
        <Routes>
          <Route path="/" element={ <Home />} /> 
          <Route path="/about" element={ <About />} />  
          <Route path="/contact" element={ <Contact />} />
        </Routes>
      </div>
    
      <About/>
      <Contact/>

    
     
      </div>
      
  )
}

export default App
