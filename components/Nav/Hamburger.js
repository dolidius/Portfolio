import React from 'react';

const Hamburger = (props) => (
    <div onClick={props.toggleNav} className="hamb">
        <div className={`hamb__icon ${props.isOpen ? 'hamb__icon-open' : null}`}>
            <div className="hamb__icon-line"></div>
            <div className="hamb__icon-line"></div>
            <div className="hamb__icon-line"></div>
        </div>
    </div>
);

export default Hamburger;