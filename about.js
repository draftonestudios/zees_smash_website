// Get the hamburger button
const hamburger = document.querySelector('#hamburger');

// Get the navigation menu
const navMenu = document.querySelector('#nav-menu');

// Add click event listener to the hamburger button
hamburger.addEventListener('click', function() {
  // Toggle the 'active' class on the nav menu
  navMenu.classList.toggle('active');
});
