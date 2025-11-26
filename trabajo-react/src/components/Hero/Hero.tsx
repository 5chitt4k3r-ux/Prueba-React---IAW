import "./Hero.css";
import { useState } from "react";

export default function Hero() {
  const [cp, setCp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`CP enviado: ${cp}`);
  };

  return (
    <section className="hero">
      <div className="hero__media" />
      <div className="hero__content container">
        <div className="hero__card">
          <h1 className="hero__title">
            Empieza tu compra<br/>en Mercadona
          </h1>
          <p className="hero__desc">
            Introduce tu código postal y dependiendo de tu ciudad
            accederás a la nueva compra online o a la web clásica.
          </p>

          <form className="hero__form" onSubmit={handleSubmit}>
            <input
              className="input"
              placeholder="Código postal"
              value={cp}
              onChange={(e)=>setCp(e.target.value)}
              inputMode="numeric"
              maxLength={5}
            />
            <button className="btn" type="submit">ENTRAR</button>
          </form>
        </div>
      </div>
    </section>
  );
}
