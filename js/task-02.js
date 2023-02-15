const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');


const makeListIngredients = options => {
  return ingredients.map(ingredient => {
    const ingredItemEl = document.createElement('li');
    ingredItemEl.textContent = ingredient;
    ingredItemEl.classList.add('item');

    return ingredItemEl;
  });
}
const elements = makeListIngredients(ingredients);

console.log(elements);

ingredientsEl.append(...elements);

