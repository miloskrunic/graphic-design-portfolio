// Selektuj sve slike u galeriji
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');


galleryItems.forEach((img) => {

  img.addEventListener('click', () => {
    lightboxImg.src = img.src; 
    lightbox.classList.add('active');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
  lightboxImg.src = ''; 
});

const text = "I AM  MILOŠ";
const speed = 300;
let index = 0;

function typeEffect1() {
    const typingElement = document.getElementById("typing");
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect1, speed);
    } else {
        typingElement.style.borderRight = "none";
    }
}


window.onload = function() {
  window.scrollTo(0, 0);
  typeEffect1();
};
