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

const text = "I AM  MILOŠ"; // Tekst koji želiš da se kuca
const speed = 300; // Brzina kucanja (milisekunde po slovu)
let index = 0;

function typeEffect1() {
    const typingElement = document.getElementById("typing"); // Povezuje se sa h1 ID-jem
    if (index < text.length) {
        typingElement.textContent += text.charAt(index); // Dodaje jedno po jedno slovo
        index++;
        setTimeout(typeEffect1, speed); // Nastavlja sledeće slovo nakon pauze
    } else {
        typingElement.style.borderRight = "none"; // Uklanja kursor nakon završetka
    }
}


window.onload = function() {
  window.scrollTo(0, 0); // Pomera stranicu na vrh
  typeEffect1(); // Pokreće prvo kucanje teksta
};
