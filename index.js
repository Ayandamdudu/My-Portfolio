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
// Define an array of skill items
var skills = [
  "MATLAB",
  "Arduino Uno Arduino C Programming",
  "OrCAD",
  "Pspice",
  "MPLAB",
  "PIC Assembly Programming",
  "PowerWorld Simulation tool Power Stations",
  "CISCO Networking Academy",
  "Packet Tracer",
  "Electrical Circuit design",
  "HTML & CSS",
  "JavaScript",
  "Node.js",
  "React",
  "Python",
  "Java"
];

var currentSlideIndex = 0;

// Function to initialize the slideshow
function initSlider() {
  var slidesContainer = document.querySelector('.slides');
  // Populate the slides container with skill items
  skills.forEach(skill => {
    var slide = document.createElement('div');
    slide.classList.add('slide');
    slide.textContent = skill;
    slidesContainer.appendChild(slide);
  });
  // Show the initial slide
  showSlide(currentSlideIndex);
}

// Function to show a specific slide
function showSlide(index) {
  var slides = document.querySelectorAll('.slide');
  // Hide all slides
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  // Show the slide at the specified index
  slides[index].style.display = 'block';
}

// Function to display the previous slide
function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + skills.length) % skills.length;
  showSlide(currentSlideIndex);
}

// Function to display the next slide
function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % skills.length;
  showSlide(currentSlideIndex);
}

// Initialize the slider when the page loads
window.onload = function() {
  initSlider();
};
