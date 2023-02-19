// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.


// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.





const inputEl = document.querySelector('input[type = number]');
const buttonCreateEl = document.querySelector('button[data-create]');
const buttonDestroyEl = document.querySelector('[data-destroy]');
const divBoxesEl = document.querySelector('#boxes');

console.log(divBoxesEl);


inputEl.addEventListener('input', onInputEnter);
console.log(inputEl.value);
buttonCreateEl.addEventListener('click',()=>{createBoxes(Number(inputEl.value));});
buttonDestroyEl.addEventListener('click', onDestroyBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let inputValue = 0;
function onInputEnter(event) {
  inputValue = event.currentTarget.value; 
}

function createBoxes(amount) {
 
  let divArray = [];
  let sizeBox = 30;
  for (let i = 0; i < amount; i += 1){
    sizeBox += 10;
    const newBox = document.createElement('div');
    newBox.classList = 'item';
    newBox.style.width = `${sizeBox}px`;
    newBox.style.height = `${sizeBox}px`;
    newBox.style.marginBottom = '20px';
    newBox.style.marginTop = '20px';
    newBox.style.backgroundColor = getRandomHexColor();
    divArray.push(newBox);
   
  }
   console.log(divArray);
  return divBoxesEl.append(...divArray);
 
}   

function onDestroyBtnClick() {
  inputEl.value = '';
  return (divBoxesEl.innerHTML = '');
}




