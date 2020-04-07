import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './style.css';

export default function Header() {
    return(
        <header className="container">
            <Link to="/">
                <img className="logo" src={logo} alt="Logo Projeto" />
            </Link>
            <Link to="/reservas" className="reserva">
                <div>
                    <strong>Minhas reservas</strong>
                    <span>2 reservas</span>
                </div>
            </Link>
        </header>
    )
}