const categoriesEl = document.querySelector('#categories');

const categoriesItemEl = categoriesEl.querySelectorAll('.item');

console.log(`Number of categories : ${categoriesItemEl.length}`);


const firsttitleEl = categoriesItemEl[0].querySelector('h2');
console.log(`Category: ${firsttitleEl.textContent}`);

const firstcatItemEl = categoriesItemEl[0].querySelectorAll('li');
console.log(`Elements: ${firstcatItemEl.length}`);



const secondtitleEl = categoriesItemEl[1].querySelector('h2');
console.log(`Category: ${secondtitleEl.textContent}`);

const secondcatItemEl = categoriesItemEl[1].querySelectorAll('li');
console.log(`Elements: ${secondcatItemEl.length}`);



const thirdtitleEl = categoriesItemEl[2].querySelector('h2');
console.log(`Category: ${thirdtitleEl.textContent}`);

const thirdcatItemEl = categoriesItemEl[2].querySelectorAll('li');
console.log(`Elements: ${thirdcatItemEl.length}`);