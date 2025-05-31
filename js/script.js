document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.toggle-btn');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links li a');

  // Toggle mobile nav
  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    toggleBtn.classList.toggle('active');
  });

  // Close nav on link click
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      toggleBtn.classList.remove('active');
    });
  });
});
