/*### 1. Get our elements ###*/

const startButton = document.querySelector('.start-button');
// const tileContainer = document.querySelector('.js-container');
const tiles = document.querySelectorAll('[data-tile]');
// const redTile = document.querySelector('');


/*### 2. Build our functions ###*/

function pressTile() {
    console.log(this);
    // confirm('Tile pressed:', event);
}


/*### 3. Create and assign Event Listeners ###*/

// startButton.addEventListener;
tiles.forEach(tile => {
    tile.addEventListener('click', pressTile);
});