import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar2.css';
import logo from '../assets/img/nCol_logo.png';
import 'bootstrap/dist/css/bootstrap.min.css'


export default class Navbar2 extends Component {
    render() {
        return (
            <div className="barnav">
                <div className="row row-cols-1 divLogo">
                    <div className="col imgNav ">
                        <Link to="/">
                            <img className="logImg" src={logo} alt="Noticias Colombia" loading="lazy" />
                        </Link>
                    </div>
                    <div className="col liTitulo ">
                        <Link to="/">
                            <h1>Noticias Colombia</h1>
                        </Link>
                    </div>
                </div>

                <div className="row ">
                    <div className="col divNav">
                        <ul className="ulNav">
                            <li>
                                <Link>
                                    <spam>Entrevista</spam>
                                </Link>
                            </li>

                            <li>
                                <Link>
                                    <spam>Emisora</spam>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <spam>Videos</spam>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <spam>Comercio Exterior</spam>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <spam>Cronicas</spam>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}