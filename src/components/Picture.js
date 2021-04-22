import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Picture.css';

function newArticle() {
    return (
        <div className="contLayout">
            <div className="row rowCont">
                <div className="col colImg">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" className="img-responsive imgRes" alt="Generic placeholder thumbnail" />
                </div>
                <h4>Label</h4>
                <span className="text-muted ">Something else</span>
                <Link>Seguir leyendo...</Link>
            </div>
            <div className="row rowCont">
                <div className="col colImg">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" className="img-responsive imgRes" alt="Generic placeholder thumbnail" />
                </div>
                <h4>Label</h4>
                <span className="text-muted ">Something else</span>
                <Link>Seguir leyendo...</Link>
            </div>
            <div className="row rowCont">
                <div className="col colImg">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" className="img-responsive imgRes" alt="Generic placeholder thumbnail" />
                </div>
                <h4>Label</h4>
                <span className="text-muted ">Something else</span>
                <Link>Seguir leyendo...</Link>
            </div>
            <div className="row rowCont">
                <div className="col colImg">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" className="img-responsive imgRes" alt="Generic placeholder thumbnail" />
                </div>
                <h4>Label</h4>
                <span className="text-muted ">Something else</span>
                <Link>Seguir leyendo...</Link>
            </div>
        </div>
    )
}

export default newArticle;