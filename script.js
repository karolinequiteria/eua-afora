let profile = document.querySelector(".profile");
let editButton = profile.querySelector(".button_type_edit");
let popUp = document.querySelector(".popup");
let saveButton = popUp.querySelector(".button_save");
let closeButton = popUp.querySelector(".button_close");
let userName = popUp.querySelector("#formName");
let userAbout = popUp.querySelector("#formAbout");

function openPopup() {
  popUp.classList.toggle("popup__show");
  let profileName = profile.querySelector(".profile__name-text").textContent;
  let profileAbout = profile.querySelector(".profile__about-text").textContent;
  userName.value = profileName;
  userAbout.value = profileAbout;
}
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = popUp.querySelector("#formName").value;
  let jobInput = popUp.querySelector("#formAbout").value;

  // Pegue os valores de cada campo do valor da propriedade correspondente

  let profileName = profile.querySelector(".profile__name-text").textContent;
  let profileAbout = profile.querySelector(".profile__about-text").textContent;
  // Insira novos valores usando a
  // propriedade textContent
  profileName = nameInput;
  profileAbout = jobInput;
}
saveButton.addEventListener("submit", handleProfileFormSubmit);

function closePopup() {
  popUp.classList.toggle("popup__show");
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
