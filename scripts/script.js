//Добавление карточек_________________________________________________________________________________
const initialCards = [
  {
    name: 'Москва',
    link: './images/Moscow.jpg'
  },
  {
    name: 'Киев',
    link: './images/Kyiv.jpg'
  },
  {
    name: 'Варшава',
    link: './images/Warsaw.jpg'
  },
  {
    name: 'Прага',
    link: './images/Prague.jpg'
  },
  {
    name: 'Амстердам',
    link: './images/Amsterdam.jpg'
  },
  {
    name: 'Барселона',
    link: './images/Barcelona.jpg'
  }
];

initialCards.forEach(element => {
  const name = element.name;
  const link = element.link;
  addCard(link, name);
});

//Редактирование профиля___________________________________________________________________________________
const openProfileFormButton = document.querySelector('.profile__edit-button');
const closeProfileFormButton = document.querySelector('.popup__close-button_place_profile');
const popupProfle = document.querySelector('.popup_profile');
const saveButton = document.querySelector('.popup__submit-button_save');

const profileName = document.querySelector('.profile__name');
const profileVacation = document.querySelector('.profile__vocation');
const nameInput = document.querySelector('.popup__input_edit_name');
const jobInput = document.querySelector('.popup__input_edit_about');
const formEditProfile = document.querySelector('.popup__container_place_profile');

// Открытие/закрытие попапа редактирования профиля____________________________________________________
function toggleProfileForm() {
  popupProfle.classList.toggle('popup_opened');
  if (popupProfle.classList.contains('popup_opened')) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileVacation.textContent;
  }
}

function editFormSubmitHandler(evt) { // обработчик попапа редактирования профиля
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileVacation.textContent = jobInput.value;
  toggleProfileForm()
}

formEditProfile.addEventListener('submit', editFormSubmitHandler);
openProfileFormButton.addEventListener('click', toggleProfileForm);
closeProfileFormButton.addEventListener('click', toggleProfileForm);

// Добавление карточки ___________________________________________________________________________
const openCardFormButton = document.querySelector('.profile__add-button');
const closeCardFormButton = document.querySelector('.popup__close-button_place_card');
const popupCard = document.querySelector('.popup_card')
const createButton = document.querySelector('.popup__submit-button_create');
const formAddCard = document.querySelector('.popup__container_place_card');

function addCard(link, name) { // функция создания карточки
  const cardTemplate = document.querySelector('#card-template').content;
  cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.place__image').src = link;
  cardElement.querySelector('.place__title').textContent = name;
  cardElement.querySelector('.place__image').alt = name;
  cardElement.querySelector('.place__delete-button').addEventListener('click', function (evt) { //удаление карточки
    this.parentElement.remove();
  });
  cardElement.querySelector('.place__like-button').addEventListener('click', function (evt) { // Лайк карточки
    evt.target.classList.toggle('place__like-button_active')
  });
  cardElement.querySelector('.place__image').addEventListener('click', function (evt) { //откытие увеличенной карточки
    popupPhoto.classList.add('popup_opened');
    popupPhotoImage.src = link;
    popupPhotoImage.alt = name;
    popupPhotoCaption.textContent = name;
  });
  document.querySelector('.places').prepend(cardElement);
}

// Открытие/закрытие попапа добавления карочки_______________________________________________________________________
function toggleCardForm() {
 popupCard.classList.toggle('popup_opened');
}

openCardFormButton.addEventListener('click', toggleCardForm);
closeCardFormButton.addEventListener('click', toggleCardForm);
formAddCard.addEventListener('submit', addFormSubmitHandler);

function addFormSubmitHandler(evt) { // обработчик попапа добавления карточки
  const imageInput = document.querySelector('.popup__input_add_image');
  const placeInput = document.querySelector('.popup__input_add_place');
  const name = placeInput.value;
  const link = imageInput.value;
  evt.preventDefault();
  toggleCardForm();
  addCard(link, name);
  placeInput.value = '';
  imageInput.value = '';
}
// Закрытие попапа увеличения карточки. (открытие попапа реализовано в функции создания карточки)_____________________
const closePhotoPopupButton = document.querySelector('.popup__close-button_place_image');
const popupPhoto = document.querySelector('.popup_image');
const popupPhotoImage = popupPhoto.querySelector('.popup__photo');
const popupPhotoCaption = popupPhoto.querySelector('.popup__caption');

function closePhotoPopup() {
  popupPhoto.classList.remove('popup_opened');
}
closePhotoPopupButton.addEventListener('click', closePhotoPopup);
