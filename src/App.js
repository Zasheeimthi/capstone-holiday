import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/aboutus';
import Contact from './pages/contact';
import Bali from './desinationpage/bali';
import './index.css';
import Header from './components/header';
import Footer from './components/footer';
import BaliDetails from './detailspage/Balidetails'; // Import your details component
import Layout from './components/layout';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'typeface-poppins';



function App() {
  return (
    <Router>
       <Layout>
       <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* International Packages */}
        <Route path="/international/bali" element={<Bali />} />
        <Route path="/international/bali/:id" element={<BaliDetails />} /> {/* Add this route for details */}
        
        {/* Domestic Packages */}
        {/* <Route path="/domestic/goa" element={<Goa />} />
        <Route path="/domestic/andaman" element={<Andaman />} /> */}
      </Routes>
      <Footer />
      </Layout>
    </Router>
  );
}

export default App;
