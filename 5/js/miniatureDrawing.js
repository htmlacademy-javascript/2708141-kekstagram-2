import {photoDescription} from './generator.js';
import {randomValue} from './utils.js';


const domElements = function (countOfElements) {
  const template = document.querySelector('#picture').content.querySelector('.picture');
  const fragment = document.createDocumentFragment();
  const photoRandomDescriptions = photoDescription(countOfElements, 1,200,countOfElements);
  for (let i = 0; i < countOfElements; i += 1) {
    const pictureElement = template.querySelector('.picture').cloneNode(true);
    const img = pictureElement.querySelector('.picture__img');
    img.src = photoRandomDescriptions[i].url;
    img.alt = photoRandomDescriptions[i].description;
    const commentsCount = pictureElement.querySelector('.picture__comments');
    commentsCount.textContent = photoRandomDescriptions[i].comments.length;
    const likesCount = pictureElement.querySelector('.picture__likes');
    likesCount.textContent = photoRandomDescriptions[i].likes;
    fragment.appendChild(pictureElement);
  }
  return template.appendChild(fragment);
};

// eslint-disable-next-line no-console
console.log(domElements(randomValue(10)));
