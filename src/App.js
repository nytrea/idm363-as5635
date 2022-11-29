import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Categories from './Components/Categories/Categories';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Categories />
      <Footer />

    </div>
  );
}

export default App;
