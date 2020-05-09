const editFormButton = document.querySelector('.profile__edit-button');
const closeFormButton = document.querySelector('.popup__close-button')
const popup = document.querySelector('.popup');
const saveButton = document.querySelector('.popup__save-button');

let profileName = document.querySelector('.profile__name');
let profileVacation = document.querySelector('.profile__vocation');
let nameInput = document.querySelector('.popup__input_edit_name');
let jobInput = document.querySelector('.popup__input_edit_about');
let formElement = document.querySelector('.popup__container');

function ShowCloseForm() {
  popup.classList.toggle('popup_opened');
  if (popup.classList.contains('popup_opened') {
    nameInput.value = profileName.textContent;
    jobInput.value = profileVacation.textContent;
  }
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileVacation.textContent = jobInput.value;
  ShowCloseForm()
}

formElement.addEventListener('submit', formSubmitHandler);
editFormButton.addEventListener('click', ShowCloseForm);
closeFormButton.addEventListener('click', ShowCloseForm);