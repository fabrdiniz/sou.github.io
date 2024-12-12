// Lista de imagens da galeria
const images = [
    "./assets/galeria/01.jpeg",
    "./assets/galeria/02.jpeg",
    "./assets/galeria/03.jpeg",
    "./assets/galeria/04.jpeg",
    "./assets/galeria/05.jpeg",
    "./assets/galeria/06.jpg",
    "./assets/galeria/07.jpg",
    "./assets/galeria/08.png",
    "./assets/galeria/09.jpg",
    "./assets/galeria/10.jpg",
    "./assets/galeria/12.jpg",
    "./assets/galeria/13.jpg",
    "./assets/galeria/14.jpg",
    "./assets/galeria/15.jpg",
    "./assets/galeria/16.jpg",
    "./assets/galeria/17.jpg",
    "./assets/galeria/18.jpg",
    "./assets/galeria/19.jpg",
    "./assets/galeria/20.jpg",
    "./assets/galeria/21.jpg",
    "./assets/galeria/22.jpg",
    "./assets/galeria/23.jpg",
    "./assets/galeria/24.jpg",
    "./assets/galeria/25.jpg",
    "./assets/galeria/26.jpg",
    "./assets/galeria/27.jpg",
    "./assets/galeria/28.jpg",
    "./assets/galeria/29.jpg",
    "./assets/galeria/30.jpg",
    "./assets/galeria/31.jpg",
    "./assets/galeria/32.jpg",
    "./assets/galeria/33.jpg",
    "./assets/galeria/34.jpg",
    "./assets/galeria/35.jpg",
    "./assets/galeria/36.jpg",
    "./assets/galeria/37.jpg",
    "./assets/galeria/38.jpg",
    "./assets/galeria/39.jpg",
];

// Seletores
const galleryContainer = document.getElementById('gallery-container');
const lightboxContainer = document.getElementById('lightbox-container');

// Gerar galeria
images.forEach((src, index) => {
    const galleryItem = document.createElement('a');
    galleryItem.href = `#img${index + 1}`;
    galleryItem.classList.add('gallery-items');
    galleryItem.innerHTML = `<img src="${src}" alt="Foto ${index + 1}">`;
    galleryContainer.appendChild(galleryItem);

    // Modal no lightbox
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.id = `img${index + 1}`;
    lightbox.innerHTML = `
        <a href="#!" class="close">×</a>
        <img src="${src}" alt="Foto ${index + 1}">
        <a href="#img${index === 0 ? images.length : index}" class="prev">←</a>
        <a href="#img${(index + 1) % images.length + 1}" class="next">→</a>
    `;
    lightboxContainer.appendChild(lightbox);
});
