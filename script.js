let profile = document.querySelector(".profile");
let editButton = profile.querySelector(".button_type_edit");
let popUp = document.querySelector(".popup");
let saveButton = popUp.querySelector(".button_type_save");
let closeButton = popUp.querySelector(".button_type_close");
let inputName = popUp.querySelector(".form__input_name");
let inputAbout = popUp.querySelector(".form__input_about");

function togglePopup() {
  popUp.classList.toggle("popup__show");
  let profileName = profile.querySelector(".profile__name-text").textContent;
  let profileAbout = profile.querySelector(".profile__about-text").textContent;
  inputName.value = profileName;
  inputAbout.value = profileAbout;
}
editButton.addEventListener("click", togglePopup);

let form = document.querySelector(".form");
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let profileName = profile.querySelector(".profile__name-text");
  let profileAbout = profile.querySelector(".profile__about-text");

  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  togglePopup();
  // let inputName = document.querySelector(".form__input_name");
  // let inputAbout = document.querySelector(".form__input_about");
});

closeButton.addEventListener("click", togglePopup);
