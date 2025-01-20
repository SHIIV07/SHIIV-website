var tracksProgress = [50, 60, 50, 20, 15, 90];

var tracksPercentage = document.querySelectorAll('.progress-bar');
var tracksPercentageText = document.querySelectorAll('.progress-percentage');

var tracksPercentageTotalText = document.querySelector('#progress-total');
var tracksPercentageTotalValue = 0;

for (var i = 0; i < tracksPercentage.length; i++) { 
    tracksPercentage[i].style.width = tracksProgress[i] + '%';
    tracksPercentageText[i].textContent = tracksProgress[i] + '%';
    tracksPercentageTotalValue += tracksProgress[i];
}

tracksPercentageTotalText.textContent = 'Total: ' +  Math.round(tracksPercentageTotalValue/6) + '%';
