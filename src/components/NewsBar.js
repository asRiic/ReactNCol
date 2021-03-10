import React from 'react';
import '../assets/css/NewsBar.css';
import {
  Card, CardText, CardBody, CardLink
} from 'reactstrap';


import img from '../assets/img/paisaje 2.jpg';

const newsBar = (props) => {

  

  return (
    <div>
      <Card className="gCard">
        <img src={img} alt="paisaje chingon" />
        <CardBody>
          <CardText><h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4></CardText>
          <CardLink href="#">Leer articulo</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default newsBar;