const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const numberValue = document.querySelector('#value');


incrementBtn.addEventListener('click', onIncrementBtnClick);
decrementBtn.addEventListener('click', onDecrementBtnClick);



let CounterValue = 0;
function onIncrementBtnClick(event) { 
   CounterValue +=1
 numberValue.textContent = CounterValue;  
};


function onDecrementBtnClick(event) {
    CounterValue -= 1; 
numberValue.textContent = CounterValue;
};
