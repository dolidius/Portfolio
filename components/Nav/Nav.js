import React, { Component } from "react";

import NavLink from "./NavLink";
import SocialIcon from "./SocialIcon";

class Nav extends Component {
    state = {
        envClass: "fas fa-envelope",
    };

    openEnvelope = () => {
        this.setState({ envClass: "fas fa-envelope-open" });
    };

    closeEnvelope = () => {
        this.setState({ envClass: "fas fa-envelope" });
    };

    render() {
        let navStyles;
        if (this.props.isOpen) {
            navStyles = { left: "0" };
        }

        return (
            <nav style={navStyles} className="nav">
                <div className="nav__presentation">
                    <div className="nav__avatar">
                        <i style={{ fontSize: '5.5rem' }} class="fas fa-laptop"></i>
                    </div>

                    <div className="flexSpacer" />

                    <div className="nav__presentation-info">
                        <span className="nav__presentation-info-primary">
                            Grzegorz
                        </span>
                        <span className="nav__presentation-info-secondary">
                            Front end developer
                        </span>
                    </div>
                </div>

                <ul className="nav__links">
                    <NavLink to="home" iconClass="fas fa-home" text="Home" />
                    <NavLink
                        to="about"
                        iconClass="fa fa-address-card"
                        text="About"
                    />
                    <NavLink
                        to="portfolio"
                        iconClass="fas fa-images"
                        text="Portfolio"
                    />
                    <NavLink
                        to="contact"
                        iconClass="fas fa-envelope"
                        text="Contact"
                    />
                </ul>

                <div className="flexSpacer" />

                <div className="nav__social">
                    <SocialIcon
                        link="https://github.com/dolidius"
                        iconClass="fab fa-github nav__social-github"
                    />

                    <SocialIcon
                        link="https://www.linkedin.com/in/grzegorz-brzozowski-4486bb161/"
                        iconClass="fab fa-linkedin-in nav__social-linked"
                    />

                    {/* <SocialIcon
                        link="https://twitter.com/greegor521"
                        iconClass="fab fa-twitter nav__social-twitter"
                    /> */}

                    {/* <SocialIcon
                        link="https://www.hackerrank.com/dolidius"
                        iconClass="fab fa-hackerrank nav__social-hackerrank"
                    /> */}

                    <div className="nav__social-icon">
                        <a href="mailto:dolidius@gmail.com">
                            <i
                                onMouseLeave={this.closeEnvelope}
                                onMouseOver={this.openEnvelope}
                                className={this.state.envClass}
                            />
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;
