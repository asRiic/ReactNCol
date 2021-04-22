import {useState} from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Index.css';
import '../assets/css/normalize.css';


/* Componentes */
import Navbar from '../components/Navbar';
import NewsBar from '../components/NewsBar';
import Carousel from '../components/Carousel';
import CardCarousel from '../components/CardCarousel';
import Picture from '../components/Picture';

function Index() {
  const[sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
     setSidebarOpen(false);
  };

  return (
    <div className="contenedor">
      <header className="header">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      </header>
      <aside className="sidebar-left">
        <h2>Publicidad</h2>
      </aside>
      <main className="main">
        <h3>Holi 3</h3>
      </main>
      <aside className="sidebar-right">
        <h4>Holi 4</h4>
      </aside >
      <footer className="footer">
        <h5>Holi 5</h5>
      </footer>
    </div>
  );
}

export default Index;