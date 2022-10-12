(() => {
  const refs = {
    openModalFirstBtn: document.querySelector("[data-modal-open]"),
    openModalSecondBtn: document.querySelector("[data-modal-open-second]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalFirstBtn.addEventListener("click", toggleModal);
  refs.openModalSecondBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("backdrop--is-hidden");
  }
})();