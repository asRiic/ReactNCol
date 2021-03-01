import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

import img from '../assets/img/paisaje 2.jpg';

const newsBar = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Paisaje de google</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">paisaje en calidad hd</CardSubtitle>
        </CardBody>
        <img width="100%" src={img} alt="paisaje chingon" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">Leer articulo</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default newsBar;