const modal = document.querySelector('.modal');

const modalBtnOpen = document.querySelector('.header-button-burger');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);

const modalBtnClose = document.querySelector('.modal-btn-close');
if (modalBtnClose) {
  modalBtnClose.addEventListener('click', toggleModal);
}
