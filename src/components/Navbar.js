import '../assets/css/Navbar.css';
import logo from '../assets/img/nCol_logo.png';
import '../assets/css/normalize.css'


function Navbar({ sidebarOpen, openSidebar }) {
    return (
        <div className="nav-bar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>

            <div className="divLogo">
                <a href="#">
                    <img className="logImg" src={logo} alt="Noticias Colombia" loading="lazy" />
                    <h1>Noticias Colombia</h1>
                </a>
            </div>

            <div className="divNav">
                <ul className="ulNav">
                    <li>
                        <a href="#">
                            <spam>Entrevista</spam>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <spam>Emisora</spam>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <spam>Videos</spam>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <spam>Comercio Exterior</spam>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <spam>Cronicas</spam>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <spam>¿Quienes somos?</spam>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar;