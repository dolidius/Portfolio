import React from 'react';

const SocialIcon = ({
    link,
    iconClass,
    mouseOver,
    styles
}) => (
    <div className="nav__social-icon">
        <a target="_blank" rel="noopener noreferrer" href={link}>
            <i style={styles} onMouseOver={mouseOver} className={iconClass}></i>
        </a>
    </div>
);

export default SocialIcon;