let calculation = localStorage.getItem('calculation') || '';

updateScoreElement();

function updateCalculation(value) {
  calculation += value;

 updateScoreElement();

 localStorage.setItem('calculation', calculation);
}

//showing calculation above the calculator


function updateScoreElement () {
  document.querySelector('.js-message')
  .innerHTML = calculation;
}