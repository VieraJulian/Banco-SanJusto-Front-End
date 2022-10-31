import "/public/css/NewTransaction-mobile.css"

function NewTransaction() {
    return (
        <div className="newTransaction-container">
            <form action="#" method="post" className="form-newT">
                <p className="NewT-p">Nueva transacción</p>
                <label>Número de tarjeta</label>
                <input className="newT-input" type="text" placeholder="Ej: 4567719035240001" />
                <label>Total</label>
                <input className="newT-input" type="text" placeholder="Ej: 20000,00" />
                <button className="newT-button" type="submit">Transferir</button>
            </form>
        </div>
    )
}

export default NewTransaction