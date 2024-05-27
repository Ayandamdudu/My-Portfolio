// Get scroll up and down buttons
const scrollUpBtn = document.getElementById('scroll-up');
const scrollDownBtn = document.getElementById('scroll-down');
// Function to initialize the skills section
function initSkills() {
  var skillsContainer = document.querySelector('.skills-container');
  // Populate the skills container with skill blocks
  skills.forEach(skill => {
    var skillBlock = document.createElement('div');
    skillBlock.classList.add('skill');
    skillBlock.textContent = skill;
    skillsContainer.appendChild(skillBlock);
  });
}

// Initialize the skills section when the page loads
window.onload = function() {
  initSkills();
};
