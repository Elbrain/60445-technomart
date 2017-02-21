var confirmOpenButton = document.querySelectorAll(".btn-buy"),
    n;
var confirmPopup = document.querySelector(".modal-cart-item");
var confirnClose = document.querySelector(".modal-cart-item .modal-close");
var overlay = document.querySelector(".modal-overlay");
var cancelButton = document.querySelector(".button-transperent");

for (n = 0; n < confirmOpenButton.length; ++n) {
    confirmOpenButton[n].addEventListener("click", function (event) {
        event.preventDefault(event);
        confirmPopup.classList.add("modal-show");
        overlay.classList.add("modal-show");
    })
}

confirnClose.addEventListener("click", function (event) {
    event.preventDefault();
    confirmPopup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
});
cancelButton.addEventListener("click", function (event) {
    event.preventDefault();
    confirmPopup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
});
overlay.addEventListener("click", function (event) {
    event.preventDefault();
    confirmPopup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (confirmPopup.classList.contains("modal-show")) {
            confirmPopup.classList.remove("modal-show");
            overlay.classList.remove("modal-show");
        }
    }
});