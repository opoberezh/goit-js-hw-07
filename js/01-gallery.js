import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryRef = document.querySelector(".gallery");

const creatGalleryCard = galleryItems.map(
  ({preview, original, description}) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image "
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
);

galleryRef.insertAdjacentHTML("beforeend", creatGalleryCard.join(""));

galleryRef.addEventListener("click", onClick);
function onClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
const largeImg = evt.target.dataset.source;
   const instance = basicLightbox
      .create(
        `
      <img src="${largeImg}" width="1280" height="auto">
      </img>
  `
      )
    instance.show();

 galleryRef.addEventListener("keydown", onEscKeyPress);

function onEscKeyPress(evt)  {
    if (evt.key === "Escape"){
      instance.close();
    }
  }
  
};