import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Header  from "./components/Header";
import  Footer  from "./components/Footer";
// import { createBrowserRouter } from 'react-router';
import './styles.css'
import Home from './pages/home';
import Projects  from './pages/projet';
// const router = createBrowserRouter([
  
// ])

function App() {


  return (

   <>
       <div className=" inset-0 bg-[url('./assets/img/synth-bg.svg')] bg-cover bg-center bg-fixed relative">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/Projet/*" element={<Projects />}/>
        </Routes>
        <Footer />
      </Router>
      </div> 
  </>
  )
}

export default App
