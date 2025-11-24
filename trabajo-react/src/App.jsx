import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    
    <div className="font-sans antialiased text-gray-900"> {/* esto es para la letra de */}
      

      <Hero />
      
     
      <Footer />
      
    </div>
import Navbar from './components/NavBar.jsx'
import InfoSection from './components/InfoSection.jsx'
import './App.css'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <InfoSection></InfoSection>
      
    </>
  );
}

export default App;