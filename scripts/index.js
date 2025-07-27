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


editProfileBtn.addEventListener("click", function (){
    editProfileName.value = profileNameElement.textContent
    editProfileDescription.value = profileDescriptionElement.textContent
    editProfileModal.classList.add("modal_is-opened"); 
    });

    editProfileClseBtn.addEventListener("click", function (){
    editProfileModal.classList.remove("modal_is-opened"); 
    });

    

newPostBtn.addEventListener("click", function (){
    newPostModal.classList.add("modal_is-opened"); 
    });

    newPostCloseBtn.addEventListener("click", function (){
    newPostModal.classList.remove("modal_is-opened"); 
    });

function handleEditProfileSubmit(evt) {
    evt.preventDefault();
        profileNameElement.textContent = editProfileName.value;
        editProfileModal.classList.remove("modal_is-opened");
 
}

    editProfileForm.addEventListener("submit", handleEditProfileSubmit);

    function handleEditPostSubmit(evt) {
    evt.preventDefault();
        editCardImage.value, editPostCaption.value;
        newPostModal.classList.remove("modal_is-opened");
}

    editNewPostForm.addEventListener("submit", handleEditPostSubmit);