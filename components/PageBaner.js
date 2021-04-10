import React from 'react';
import { Link } from 'react-scroll';

const PageBaner = () => (
    <div id="container" className="baner">
        <h2 className="baner__title">Need website?</h2>
        <Link to="contact" smooth duration={500}><button className="baner__button">Contact me!</button></Link>
    </div>
);

export default PageBaner;