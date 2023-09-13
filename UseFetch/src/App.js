import React from 'react'
import MyComponent from './components/MyComponent'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <div className='App'>
      <MyComponent />

      {/* <header>
        <nav>
          <NavLink to ="/">Home<NavLink/>
          <NavLink to ="/about">About<NavLink/>
          <NavLink to ="/contact">Contact<NavLink/>
        </nav>
      </header> */}


      <Routes>
        <Route path ='/' element ={<Home />} />
        <Route path ='/about' element ={<About />} />
        <Route path ='/contact' element ={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
