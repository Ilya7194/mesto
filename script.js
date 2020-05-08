const editFormButton = document.querySelector('.profile__edit-button');
const closeFormButton = document.querySelector('.popup__close-button')
const popup = document.querySelector('.popup');

editFormButton.addEventListener('click', editClassPopup);
closeFormButton.addEventListener('click', editClassPopup);

function editClassPopup() {
  popup.classList.toggle('popup_opened');
}

let profileName = document.querySelector('.profile__name');
let profileVacation = document.querySelector('.profile__vocation');
let nameInput = document.querySelector('.popup__input_edit_name');
let jobInput = document.querySelector('.popup__input_edit_about');

nameInput.value = profileName.textContent;
jobInput.value = profileVacation.textContent;

let formElement = document.querySelector('.popup__container');

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileVacation.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);

const saveButton = document.querySelector('.popup__save-button');
saveButton.addEventListener('click', editClassPopup);