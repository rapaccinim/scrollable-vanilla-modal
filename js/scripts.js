var modalOpenButton = document.getElementsByClassName("modal-open-button");

var modalOverlay = document.getElementById("modal-overlay");

var notScrollableModal = document.getElementById("modal-container-not-scrollable");
var scrollableModal = document.getElementById("modal-container-scrollable");

// create and array from the HTML button elements and add the eventListener to each item (button)
Array.from(modalOpenButton, button => button.addEventListener("click", event => {

    modalOverlay.classList.add(event.currentTarget.id === "modal-open-button-default" ? "modal-container-not-scrollable" : "modal-container-scrollable");
    modalOverlay.classList.remove(event.currentTarget.id === "modal-open-button-default" ? "modal-container-scrollable" : "modal-container-not-scrollable");

}));
