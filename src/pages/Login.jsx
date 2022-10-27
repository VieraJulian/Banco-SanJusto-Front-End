import "../../public/css/login-mobile.css"
import "../../public/css/login-tablet.css"
import "../../public/css/login-desktop.css"

function Login() {
    return (
        <div className="login-container">
            <section className="section-login">
                <p>¡Hola! Te damos la bienvenida</p>
                <a href="#">Conocé más sobre Online Banking</a>
            </section>
            <form action="/user/login" method="post" className="form-login">
                <p className="first-p">Ingresá tus datos para operar</p>
                <div className="input-container">
                    <input type="text" placeholder="Tu número de tarjeta" /><i class="fa-solid fa-eye"></i>
                </div>
                <div className="input-container">
                    <input type="text" placeholder="Tu pin" /><i class="fa-solid fa-eye"></i>
                </div>
                <p className="second-p">No compartas los códigos que te enviamos por SMS o email, el Token de seguridad, los datos de tu tarjeta de coordenadas ni tus claves, <a href="#">Conocé más consejos de seguridad</a></p>
                <button className="button-login" type="submit">Ingresar</button>
                <p className="login-p">Si no tenés u olvidaste tu clave y/o usuario</p>
                <a className="latest-a" href="#">Crear clave y usuario</a>
                <p className="login-p">Si sólo tenés clave</p>
                <a className="latest-a" href="#">Crear clave</a>
            </form>
        </div>
    )
}

export default Login