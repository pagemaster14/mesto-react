import React from 'react';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content" >
            <section className="profile" >
                <div className="avatar-block" >
                    <img src={currentUser.avatar}
                        alt="картинка Аватар пользователя"
                        className="profile__image" />
                    <button onClick={props.onEditAvatar} type="button"
                        arialabel="Open"
                        className="avatar-button"></button>
                </div>
                <div className="profile-info" >
                    <h1 className="profile-info__name" >{currentUser.name}</h1>
                    <p className="profile-info__bio" >{currentUser.about}</p>
                    <button onClick={props.onEditProfile} type="button"
                        arialabel="Open"
                        className="edit-button" >< /button>
                </div >
                <button onClick={props.onAddPlace} type="button"
                    arialabel="Open"
                    className="add-button">
                </button>
            </section>
            <section className="cards">
                {props.cards.map((card) => (
                    <Card key={card._id} card={card} onCardClick={props.onCardClick}
                    onCardDelete={props.onCardDelete} onCardLike={props.onCardLike} />
                ))}
            </section>
        </main>
    )
}

export default Main;