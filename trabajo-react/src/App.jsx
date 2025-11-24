import { useState } from 'react'
import Navbar from './components/NavBar.jsx'
import InfoSection from './components/InfoSection.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <main>
        <Hero />
        
        {/* Sección 1: Texto Izquierda, Imagen Derecha (Normal) */}
        <InfoSection 
          title="Compra online"
          text="Recibe tu pedido en casa con la misma calidad y frescura de siempre."
          imageSrc="https://images.unsplash.com/photo-1580913428706-c811d80d84d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          reverse={false} 
        />

        {/* Sección 2: Imagen Izquierda, Texto Derecha (Invertido) */}
        <InfoSection 
          title="Nueva tienda online en algunas zonas"
          text="Por el momento, la nueva app y web está disponible en Valencia, Barcelona, Madrid y otras poblaciones. Introduce tu código postal arriba para ver si repartimos en tu zona."
          imageSrc="https://images.unsplash.com/photo-1543168256-418811576931?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          reverse={true} 
        />
      </main>
      <div className="card">
      </div>
    </>
  )
}

export default App
