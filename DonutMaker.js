var display = document.getElementById('display');
var click = document.getElementById('click');
var multiply = document.getElementById('multiply');
var autoclick = document.getElementById('autoclick');


var multiplierCost = 20;
var autoclickCost = 100;


var autoclickOn = false;

var score = 0;
var clickValue = 1;
var multiplier = 1;


function displayScore() {
  display.innerHTML = score;
}

function displayMultiplier() {
  multiply.value = 'Multiplier x' + multiplier + ' (next: cost ' + multiplierCost + ')';
}

function displayAutoclick() {
  autoclick.value = 'Autoclick (cost ' + autoclickCost + ')';
}

function multiplyEnabler() {
  if (score >= multiplierCost) {
    multiply.disabled = false;
  } else {
    multiply.disabled = true;
  }
}

function autoclickEnabler() {
  if (!autoclickOn && score >= autoclickCost) {
    autoclick.disabled = false;
  } else {
    autoclick.disabled = true;
  }
}


function buttonsEnabler() {
  multiplyEnabler();
  autoclickEnabler();
}

function increaseScore() {
  score += clickValue;
  buttonsEnabler();
  displayScore();
}


function increaseMultiplier() {
  score -= multiplierCost;
  multiplier += 1;
  clickValue = multiplier;
  
  multiplierCost *= multiplier;
  buttonsEnabler();
  displayScore();
  displayMultiplier();
}

function increaseAutoclick() {
    score -= autoclickCost;
    multiplier += 1;
    clickValue = multiplier;
    
    autoclickCost *= autoclick;
    buttonsEnabler();
    displayScore();
    displayAutoclick();
  }

function enableAutoclick() {
  score -= autoclickCost;
  autoclickOn = true;
  autoclick.disabled = true;
  displayScore();
}

function autoclickF() {
  if (autoclickOn) {
    increaseScore();
  }
}

function refresh(){
    window.location.reload("Refresh")
  }



displayScore();
displayMultiplier();
displayAutoclick();

multiply.disabled = true;
autoclick.disabled = true;


click.addEventListener('click', increaseScore);
multiply.addEventListener('click', increaseMultiplier);
autoclick.addEventListener('click', enableAutoclick);
autoclickInterval = setInterval(autoclickF, 1000);

