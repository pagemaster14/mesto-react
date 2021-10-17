import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser, props.isOpen]);

function handleSubmit(e) {
    e.preventDefault();
      
    props.onUpdateUser({
      name: name,
      about: description,
});
}

function handleChange(evt) {
    evt.target.name === "name"
    ? setName(evt.target.value)
    : setDescription(evt.target.value);
}

return (
    <PopupWithForm name="edit-profile" title="Редактировать профиль"
    buttontext="Сохранить" isOpen={props.isOpen} onClose={props.onClose}
    onSubmit={handleSubmit}>
    <section className="form__section">
      <input type="text" name="name" id="name"
        placeholder="Имя"
        className="form__text form__text_type_name"
        required minLength="2"
        maxLength="40"
        value={name || ''} onChange={handleChange} />
      <span className="form__input-error"
        id="fullname-error" ></span>
    </section>
    <section className="form__section" >
      <input type="text"
        name="about"
        id="about"
        placeholder="Занятие"
        className="form__text form__text_type_bio"
        required minLength="2"
        maxLength="200"
        value={description || ''} onChange = {handleChange} />
      <span className="form__input-error"
        id="job-error" ></span>
    </section>
  </PopupWithForm>
)
}

export default EditProfilePopup;