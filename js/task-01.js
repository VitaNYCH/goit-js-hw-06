const categoriesEl = document.querySelector('#categories');

const categoriesItemEl = categoriesEl.children;

console.log(`Number of categories : ${categoriesItemEl.length}`);


const firsttitleEl = categoriesItemEl[0].firstElementChild;
console.log(`Category: ${firsttitleEl.textContent}`);

const firstcatItemEl = categoriesItemEl[0].querySelectorAll('li');
console.log(`Elements: ${firstcatItemEl.length}`);



const secondtitleEl = categoriesItemEl[1].firstElementChild;
console.log(`Category: ${secondtitleEl.textContent}`);

const secondcatItemEl = categoriesItemEl[1].querySelectorAll('li');
console.log(`Elements: ${secondcatItemEl.length}`);



const thirdtitleEl = categoriesItemEl[2].firstElementChild;
console.log(`Category: ${thirdtitleEl.textContent}`);

const thirdcatItemEl = categoriesItemEl[2].querySelectorAll('li');
console.log(`Elements: ${thirdcatItemEl.length}`);