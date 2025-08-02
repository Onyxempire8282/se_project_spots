const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileClseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileName = editProfileModal.querySelector("#profile-name-input");
const editProfileDescription = editProfileModal.querySelector("#profile-description-input");

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const editNewPostForm = newPostModal.querySelector(".modal__form");
const editCardImage = newPostModal.querySelector("#card-image-input");
const editPostCaption = newPostModal.querySelector("#post-caption-input");

const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(".profile__description");


function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}


editProfileBtn.addEventListener("click", function () {
  editProfileName.value = profileNameElement.textContent;
  editProfileDescription.value = profileDescriptionElement.textContent;
  openModal(editProfileModal);
});

editProfileClseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});


editProfileForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileNameElement.textContent = editProfileName.value;
  profileDescriptionElement.textContent = editProfileDescription.value;
  closeModal(editProfileModal);
});

editNewPostForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  
  console.log("Image URL:", editCardImage.value);
  console.log("Caption:", editPostCaption.value);
  
  closeModal(newPostModal);
});
