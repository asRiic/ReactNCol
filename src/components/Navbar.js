import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';
import logo from '../assets/img/nCol_logo.png';


export default class Navbar extends Component {
    render() {
        return (
            <div className="barnav">
                <div className="navIzq">
                    <ul className="ulIzq">
                        <li>
                            <Link to="/" className="">
                                <img src={logo} className="imgNav" alt="" loading="lazy" />
                            </Link>
                        </li>
                        <li className="liTitulo">
                            <Link to="/" className="">
                                <spam>Noticias Colombia</spam>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="navDer">
                    <ul className="ulDer">
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