// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.





const colorChangeBtn = document.querySelector('.change-color');
// const bodyEl = document.querySelector('body');
// const spanEl = bodyEl.querySelector('.color');

colorChangeBtn.addEventListener('click', onColorChangeBtn);
const bodyEl = document.querySelector('body');
const spanEl = bodyEl.querySelector('.color');


function onColorChangeBtn(event) {
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const randomColor = getRandomHexColor();


  bodyEl.style.backgroundColor = randomColor;
  spanEl.textContent = randomColor;

}
 