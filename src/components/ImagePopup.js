function ImagePopup(props) {
    return (
        <div className={`popup popup-place ${props.card.link ? 'popup_opened' : ''}`}>
            <div className="popup-place__container" >
                <button type="button"
                    arialabel="Close"
                    className="popup-close popup-close_type_image" onClick={props.onClose}>
                </button>
                <img src={props.card.link}
                    alt={props.card.name}
                    className="popup-place__image" />
                <p className="popup-place__name">{props.card.name}</p>
            </div>
        </div>
    )
}

export default ImagePopup;