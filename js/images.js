// Lista de imagens da galeria
const images = [
    "./assets/galeria/01.jpeg",
    "./assets/galeria/02.jpeg",
    "./assets/galeria/03.jpeg",
    "./assets/galeria/04.jpeg",
    "./assets/galeria/05.jpeg",
    "./assets/galeria/06.jpg",
    "./assets/galeria/07.png",
    "./assets/galeria/08.jpg",
    "./assets/galeria/09.jpg",
    "./assets/galeria/10.jpg",
    "./assets/galeria/11.jpg",
    "./assets/galeria/12.jpeg",
    "./assets/galeria/13.jpeg",
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
