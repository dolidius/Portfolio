import React from 'react';

const Technology = ({
    title,
    iconClass
}) => {
    return (
        <li className="tech__item">
            <div className="tech__item-container">
                <i className={iconClass}></i>
            </div>
            <div className="tech__item-title">
                {title}
            </div>
        </li>
    );
}

export default Technology;