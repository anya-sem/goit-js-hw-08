
import { galleryItems } from './gallery-items.js';
// Change code below this line
    
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const container = document.querySelector(".gallery")
container.style.listStyle = "none"

container.insertAdjacentHTML("beforeend", createMarkup(galleryItems))
function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `).join("")
}

const gallery = new SimpleLightbox(".gallery a");

// console.log(gallery);