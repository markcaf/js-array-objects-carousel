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
const imagesWrapper = document.querySelector('.carousel-wrapper .carousel-image-container');
// console.log(imagesWrapper);

// recupero il parent all'interno del quale inserire le thumbnails
const thumbnailsWrapper = document.querySelector('.carousel-wrapper .thumbnails-container');

// ciclo per la lunghezza dell'array di immagini chiamato images
for (let i = 0 ; i < images.length ; i++){

    const currentElement = images[i];

    // creo un elemento di tipo immagine
    const currentImage = document.createElement('img');

    // gli attribuisco le proprietà che ritengo necessarie
    currentImage.setAttribute('src', currentElement.url);
    currentImage.classList.add('carousel_img');

    // creo un elemento di tipo h2
    const currentTitle = document.createElement('h2');

    // gli attribuisco le proprietà
    currentTitle.classList.add("position-absolute", "mt-2", "ms-3", "text-white", "title-slide");

    // creo un elemento di tipo p
    const currentDescription = document.createElement('p');

    // gli attribuisco le proprietà
    currentDescription.classList.add("position-absolute", "mt-5", "ms-3", "text-white", "description-slide");


    if (i === activeImageIndex){
        currentImage.classList.add('active');
        // currentThumbnail.classList.add('active');
    }

    // lo aggiungo al parent
    imagesWrapper.append(currentImage);
    imagesWrapper.append(currentTitle);
    imagesWrapper.append(currentDescription);
}