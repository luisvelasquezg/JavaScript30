/*### 1. Get our elements ###*/

const startButton = document.querySelector('#start-button');
// const testButton2 = document.querySelector('#test-button');
// const testButton = document.getElementById('test-button');


// const tileContainer = document.querySelector('.js-container');
const tiles = document.querySelectorAll('[data-tile]');
// const redTile = document.querySelector('');
// const sounds = document.querySelectorAll('[data-sound]');
const sound_red = document.querySelector(`[data-sound = "red"`);
const sound_green = document.querySelector(`[data-sound = "green"`);
const sound_blue = document.querySelector(`[data-sound = "blue"`);
const sound_yellow = document.querySelector(`[data-sound = "yellow"`);


/*### 2. Build our functions ###*/

/* Variables */
const numberOfTiles = tiles.length; // Number of tiles in the board
let isGameRunning = false;
let stopGame = false;
let restartGame = false;


function pressTile(event, eventType) {
    // console.log(event);
    // const audio = document.querySelector(`audio[data-sound="${event.dataset.tile}"]`);
    console.log(event);
    tileColor = event.dataset.tile;
    console.log(`Tile: ${tileColor}`);
    
    if (eventType == 'keypress') {
        event.classList.add('playing');
        // event.classList.remove('hover');
        // event.classList.remove('focus');
    }

    // console.log(`Event type: ${event.type}`);
    let audio;
    switch (tileColor) {
        case 'red':
            audio = sound_red;
            event.classList.add('playing-red');
            break;

        case 'green':
            audio = sound_green;
            event.classList.add('playing-green');
            break;

        case 'blue':
            audio = sound_blue;
            event.classList.add('playing-blue');
            break;

        case 'yellow':
            audio = sound_yellow;
            event.classList.add('playing-yellow');
            break;
    
        default:
            break;
    }

    if(!audio) return;
    audio.currentTime = 0   // rewind to the start
    audio.play();
}

function removeTransition(e, tile) {
    if (e.propertyName !== "transform") return; // skip it if it's not a transform
    console.log(e.propertyName);
    console.log("Removing Transition:");
    console.log(e);

    tileColor = tile.dataset.tile;
    switch (tileColor) {
        case 'red':
            audio = sound_red;
            tile.classList.remove('playing-red');
            break;

        case 'green':
            audio = sound_green;
            tile.classList.remove('playing-green');
            break;

        case 'blue':
            audio = sound_blue;
            tile.classList.remove('playing-blue');
            break;

        case 'yellow':
            tile.classList.remove('playing-yellow');
            break;
    
        default:
            break;
    }

    tile.classList.remove("playing");

}

/*
const getRandomNumber2 = (min, max) => {
    console.log(`min: ${min}\nmax: ${max}`);
    return Math.floor(Math.random() * (max - min + 1) + min);
};
*/


function activateSequence(e) {
    console.log('Activating sequence');
    // console.log(e);
    // console.log(`getRandomNumber = ${getRandomNumber2(2, 13)}`);
    // let x = Math.random(max - min)
    
    // setTimeout(() => {
    //     console.log('...');
    // }, 2000);

    tileColor = e.dataset.tile;
    console.log(`Tile: ${tileColor}`);
    
    e.classList.add('playing');

    // console.log(`Event type: ${event.type}`);
    let audio = null;
    switch (tileColor) {
        case 'red':
            audio = sound_red;
            e.classList.add('playing-red');
            break;

        case 'green':
            audio = sound_green;
            e.classList.add('playing-green');
            break;

        case 'blue':
            audio = sound_blue;
            e.classList.add('playing-blue');
            break;

        case 'yellow':
            audio = sound_yellow;
            e.classList.add('playing-yellow');
            break;
    
        default:
            break;
    }

    if(!audio) return;
    audio.currentTime = 0   // rewind to the start
    audio.play();
}



/*
// ### Ejemplo del uso del setTimeout() ###
function function1() {
    console.log({} + [] + " = {} + []"); // run this it is actually funny
}

function runner() {
    function1();
    setTimeout(function() {
        runner();
    }, time);
}

runner();
*/


