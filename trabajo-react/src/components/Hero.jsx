const Hero = () => {
  return (
    <section className="bg-[#f9f8f3] min-h-[500px] flex flex-col md:flex-row items-center justify-center px-6 py-12 relative overflow-hidden">
      
      {/* Texto y Formulario */}
      <div className="z-10 max-w-lg w-full text-center md:text-left md:pr-10">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
          Empieza tu compra <br /> en Mercadona
        </h1>
        <p className="text-gray-600 mb-8 font-light text-lg">
          Introduce tu código postal y dependiendo de tu ciudad accederás a la nueva compra online o a la web clásica.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <input 
            type="text" 
            placeholder="Código postal" 
            className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:border-[#007f4e] text-lg"
          />
          <button className="bg-[#007f4e] hover:bg-[#00663e] text-white font-bold py-3 px-8 rounded transition-colors">
            ENTRAR
          </button>
        </div>
      </div>

      {/* Imagen (Placeholders para las verduras) */}
      <div className="mt-10 md:mt-0 w-full md:w-1/2 flex justify-center">
         {/* Aquí iría la imagen de las verduras. Usamos un div verde temporalmente */}
         <div className="relative w-full max-w-md">
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Verduras frescas" 
              className="object-cover w-full h-auto rounded-xl shadow-xl"
            />
         </div>
      </div>
    </section>
  );
};

export default Hero;