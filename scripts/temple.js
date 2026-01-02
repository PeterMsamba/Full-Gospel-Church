// Toggle Mobile Menu
const bumButton = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');

bumButton.addEventListener('click', () => {
  bumButton.classList.toggle('open');
  navigation.classList.toggle('open');
});

// Slideshow Logic
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }    
  
  if (slides.length > 0) {
    slides[slideIndex - 1].style.display = "block";  
  }
  
  setTimeout(showSlides, 5000); 
}

// Date and Time Logic
function updateDateTime() {
  const now = new Date();
  
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString(undefined, dateOptions);
  
  const dateElement = document.getElementById('date');
  if (dateElement) {
    dateElement.textContent = formattedDate;
  }

  // Check if 'time' element exists before updating
  const timeElement = document.getElementById('time');
  if (timeElement) {
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    timeElement.textContent = now.toLocaleTimeString(undefined, timeOptions);
  }
}

updateDateTime();
setInterval(updateDateTime, 1000);