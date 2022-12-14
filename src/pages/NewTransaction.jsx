import "/public/css/NewTransaction-mobile.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { newTransaction } from "../services/cards"

function NewTransaction() {
    const navigate = useNavigate();
    let userLogged = JSON.parse(sessionStorage.getItem("user"));
    const [body, setBody] = useState({ number: null, total: null })

    const seting = e => {
        setBody({
            ...body,
            [e.target.name]: e.target.value
        })
    }
    console.log("hola")
    let onSubmit = async (e) => {
        e.preventDefault()
        try {
            Swal.fire({
                title: 'Quieres realizar esta operación?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Continuar'
            }).then( async (result) => {
                if (result.isConfirmed) {
                    let usercard = userLogged.cards.find(card => card.cardRegister == 1)
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
        
                        let cards = userLogged.cards.map(card => {
                            if (card.number === cardNumber) {
                                return Object({
                                    ...card, total: parseInt(card.total) - parseInt(body.total)
                                })
                            } else if (card.number === parseInt(body.number)) {
                                return Object({
                                    ...card, total: parseInt(card.total) + parseInt(body.total)
                                })
                            } else {
                                return Object({
                                    ...card
                                })
                            }
                        })
                        sessionStorage.setItem("user", JSON.stringify({ ...userLogged, cards: cards }))
                        navigate("/")
                        Swal.fire('Transacción, realizada con éxito!', '', 'success')
                    }
                } else if (result.isDenied) {
                    Swal.fire('Transacción cancelada', '', 'info')
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="newTransaction-container">
            <form className="form-newT" onSubmit={onSubmit}>
                <p className="NewT-p">Nueva transacción</p>
                <label>Número de tarjeta</label>
                <input className="newT-input" name="number" type="text" placeholder="Ej: 4567719035240001" onChange={seting} />
                <p className='msg-error'></p>
                <label>Total</label>
                <input className="newT-input" name="total" type="text" placeholder="Ej: 20000,00" onChange={seting} />
                <p className='msg-error'></p>
                <button className="newT-button" type="submit">Transferir</button>
            </form>
        </div>
    )
}

export default NewTransaction