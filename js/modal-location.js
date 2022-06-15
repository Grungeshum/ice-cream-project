(() => {
  const refs = {
    openModalLocationBtn: document.querySelector('[data-modal-location-open]'),

    modal: document.querySelector('[data-modal-location]'),
  };

  refs.openModalLocationBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    closeModalLocationBtn: document.querySelector(
      '[data-modal-location-close]'
    ),
    modal: document.querySelector('[data-modal-location]'),
  };

  refs.closeModalLocationBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.location.reload();
  }
})();
