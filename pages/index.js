import React, { Component } from "react";
import { Preloader, Placeholder } from "react-preloading-screen";

import "../sass/main.scss";

import Head from "next/head";
import Nav from "../components/Nav/Nav";
import Header from "../components/Header";
import About from "../components/About/About";
import PageBaner from "../components/PageBaner";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact";
import Preload from "../components/Preload/Preload";

class Home extends Component {
    state = {
        isOpen: false,
    };

    toggleNav = () => {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    };

    render() {
        return (
            <div style={{ display: "flex", width: "100%" }}>
                <Head>
                    <title>Gregorz | Front end developer</title>
                </Head>
                <div className="container__nav">
                    <Nav
                        toggleNav={this.toggleNav}
                        isOpen={this.state.isOpen}
                    />
                </div>

                <div className="container__content">
                    <Header
                        toggleNav={this.toggleNav}
                        isOpen={this.state.isOpen}
                    />
                    <About>
                        <PageBaner />
                    </About>
                    <Portfolio />
                    <Contact />
                </div>
            </div>
        );
    }
}

export default Home;
