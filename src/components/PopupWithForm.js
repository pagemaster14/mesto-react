import React from 'react';

function PopupWithForm(props) {

  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button type="button"
          arialabel="Close"
          className={`popup-close popup-close_type_${props.name}`} onClick={props.onClose}>
        </button>
        <div className="popup__content" >
          <h2 className="popup__title" >{props.title}</h2>
          <form name={props.name}
            className={`form form_type_${props.name}`}>
            {props.children}
          </form>
          <button type="submit"
            className={`submit-btn form__submit-btn form__submit-btn_type_${props.name}`}
          >{props.buttontext}</button></div >
      </div>
    </div>
  );

}

export default PopupWithForm;
