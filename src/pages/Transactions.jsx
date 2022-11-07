import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTransactions } from '../services/cards';
import "/public/css/Transactions-mobile.css";
import "/public/css/Transactions-tablet.css";
import "/public/css/Transactions-desktop.css"

function Transactions() {
    let userLogged = JSON.parse(sessionStorage.getItem("user"));

    let cardNumber = userLogged.cards.find(card => card.cardRegister === 1).number

    const [tx, setTx] = useState([])

    useEffect(() => {
        getTransactions(cardNumber).then((response) => setTx(response.transactions))
    }, [])

    let transactions = tx.map((t, i) =>
        <div key={i} className='div-h-transaction'>
            <p>Le transferiste a: {t.addresse}</p><p>total: ${t.total}</p><p>fecha: {t.date.slice(0, 10)}</p><p>Hora: {t.date.slice(11, 19)}</p><p>número de transacción: {t.numberTransaction}</p>
        </div>)

    return (
        <div className='div-transactions-container'>
            <div className='first-container'>
                <p className='p-transactions'>Historial de transacciones</p>
                <div>
                    <Link to="/ChosseCard">nueva transacción</Link>
                </div>
            </div>
            <section className='transactions-container'>
                {transactions}
            </section>
            <section className='arrow-container'>
                <button><i className="fa-solid fa-arrow-left"></i></button><button><i className="fa-solid fa-arrow-right"></i></button>
            </section>
        </div>
    )
}

export default Transactions