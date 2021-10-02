import React from 'react';
import Header from './Header'
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../ulits/api';

function App() {
    const [getUserInfo, setUserInfo] = React.useState([]);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [cards, addCards] = React.useState([]);
    const [selectedCard, setSelectedCard] = React.useState(false);

    React.useEffect(() => {
        api.getUserInfo()
          .then((getUserInfo) => {
            setUserInfo(getUserInfo);
          })
          .catch(err => console.log(err))
      }, []);

  React.useEffect(()=>{
    api.getInitialCards()
    .then((data) => {
        addCards(data);
      }).catch(err => console.log(err))
  },[])

  function handleCardClick(card){
    setSelectedCard(card);
 }

    function handleEditAvatarClick () {
        setIsEditAvatarPopupOpen(true)
       }
    
       function handleEditProfileClick () {
        setIsEditProfilePopupOpen(true)
       }
    
       function handleAddPlaceClick () {
        setIsAddPlacePopupOpen(true)
       }

       function closeAllPopups(){
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(false);
     }

    return (<>
    <div className = "page" >
        <Header/>
        <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        userName={getUserInfo}
        userDescription={getUserInfo}
        userAvatar={getUserInfo}
        cards={cards}
        onCardClick={handleCardClick}
        />
        <Footer/>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <PopupWithForm name="edit-profile" title="Редактировать профиль"
        buttontext="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>      
        <section className = "form__section">
        <input type = "text" name = "fullname" id = "fullname"
        className = "form__text form__text_type_name"
        required minLength = "2"
        maxLength = "40" />
        <span className = "form__input-error"
        id = "fullname-error" ></span>
        </section >
        <section className = "form__section" >
        <input type = "text"
        name = "job"
        id = "job"
        className = "form__text form__text_type_bio"
        required minLength = "2"
        maxLength = "200" / >
        <span className = "form__input-error"
        id = "job-error" ></span>
        </section>
        </PopupWithForm>
        <PopupWithForm name="add" title="Новое место"
        buttontext="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <section className = "form__section" >
        <input type = "text"
        name = "name"
        id = "cardname"
        placeholder = "Название"
        className = "form__text form__text_type_place"
        required minLength = "2"
        maxLength = "30" / >
        <span className = "form__input-error"
        id = "cardname-error" > < /span> < /
        section > <
        section className = "form__section" >
        <input type = "url"
        name = "link"
        id = "cardimage"
        placeholder = "Ссылка на картинку"
        className = "form__text form__text_type_img"
        required />
        <span className = "form__input-error"
        id = "cardimage-error" > < /span> </section>
        </PopupWithForm>
        <PopupWithForm name="delete" title="Вы уверены ?" buttontext="Да" />
        <PopupWithForm name="edit-avatar" title="Обновить аватар"
        buttontext="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <section className = "form__section">
        <input type = "url"
        name = "link"
        id = "editavatar"
        placeholder = "Ссылка на аватар"
        className = "form__text form__text_type_img"
        required />
        <span className = "form__input-error"
        id = "editavatar-error"></span>
</section>
</PopupWithForm>
        </div>
        </>
    );
}

export default App;