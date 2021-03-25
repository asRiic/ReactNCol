import React from 'react';
import '../assets/css/NewsBar.css';
import {
  Card, CardText, CardBody, CardLink
} from 'reactstrap';


import img from '../assets/img/paisaje 2.jpg';

const newsBar = (props) => {

  const news = [
    {
      id: "0",
      img: "",
      titulo: "A Este es un segundo texto que puede ser uno bien largo para que quepa un titulo de una noticia",
      date:"12/03/2020",
      href: "#1"
    },
    {
      id: "1",
      img: "",
      titulo: "B Este es un segundo texto que puede ser uno bien largo para que quepa un titulo de una noticia",
      date:"21/05/2020",
      href: "#2"
    },
    {
      id: "2",
      img: "",
      titulo: "C Este es un segundo texto que puede ser uno bien largo para que quepa un titulo de una noticia",
      date:"28/08/2020",
      href: "#3"
    },
    {
      id: "3",
      img: "",
      titulo: "D Este es un segundo texto que puede ser uno bien largo para que quepa un titulo de una noticia",
      date:"21/02/2021",
      href: "#4"
    },
    {
      id: "4",
      img: "",
      titulo: "E Este es un segundo texto que puede ser uno bien largo para que quepa un titulo de una noticia",
      date:"26/01/2021",
      href: "#5"
    },
    {
      id: "5",
      img: "",
      titulo: "F Este es un segundo texto que puede ser uno bien largo para que quepa un titulo de una noticia",
      date:"14/09/2020",
      href: "#6"
    }
    
  ]

  return (
    <div className="cont">

      { news.map((item) => {
        return (
          <Card className="gCard" key={item.id}>
            <img src={img} alt="paisaje chingon" />
            <CardBody className="cardBody">
              <CardText className="cardText">
                <h4>
                {item.titulo}
                </h4>
              </CardText>
              <CardLink href={item.href}>Leer articulo...</CardLink>
            </CardBody>
          </Card>
        );
      })
      }

    </div>
  );
};

export default newsBar;