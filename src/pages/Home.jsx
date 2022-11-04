import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getTransactions } from '../services/cards';
import "/public/css/Home-mobile.css";
import "/public/css/Home-tablet.css";
import "/public/css/Home-desktop.css"

function Home() {
    let userLogged = JSON.parse(sessionStorage.getItem("user"));

    let cards = userLogged.cards.map((card, i) =>
        <article key={i} className="card">
            <span className="span-number">Número:</span><span className="span-cardNumber">{card.number}</span>
            <p className="p-saldo">Saldo:</p>
            <p className="p-total">${card.total}</p>
        </article>
    )

    let cardNumber = userLogged.cards.find(card => card.cardRegister === 1).number

    const [tx, setTx] = useState([])

    useEffect(() => {
        getTransactions(cardNumber).then((response) => setTx(response.transactions.slice(0, 4)))
    }, [])

    let transaction = tx.map((t, i) =>
        <div key={i} className="div-transaction">
            <p>a: {t.addresse}</p><p>total: ${t.total}</p><p>fecha: {t.date}</p><p className="p-numTra">número de transacción: {t.numberTransaction}</p>
        </div>
    )

    return (
        <div className="home-container">
            <p className="p-hi">Hola, {userLogged.name}!</p>
            <p className="p-my-card">Mis Tarjetas</p>
            <section className="my-cards">
                {cards}
                <i className="fa-solid fa-circle-plus"></i>
            </section>
            <section className="secction-transaction">
                <p className="last-transaction">Últimas transacciones</p>
                {transaction.length === 0 ? <h1>No hay transacciones</h1> : transaction}
                <div className="new-transaction">
                    <Link to="/transactions">ir a transacciones</Link>
                </div>
            </section>
        </div>
    )
}

export default Home