document.addEventListener('DOMContentLoaded', () => {
    let btnMenu = document.getElementById('btn-menu');
    let menu = document.getElementById('menu-mobile');
    let overlay = document.getElementById('overlay-menu');
    let btnFechar = document.getElementById('btn-fechar'); // Certifique-se de que o ID está correto
  
    btnMenu.addEventListener('click', () => {
      menu.classList.add('abrir-menu');
      overlay.style.display = 'block';
    });
  
    btnFechar.addEventListener('click', () => {
      menu.classList.remove('abrir-menu');
      overlay.style.display = 'none';
    });
  
    overlay.addEventListener('click', () => {
      menu.classList.remove('abrir-menu');
      overlay.style.display = 'none';
    });
  
    // Fechar menu ao clicar em qualquer link dentro do menu mobile
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
        overlay.style.display = 'none';
      });
    });
});
