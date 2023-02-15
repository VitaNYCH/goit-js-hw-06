const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');

galleryEl.classList.add("gallery__list");


const makeListImagesMarkup = ({ url, alt }) => {
  return `<li>
    <img src = ${url} alt = ${alt} class = "img-list__item" ></img>
  </li>`;
};

console.log(images);
console.log(makeListImagesMarkup(images[1]));

const makeListImages = images.map(makeListImagesMarkup).join('');
console.log(makeListImages);
galleryEl.insertAdjacentHTML('afterbegin', makeListImages);


// 2th variation:

// const makeImageCard =({url, alt}) => {

// const galleryItemEl = document.createElement('li');

// const imageEl = document.createElement('img');
// imageEl.src = url;
//   imageEl.alt = alt;
//   imageEl.width = 640;
  
// galleryItemEl.append(imageEl);
  
//   return galleryItemEl;
// }

// console.log(makeImageCard(images[2]));

// const elements = images.map(makeImageCard);
// console.log(elements);

// galleryEl.append(...elements);








