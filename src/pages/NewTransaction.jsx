import "/public/css/NewTransaction-mobile.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { newTransaction } from "../services/cards"

function NewTransaction() {
    const navigate = useNavigate();
    const [body, setBody] = useState({ number: null, total: null })

    const seting = e => {
        setBody({
            ...body,
            [e.target.name]: e.target.value
        })
    }

    let onSubmit = async (e) => {
        e.preventDefault()
        try {
            let user = JSON.parse(sessionStorage.getItem("user"));
            let usercard = user.cards.find(card => card.cardRegister == 1)
            let cardNumber = usercard.number
            let result = await newTransaction(body, cardNumber)

            let msgErrors = document.querySelectorAll(".msg-error")

            if (Array.isArray(result)) {
                result.forEach(error => {
                    if (error.param === "number" && result.length === 1) {
                        msgErrors[0].innerText = error.msg
                        msgErrors[0].classList.add("invalid")
                        msgErrors[1].classList.remove("invalid")
                    } else if (error.param === "total" && result.length === 1) {
                        msgErrors[1].innerText = error.msg
                        msgErrors[1].classList.add("invalid")
                        msgErrors[0].classList.remove("invalid")
                    } else if (error.param === "number") {
                        msgErrors[0].innerText = error.msg
                        msgErrors[0].classList.add("invalid")
                    } else if (error.param === "total") {
                        msgErrors[1].innerText = error.msg
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
        <div className="newTransaction-container">
            <form className="form-newT" onSubmit={onSubmit}>
                <p className="NewT-p">Nueva transacción</p>
                <label>Número de tarjeta</label>
                <input className="newT-input" name="number" type="text" placeholder="Ej: 4567719035240001" onChange={seting}/>
                <p className='msg-error'>error1</p>
                <label>Total</label>
                <input className="newT-input" name="total" type="text" placeholder="Ej: 20000,00" onChange={seting}/>
                <p className='msg-error'>error2</p>
                <button className="newT-button" type="submit">Transferir</button>
            </form>
        </div>
    )
}

export default NewTransaction