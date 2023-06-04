import './App.scss';
import Card from './components/Card';
import Details from './components/Details';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Popular from './components/Popular';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"



function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Card/> */}
          <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route exact path={"popular/:id"} element={<Popular />} />
            <Route exact path="details/" element={<Details />} />
            <Route exact path={"/*"} element={<h3>Error: Page Not Found (404)</h3>} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
