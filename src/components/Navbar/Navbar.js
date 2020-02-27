import React from 'react';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark p-2" style={{ backgroundColor: "#009688" }}>
            <Link className="navbar-brand" to="/"><img src={Logo} alt="e-Leve" />e-Leve</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Alterna navegação">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active text-white">
                        <Link className="nav-link text-white"  to="/">PÁGINA INICIAL</Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link text-white" to="/sobre">SOBRE</Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link text-white" to="/acessibilidade">ACESSIBILIDADE</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/blog">BLOG</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/contato">CONTATO</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;