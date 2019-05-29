import React, { Component } from 'react';

import Hamburger from './Nav/Hamburger';
import { Link } from 'react-scroll';

class Header extends Component {

    state = {
        heading_primary: '',
        heading_secondary: '',
        name: '',
        technology: '',
        cursorStyles: { display: 'none' }
    }

    componentDidMount(){
        this.writerTimeout = setTimeout( () => {
        this.typeWriter("HI! I'M ", 80, 0, 'primary');
        setTimeout(() => this.typeWriter("Gregory", 70, 0, 'name') , 720);
        setTimeout(() => this.typeWriter("Fullstack", 50, 0, 'technology') , 1340);
        setTimeout(() => this.typeWriter(" developer from Poland", 50, 0, 'secondary') , 1820);
        // this.changeTechnology();
        }, 500);
    }

    componentWillUnmount(){
        clearTimeout(this.writerTimeout);
    }

    typeWriter = (text, speed, i, which) => {

        if(which === 'primary')var actualText = this.state.heading_primary;
        if(which === 'secondary')var actualText = this.state.heading_secondary;
        if(which === 'name')var actualText = this.state.name;
        if(which === 'technology')var actualText = this.state.technology;

        if(i < text.length){
            actualText += text.charAt(i);
            i++;
            this.setState(() => {
                if(which === 'primary')return { heading_primary: actualText };
                if(which === 'secondary')return { heading_secondary: actualText };
                if(which === 'name')return { name: actualText };
                if(which === 'technology')return { technology: actualText };
            });
            setTimeout(() => this.typeWriter(text, speed, i, which), speed);
        }

    }

    render(){
        return(
            <section id="home" className="header">
    
                <header className="header__title heading__primary">

                    <h1 className="heading__primary-main">
                        {this.state.heading_primary}
                        <strong className="heading__primary-name">
                            {this.state.name}
                        </strong>
                    </h1>

                    <span className="heading__primary-sub">{this.state.technology}{this.state.heading_secondary}</span>
                    
                    <Link className="header__button-link" to="about" smooth duration={500}><button className="header__button">Learn more</button></Link>
                </header>
                
                <Link to="about" smooth duration={500} >
                    <div className="header__arrow">
                        <i className="fas fa-angle-down"></i>
                    </div>
                </Link>
    
                <Hamburger isOpen={this.props.isOpen} toggleNav={this.props.toggleNav} />
                
            </section>
        )
    }
   
};

export default Header;