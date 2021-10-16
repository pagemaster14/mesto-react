import { options } from "./ulits";

class Api {
    constructor(options) {
        this._url = options.baseUrl
        this._headers = options.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo() {
        return fetch(`${this._url}${'users/me'}`, {
                headers: this._headers,
            })
            .then(this._checkResponse)
    }

    updateUserInfo(newUserInfo) {
        return fetch(`${this._url}${'users/me'}`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: newUserInfo.name,
                    about: newUserInfo.about
                })
            })
            .then(this._checkResponse)
    }

    getInitialCards() {
        return fetch(`${this._url}${'cards'}`, {
                headers: this._headers,
            })
            .then(this._checkResponse)

    }

    addNewCard(data) {
        return fetch(`${this._url}${'cards'}`, {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    name: data.name,
                    link: data.link
                })
            })
            .then(this._checkResponse)
    }

    deleteCard(id) {
        return fetch(`${this._url}${'cards/'}` + id, {
                method: 'DELETE',
                headers: this._headers,
            })
            .then(this._checkResponse)
    }

    changeLikeCardStatus(id, isLiked) {
        return fetch(`${this._url}${'cards/likes/'}` + id, {
                method: `${isLiked ? 'PUT' : 'DELETE'}`,
                headers: this._headers,
            })
            .then(this._checkResponse)
    }

    updateUserAvatar(avatar) {
        return fetch(`${this._url}${'users/me/avatar'}`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar: avatar.link
                })
            })
            .then(this._checkResponse)
    }
}

const api = new Api(options);
export default api;