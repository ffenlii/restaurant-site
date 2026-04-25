// 1. Шукаємо модалку за класом "modal" (у вас в HTML саме він)
const modal = document.querySelector('.modal');

// 2. Шукаємо кнопку відкриття (я прибрав зайву лапку з вашого прикладу)
const modalBtnOpen = document.querySelector('.header-button-menu');

// 3. Створюємо функцію (is-hidden — це гарний вибір назви класу)
const toggleModal = () => modal.classList.toggle('is-hidden');

// 4. Додаємо слухач на відкриття
modalBtnOpen.addEventListener('click', toggleModal);

// 5. Важливо: додайте в HTML кнопку закриття з класом "modal-btn-close",
// щоб цей рядок не видавав помилку:
const modalBtnClose = document.querySelector('.modal-btn-close');
if (modalBtnClose) {
  modalBtnClose.addEventListener('click', toggleModal);
}
