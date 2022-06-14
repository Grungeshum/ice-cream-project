(() => {
  const refs = {
    openMobModalBtn: document.querySelector('[data-mob-modal-open]'),

    modal: document.querySelector('[data-mob-modal]'),
  };

  refs.openMobModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
