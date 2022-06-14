(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-about-modal-more-open]'),

    closeModalBtn: document.querySelector('[data-about-modal-more-close]'),
    modal: document.querySelector('[data-about-modal-more]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
