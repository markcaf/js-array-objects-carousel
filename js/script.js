const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

let activeImageIndex = 0;

// recupero il parent all'interno del quale inserire le immagini
const imagesWrapper = document.querySelector('#carousel-wrapper .carousel-image-container');
// console.log(imagesWrapper);

// recupero il parent all'interno del quale inserire le thumbnails
const thumbnailsWrapper = document.querySelector('.thumbnails-container');

// ciclo per la lunghezza dell'array di immagini chiamato images
for (let i = 0 ; i < images.length ; i++){

    const currentElement = images[i];

    // creo un elemento di tipo immagine
    const currentImage = document.createElement('img');

    // gli attribuisco le proprietà che ritengo necessarie
    currentImage.setAttribute('src', currentElement.url);

    // creo un elemento di tipo h2
    const currentTitle = document.createElement('h2');
    currentTitle.innerHTML = currentElement.title;
    console.log(currentTitle);

    // gli attribuisco le proprietà
    currentTitle.classList.add("mt-2", "ms-3", "text-white");

    // creo un elemento di tipo p
    const currentDescription = document.createElement('p');
    currentDescription.innerHTML = currentElement.description;

    // gli attribuisco le proprietà
    currentDescription.classList.add("mt-5", "ms-3", "text-white");

    // creo un elemento di tipo immagine per la thumbnail
    const currentThumbnail = document.createElement('img');
    currentThumbnail.setAttribute('src', currentElement.url);
    currentThumbnail.classList.add("carousel_thumbnail")



    if (i === activeImageIndex){
        currentImage.classList.add('active');

        currentTitle.classList.add('active');

        currentDescription.classList.add('active');

        currentThumbnail.classList.add('active');
    };

    // lo aggiungo al parent
    imagesWrapper.append(currentImage);
    imagesWrapper.append(currentTitle);
    imagesWrapper.append(currentDescription);
    thumbnailsWrapper.append(currentThumbnail);
}

const prevButton = document.getElementById('prev-button');
const nextButton = document.querySelector('#next-button');

// recupero la lista delle immagini disponibili nel carosello
const imageElements = document.querySelectorAll('.carousel-image-container img');

// recupero la lista delle thumbnails disponibili nel carosello
const thumbnailElements = document.querySelectorAll('.thumbnails-container img');

// recupero la lista di titoli e descrizioni
const titleElements = document.querySelectorAll('.carousel-image-container h2');
const descriptionElements = document.querySelectorAll('.carousel-image-container p');

// devo aggiungere un comportamento conseguente ad un'interazione con i bottoni relativi

nextButton.addEventListener('click', function(){
    // prendo l'immagine attiva =>  .carousel-image-container img.active
    imageElements[activeImageIndex].classList.remove('active');
    thumbnailElements[activeImageIndex].classList.remove('active');
    titleElements[activeImageIndex].classList.remove('active');
    descriptionElements[activeImageIndex].classList.remove('active');

    //  activeImageIndex = activeImageIndex + 1;
    activeImageIndex++;

    // se arrivo alla fine della lista ricomincio da zero
    if (activeImageIndex === images.length) {
        activeImageIndex = 0;
    }

    // prendo l'immagine all'indice attuale e le aggiungo la classe active per renderla visibile
    imageElements[activeImageIndex].classList.add('active');
    thumbnailElements[activeImageIndex].classList.add('active');
    titleElements[activeImageIndex].classList.add('active');
    descriptionElements[activeImageIndex].classList.add('active');
});

prevButton.addEventListener('click', function(){
    // prendo l'immagine attiva =>  .carousel-image-container img.active
    imageElements[activeImageIndex].classList.remove('active');
    thumbnailElements[activeImageIndex].classList.remove('active');
    titleElements[activeImageIndex].classList.remove('active');
    descriptionElements[activeImageIndex].classList.remove('active');

    //  activeImageIndex = activeImageIndex - 1;
    activeImageIndex--;

    // Se arrivo alla fine della lista ricomincio
    if (activeImageIndex === -1) {
        activeImageIndex = images.length - 1;
    }

    // prendo l'immagine all'indice attuale e le aggiungo la classe active per renderla visibile
    imageElements[activeImageIndex].classList.add('active');
    thumbnailElements[activeImageIndex].classList.add('active');
    titleElements[activeImageIndex].classList.add('active');
    descriptionElements[activeImageIndex].classList.add('active');
});