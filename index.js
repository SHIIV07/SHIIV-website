// PERCENTAGE CALCULATIONS

const phaseProgress = [100, 20, 0];

const phasePercentage = document.querySelectorAll('.progress-bar');
const phasePercentageText = document.querySelectorAll('.progress-percentage');

const phasePercentageTotalText = document.querySelector('#progress-total');
var phasePercentageTotalValue = 0;

for (var i = 0; i < phasePercentage.length; i++) { 
    phasePercentage[i].style.width = phaseProgress[i] + '%';
    phasePercentageText[i].textContent = phaseProgress[i] + '%';
    phasePercentageTotalValue += phaseProgress[i];
}

phasePercentageTotalText.textContent = 'Total: ' +  Math.round((phasePercentageTotalValue*100)/3)/100 + '%';