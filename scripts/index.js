const editProfileBtn = document.querySelector(".profile__edit-btn");

const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileClseBtn = editProfileModal.querySelector(".modal__close-btn");

editProfileBtn.addEventListener("click", function (){
    editProfileModal.classList.add("modal_is-opened"); 
    });

    editProfileClseBtn.addEventListener("click", function (){
    editProfileModal.classList.remove("modal_is-opened"); 
    });

    console.log("Hello world");