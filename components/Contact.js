import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            message: '',
            opened: false
        }

        this.modal = React.createRef();

    }

    backgroundClick = e => {
        if(e.target === this.modal.current){
            this.setState({opened: false});
        }
    }

    inputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitForm = e => {
        e.preventDefault();
        const { name, email, message } = this.state;
        const formData = { name, email, message }
        this.setState({ name: '', email: '', message: '', opened: true });
        axios.post("https://usebasin.com/f/6b3c6cb0aa08.json", formData, { headers: { Accept: 'application/json' } } );
    }   

    hideModal = () => {
        this.setState({ opened: false });
    }

    render() {
        let popupStyles = {};
        if(this.state.opened){
            popupStyles = {
                opacity: '1',
                transform: 'scale(1)'
            };
        }

        return (
            <div id="contact" className="contact">
                <h2 className="heading__secondary">Contact me</h2>
            
                <form onSubmit={this.submitForm} autoComplete="off" className="contact__form" acceptCharset="UTF-8" >

                    <div className="contact__form-container">
                    
                        <div className="contact__form-group">
                            <label className="contact__form-label" htmlFor="name">Name</label>
                            <input value={this.state.name} onChange={this.inputChange} className="contact__form-input contact__form-field" id="name" placeholder="Enter your name" type="text" name="name" />
                        </div>

                        <div className="contact__form-group">
                            <label className="contact__form-label" htmlFor="email">Email</label>
                            <input value={this.state.email} onChange={this.inputChange} className="contact__form-input contact__form-field" id="email" placeholder="Enter your email adress" type="email" name="email" />
                        </div>

                    </div>

                    <div className="contact__form-group">
                        <label className="contact__form-label" htmlFor="message">Message</label>
                        <textarea value={this.state.message} onChange={this.inputChange} className="contact__form-textarea contact__form-field" id="message" placeholder="Your message here..." type="text" name="message"/>
                    </div>

                    <div className="contact__form-group contact__form-button-container">
                        <button type="submit" className="contact__form-button">Submit</button>
                    </div>

                </form>

                <div onClick={this.backgroundClick} ref={this.modal} className={`contact__modal ${this.state.opened ? 'contact__modal-opened' : null}`}>
                    <div style={popupStyles} className="contact__modal-box">
                        <h1 className="contact__modal-heading">Thanks for your submission</h1>
                        <p className="contact__modal-info">I'll answer to your question ASAP</p>
                        <div className="contact__modal-buttons">
                            <button onClick={this.hideModal} className="contact__modal-button">Comeback to page</button>
                        </div>
                    </div>

                    <div className="contact__modal-exit">
                        <i onClick={this.hideModal} className="fas fa-times"></i>
                    </div>

                </div>
            
            </div>
        );
    }
}

export default Contact;
