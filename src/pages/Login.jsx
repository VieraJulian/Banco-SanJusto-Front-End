import "../../public/css/login-mobile.css"

function Login() {
    return (
        <div className="div-body-login">
            <section className="section-left">
                <header className="section-left-header">
                    <picture className="section-left-picture">
                        <img src="/public/img/Logo-Banco-1.png" alt="" />
                    </picture>
                </header>
                <section className="section-left-section">
                    <p>¡Hola! Te damos la bienvenida</p>
                    <picture>
                        <img src="/public/img/img-login.png" alt="" />
                    </picture>
                </section>
            </section>
            <section className="section-right">
                <form action="/user/login" method="post" className="form-login">
                    <p>Ingresá tus datos para operar</p>
                    <input type="text" name="number" placeholder="Tu número de tarjeta" />
                    <input type="text" name="pin" placeholder="Tu pin" />
                    <p className="text-1">No compartas los códigos que te enviamos por SMS o email, el Token de seguridad, los datos de tu tarjeta de coordenadas ni tus claves. <a href="#">Conocé más consejos de seguridad</a></p>
                    <button type="submit" className="form-login-button">Ingresar</button>
                    <p className="text-bottom">Si no tenés u olvidaste tu clave y/o usuario</p>
                    <a className="text-a-buttom" href="#">Crear clave y usuaio</a>
                    <p className="text-bottom">Si sólo tenés clave</p>
                    <a className="text-a-buttom"href="#">Crear usuario</a>
                </form>
            </section>
            <footer>
                <picture>
                    <img src="/public/img/Logo-Banco-Letra.png" alt="" />
                </picture>
            </footer>
        </div>
    )
}

export default Login