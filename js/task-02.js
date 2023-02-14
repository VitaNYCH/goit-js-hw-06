const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const ingredItemEl = document.createElement('li');
  ingredItemEl.textContent = ingredient;
  ingredItemEl.classList.add('item');

  return ingredItemEl;
});


console.log(elements);

ingredientsEl.append(...elements);

