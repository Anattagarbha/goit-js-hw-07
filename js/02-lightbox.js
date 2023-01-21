import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// create markup

function createMarkup(items) {
	return items
		.map(
			item =>
				`<li class="gallery__item">
					<a class="gallery__link" href="${item.original}">
					<img 
					class="gallery__image"
					src="${item.preview}"
					alt="${item.description}">
				</a>
				</li>`,
		)
		.join('');
}

// init var

const imgGallery = document.querySelector('.gallery');

// insert markup into DOM

imgGallery.innerHTML = createMarkup(galleryItems);

// use lighbox functionality

const lightbox = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 250,
	captionPosition: 'bottom',
});
