import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "/public/css/login-mobile.css";
import "/public/css/login-tablet.css";
import "/public/css/login-desktop.css";

function Login() {
    const navigate = useNavigate();
    const [body, setBody] = useState({
        number: null,
        pin: null
    })

    const seting = e => {
        setBody({
            ...body,
            [e.target.name]: e.target.value
        })
    }

    const base = "http://localhost:4000/user/login"
    const onSubmit = async (e) => {
        e.preventDefault()
        let msgErrors = document.querySelectorAll(".msg-error")
        try {
            let response = await fetch(base, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(body)
            })
            let result = await response.json()
            console.log(result)
            if (Array.isArray(result)) {
                result.forEach(p => {
                    if (p.param === "number" && result.length === 1) {
                        msgErrors[0].innerText = p.msg
                        msgErrors[0].classList.add("invalid")
                        msgErrors[1].classList.remove("invalid")
                    } else if (p.param === "pin" && result.length === 1) {
                        msgErrors[1].innerText = p.msg
                        msgErrors[1].classList.add("invalid")
                        msgErrors[0].classList.remove("invalid")
                    } else if (p.param === "number") {
                        msgErrors[0].innerText = p.msg
                        msgErrors[0].classList.add("invalid")
                    } else if (p.param === "pin") {
                        msgErrors[1].innerText = p.msg
                        msgErrors[1].classList.add("invalid")
                    }
                })
            } else {
                msgErrors[0].classList.remove("invalid")
                msgErrors[1].classList.remove("invalid")
                navigate("/")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="login-container">
            <section className="section-login">
                <p>¡Hola! Te damos la bienvenida</p>
                <Link to="#">Conocé más sobre Online Banking</Link>
            </section>
            <form action='/login' method="post" className="form-login" onSubmit={onSubmit}>
                <p className="first-p">Ingresá tus datos para operar</p>
                <div className="input-container">
                    <input type="text" name="number" placeholder="Tu número de tarjeta" onChange={seting} /><i className="fa-solid fa-eye"></i>
                </div>
                <p className='msg-error'>error1</p>
                <div className="input-container">
                    <input type="text" name="pin" placeholder="Tu pin" onChange={seting} /><i className="fa-solid fa-eye"></i>
                </div>
                <p className='msg-error'>error2</p>
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