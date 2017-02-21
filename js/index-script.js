var contactOpen = document.querySelector(".js-contact");
var contactPopup = document.querySelector(".modal-contact-us");
var contactClose = document.querySelector(".modal-contact-us .modal-close");
var overlay = document.querySelector(".modal-overlay");

contactOpen.addEventListener("click", function (event) {
    event.preventDefault();
    contactPopup.classList.add("modal-show");
    overlay.classList.add("modal-show")
});

contactClose.addEventListener("click", function (event) {
    event.preventDefault();
    contactPopup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
});

overlay.addEventListener("click", function (event) {
    event.preventDefault();
    contactPopup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (contactPopup.classList.contains("modal-show")) {
            contactPopup.classList.remove("modal-show");
            overlay.classList.remove("modal-show");
        }
    }
});

var mapOpen = document.querySelector(".js-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-map .modal-close");
var overlay = document.querySelector(".modal-overlay");
mapOpen.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.add("modal-show");
    overlay.classList.add("modal-show");
});

mapClose.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
});

overlay.addEventListener("click", function (event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
            overlay.classList.remove("modal-show");
        }
    }
});