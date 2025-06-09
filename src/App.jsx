import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Header  from "./components/Header";
import  Footer  from "./components/Footer";
// import { createBrowserRouter } from 'react-router';
import './styles.css'
import Home from './pages/home';
import Projects  from './pages/projet';
import DevProjects from './pages/devProjects';
import OtherProjects  from './pages/otherProjects';
import ContactForm from './pages/contact';
import CharteGraph  from './pages/charte-graphique';
import CGU from './pages/cgu';
import { useState, useEffect } from "react";
// const router = createBrowserRouter([
  
// ])

function App() {
  const [lightMode, setLightMode] = useState(false);
  
  useEffect(() => {
    const html = document.documentElement;
    if (lightMode) {
      html.classList.add("light");
    } else {
      html.classList.remove("light");
    }
  }, [lightMode]);


  return (

  <>
    <div className="  bg-[url('./assets/img/synth-bg.svg')] light:bg-[url('./assets/img/synth-bg-light.svg')] bg-cover bg-center bg-no-repeat bg-fixed w-full min-h-screen">
      <Router>
        <Header lightMode={lightMode} setLightMode={setLightMode} />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/projet/*" element={<Projects />}/>
          <Route path='/devProjects' element={<DevProjects/>}/>
          <Route path='/otherProjects' element={<OtherProjects/>}/>
          <Route path='/contact' element={<ContactForm/>}/>
          <Route path='/charte-graphique' element={<CharteGraph/>}/>
          <Route path='/cgu' element={<CGU/>}/>
        </Routes>
        <Footer />
      </Router>
    </div> 
  </>
  )
}

export default App
