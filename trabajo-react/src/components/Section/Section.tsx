import './Section.css';

interface SectionProps {
  title: string;
  text: string;
  imageSrc: string;
  inverted?: boolean; // El signo ? hace que sea opcional
  backgroundColor?: string;
}

const Section = ({ title, text, imageSrc, inverted = false, backgroundColor }: SectionProps) => {
  
  const sectionClass = `section ${inverted ? 'section--inverted' : ''}`;

  return (
    // Si no pasas color de fondo, usará el definido en CSS o transparente
    <section className={sectionClass} style={{ backgroundColor }}>
      
      <div className="section__content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>

      <div 
        className="section__image" 
        style={{ backgroundImage: `url(${imageSrc})` }}
        role="img"
        aria-label={title}
      ></div>
      
    </section>
  );
};

export default Section;