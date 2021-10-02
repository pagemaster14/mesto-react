import React from 'react';

class PopupWithForm extends React.Component {

  
    render() {
  
      return (
        <div className={`popup popup_type_${this.props.name} ${this.props.isOpen ? 'popup_opened' : ''}`}>
        <div className = "popup__container">
        <button type = "button" 
        arialabel = "Close"
        className={`popup-close popup-close_type_${this.props.name}`} onClick={this.props.onClose}> 
        </button>
        <div className = "popup__content" >
        <h2 className = "popup__title" >{this.props.title}</h2>
        <form name = {this.props.name}  
        className={`form form_type_${this.props.name}`}
        noValidate>
        {this.props.children}
        </form>
        <button type = "submit"
        className={`submit-btn form__submit-btn form__submit-btn_type_${this.props.name}`}
        >{this.props.buttontext}</button></div >
        </div>
        </div> 
      );
    }
  }

  export default PopupWithForm;
  