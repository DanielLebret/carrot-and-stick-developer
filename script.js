document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  var navItems = document.querySelectorAll('.nav-links a');

  function updateHeaderState() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState);

  if (toggle) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  navItems.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });
});

function showFigurePlaceholder(img) {
  var block = img.closest('.figure-block');
  if (!block) return;
  img.style.display = 'none';
  var placeholder = block.querySelector('.figure-placeholder');
  if (placeholder) {
    placeholder.style.display = 'flex';
  }
}
