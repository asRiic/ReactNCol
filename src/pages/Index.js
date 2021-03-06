import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/Index.css';

/* Componentes */
import Navbar from '../components/Navbar';
import NewsBar from '../components/NewsBar';
import Carousel from '../components/Carousel';
import CardCarousel from '../components/CardCarousel'

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

          <div className="col col-lg-8 colCont">
            <div className="row align-items-center colCarousel">
              <div className="col col-lg-7 ContCarousel" >
                <Carousel />
              </div >
              <div className="col col-lg-5 CardCarousel">
                <CardCarousel />
              </div>
            </div>

            <div className="row">
              <div className="col col-lg-12" >
                <div className="colTittle">
                  <h1>Cronicas</h1>
                </div>
                <NewsBar />
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <h1>Holi prrita</h1>
              </div>
            </div>
          </div>

          <div className="col colNews col-lg-2">
            Publicidad y noticias
          </div>

          <footer>
            <h1>Footer</h1>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;