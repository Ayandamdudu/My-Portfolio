// Get scroll up and down buttons
const scrollUpBtn = document.getElementById('scroll-up');
const scrollDownBtn = document.getElementById('scroll-down');

// Show or hide scroll buttons based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollUpBtn.style.display = 'block';
  } else {
    scrollUpBtn.style.display = 'none';
  }

  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
    scrollDownBtn.style.display = 'none';
  } else {
    scrollDownBtn.style.display = 'block';
  }
});

// Scroll up when scroll up button is clicked
scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Scroll down when scroll down button is clicked
scrollDownBtn.addEventListener('click', () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  });
});
