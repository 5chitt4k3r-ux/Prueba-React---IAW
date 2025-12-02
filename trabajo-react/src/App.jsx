import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
import './App.css';

import cajeraImg from './media/Cajera.jpeg'; 
import fruteroImg from './media/frutero.jpeg'; 

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      
      {/* SECCIÓN 1: Estilo Estándar (Fondo blanco, letra oscura) */}
      <Section 
        title="Compra online" 
        text="Recibe tu pedido en casa con la misma calidad y frescura de siempre." 
        imageSrc={cajeraImg}
        inverted={false}
        // Puedes personalizarlo ligeramente si quieres:
        titleColor="#1a472a" // Un verde oscuro
      />

      {/* SECCIÓN 2*/}
      <Section 
        title="Nueva tienda online en algunas zonas" 
        text="Por el momento, la nueva app 
        y web está disponible en Valencia, Barcelona, Madrid y otras poblaciones
        . Introduce tu código postal arriba para ver si repartimos en tu zona. Si aún no llegamos, ¡apúntate y te avisamos!" 
        imageSrc={fruteroImg} 
        inverted={true}
        //  el color del section 2 
        backgroundColor="#fffef9" //fondo ligeramente distinto como la pagina origianl
        titleColor="#000000ff"      
        textColor="#000000ff"       
              
      />

      <Footer />
    </div>
  );
}

export default App;