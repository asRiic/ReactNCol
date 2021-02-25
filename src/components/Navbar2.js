import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar2.css';
import logo from '../assets/img/nCol_logo.png';


export default class Navbar2 extends Component {
    render() {
        return (
            <div className="barnav">
                <div className="divlogo">
                    <ul className="ulLogo">
                        <li className="imgNav">
                            <Link to="/">
                                <img src={logo} alt="Noticias Colombia" loading="lazy" />
                            </Link>
                        </li>
                        <li className="liTitulo">
                            <Link to="/">
                                <spam>Noticias Colombia</spam>
                            </Link>
                        </li>
                    </ul>
                </div>
                
                <div className="divnav">
                    <ul className="ulNav">
                        <li>
                            <Link>
                                <spam>Entrevista</spam>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <spam>Radio</spam>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <spam>Comercio</spam>
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
        )
    }
}