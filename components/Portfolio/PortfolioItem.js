import React, { Component } from 'react';

class PortfolioItem extends Component{

    constructor(){
        super();
        this.state = {
            opened: false
        }

        this.modal = React.createRef();
    } 

    closeModal = () => {
        this.setState({opened: false});
    }

    openModal = () => {
        this.setState({opened: true});
    }

    backgroundClick = e => {
        if(e.target === this.modal.current){
            this.setState({opened: false});
        }
    }

    render(){
        let popupStyles = {};
        if(this.state.opened){
            popupStyles = {
                opacity: '1',
                transform: 'scale(1)'
            };
        }
        
        return(
            <div className="portfolio__item mt-hg">

                <div className="portfolio__item-info">

                    <h3 className="portfolio__item-title">{this.props.title}</h3>

                    <p className="portfolio__item-desc">{this.props.desc ? this.props.desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur debitis ex et perspiciatis iste eum facere ut officia dolores. Sit iste aliquam voluptate repellat molestiae. Impedit nemo harum error, dolores fugiat magni expedita quod, neque, quos sunt voluptates mollitia possimus."}</p>

                    <div className="portfolio__tags">
                        {this.props.tags.map((tag, i) => (
                            <div key={i} className="portfolio__tag">{tag}</div>
                        ))}
                    </div>

                    <div className="portfolio__item-buttons">
                        <a target="_blank" rel="noopener noreferrer" href={this.props.codeHref}><button className="portfolio__item-button portfolio__item-code">Code</button></a>
                        {this.props.liveHref.length > 0 && <a target="_blank" rel="noopener noreferrer" href={this.props.liveHref}><button className="portfolio__item-button portfolio__item-live">Live</button></a>}
                    </div>

                </div>

                <div className="portfolio__item-img">
                    <img onClick={this.openModal} src={`/static/portfolio/${this.props.imageName}`} alt="Shop template image"/>
                </div>

                <div onClick={this.backgroundClick} ref={this.modal} id="popup" className={`portfolio__modal-container ${this.state.opened ? 'portfolio__modal-opened' : null}`}>

                    <div className="portfolio__modal">
                        <img style={popupStyles} src={`/static/portfolio/${this.props.imageName}`} alt=""/>
                    </div>

                    <div className="portfolio__modal-exit">
                        <i onClick={this.closeModal} className="fas fa-times"></i>
                    </div>

                </div>

            </div>
        )
    }
    
};

export default PortfolioItem;