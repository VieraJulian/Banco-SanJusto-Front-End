import { Link } from 'react-router-dom'
import "/public/css/ChosseCard-mobile.css"

function ChosseCard() {
    let userLogged = JSON.parse(sessionStorage.getItem("user"));

    let onClick = (e) => {
        let cardSelected = userLogged.cards.map(card => {
            if (card.number === e) {
                return Object({
                    ...card, cardRegister: 1
                })
            } else {
                return Object({
                    ...card, cardRegister: 0
                })
            }
        })
        sessionStorage.setItem("user", JSON.stringify({...userLogged, cards: cardSelected}))
        let cards = document.querySelectorAll(".card")
        Array.from(cards).map(card => {
            if (card.textContent.indexOf(e) != -1) {
                card.style.boxShadow = "0px 0px 30px rgba(0, 0, 0, 0.80)"
            } else {
                card.style.boxShadow = "none"
            }
        })
    }

    let cards = userLogged.cards.map((card, i) =>
        <article key={i} className="card" onClick={() => onClick(card.number)}>
            <span className="span-number">Número:</span><span className="span-cardNumber">{card.number}</span>
            <p className="p-saldo">Saldo:</p>
            <p className="p-total">${card.total}</p>
        </article>)

    return (
        <div className="chosse-card-container">
            <p className="p-first">selecciona una tarjeta</p>
            <div className="cards">
                {cards}
            </div>
            <div className="next">
                <Link to="/newTransaction">Continuar</Link>
            </div>
        </div>
    )
}

export default ChosseCard