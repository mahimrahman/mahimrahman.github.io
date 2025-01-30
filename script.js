
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  // Toggle the 'active' class on the hamburger and nav-links
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});