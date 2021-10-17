import React from 'react';
import Header from './Header'
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../ulits/api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [currentUser, setCurrentUser] = React.useState({})
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [cards, addCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([currentUser, data]) => {
          setCurrentUser(currentUser);
          addCards(data);
        })
        .catch(err => console.log(err))
}, [])

function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    api.changeLikeCardStatus(card._id, !isLiked)
        .then((newCard) => {
        addCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(err => console.log(err))
} 

function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(() => {
        const cardId = cards.filter(c => c._id !== card._id);
        addCards(cardId)
    })
    .catch(err => console.log(err))
}

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: '', link: '' });
  }

  function handleUpdateUser(newUserInfo) {
    api.updateUserInfo(newUserInfo)
    .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
    })
    .catch(err => console.log(err))
  }

  function handleUpdateAvatar(userData){
    api.updateUserAvatar(userData)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
  })
    .catch(err => console.log(err))
   }

   function handleAddPlaceSubmit(userData) {
    api.addNewCard(userData)
    .then((newCard) => {
      addCards([newCard, ...cards]);
      closeAllPopups()
  })
    .catch(err => console.log(err))
}

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page" >
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        cards={cards}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
      <Footer />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
      <PopupWithForm name="delete" title="Вы уверены ?" buttontext="Да" />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;