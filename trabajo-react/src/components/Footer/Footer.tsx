import "./footer.css";

function footer() {
    return (
        <footer className="footer">
            <section className="footer-v1">
                <div>
                    <div className="footer-links">
                        <div className="footer-link-section">
                            <ul>
                                <li>
                                    <h3>Cliente</h3>
                                </li>
                                <li>
                                    <a href="#">Supermercados</a>
                                </li>
                                <li>
                                    <a href="#">Consejos</a>
                                </li>
                                <li>
                                    <a href="#">Factura cliente</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-link-section">
                            <ul>
                                <li>
                                    <h3>Trabajador</h3>
                                </li>
                                <li>
                                    <a href="#">Trabaja con nosotros</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-link-section">
                            <ul>
                                <li>
                                    <h3>Proveedor</h3>
                                </li>
                                <li>
                                    <a href="#">Factura-ME</a>
                                </li>
                                <li>
                                    <a href="#">Portal Trinidad</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-link-section">
                            <ul>
                                <li>
                                    <h3>Sociedad</h3>
                                </li>
                                <li>
                                    <a href="#">Actualidad</a>
                                </li>
                                <li>
                                    <a href="#">Sala de prensa</a>
                                </li>
                                <li>
                                    <a href="#">Conoce Mercadona</a>
                                </li>
                                <li>
                                    <a href="#">Mercadona en Portugal</a>
                                </li>
                                <li>
                                    <a href="#">Cuidemos el Planeta</a>
                                </li>
                            </ul>
                        </div>
                        <div></div>
                    </div>
                </div>
            </section>
             
            <section className="footer-v2">
                <p>© Mercadona S.A. A46103834. Todos los derechos reservados.</p>
                <ul>
                    <li>Accesibilidad</li>
                    <li>Politicas de privacidad</li>
                    <li>Politicas de cookies</li>
                    <li>Terminos y condiciones</li>
                </ul>
            </section>

        </footer>
    )
}

export default footer