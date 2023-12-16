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
  //   console.log(counter);
};

const handleDecrease = () => {
  counter--;
  value.style.color = 'red';
  value.textContent = counter;
  //   console.log(counter);
};

const handleIncrease = () => {
  counter++;
  value.style.color = 'green';
  value.textContent = counter;
  //   console.log(counter);
};

//EventListeners
resetBtn.addEventListener('click', handleReset);
increaseBtn.addEventListener('click', handleIncrease);
decreaseBtn.addEventListener('click', handleDecrease);
