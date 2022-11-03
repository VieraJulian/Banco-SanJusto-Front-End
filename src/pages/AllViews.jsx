import { Link } from 'react-router-dom';
import "/public/css/AllViews-mobile.css";
import "/public/css/AllViews-tablet.css";
import "/public/css/AllViews-desktop.css";

function AllViews() {
    return (
        <header>
            <picture>
                <Link to="/"><img src="/public/img/Logo-Banco-1.png" alt="Logo San Justo" /></Link>
            </picture>
        </header>
    )
}

export default AllViews