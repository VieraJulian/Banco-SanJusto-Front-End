import { Link, useNavigate } from 'react-router-dom';
import "/public/css/AllViews-mobile.css";
import "/public/css/AllViews-tablet.css";
import "/public/css/AllViews-desktop.css";

function AllViews() {
    const navigate = useNavigate();

    let logout = () => {
        Swal.fire({
            title: 'Quieres salir?',
            showDenyButton: true,
            confirmButtonText: 'Cerrar sesión'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Sesión cerrada con éxito!', '', 'success')
                sessionStorage.removeItem("user")
                navigate("/login")
            }
        })
    }

    return (
        <header>
            <picture>
                <Link to="/"><img src="/public/img/Logo-Banco-1.png" alt="Logo San Justo" /></Link>
            </picture>
            <div>
                <Link to="#" onClick={logout}>Cerrar sesión<i className="fa-solid fa-right-from-bracket"></i></Link>
            </div>
        </header>
    )
}

export default AllViews