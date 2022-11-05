import { Link } from 'react-router-dom';
import "/public/css/AllViews-mobile.css";
import "/public/css/AllViews-tablet.css";
import "/public/css/AllViews-desktop.css";

function AllViews() {
    let logout = () => {
        sessionStorage.removeItem("user")
    }

    return (
        <header>
            <picture>
                <Link to="/"><img src="/public/img/Logo-Banco-1.png" alt="Logo San Justo" /></Link>
            </picture>
            <div>
                <Link to="/login" onClick={logout}>Cerrar sesión<i className="fa-solid fa-right-from-bracket"></i></Link>
            </div>
        </header>
    )
}

export default AllViews