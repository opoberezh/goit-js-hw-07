import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const makeGalleryCard = galleryItems.map(
    ({preview, original, description}) =>
    `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
);

galleryRef.insertAdjacentHTML("beforeend", makeGalleryCard.join(""));

galleryRef.addEventListener("click", onClick);

new SimpleLightbox(".gallery a", { captionDelay: 250, captionsData: "alt" });

function onClick(evt) {
  evt.preventDefault();
}

console.log(galleryItems);
