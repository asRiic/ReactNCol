import React from 'react';
import { Link } from 'react-router-dom';
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
              <div className="col-lg-12 colHeader">
                <div className="row" >
                  <div className="colTittle col-lg-9">
                    <h1>Entrevistas</h1>
                  </div>
                  <div className="moreNews col-lg-3">
                    <Link to="/">
                      <p>Ver mas entrevistas...</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="colCardNews col-lg-12">
                <NewsBar />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 colHeader">
                <div className="row" >
                  <div className="colTittle col-lg-9">
                    <h1>Cronicas</h1>
                  </div>
                  <div className="moreNews col-lg-3">
                    <Link to="/">
                      <p>Ver mas cronicas...</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="colCardNews col-lg-12">
                <NewsBar />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 colHeader">
                <div className="row" >
                  <div className="colTittle col-lg-9">
                    <h1>Entrevistas</h1>
                  </div>
                  <div className="moreNews col-lg-3">
                    <Link to="/">
                      <p>Ver mas entrevistas...</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="colCardNews col-lg-12">
                <NewsBar />
              </div>
            </div>
           
            <div className="row">
              <div className="col-lg-12 colHeader">
                <div className="row" >
                  <div className="colTittle col-lg-9">
                    <h1>Entrevistas</h1>
                  </div>
                  <div className="moreNews col-lg-3">
                    <Link to="/">
                      <p>Ver mas entrevistas...</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="colCardNews col-lg-12">
                <NewsBar />
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