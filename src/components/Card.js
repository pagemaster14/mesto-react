import React from 'react';
import CurrentUserContext from "../contexts/CurrentUserContext"

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = props.card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `delete-button ${isOwn ? 'delete-button_visible' : 'delete-button_hidden'}`
      );
      const isLiked = props.card.likes.some(i => i._id === currentUser._id);
      const cardLikeButtonClassName = `like-button ${
        isLiked ? 'like-button_active' : 'like-button'
      }`;

    function handleClick() {
        props.onCardClick(props.card);
    }

    function handleLikeClick() {
        props.onCardLike(props.card)
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card)
    }

    return (
        <article className="card">
            <img src={props.card.link}
                alt={props.card.name}
                onClick={handleClick}
                className="card__image" />
            <h2 className="card__name" >{props.card.name}</h2>
            <div className="card__like-block" >
                <button type="button"
                    arialabel="Like"
                    className={cardLikeButtonClassName}
                    onClick={handleLikeClick}>
                </button>
                <span className="card__like-counter" > {props.card.likes.length} </span>
            </div>
            <button type="button"
                arialabel="Delete"
                className={cardDeleteButtonClassName}
                onClick={handleDeleteClick}>
            </button>
        </article>
    )
}

export default Card;