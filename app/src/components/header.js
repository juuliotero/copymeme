import React from 'react';
import './header.scss';

function Header() {
    return (
        <nav class="navbar navbar-dark navbar-expand-sm bg-top">
            <a className="navbar-brand text-white" href="/">
            </a>
            <li class="dropdown menu dropleft">
                <button class="btn text-white" id='btSwitch' type="button" data-toggle="dropdown">
                    <span class="navbar-toggler-icon text-center">
                    </span>
                </button>
                <ul class="dropdown-menu">
                    <li class="nav-item"><a href="/">Inicio</a></li>
                    <li class="nav-item"><a href="/subirMeme">Subir meme</a></li>
                    <li class="nav-item"><a href="/logout">Cerrar sesión</a></li>
                </ul>
            </li>
        </nav >
    );
}

export default Header;
