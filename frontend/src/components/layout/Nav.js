import React from 'react';
import { NavLink } from "react-router-dom";

import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
    return (
        <div className="nav-bg">
            <nav className="navegacion">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'activo' : 'inactive')}>NOSOTROS</NavLink>
                <NavLink to="/productos" className={({ isActive }) => (isActive ? 'activo' : 'inactive')}>PRODUCTOS</NavLink>
                <NavLink to="/servicios" className={({ isActive }) => (isActive ? 'activo' : 'inactive')}>SERVICIOS</NavLink>
                <NavLink to="/novedades" className={({ isActive }) => (isActive ? 'activo' : 'inactive')}>NOVEDADES</NavLink>
                <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'activo' : 'inactive')}>CONTACTO</NavLink>
            </nav>
        </div>
    );
}

export default Nav;

