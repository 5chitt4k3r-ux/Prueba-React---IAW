
import { Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#263034] text-white pt-16 pb-8 px-6 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
        
        {/* Columna Cliente */}
        <div>
          <h3 className="font-bold text-lg mb-4">Cliente</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Supermercados</a></li>
            <li><a href="#" className="hover:text-white">Consejos</a></li>
            <li><a href="#" className="hover:text-white">Factura cliente</a></li>
          </ul>
        </div>

        {/* Columna Trabajador */}
        <div>
          <h3 className="font-bold text-lg mb-4">Trabajador</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Trabaja con nosotros</a></li>
          </ul>
        </div>

        {/* Columna Proveedor */}
        <div>
          <h3 className="font-bold text-lg mb-4">Proveedor</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Portal Trinidad</a></li>
          </ul>
        </div>

         {/* Columna Sociedad */}
         <div>
          <h3 className="font-bold text-lg mb-4">Sociedad</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Sala de prensa</a></li>
            <li><a href="#" className="hover:text-white">Medio Ambiente</a></li>
          </ul>
        </div>

        {/* Contacto y Redes */}
        <div className="col-span-2 lg:col-span-1">
           <div className="flex items-center gap-2 text-xl font-bold mb-4">
              <Phone size={24} /> 800 500 220
           </div>
           <div className="flex gap-4 mt-4">
              <Facebook className="cursor-pointer hover:text-green-400"/>
              <Instagram className="cursor-pointer hover:text-green-400"/>
              <Youtube className="cursor-pointer hover:text-green-400"/>
              <Linkedin className="cursor-pointer hover:text-green-400"/>
           </div>
        </div>
      </div>
      
      <div className="border-t border-gray-600 pt-8 text-center text-gray-400 text-xs flex flex-col md:flex-row justify-between items-center">
        <p>© Mercadona S.A. A46103834. Todos los derechos reservados para Tomás y Matias.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
           <a href="#">Términos y condiciones</a>
           <a href="#">Política de privacidad</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;