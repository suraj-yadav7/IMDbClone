import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Popular from './components/Popular';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"



function App() {
  return (
    <>
      <Router>

        <Navbar />
        <Routes>
          
        <Route exact path={"populat/:id"} element={<Popular />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
