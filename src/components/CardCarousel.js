import React from 'react';
import '../assets/css/CardCarousel.css'

import paisaje1 from '../assets/img/paisaje 1.jpg';
import paisaje2 from '../assets/img/paisaje 2.jpg';
import paisaje3 from '../assets/img/paisaje 3.jpg';

const CardCarousel = (props) => {



    const items = [
        {
            id: '0',
            src: paisaje1,
            tittle: 'Reporte a esta persona sobre este tema en especifico :v',
            time: 'Reciente',
            typeNews: '',
            alt: 'imagenes 1:v'
        },
        {
            id: '1',
            src: paisaje2,
            tittle: 'Aca hay otro titulo, y es largo para probar como funciona la tarjeta',
            time: 'Publicado hace 54 minutos',
            typeNews: '',
            alt: 'imagenes 2:v'
        },
        {
            id: '2',
            src: paisaje3,
            tittle: 'Hola soy otra tarjeta, a que no me crees :v',
            time: 'Publicado hace 3 horas',
            typeNews: '',
            alt: 'imagenes 3:v'
        },
        /*  { Arreglar este bug de las tarjetas que sobre sale
              id: '3',
              src: require('../assets/img/paisaje 3.jpg'),
              tittle: 'Pero que raios haces ahi rick? >:v',
              time: 'Publicado hace 3 horas',
              typeNews: '',
              alt: 'imagenes 3:v'
          }*/
    ]

    const Card = items.map((item) => {
        return (
            <div className=" cardStyle" key={item.id}>
                <div className="row contCard">
                    <div className=" col contImg">
                        <img src={item.src} className="cardImg" alt={item.alt} />
                    </div>
                    <div className="col contBody" >
                        <div className="bodCard">
                            <h4 className="cardTitle">{item.tittle}</h4>
                            <p className="cardInf"><small className="text-muted">{item.time}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            {Card}
        </div>
    );
};

export default CardCarousel;