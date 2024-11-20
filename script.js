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
        setTimeout(typeEffect2, speed); // Pokreće typeEffect2 nakon što typeEffect1 završi
    }
}

const text2 = "graphic design portfolio"; // Tekst koji želiš da se kuca
const speed2 = 50; // Brzina kucanja (milisekunde po slovu)
let index2 = 0;

function typeEffect2() {
    const typingElement = document.getElementById("typing2"); // Povezuje se sa h2 ID-jem
    if (index2 < text2.length) {
        typingElement.textContent += text2.charAt(index2); // Dodaje jedno po jedno slovo
        index2++;
        setTimeout(typeEffect2, speed2); // Nastavlja sledeće slovo nakon pauze
    } else {
        typingElement.style.borderRight = "none"; // Uklanja kursor nakon završetka
    }
}

window.onload = function() {
  window.scrollTo(0, 0); // Pomera stranicu na vrh
  typeEffect1(); // Pokreće prvo kucanje teksta
};
