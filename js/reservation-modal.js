const reservationModal = document.querySelector('.modal-reservation');
const reservationBtnsOpen = document.querySelectorAll('.js-open-reservation');
const reservationBtnClose = document.querySelector('.modal-reservation-close');

const toggleReservationModal = () =>
  reservationModal.classList.toggle('is-hidden');

reservationBtnsOpen.forEach(btn => {
  btn.addEventListener('click', toggleReservationModal);
});

if (reservationBtnClose) {
  reservationBtnClose.addEventListener('click', toggleReservationModal);
}
