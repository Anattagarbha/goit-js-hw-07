import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// init vars

const imgGallery = document.querySelector(".gallery");
const galleryMarkup = createMarkup(galleryItems);

// declare iterating function

function createMarkup(items) {
  return items
    .map(
      (
        item
      ) => `<div class="gallery__item"><a class="gallery__link" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" /></a></div>`
    )
    .join("");
}

// insert markup to DOM

imgGallery.innerHTML = galleryMarkup;

// add listener

imgGallery.addEventListener("click", handleClick);

// use basicLightbox functionality

let instance;

function handleClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  instance = basicLightbox.create(
    `<div class=""><img src=${event.target.dataset.source} width="1024" height="768"></div>`,
    {
      className: "modal",
      onShow: () => {
        window.addEventListener("keydown", onEscDown);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscDown);
      },
    }
  );
  instance.show();
}

// add escape extra functionality

function onEscDown(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}
