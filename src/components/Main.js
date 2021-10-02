import React from 'react';
import Card from './Card';

function Main(props) {

    return (
        <main className = "content" >
        <section className = "profile" >
        <div className = "avatar-block" >
        <img src = {props.userAvatar.avatar}
        alt = "картинка Аватар пользователя"
        className = "profile__image" />
        <button onClick={props.onEditAvatar} type = "button"
        arialabel = "Open"
        className = "avatar-button" > </button>
        </div>
        <div className = "profile-info" >
        <h1 className = "profile-info__name" >{props.userName.name}</h1>
        <p className = "profile-info__bio" >{props.userDescription.about}</p>
        <button onClick={props.onEditProfile} type = "button"
        arialabel = "Open"
        className = "edit-button" >< /button>
        </div >
        <button onClick={props.onAddPlace} type = "button"
        arialabel = "Open"
        className = "add-button">
        </button>
        </section>
        <section className = "cards">
        {props.cards.map((card, i) => ( 
            <Card key={i} card={card} onCardClick={props.onCardClick} /> 
          ))} 
        </section >
        </main>
    )
}

export default Main;