import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import Insights from './pages/Insights/Insights';
import History from './pages/Insights/History/History';
import Support from './pages/Support/Support';
import Service from './pages/Support/Service/Service';
import Learn from './pages/Insights/Learn/Learn';
import Causes from './pages/Insights/Learn/Causes';
import Definition from './pages/Insights/Learn/Definition';
import Occupation from './pages/Insights/Learn/Occupation';
import FAQ from './pages/Insights/Learn/FAQ';
import Encourage from './pages/Support/Encourage/Encourage';
import Technology from './pages/Support/Technology/Technology';
import Contact from './pages/Contact/Contact';
import Community from './pages/Contact/Community/Community';
import Organization from './pages/Contact/Organization/Organization';
import Volunteer from './pages/Contact/Volunteer/Volunteer';
import HighContrastToggle from './components/HighContrastToggle';
import { HighContrastProvider } from './components/HighContrastContext';
import './App.css';

function App() {
  return (
    <HighContrastProvider>
      <Router>
        <div className="App">
          <Header />
          <Navbar />
          <HighContrastToggle />
          <div className="content">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/About" element={<About />} />
              <Route path="/Insights" element={<Insights />} />
              <Route path="/Insights/History" element={<History />} />
              <Route path="/Insights/Experience" element={<div>Experience</div>} />
              <Route path="/Support" element={<Support />} />
              <Route path="/Insights/Learn" element={<Learn />} />
              <Route path="/Insights/Learn/Causes" element={<Causes />} />
              <Route path="/Insights/Learn/Definition" element={<Definition />} />
              <Route path="/Insights/Learn/Occupation" element={<Occupation />} />
              <Route path="/Insights/Learn/FAQ" element={<FAQ />} />
              <Route path="/Support/Service" element={<Service />} />
              <Route path="/Support/Encourage" element={<Encourage />} />
              <Route path="/Support/Technology" element={<Technology />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Contact/Community" element={<Community />} />
              <Route path="/Contact/Organization" element={<Organization />} />
              <Route path="/Contact/Volunteer" element={<Volunteer />} />
            </Routes>
          </div>
          <BackToTopButton />
          <Footer />
        </div>
      </Router>
    </HighContrastProvider>
  );
}

export default App;