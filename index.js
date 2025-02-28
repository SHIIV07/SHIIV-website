// PERCENTAGE CALCULATIONS

const tracksProgress = [100, 100, 100, 100, 60, 90];

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

const playbackVolumeSliders = document.querySelectorAll('.playback-volume');
const playbackAudioId = document.querySelectorAll('.track-preview');
function playAndPause(buttonId, audioId) { 
    
    if (buttonId.alt == 'paused') { 

        audioPauseAll();
        buttonId.src = 'img/SVG/pause.svg';
        buttonId.alt = 'playing';
        audioId.currentTime = 0;
        audioId.play();

    } else if (buttonId.alt == 'playing') {

        buttonId.src = 'img/SVG/play.svg';
        buttonId.alt = 'paused';
        audioId.pause();

    }

    audioId.onended = function() { 
        buttonId.src = 'img/SVG/play.svg';
        buttonId.alt = 'paused';
    }

}

const audiosToPause = document.querySelectorAll('audio');
const audiosToPauseImage = document.querySelectorAll('.playback-button');

function audioPauseAll() {  

    for (var i = 0; i < audiosToPause.length; i++) {
        audiosToPauseImage[i].src = 'img/SVG/play.svg';
        audiosToPauseImage[i].alt = 'paused';
        audiosToPause[i].pause();
    }

}

function playbackChangeVolume(audioId, audioIndex) { 
    
    let volumeSlider = playbackVolumeSliders[audioIndex];
    let volumeValue = volumeSlider.value;
    audioId.volume = volumeValue / 100;
}

for (var i = 0; i < playbackVolumeSliders.length; i++) { 

    let volumeChangeArgs = [playbackAudioId[i], i];
    playbackVolumeSliders[i].addEventListener('mouseup', () => playbackChangeVolume(volumeChangeArgs[0], volumeChangeArgs[1]));
    playbackVolumeSliders[i].addEventListener('touchend', () => playbackChangeVolume(volumeChangeArgs[0], volumeChangeArgs[1]));

}
