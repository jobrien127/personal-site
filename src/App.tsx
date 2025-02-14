// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TabBar from './components/TabBar/TabBar';
import Home from './components/Home/Home';
// import About from './components/About/About';
// import Photos from './components/Photos/Photos';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
// import Blog from './components/Blog/Blog';
// import BlogPost from './components/Blog/BlogPost';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        {/* Tab Bar for Navigation */}
        <TabBar />

        {/* Main Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/photos" element={<Photos />} /> */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            {/* <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
