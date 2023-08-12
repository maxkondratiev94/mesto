const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.popup__close');

let formElement = document.querySelector('.popup__info');
let closeButton = document.querySelector('.popup__save');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__job');
let nameInput = popup.querySelector('.popup__input-name');
let jobInput = popup.querySelector('.popup__input-job');

function handleFormSubmit (evt) {
    evt.preventDefault();
    let nameValue = nameInput.value;
    let jobValue = jobInput.value;
    nameProfile.textContent = nameValue;
    jobProfile.textContent = jobValue;
    popupToggle ();
}

const popupAdd = function () {
    popup.classList.toggle('popup__opened');
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}

const popupToggle = function (event) {
    popup.classList.toggle('popup__opened');
  }

  popupOpenButton.addEventListener('click', popupToggle);

  popupCloseButton.addEventListener('click', popupToggle);

  formElement.addEventListener('submit', handleFormSubmit);

