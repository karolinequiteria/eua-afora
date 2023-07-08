const profile = document.querySelector(".profile");
const editButton = profile.querySelector(".button_type-edit");
const popUp = document.querySelector(".popup");
const saveButton = popUp.querySelector(".button_type-save");
const closeButton = popUp.querySelector(".button_type-close");
const inputName = popUp.querySelector(".form__input_name");
const inputAbout = popUp.querySelector(".form__input_about");

function togglePopup() {
  popUp.classList.toggle("popup__show");
  const profileName = profile.querySelector(".profile__name-text").textContent;
  const profileAbout = profile.querySelector(
    ".profile__about-text"
  ).textContent;
  inputName.value = profileName;
  inputAbout.value = profileAbout;
}
editButton.addEventListener("click", togglePopup);

const form = document.querySelector(".form");
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const profileName = profile.querySelector(".profile__name-text");
  const profileAbout = profile.querySelector(".profile__about-text");

  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  togglePopup();
});

closeButton.addEventListener("click", togglePopup);

const yearElement = document.querySelector(".copyrights");

const currentYear = new Date().getFullYear();

yearElement.innerHTML = `&copy; ${currentYear} Around The U.S.`;
