import "../assets/css/Dsh_navbar.css";
import Avatar from "../assets/img/Avatar.png";


const Dsh_navbar = ({ sidebarOpen, openSidebar }) => {

    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                {/* <a href="#" className="active_link">Admin</a>
                <a href="#">Eventos</a>
                <a href="#">Gestion datos</a>
                <a href="#">Anuncios</a>-->*/}
            </div>
            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <img width="30px" src={Avatar} alt="Avatar" />
                </a>
            </div>
        </nav>
    )
}

export default Dsh_navbar;