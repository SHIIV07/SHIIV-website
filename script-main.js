// PERCENTAGE CALCULATIONS

var tracksProgress = [50, 60, 60, 20, 20, 90];

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

// PREVIEW PLAYBACK

var playbackButtonState = 'paused';
function playAndPause(buttonId, audioId) { 

    if (playbackButtonState == 'paused') { 

        buttonId.src = 'img/SVG/pause.svg';
        playbackButtonState = 'playing';
        audioId.play();

    } else if (playbackButtonState == 'playing') {

        buttonId.src = 'img/SVG/play.svg';
        playbackButtonState = 'paused';
        audioId.pause();

    }

    audioId.onended = function() { 
        buttonId.src = 'img/SVG/play.svg';
        playbackButtonState = 'paused';
    }

}

function playbackChangeVolume(audioId) { 
    
    var volumeSlider = document.getElementsByName('playback-volume')[0];
    var volumeValue = volumeSlider.value;
    audioId.volume = volumeValue / 100;
}
