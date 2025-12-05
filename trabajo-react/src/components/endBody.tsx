import "./endBody.css";

export default function EndBody() {
  return (
    <section className="download-app">
      <h2 className="download-app-title">
        Empieza tu compra en Mercadona
      </h2>
      <form className="postal-code">
        <div className="input-text">
          <label className="input-text-label">Codigo Postal</label>
          <input type="text"  maxLength={5} autoComplete='On' />
        </div>
        <input className="postal-code-button" type="submit" value="Entrar" />
      </form>
      <p className="download-app-msj">O descarga la App y haz tu compra en cualquier momento.</p>
      <a href="https://play.google.com/store/apps/details?id=es.mercadona.tienda" target="blank">
        <img className="download-google-play" src="../media/google-store.jpg"></img>
      </a>
      <a href="https://apps.apple.com/us/app/mercadona/id1368037685" target="blank">
        <img className="download-app-store" src="../media/app-store.jpg"></img>
      </a>
    </section>
  )
}
