// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}
const randomColor = getRandomHexColor();

const colorChangeBtn = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const spanEl = bodyEl.querySelector('.color');

colorChangeBtn.addEventListener('click', onColorChangeBtn);

function onColorChangeBtn(event) {
  
  bodyEl.style.backgroundColor = randomColor; 
  spanEl.textContent = randomColor;

}
 