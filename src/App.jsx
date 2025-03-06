import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "./components/header";
import { Footer } from "./components/footer";
// import { createBrowserRouter } from 'react-router';
import './styles.css'
import Home from './pages/home';
import { Projects } from './pages/projet';

// const router = createBrowserRouter([
  
// ])

function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/projet" element={<Projects />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
