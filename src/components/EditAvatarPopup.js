import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup(props){
    const inputRef = React.useRef();
    
    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({link: inputRef.current.value});
       
      }

    return (
<PopupWithForm name="edit-avatar" title="Обновить аватар"
buttontext="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
<section className="form__section">
  <input type="url" ref={inputRef}
    name="link"
    id="editavatar"
    placeholder="Ссылка на аватар"
    className="form__text form__text_type_img"
    required />
  <span className="form__input-error"
    id="editavatar-error"></span>
</section>
</PopupWithForm>
)
}

export default EditAvatarPopup;