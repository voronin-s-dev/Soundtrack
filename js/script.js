//Hamburger menu
window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.mob-menu'),
  menuItem = document.querySelectorAll('.mob-menu_item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('mob-menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('mob-menu_active');
      })
  })
})