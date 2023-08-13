const popup = document.querySelector(".popup");
const popupOpenButton = document.querySelector(".profile__edit-button");
const popupCloseButton = popup.querySelector(".popup__close");

let formElement = document.querySelector(".popup__info");
let nameProfile = document.querySelector(".profile__name");
let jobProfile = document.querySelector(".profile__job");
let nameInput = popup.querySelector(".popup__input_type_name");
let jobInput = popup.querySelector(".popup__input_type_job");

const closePopup = function () {
  popup.classList.remove("popup_opened");
};

function handleFormSubmit(evt) {
  evt.preventDefault();
  let nameValue = nameInput.value;
  let jobValue = jobInput.value;
  nameProfile.textContent = nameValue;
  jobProfile.textContent = jobValue;
  closePopup();
}

const popupAdd = function () {
  popup.classList.add("popup_opened");
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
};

const popupRemove = function () {
  popup.classList.remove("popup_opened");
};

popupOpenButton.addEventListener("click", popupAdd);

popupCloseButton.addEventListener("click", popupRemove);

formElement.addEventListener("submit", handleFormSubmit);
