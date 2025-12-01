import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';

// --- CORRECCIÓN AQUÍ ---
import cajeraImg from './media/Cajera.jpeg'; 
// Si tienes la otra imagen también en media:
// import imagenHeader from './media/ImagenHeader.jpg';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      
      <Section 
        title="Atención al cliente" 
        text="Nuestro equipo está siempre disponible para ayudarte." 
        imageSrc={cajeraImg}
        inverted={true}
      />
    </div>
  );
}

export default App;