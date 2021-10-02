import React from 'react';
import api from '../ulits/api';
import Card from './Card';

function Main(props) {
    React.useEffect(() => {
        api.getUserInfo()
            .then((userInfo) => {
                props.setUserInfo(userInfo);
            })
            .catch(err => console.log(err))
    }, []);

    React.useEffect(() => {
        api.getInitialCards()
            .then((data) => {
                props.addCards(data);
            }).catch(err => console.log(err))
    }, [])

    return (
        <main className="content" >
            <section className="profile" >
                <div className="avatar-block" >
                    <img src={props.userAvatar.avatar}
                        alt="картинка Аватар пользователя"
                        className="profile__image" />
                    <button onClick={props.onEditAvatar} type="button"
                        arialabel="Open"
                        className="avatar-button"></button>
                </div>
                <div className="profile-info" >
                    <h1 className="profile-info__name" >{props.userName.name}</h1>
                    <p className="profile-info__bio" >{props.userDescription.about}</p>
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
                    <Card key={card._id} card={card} onCardClick={props.onCardClick} />
                ))}
            </section>
        </main>
    )
}

export default Main;