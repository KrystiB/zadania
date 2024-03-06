"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const accessKey = 'yrWHQ9CeSK0Mv-obY7zDOjq5-ETMBWtbXwPPgd89BrI';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}`;
const photoGallery = document.querySelector('.photo-gallery');
function fetchRandomPhotos(count) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${apiUrl}&count=${count}`);
            const data = yield response.json();
            data.forEach((photo) => {
                const photoTile = createPhotoTile(photo);
                if (photoGallery) {
                    photoGallery.appendChild(photoTile);
                }
            });
        }
        catch (error) {
            console.error('Error fetching random photos:', error);
        }
    });
}
function createPhotoTile(photo) {
    const tile = document.createElement('div');
    tile.className = 'photo-tile';
    const img = document.createElement('img');
    img.src = photo.urls.regular;
    img.alt = photo.alt_description;
    const infoOverlay = document.createElement('div');
    infoOverlay.className = 'info-overlay';
    infoOverlay.innerText = `Author: ${photo.user.name}`;
    tile.appendChild(img);
    tile.appendChild(infoOverlay);
    return tile;
}
fetchRandomPhotos(30);
