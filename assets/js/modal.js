var trigger = document.querySelector('[data-role="modal-trigger"]'),
  close = document.querySelector('[data-role="close-modal"]'),
  closeSignin = document.querySelector('[data-role="close-login-modal"]'),
  overlay = document.querySelector('[data-role="modal-overlay"]'),
  modal = document.querySelector('[data-role="modal"]'),
  signInModal = document.querySelector('[data-role="sign-in"]'),
  upBtn = document.querySelector(".button-up");

trigger.addEventListener("click", () => {
  modal.classList.toggle("show-modal");
  upBtn.style.visibility = "hidden";
  document.body.classList.toggle("stop-scroll");
  console.log("Hello");
});

close.addEventListener("click", () => {
  modal.classList.toggle("show-modal");
  upBtn.style.visibility = "visible";
  document.body.classList.toggle("stop-scroll");
});

closeSignin.addEventListener("click", () => {
  signInModal.classList.toggle("show-modal");
  upBtn.style.visibility = "visible";
  document.body.classList.toggle("stop-scroll");
});

overlay.addEventListener("click", () => {
  modal.classList.toggle("show-modal");
  upBtn.style.visibility = "visible";
  document.body.classList.toggle("stop-scroll");
});

document.addEventListener("keydown", (event) => {
  if (modal.classList.contains("show-modal")) {
    if (event.keyCode == 27) {
      modal.classList.toggle("show-modal");
      upBtn.style.visibility = "visible";
      document.body.classList.toggle("stop-scroll");
    }
  }
});