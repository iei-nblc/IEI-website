import React from 'react';
import Header from '../components/header';
import Navigation from '../components/navigation';
import MainContent from '../components/MainContent';
// import AboutUs from '../components/AboutUs';
import Footer from '../components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <MainContent />
      {/* <AboutUs /> */}
      <Footer />
    </div>
  );
}

export default App;
