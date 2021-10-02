import React from 'react';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
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
                    className="like-button" >
                </button>
                <span className="card__like-counter" > {props.card.likes.length} </span>
            </div>
            <button type="button"
                style={
                    { display: `block` }}
                arialabel="Delete"
                className="delete-button" >
            </button>
        </article>
    )
}

export default Card;