/* 1.  Get our elements */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.fullscreen');
const playbackRate = player.querySelector('#speed');
const fastBackward = player.querySelector('#quickBackward');
const fastForward = player.querySelector('#quickForward');

/* 2. Build our functions */

function togglePlay() {
    
    /* (One way to do it)
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    */

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
    // &#x25BA
    // \uD803\uDF55
    // ► : \u25BA : alt+16
    // ⛶ : \u26F6
    // &#8810;

    /*
    <p>I will display &euro;</p>        # Entity name
    <p>I will display &#8364;</p>       # Decimal value
    <p>I will display &#x20AC;</p>      # Hexadecimal value
    */


    const icon = this.paused ? '\u25BA' : '❚❚';
    toggle.textContent = icon;
    console.log('Update the button');
}

function skip() {
    // console.log('Skipping');
    // console.log(this.dataset);
    // console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
    console.log(this.name);
    console.log(this.value);
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log(e);
}

function toggleFullscreen() {
    if (document.fullscreenElement) {
        console.log('Exit fullscreen');
        document.exitFullscreen();
    } else {
        console.log('Enter fullscreen');
        video.requestFullscreen();
    }
}


/* 3. Hook up the Event Listeners */

video.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        togglePlay();
    }
});
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
video.addEventListener('dblclick', toggleFullscreen);


document.addEventListener('keydown', (e) => {
    console.log(`Event code: ${e.code}`);
    console.log(`Ctrl key: ${e.ctrlKey}`);
});


let skipRate = 0.05;
let skipRateFast = 10;
let timeJump;

document.addEventListener('keydown', (e) => {
    switch (e.code) {
        
        // Play/Pause Video

        case 'Space':
            console.log('Space pressed');
            togglePlay();
            break;


        // Playback Speed
        
        case 'ArrowUp':
            console.log('Speeding up');
            if (e.ctrlKey) {
                console.log('Speeding up ++');
                playbackRate.stepUp(5);
            } else {
                playbackRate.stepUp();
            }
            video.playbackRate = playbackRate.value;
            console.log(`Playback rate: ${video.playbackRate}`);
            break;

        case 'ArrowDown':
            console.log('Speeding down');
            if (e.ctrlKey) {
                console.log('Speeding down ++');
                playbackRate.stepDown(5);
            } else {
                playbackRate.stepDown();
            }
            video.playbackRate = playbackRate.value;
            console.log(`Playback rate: ${video.playbackRate}`);
            break;

        case 'KeyN':
            console.log('Normal speed rate');
            playbackRate.value = playbackRate.defaultValue;
            video.playbackRate = playbackRate.value;
            console.log(playbackRate.defaultValue);
            console.log(`Playback rate: ${video.playbackRate}`);
            break;


        // Skipping Video

        case 'ArrowRight':
            console.log('Skipping');
            if (e.ctrlKey) {
                console.log(`Skipping fast${skipRateFast}`);
                video.currentTime += skipRateFast;
                console.log(`Current time: ${video.currentTime}`);
            } else {
                video.currentTime += skipRate;
                console.log(`Current time: ${video.currentTime}`);
            }
            break;

        case 'ArrowLeft':
            console.log('Skipping');
            if (e.ctrlKey) {
                console.log(`Skipping fast${skipRateFast}`);
                video.currentTime -= skipRateFast;
                console.log(`Current time: ${video.currentTime}`);
            } else {
                video.currentTime -= skipRate;
                console.log(`Current time: ${video.currentTime}`);
            }
            break;

        case 'KeyJ':
            console.log('Fast skipping');
            video.currentTime += parseFloat(fastBackward.dataset.skip);
            console.log(fastBackward.dataset.skip);
            break;

        case 'KeyL':
            console.log('Fast skipping');
            video.currentTime += parseFloat(fastForward.dataset.skip);
            console.log(fastForward.dataset.skip);
            break;

        case 'Digit0':
        case 'Numpad0':
            timeJump = 0.0;
            video.currentTime = video.duration * timeJump;
            console.log(`Jumping to the ${timeJump*100}% of the video`);
            break;

        case 'Digit1':
        case 'Numpad1':
            timeJump = 0.1;
            video.currentTime = video.duration * timeJump;
            console.log(`Jumping to the ${timeJump*100}% of the video`);
            break;
        
        case 'Digit2':
        case 'Numpad2':
            timeJump = 0.2;
            video.currentTime = video.duration * timeJump;
            console.log(`Jumping to the ${timeJump*100}% of the video`);
            break;

        case 'Digit3':
        case 'Numpad3':
            timeJump = 0.3;
            video.currentTime = video.duration * timeJump;
            console.log(`Jumping to the ${timeJump*100}% of the video`);
            break;
        
        case 'Digit4':
        case 'Numpad4':
            timeJump = 0.4;
            video.currentTime = video.duration * timeJump;
            console.log(`Jumping to the ${timeJump*100}% of the video`);
            break;

        case 'Digit5':
        case 'Numpad5':
            timeJump = 0.5;
            video.currentTime = video.duration * timeJump;
            console.log(`Jumping to the ${timeJump*100}% of the video`);
            break;

        case 'Digit6':
        case 'Numpad6':
            timeJump = 0.6;
            video.currentTime = video.duration * timeJump;
            console.log(`Jumping to the ${timeJump*100}% of the video`);
            break;
        
        case 'Digit7':
        case 'Numpad7':
            timeJump = 0.7;
            video.currentTime = video.duration * timeJump;
            console.log(`Jumping to the ${timeJump*100}% of the video`);
            break;

        case 'Digit8':
        case 'Numpad8':
            timeJump = 0.8;
            video.currentTime = video.duration * timeJump;
            console.log(`Jumping to the ${timeJump*100}% of the video`);
            break;
        
        case 'Digit9':
        case 'Numpad9':
            timeJump = 0.9;
            video.currentTime = video.duration * timeJump;
            console.log(`Jumping to the ${timeJump*100}% of the video`);
            break;


        // Toggle Fullscreen

        case 'KeyF':
            toggleFullscreen();
            break;

        default:
            break;
    }

});


toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullscreen.addEventListener('click', toggleFullscreen);
