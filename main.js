// Task #0
const player1 = {
    name: 'Scorpion',
    hp: 100,
    img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Секира', 'Меч', 'Кунай', 'Танто'],
    attack: () => {
        console.log(player1.name +' Fight...')
    },
};
const player2 = {
    name: 'Kitana',
    hp: 10,
    img:'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Боевые веера'],
    attack: () => {
        console.log(player2.name +' Fight...')
    },
};

// Task #1
// function createPlayer() {
//     const $player1 = document.createElement('div');
//     $player1.classList.add('player1');
//     const $progressbar = document.createElement('div');
//     $progressbar.classList.add('.progressbar');
//     const $character = document.createElement('div');
//     $character.classList.add('.character');
//     $player1.appendChild($progressbar);
//     $player1.appendChild($character);
//     const $life = document.createElement('div');
//     $life.classList.add('.life');
//     $life.style.width = '100%';
//     const $name = document.createElement('div');
//     $name.classList.add('.name');
//     $name.innerText = player1.name;
//     $progressbar.appendChild($life);
//     $progressbar.appendChild($name);
//     const $img = document.createElement('img');
//     $img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
//     $character.appendChild($img);
// };

// Task #2
// function createPlayer(classplayer, nameplayer, lifeplayer) {
//     const $player = document.createElement('div');
//     $player.classList.add(classplayer);
//     const $progressbar = document.createElement('div');
//     $progressbar.classList.add('progressbar');
//     const $character = document.createElement('div');
//     $character.classList.add('character');
//     $player.appendChild($progressbar);
//     $player.appendChild($character);
//     const $life = document.createElement('div');
//     $life.classList.add('life');
//     $life.style.width = lifeplayer + '%';
//     const $name = document.createElement('div');
//     $name.classList.add('name');
//     $name.innerText = nameplayer;
//     $progressbar.appendChild($life);
//     $progressbar.appendChild($name);
//     const $img = document.createElement('img');
//     $img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
//     $character.appendChild($img);
//     document.querySelector('.arenas').appendChild($player);
// };

// createPlayer('player1', 'SCORPION', 50);
// createPlayer('player2', 'SUB-ZERO', 80);

//Task #3
function createPlayer(classplayer, player) {
    const $player = document.createElement('div');
    $player.classList.add(classplayer);
    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    const $character = document.createElement('div');
    $character.classList.add('character');
    $player.appendChild($progressbar);
    $player.appendChild($character);
    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = player.hp + '%';
    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = player.name;
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    const $img = document.createElement('img');
    $img.src = player.img;
    $character.appendChild($img);
    document.querySelector('.arenas').appendChild($player);
};
createPlayer('player1', player1);
createPlayer('player2', player2);