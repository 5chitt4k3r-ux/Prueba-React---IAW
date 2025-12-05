import './Section.css';

interface SectionProps {
  title: string;
  text: string;
  imageSrc: string;
  inverted?: boolean;
  backgroundColor?: string; // Ahora esto pintará la "banda" de fondo
  titleColor?: string;
  textColor?: string;
  titleSize?: string;
}

const Section = ({ 
  title, 
  text, 
  imageSrc, 
  inverted = false, 
  backgroundColor = "transparent", // Por defecto transparente
  titleColor = "#2c3e50", 
  textColor = "#000000",
  titleSize = "2rem"
}: SectionProps) => {
  
  const sectionClass = `section ${inverted ? 'section--inverted' : ''}`;

  return (
    /* 1. EL ENVOLTORIO (FULL WIDTH): Se encarga del color de fondo de toda la franja */
    <div className="section-wrapper" style={{ backgroundColor: backgroundColor }}>
      
      {/* 2. LA TARJETA (CENTERED): Se queda centrada y mantiene su fondo blanco */}
      <section className={sectionClass}>
        
        <div className="section__content">
          <h2 style={{ color: titleColor, fontSize: titleSize }}>
            {title}
          </h2>
          <p style={{ color: textColor }}>
            {text}
          </p>
        </div>

        <div 
          className="section__image" 
          style={{ backgroundImage: `url(${imageSrc})` }}
          role="img"
          aria-label={title}
        ></div>
        
      </section>
    </div>
  );
};

export default Section;