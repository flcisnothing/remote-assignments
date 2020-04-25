// Assignment 4: HTML DOM and Event Handling

// Request 1: Click to Change Text.
const welcomeMessage = document.querySelector(".welcome-message");
welcomeMessage.addEventListener("click", () => {
  welcomeMessage.textContent = "Have a Good Time!";
});

// Request 2: Click to Show/Close Menu
const mobileMenu = document.querySelector(".mobile-menu");
const menuTrigger = document.querySelector(".menu-trigger");
const menuCloseButton = document.querySelector(".menu-close-button");
menuTrigger.addEventListener("click", () => {
  mobileMenu.style.transform = "none";
});
menuCloseButton.addEventListener("click", () => {
  mobileMenu.style.transform = "translateX(100%)";
});

// Request 3: Click to Show More Context Boxes
const mainContent = document.querySelector(".main-content");
const actionButton = document.querySelector(".action-button");
const moreContentBoxs = mainContent.lastElementChild;

actionButton.addEventListener("click", () => {
  moreContentBoxs.style.display = "block";
});
