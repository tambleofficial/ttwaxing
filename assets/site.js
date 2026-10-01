const menu = document.querySelector('.mobile-menu');
const links = document.querySelector('.mobile-links');

if (menu && links) {
  const closeMenu = () => {
    links.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', '모바일 메뉴 열기');
  };

  menu.addEventListener('click', () => {
    const willOpen = !links.classList.contains('open');
    links.classList.toggle('open', willOpen);
    menu.setAttribute('aria-expanded', String(willOpen));
    menu.setAttribute('aria-label', willOpen ? '모바일 메뉴 닫기' : '모바일 메뉴 열기');
  });

  links.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}
