// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).


// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });



const categoriesEl = document.querySelector('#categories');
const categoriesItemEl = categoriesEl.children;   

console.log(`Number of categories : ${categoriesItemEl.length}`);

for (let i = 0; i < categoriesItemEl.length; i += 1) {
 
console.log(`Category: ${categoriesItemEl[i].firstElementChild.textContent}`);
    
const categoryItemEl = categoriesItemEl[i].querySelectorAll('li');
    
console.log(`Elements: ${categoryItemEl.length}`);
}








