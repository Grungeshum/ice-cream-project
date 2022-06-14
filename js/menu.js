(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    closeMenuBtnLink1: document.querySelector('[data-link1-menu-close]'),
    closeMenuBtnLink2: document.querySelector('[data-link2-menu-close]'),
    closeMenuBtnLink3: document.querySelector('[data-link3-menu-close]'),
    closeMenuBtnLink4: document.querySelector('[data-link4-menu-close]'),
    closeMenuBtnLink5: document.querySelector('[data-link5-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtnLink1.addEventListener('click', toggleMenu);
  refs.closeMenuBtnLink2.addEventListener('click', toggleMenu);
  refs.closeMenuBtnLink3.addEventListener('click', toggleMenu);
  refs.closeMenuBtnLink4.addEventListener('click', toggleMenu);
  refs.closeMenuBtnLink5.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
