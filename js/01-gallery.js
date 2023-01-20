import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// init vars

const imgGallery = document.querySelector(".gallery");

// declare iterating function

function createMarkup(items) {
  return items
    .map(
      (
        item
      ) => `<div class="gallery__item"><a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" /></a></div>`
    )
    .join("");
}

// insert markup to DOM

const galleryMarkup = createMarkup(galleryItems);
imgGallery.innerHTML = galleryMarkup;
