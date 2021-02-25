import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/Index.css';

/* Componentes */
import Navbar from '../components/Navbar2';
import NewsBar from '../components/NewsBar';
import Carousel from '../components/Carousel';


function Dashboard() {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>
      <div className="content">
        <div className="row">
          <div className="col colIzPubli col-lg-2">
            publicidad
          </div>
          <div className="col colCont  col-lg-8">
            <div className="row">
              <div className="col-lg-2">
                <Carousel />
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-8" >
                <NewsBar />
              </div>
            </div>
            <div className="row">
              <div className="col" lg={2}>
                <h1>Holi prrita</h1>
              </div>

            </div>
          </div>
          <div className="col colNews col-lg-2">
            Publicidad y noticias
          </div>
        </div>
      </div>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default Dashboard;