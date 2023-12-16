//Accessing HTML Elements in DOM
const value = document.getElementById('value');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

let counter = 0;

//Event Listeners Callback Functions
const handleReset = () => {
  counter = 0;
  value.style.color = 'hsl(209, 61%, 16%)';
  value.textContent = counter;
};

const handleDecrease = () => {
  counter--;
  if (counter <= -1) {
    value.style.color = 'red';
  }
  if (counter == 0) {
    value.style.color = 'hsl(209, 61%, 16%)';
  }
  value.textContent = counter;
};

const handleIncrease = () => {
  counter++;
  if (counter >= 1) {
    value.style.color = 'green';
  }
  if (counter == 0) {
    value.style.color = 'hsl(209, 61%, 16%)';
  }
  value.textContent = counter;
};

//EventListeners
resetBtn.addEventListener('click', handleReset);
increaseBtn.addEventListener('click', handleIncrease);
decreaseBtn.addEventListener('click', handleDecrease);
