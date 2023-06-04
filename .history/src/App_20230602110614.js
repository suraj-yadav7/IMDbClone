import './App.css';
import Popular from './components/Popular';
import Navbar from "./components/Navbar"
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
<>
<Router>
        <Navbar />
        <Popular />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/*" element={<h3>Error: Page Not Found</h3>} />
        </Routes>
        <Footer />
    </Router>
</>
  );
}

export default App;
