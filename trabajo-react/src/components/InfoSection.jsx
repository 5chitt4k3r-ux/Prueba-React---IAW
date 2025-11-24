import React from 'react';

const InfoSection = ({ title, text, imageSrc, reverse }) => {
  return (
    <section className="">
      <div className={` ${reverse ? '' : ''}`}>
        
        {/* Contenido Texto */}
        <div className="">
          <h2 className="">{title}</h2>
          <p className="">
            {text}
          </p>
        </div>

        {/* Contenido Imagen */}
        <div className="">
          <img 
            src={imageSrc} 
            alt={title} 
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;