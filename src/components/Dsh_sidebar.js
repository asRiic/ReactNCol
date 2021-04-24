import '../assets/css/Dsh_sidebar.css';
import logo from "../assets/img/nCol_logo.png";


const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
            <div className="sidebar__tittle">
                <div className="sidebar__img">
                        <img src={logo} alt="Logo" />
                        <h1 onClick={() => closeSidebar()}>Noticias colombia</h1>
                </div>
            </div>

            <div className="sidebar__menu">

                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-area-chart" />
                    <a href="#">Dashboard</a>
                </div>
                <div className="sidebar__link">

                    <a href="#">Control usuarios</a>
                </div>
                <div className="sidebar__link">

                    <a href="#">Publicidad</a>
                </div>
                <div className="sidebar__link">

                    <a href="#">Anuncio</a>
                </div>

                <div className="sidebar__link active_menu_link">
                    <i class="fa fa-cogs" />
                    <a href="#">Administrar</a>
                </div>
                <div className="sidebar__link">

                    <a href="/Dashboard/Interview">Entrevista</a>
                </div>
                <div className="sidebar__link">

                    <a href="#">Emisora</a>
                </div>
                <div className="sidebar__link">

                    <a href="#">Comercio exterior</a>
                </div>
                <div className="sidebar__link">

                    <a href="#">Cronicas</a>
                </div>
                <div className="sidebar__link">

                    <a href="#">¿Quienes somos?</a>
                </div>

                <div className="sidebar__logout">
                    <i className="fa fa-power-off" />
                    <a href="#">Logout</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;