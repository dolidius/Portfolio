import React from 'react';
import { Link } from 'react-scroll';

const NavLink = ({
    to,
    iconClass,
    text,
}) => (
    <Link className="nav__link" spy activeClass="nav__link-active" to={to} smooth duration={500}>
        <div className="nav__icon"><i className={iconClass}></i></div>
        <div className="flexSpacer" />
        <div className="nav__link-text">{text}</div>
    </Link>
);

export default NavLink;