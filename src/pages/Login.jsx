import { Link } from 'react-router-dom'
import "/public/css/login-mobile.css"
import "/public/css/login-tablet.css"
import "/public/css/login-desktop.css"

function Login() {
    return (
        <div className="login-container">
            <section className="section-login">
                <p>¡Hola! Te damos la bienvenida</p>
                <Link to="#">Conocé más sobre Online Banking</Link>
            </section>
            <form action="/user/login" method="post" className="form-login">
                <p className="first-p">Ingresá tus datos para operar</p>
                <div className="input-container">
                    <input type="text" placeholder="Tu número de tarjeta" /><i class="fa-solid fa-eye"></i>
                </div>
                <div className="input-container">
                    <input type="text" placeholder="Tu pin" /><i class="fa-solid fa-eye"></i>
                </div>
                    <p className="second-p">No compartas los códigos que te enviamos por SMS o email, el Token de seguridad, los datos de tu tarjeta de coordenadas ni tus claves, <Link to="#">Conocé más consejos de seguridad</Link></p>
                    <button className="button-login" type="submit">Ingresar</button>
                <div className="login-div">
                    <p className="login-p">Si no tenés u olvidaste tu clave y/o usuario</p>
                    <Link className="latest-a" to="#">Crear clave y usuario</Link>
                    <p className="login-p">Si sólo tenés clave</p>
                    <Link className="latest-a" to="#">Crear clave</Link>
                </div>
            </form>
        </div>
    )
}

export default Login