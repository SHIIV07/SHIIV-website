// PERCENTAGE CALCULATIONS

var tracksProgress = [50, 60, 60, 60, 60, 90];

const tracksPercentage = document.querySelectorAll('.progress-bar');
const tracksPercentageText = document.querySelectorAll('.progress-percentage');

const tracksPercentageTotalText = document.querySelector('#progress-total');
var tracksPercentageTotalValue = 0;

for (var i = 0; i < tracksPercentage.length; i++) { 
    tracksPercentage[i].style.width = tracksProgress[i] + '%';
    tracksPercentageText[i].textContent = tracksProgress[i] + '%';
    tracksPercentageTotalValue += tracksProgress[i];
}

tracksPercentageTotalText.textContent = 'Total: ' +  Math.round(tracksPercentageTotalValue/6) + '%';

// PREVIEW PLAYBACK

var playbackButtonState = 'paused';
const playbackVolumeSliders = document.querySelectorAll('.playback-volume');
const playbackAudioId = document.querySelectorAll('.track-preview');
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

function playbackChangeVolume(audioId, audioIndex) { 
    
    let volumeSlider = playbackVolumeSliders[audioIndex];
    let volumeValue = volumeSlider.value;
    audioId.volume = volumeValue / 100;
}

for (var i = 0; i < playbackVolumeSliders.length; i++) { 
    playbackVolumeSliders[i].addEventListener('mouseup', () => playbackChangeVolume(playbackAudioId[i-1], i-1));
    playbackVolumeSliders[i].addEventListener('touchend', () => playbackChangeVolume(playbackAudioId[i-1], i-1));

}
