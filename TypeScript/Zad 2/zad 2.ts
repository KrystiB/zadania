const accessKey = 'yrWHQ9CeSK0Mv-obY7zDOjq5-ETMBWtbXwPPgd89BrI';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}`;
const photoGallery = document.querySelector('.photo-gallery');

interface UnsplashPhoto {
    urls: {
        regular: string;
    };
    alt_description: string;
    user: {name: string};
}

async function fetchRandomPhotos(count: number) {
    try {
        const response = await fetch(`${apiUrl}&count=${count}`);
        const data = await response.json();

        data.forEach((photo: UnsplashPhoto) => {
            const photoTile = createPhotoTile(photo);
            if (photoGallery) {
                photoGallery.appendChild(photoTile);
            }
        });
    } catch (error) {
        console.error('Error fetching random photos:', error);
    }
}

function createPhotoTile(photo: UnsplashPhoto): HTMLElement {
    const tile: HTMLDivElement = document.createElement('div');
    tile.className = 'photo-tile';

    const img: HTMLImageElement = document.createElement('img');
    img.src = photo.urls.regular;
    img.alt = photo.alt_description;

    const infoOverlay: HTMLDivElement = document.createElement('div');
    infoOverlay.className = 'info-overlay';
    infoOverlay.innerText = `Author: ${photo.user.name}`;

    tile.appendChild(img);
    tile.appendChild(infoOverlay);

    return tile;
}

fetchRandomPhotos(30);
