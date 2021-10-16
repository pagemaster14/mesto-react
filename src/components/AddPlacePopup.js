import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup(props){
    const nameRef = React.useRef();
    const linkRef = React.useRef();
    
    function handleSubmit(evt) {
        evt.preventDefault();
        props.onAddPlace({
          name: nameRef.current.value,
          link: linkRef.current.value,
        });
      }

    return (
<PopupWithForm name="add" title="Новое место"
buttontext="Создать" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
<section className="form__section" >
  <input type="text"
    ref={nameRef}
    name="name"
    id="cardname"
    placeholder="Название"
    className="form__text form__text_type_place"
    required minLength="2"
    maxLength="30" />
  <span className="form__input-error"
    id="cardname-error" > </span>
</section >
<section className="form__section" >
  <input type="url"
    ref={linkRef}
    name="link"
    id="cardimage"
    placeholder="Ссылка на картинку"
    className="form__text form__text_type_img"
    required />
  <span className="form__input-error"
    id="cardimage-error" > < /span> </section>
</PopupWithForm>
)
}
export default AddPlacePopup;