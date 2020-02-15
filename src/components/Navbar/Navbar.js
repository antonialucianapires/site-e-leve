import React from 'react';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark p-2 fixed-top" style={{ backgroundColor: "#009688" }}>
            <Link class="navbar-brand" to="/"><img src={Logo} alt="e-Leve" />e-Leve</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Alterna navegação">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li class="nav-item active text-white">
                        <Link className="nav-link text-white"  to="/">PÁGINA INICIAL</Link>
                    </li>
                    <li class="nav-item ">
                        <Link className="nav-link text-white" to="/sobre">SOBRE</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-white" to="/blog">BLOG</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-white" to="/contato">CONTATO</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;