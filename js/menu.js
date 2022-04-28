(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-nav-open]'),
    closeModalBtn: document.querySelector('[data-nav-close]'),
    modal: document.querySelector('[data-nav]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
