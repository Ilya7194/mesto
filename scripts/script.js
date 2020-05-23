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
  name = element.name;
  link = element.link;
  alt = element.name;
  addCard(link, name);
});

// showCard();

// function showCard() {
//   for (let i = 0; i < initialCards.length; i++) {
//     name = initialCards[i].name;
//     link = initialCards[i].link;
//     alt = initialCards[i].name;
//     addCard(link, name);
//   }
// }

//Редактирование профиля___________________________________________________________________________________
const openProfileFormButton = document.querySelector('.profile__edit-button');
const closeProfileFormButton = document.querySelector('.popup__close-button_place_profile');
const popupProfle = document.querySelector('.popup_profile');
const saveButton = document.querySelector('.popup__submit-button_save');

let profileName = document.querySelector('.profile__name');
let profileVacation = document.querySelector('.profile__vocation');
let nameInput = document.querySelector('.popup__input_edit_name');
let jobInput = document.querySelector('.popup__input_edit_about');
let formEditProfile = document.querySelector('.popup__container_place_profile');

// Открытие/закрытие попапа редактирования профиля____________________________________________________
function toggleProfileForm() {
  toggleClass(popupProfle);;
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
let formAddCard = document.querySelector('.popup__container_place_card');

function addCard(link, name) { // функция создания карточки
  const cardTemplate = document.querySelector('#card-template').content;
  cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.place__image').src = link;
  cardElement.querySelector('.place__title').textContent = name;
  cardElement.querySelector('.place__image').alt = alt;
  cardElement.querySelector('.place__delete-button').addEventListener('click', function (evt) { //удаление карточки
    evt.target.parentElement.remove();
  });
  cardElement.querySelector('.place__like-button').addEventListener('click', function (evt) { // Лайк карточки
    evt.target.classList.toggle('place__like-button_active')
  });
  cardElement.querySelector('.place__image').addEventListener('click', function (evt) { //откытие увеличенной карточки
    popupPhoto.classList.add('popup-image_opened');
    popupPhotoImage.src = link;
    popupPhotoImage.alt = name;
    popupPhotoCaption.textContent = name;
  });
  document.querySelector('.places').prepend(cardElement);
}

// Открытие/закрытие попапа добавления карочки_______________________________________________________________________
function toggleCardForm() { 
  toggleClass(popupCard);
}

openCardFormButton.addEventListener('click', toggleCardForm);
closeCardFormButton.addEventListener('click', toggleCardForm);
formAddCard.addEventListener('submit', addFormSubmitHandler);

function addFormSubmitHandler(evt) { // обработчик попапа добавления карточки
  let imageInput = document.querySelector('.popup__input_add_image');
  let placeInput = document.querySelector('.popup__input_add_place');
  name = placeInput.value;
  link = imageInput.value;
  alt = placeInput.value;
  evt.preventDefault();
  toggleCardForm();
  addCard(link, name);
  placeInput.value = '';
  imageInput.value = '';
}
// Закрытие попапа увеличения карточки. (открытие попапа реализовано в функции создания карточки)_____________________
const closePhotoPopupButton = document.querySelector('.popup-image__close-button');
const popupPhoto = document.querySelector('.popup-image');
const popupPhotoImage = document.querySelector('.popup-image__photo');
const popupPhotoCaption = document.querySelector('.popup-image__caption');

function closePhotoPopup() { 
  popupPhoto.classList.remove('popup-image_opened');
}
closePhotoPopupButton.addEventListener('click', closePhotoPopup);

function toggleClass(elem) { // функция открытия закрытия попапов добавления карточки и редактирования профиля
  elem.classList.toggle('popup_opened');
}