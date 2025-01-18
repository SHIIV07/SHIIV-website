var tracksProgress = [50, 60, 35, 20, 15, 90];

var tracksPercentage = document.querySelectorAll('.progress-bar');
var tracksPercentageText = document.querySelectorAll('.progress-percentage');

for (var i = 0; i < tracksPercentage.length; i++) { 
    tracksPercentage[i].style.width = tracksProgress[i] + '%';
    tracksPercentageText[i].textContent = tracksProgress[i] + '%';
}
