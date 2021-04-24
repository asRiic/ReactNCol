import '../../assets/css/Main_index.css';
import Carousel from '../Carousel'
import NewsBar from '../NewsBar';
import CardCarousel from '../CardCarousel';
import Picture from '../Picture';


function Main_index() {
    return (
        <div className="contenedor_main">

            <aside className="carousel">
                <Carousel />
            </aside>

            <aside className="rec_new">
                <CardCarousel />
            </aside>

            <div className="int_view">
                <Picture />
            </div>

            <div className="media">
                <h1>Hola media</h1>
            </div>

            <div className="cron">
                <h1>Hola Cron</h1>
            </div>

            <div className="station">
                <h1>Hola station</h1>
            </div>

            <div className="fro_trade">
                <h1>Hola fro_trade</h1>
            </div>
        </div>
    )
};

export default Main_index;
