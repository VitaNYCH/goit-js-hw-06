// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const refs = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

refs.input.addEventListener('input', onInputMove);


function onInputMove(event) { 
   let magic = Number(event.currentTarget.value) + 'px'; 
    console.log(magic);
    return refs.span.style.fontSize = magic;
}
