import { Link } from 'react-router-dom'
import "/public/css/Home-mobile.css";
import "/public/css/Home-tablet.css";
import "/public/css/Home-desktop.css"

function Home() {
    return (
        <div className="home-container">
            <p className="p-hi">Hola, anonimo!</p>
            <p className="p-my-card">Mis Tarjetas</p>
            <section className="my-cards">
                <article className="card">
                    <span className="span-number">Número:</span><span className="span-cardNumber">4546857418565565</span>
                    <p className="p-saldo">Saldo:</p>
                    <p className="p-total">$90.000,00</p>
                </article>
                <article className="card">
                    <span className="span-number">Número:</span><span className="span-cardNumber">5595345899897125</span>
                    <p className="p-saldo">Saldo:</p>
                    <p className="p-total">$1.230,40</p>
                </article>
                <article className="card">
                    <span className="span-number">Número:</span><span className="span-cardNumber">5854665625871547</span>
                    <p className="p-saldo">Saldo:</p>
                    <p className="p-total">$34.333,33</p>
                </article>
                <i class="fa-solid fa-circle-plus"></i>
            </section>
            <section className="secction-transaction">
                <p className="last-transaction">Últimas transacciones</p>
                <div className="div-transaction">
                    <p>a: 6667169658871578</p><p>total: $20.000,00</p><p>fecha: 2022-10-16 16:35:00</p><p className="p-numTra">número de transacción: 1666710401948</p>
                </div>
                <div className="div-transaction">
                    <p>a: 4858669658808933</p><p>total: $10.000,00</p><p>fecha: 2022-12-16 18:35:00</p><p className="p-numTra">número de transacción: 1666710091525</p>
                </div>
                <div className="div-transaction">
                    <p>a: 4858851058871578</p><p>total: $9.000,00</p><p>fecha: 2022-10-25 15:09:48</p><p className="p-numTra">número de transacción: 1666710403762</p>
                </div>
                <div className="new-transaction">
                    <Link to="/transactions">ir a transacciones</Link>
                </div>
            </section>
        </div>
    )
}

export default Home