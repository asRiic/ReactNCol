import React, { useState } from 'react';
import '../assets/css/Carousel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

import paisaje1 from '../assets/img/paisaje 2.jpg';

//Quitar este Objeto y poner una api :v
const items = [
    {
        id: '1',
        src: require('../assets/img/paisaje 1.jpg'),
        altText: 'Titulo 1',
        caption: 'Esta es una descripcion 1'
    },
    {
        id: '2',
        src: require('../assets/img/paisaje 2.jpg'),
        altText: 'Titulo 2',
        caption: 'Esta es una descripcion 2'
    },
    {
        id: '3',
        src: require('../assets/img/paisaje 3.jpg'),
        altText: 'Titulo 3',
        caption: 'Esta es una descripcion 3'
    }
];

const CarouselImg = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.id}
            >
                <img src={paisaje1} alt={item.altText} className="ImgCarousel" />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                className="Carousel"
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Anterior" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Siguiente" onClickHandler={next} />
            </Carousel>
    
    );
}

export default CarouselImg;