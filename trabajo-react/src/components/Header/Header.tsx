import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__row">
        <div className="header__brand">
          <div className="logo__icon" />
          
        </div>

        <nav className="header__nav">
          <a href="#">Conócenos</a>
          <a href="#">Supermercados</a>
          <a href="#">Trabaja con nosotros</a>
          <a href="#">Atención al cliente</a>
        </nav>

        <div className="header__lang">
          <span>Español</span>
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
            <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    </header>
  );
}
