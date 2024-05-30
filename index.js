// Get scroll up and down buttons
const scrollUpBtn = document.getElementById('scroll-up');
const scrollDownBtn = document.getElementById('scroll-down');

// Function to scroll up when the scroll up button is clicked
if (scrollUpBtn) {
  scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Function to scroll down when the scroll down button is clicked
if (scrollDownBtn) {
  scrollDownBtn.addEventListener('click', () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });
}

// Detect scroll position and toggle button icon
window.addEventListener('scroll', () => {
  if (scrollUpBtn && scrollDownBtn) {
    if (window.scrollY > 0) {
      scrollUpBtn.style.display = 'block';
      scrollDownBtn.style.display = 'none';
    } else {
      scrollUpBtn.style.display = 'none';
      scrollDownBtn.style.display = 'block';
    }
  }
});
