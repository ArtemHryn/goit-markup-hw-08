(() => {
    const refs = {
      openmenuBtn: document.querySelector('[menu-button]'),
      closemenuBtn: document.querySelector('[menu-button-close]'),
      menu: document.querySelector('[mob-menu]'),
    };
    refs.openmenuBtn.addEventListener('click', toggleMenu);
    refs.closemenuBtn.addEventListener('click', toggleMenu);
    function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
    }
  })();