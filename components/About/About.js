import React from 'react';

import Technology from './Technology';

const About = (props) => (
    <div id="about">
        <section className="about">

            <h1 className="heading__secondary about__title">
                <span className="heading__secondary-main">About Me</span>
                <span className="heading__secondary-sub">Who am I?</span>
            </h1>

            <p className="about__info">
                I'm an 20 year old Jagiellonian Univeristy student from Poland who has a passion for front end technologies. I'm proficient with HTML5, CSS3, JavaScript with experience in React and NodeJS. If you want to see the projects that I have created, please visit my github.
            </p>

            <ul className="about__technologies">

                    <Technology title="HTML5" iconClass="fab fa-html5" />
                    <Technology title="CSS3" iconClass="fab fa-css3-alt" />
                    <Technology title="SASS" iconClass="fab fa-sass" />
                    <Technology title="Javascript" iconClass="fab fa-js" />
                    <Technology title="React" iconClass="fab fa-react" />
                    <Technology title="Node.js" iconClass="fab fa-node-js" />
                
            </ul>

        </section>
        {props.children}
    </div>
);

export default About;