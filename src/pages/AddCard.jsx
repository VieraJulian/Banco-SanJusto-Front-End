import { addCard } from "../services/cards";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function AddCard() {
    const navigate = useNavigate();
    let userLogged = JSON.parse(sessionStorage.getItem("user"));
    let userNumber = userLogged.cards[0].number;
    const [body, setBody] = useState({ number: null, pin: null, userCard: userNumber})

    const seting = e => {
        setBody({
            ...body,
            [e.target.name]: e.target.value
        })
    }

    let onSubmit = async (e) => {
        e.preventDefault()
        try {
            let result = await addCard(body);
            let msgErrors = document.querySelectorAll(".msg-error")

            if (Array.isArray(result)) {
                result.forEach(error => {
                    if (error.param === "number" && result.length === 1) {
                        msgErrors[0].innerText = error.msg
                        msgErrors[0].classList.add("invalid")
                        msgErrors[1].classList.remove("invalid")
                    } else if (error.param === "pin" && result.length === 1) {
                        msgErrors[1].innerText = error.msg
                        msgErrors[1].classList.add("invalid")
                        msgErrors[0].classList.remove("invalid")
                    } else if (error.param === "number") {
                        msgErrors[0].innerText = error.msg
                        msgErrors[0].classList.add("invalid")
                    } else if (error.param === "pin") {
                        msgErrors[1].innerText = error.msg
                        msgErrors[1].classList.add("invalid")
                    }
                })
            } else {
                msgErrors[0].classList.remove("invalid")
                msgErrors[1].classList.remove("invalid")
                let newUser = userLogged.cards.push(result)
                sessionStorage.setItem("user", JSON.stringify({...userLogged}))
                navigate("/")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="newTransaction-container">
            <form className="form-newT" onSubmit={onSubmit}>
                <p className="NewT-p">Nueva Tarjeta</p>
                <label>Número de tarjeta</label>
                <input className="newT-input" name="number" type="text" placeholder="Número de tarjeta" onChange={seting} />
                <p className='msg-error'></p>
                <label>Pin</label>
                <input className="newT-input" name="pin" type="password" placeholder="Pin" onChange={seting} />
                <p className='msg-error'></p>
                <button className="newT-button" type="submit">Añadir</button>
            </form>
        </div>
    )
}

export default AddCard