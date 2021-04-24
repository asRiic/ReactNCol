import '../../assets/css/Dsh_main.css';
import Chart from '../Chart';
import imgg from '../../assets/img/Avatar.png';

const Main = () => {
    return (
        <main className="main">
            <div className="main__container">
                <div className="main__title">
                    <img src={imgg} alt="img" />
                    <div className="main__greeting">
                        <h1>Hola, bienvenido</h1>
                        <p>al panel de control Noticias Colombia</p>
                    </div>
                </div>

                <div className="main__cards">
                    <div className="card">

                        <p className="text-primary-p">Lectores online</p>
                        <div className="card__inner">
                            <i className="fa fa-user-o fa-2x text-lightblue" />
                            <span className="font-bold text-title">434</span>
                        </div>

                    </div>

                    <div className="card">
                        <p className="text-primary-p">Fecha prox. Evento</p>
                        <div className="card__inner date">
                            <i className="fa fa-calendar fa-2x text-red" />
                            <span className="font-bold text-title">20/MAY/2021</span>
                        </div>
                    </div>

                    <div className="card">
                        <p className="text-primary-p">Cantidad de like</p>
                        <div className="card__inner">
                            <i className="fa fa-thumbs-up fa-2x text-red" />
                            <span className="font-bold text-title">12342</span>
                        </div>
                    </div>

                    <div className="card">
                        <p className="text-primary-p">Cantidad de like</p>
                        <div className="card__inner">
                            <i className="fa fa-thumbs-up fa-2x text-red" />
                            <span className="font-bold text-title">12342</span>
                        </div>
                    </div>
                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Reportes diarios</h1>
                                <p>Que le importa gonorrea</p>
                            </div>
                            <i className="fa fa-usd" />
                        </div>
                        <Chart />
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Reportes diarios</h1>
                                <p>Que gonorrea mas!?</p>
                            </div>
                            <i className="fa fa-use" />
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Que es esto?</h1>
                                <p> nolo se we</p>
                            </div>

                            <div className="card2">
                                <h1>Que es esto?</h1>
                                <p> nolo se we</p>
                            </div>

                            <div className="card3">
                                <h1>Que es esto?</h1>
                                <p> nolo se we</p>
                            </div>

                            <div className="card4">
                                <h1>Que es esto?</h1>
                                <p> nolo se we</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;