import React from "react";

const Navbar = () => {
    return (
    <nav className="Logo">
    {/* Logo */}
        <div className="Items-center">
            <span className="Items">
                <div className="IconoMercadona">🛒</div> MERCADONA
            </span>
         </div>
    {/* Enlaces Desktop (ocultos en móvil) */}
        <div className="Links">
            <a href="#" className="hover">Conócenos</a>
            <a href="#" className="hover">Supermercados</a>
            <a href="#" className="hover">Trabaja con nosotros</a>
            <a href="#" className="hover">Atención al cliente</a>
        </div>
    {/* Selector Idioma */}
        <div className="Language-Selector">
            <span>Español</span>
            <Globe size={16} />
        </div>
    </nav>
    );
};

export default Navbar;