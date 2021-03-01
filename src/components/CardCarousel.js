import React from 'react';
import '../assets/css/CardCarousel.css'

import paisaje1 from '../assets/img/paisaje 1.jpg';
import paisaje2 from '../assets/img/paisaje 2.jpg';
import paisaje3 from '../assets/img/paisaje 3.jpg';

const CardCarousel = (props) => {
    return (
        <div>
        <div className=" cardStyle">
            <div className="row contCard">
                <div className=" col contImg">
                    <img src={paisaje1} className="cardImg" alt="..." />
                </div>
                <div className="col contBody" >
                <div className="bodCard">
                    <h5 className="cardTitle">Nueva entrevista al decano :v</h5>
                    <p className="cardInf"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
            </div>
        </div>

        <div className=" cardStyle">
            <div className="row contCard">
                <div className=" col contImg">
                    <img src={paisaje2} className="cardImg" alt="..." />
                </div>
                <div className="col contBody" >
                <div className="bodCard">
                    <h5 className="cardTitle">Visiten nuestra radio invitado :v</h5>
                    <p className="cardInf"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
            </div>
        </div>

        <div className=" cardStyle">
            <div className="row contCard">
                <div className=" col contImg">
                    <img src={paisaje3} className="cardImg" alt="..." />
                </div>
                <div className="col contBody" >
                <div className="bodCard">
                    <h5 className="cardTitle">Bueno pues esto es un paisaje xD</h5>
                    <p className="cardInf"><small className="text-muted">Seguir leyendo</small></p>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CardCarousel;