/*
// ### Another way of using setTimeout ###
    // function slideEm()
    // {
    //     $(".slide2").toggle(); 
    //     $(".slide").toggle(); // Make this visible first
    //     window.setTimeout(slideEm, 1000);
    // }
    
    // slideEm();
*/


// const getRandomTile = (min, max) => {
//     console.log(`min: ${min}\nmax: ${max}`);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };

function getRandomTile(tilesNumber) {
    // console.log(`min: ${min}\nnumTiles: ${numTiles}`);
    tilePosition =  Math.floor(Math.random() * (tilesNumber));
    console.log(`tilePosition: ${tilePosition}`);
    return tiles.item(tilePosition);
};


function generateRandomSequence(numSequences, numTiles) {
    // max = numSequences;
    let nextTile;
    const sequenceArray = [];
    for (let index = 0; index < numSequences; index++) {
        nextTile = getRandomTile(numTiles);
        sequenceArray.push(nextTile);
    }
    return sequenceArray;
}



function startGame() {
    // if (isGameRunning) stopGame = true;
    // isGameRunning = false;

    restartGame = true;

    console.log('Starting game...');

    // let sequence = [redTile, greenTile, blueTile, yellowTile, yellowTile, redTile];
    let numberOfSequences = 6;
    // let numberOfTiles = tiles.length;
    let sequence = generateRandomSequence(numberOfSequences, numberOfTiles);
    console.log('sequence:');
    console.log(sequence);
    // let sequence = 
    let i = 0;
    // console.log(sequence[3]);

    restartGame = false;
    
    function runner() {
        if (i >= sequence.length || restartGame) return;
        let element = sequence[i];
        activateSequence(element);
        setTimeout(runner, 1000);
        i++;
    }
    
    runner();

    isGameRunning = false;
    stopGame = false;

/*
    sequence.forEach((element) => {
        i++;
        console.log(i);
        console.log(element);
        // setTimeout(activateSequence, 2000, element);
        if (i <= sequence.length) {
            function runner() {
                activateSequence(element);
                window.setTimeout(runner, 1000);
            }
            runner();    
        }

    });
*/    


}




/*### 3. Create and assign Event Listeners ###*/

startButton.addEventListener('click', () => {
    console.log('Starting...');
    startGame();
});

// testButton.addEventListener('click', () => {
//     console.log('Test button pressed');
// });

let redTile, greenTile, blueTile, yellowTile;

// For each Tile a variable is assigned as well as an event listener
tiles.forEach((tile) => {

    colorOfTile = tile.dataset.tile;
    switch (colorOfTile) {
        case 'red':
            redTile = tile;
            break;

        case 'green':
            greenTile = tile;
            break;

        case 'blue':
            blueTile = tile;
            break;

        case 'yellow':
            yellowTile = tile;
            break;

        default:
            break;
    }
    // console.log('List of Tiles:', redTile, greenTile, blueTile, yellowTile)
    
    tile.addEventListener('click', (e) => {
        console.log(`click event type: ${e.type}`);
        pressTile(tile, e.type)
    });

    tile.addEventListener("transitionend", (e) => {
        removeTransition(e, tile);
    })
});


// tiles.forEach(tile => {
//     console.log(tile.dataset.tile);
// });


document.addEventListener('keypress', (e) => {
    console.log(`keypress event type: ${e.type}`);
    switch (e.code) {

        // Red tile
        case 'KeyE':
            // redTile.classList.add('playing');
            pressTile(redTile, e.type);
            // redTile.classList.toggle('hover');
            // redTile.classList.remove('activate');
            break;

        // Green tile
        case 'KeyR':
            pressTile(greenTile, e.type);
            break;
        
        // Blue tile
        case 'KeyD':
            pressTile(blueTile, e.type);
            break;
            
        // Yellow tile
        case 'KeyF':
            pressTile(yellowTile, e.type);
            break;
            
        // case 'Enter':
        // case 'NumpadEnter':
        //     startGame();
        //     break;

        default:
            break;

    };

    console.log(`${e.key} key pressed (${e.code})`);
});

/*
function myFunction() {
    console.log('myFunction');
    console.log(myButton);
}

let myButton = document.querySelector('#myLabel');
*/

// document.addEventListener('click', (e) => {
//     console.log(`Prueba: ${e.type}`);
//     pressTile(e);
// });

// startGame();