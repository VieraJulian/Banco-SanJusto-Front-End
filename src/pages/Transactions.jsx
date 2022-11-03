import { Link } from 'react-router-dom';
import "/public/css/Transactions-mobile.css";
import "/public/css/Transactions-tablet.css";
import "/public/css/Transactions-desktop.css"

function Transactions() {
    return (
        <div className='div-transactions-container'>
            <div className='first-container'>
                <p className='p-transactions'>Historial de transacciones</p>
                <div>
                    <Link to="/newTransaction">nueva transacción</Link>
                </div>
            </div>
            <section className='transactions-container'>
                <div className='div-h-transaction'>
                    <p>Le transferiste a: 6667169658871578</p><p>total: $20.000,00</p><p>fecha: 2022-10-16 16:35:00</p><p>número de transacción: 1666710401948</p>
                </div>
                <div className='div-h-transaction'>
                    <p>Le transferiste a: 4858669658808933</p><p>total: $10.000,00</p><p>fecha: 2022-12-16 18:35:00</p><p>número de transacción: 1666710091525</p>
                </div>
                <div className='div-h-transaction'>
                    <p>Le transferiste a: 4858851058871578</p><p>total: $9.000,00</p><p>fecha: 2022-10-25 15:09:48</p><p>número de transacción: 1666710403762</p>
                </div>
                <div className='div-h-transaction'>
                    <p>Le transferiste a: 6667169658871578</p><p>total: $20.000,00</p><p>fecha: 2022-10-16 16:35:00</p><p>número de transacción: 1666710401948</p>
                </div>
                <div className='div-h-transaction'>
                    <p>Le transferiste a: 4858669658808933</p><p>total: $10.000,00</p><p>fecha: 2022-12-16 18:35:00</p><p>número de transacción: 1666710091525</p>
                </div>
                <div className='div-h-transaction'>
                    <p>Le transferiste a: 4858851058871578</p><p>total: $9.000,00</p><p>fecha: 2022-10-25 15:09:48</p><p>número de transacción: 1666710403762</p>
                </div>
            </section>
            <section className='arrow-container'>
                <button><i className="fa-solid fa-arrow-left"></i></button><button><i className="fa-solid fa-arrow-right"></i></button>
            </section>
        </div>
    )
}

export default Transactions