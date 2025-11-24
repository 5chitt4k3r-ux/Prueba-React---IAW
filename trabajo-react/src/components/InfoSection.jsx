import React from 'react';

const InfoSection = ({ title, text, imageSrc, reverse }) => {
  return (
    <section className="InfoSection">
      <div className={` ${reverse ? '' : ''}`}>
        
        {/* Contenido Texto */}
        <div className="Contenido de texto">
          <h2 className="TituloDelInfoSection">{title}</h2>
          <p className="TextoInfoSection">
            {text}
          </p>
        </div>

        {/* Contenido Imagen */}
        <div className="ContenidoImagenInfoSection">
          <img 
            src={imageSrc} 
            alt={title} 
            className="Imagen"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;