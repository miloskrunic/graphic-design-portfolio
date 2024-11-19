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
