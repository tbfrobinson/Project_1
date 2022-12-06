//imports

// set canvas width height relativity
let d = document.querySelector('body')

const canvas = document.querySelector('canvas')
canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])
const c = canvas.getContext('2d')



// buttons
const start = document.querySelector('#start')
// start.addEventListener('click', game)
let mainMenu = document.querySelector('#mainMenu')
let restart = document.querySelector('#restart')


let background

let gravity = 0.6

let level = 1
if (level === 1) {
    background = '/img/screenOne.png'
}
if (level === 2) {
    background = '/img/guyBackwards.png'
}
// set background
const screenOne = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: background
})
// create character
const guy = new Character({position: {
    x: 1,
    y: 610,
}, imageSrc: 'img/guy.png',
frameRate: 3
})

function main() {
    location.reload()
}
function restartGame() {
    level = 1
    mainMenu.style.display = 'none'
    restart.style.display = 'none'
    guy.position.x = 1
}
function gameOver() {
    keys.d.pressed = false
    keys.a.pressed = false
    guy.velocity.y = 0.1
    
    c.clearRect(0, 0, canvas.width, canvas.height)
    const gameOver = new Text(180, 170, 'LOL U DIED', '70px Arial')
    gameOver.append()
    mainMenu.style.display = 'block'
    restart.style.display = 'block'
    restart.addEventListener('click', restartGame)
    mainMenu.addEventListener('click', main)
}

const crowHello = new Text(433, 400, 'hey you, come closer', '12px Arial')
const crowDetails = new Text(415, 390, 'I saw some guy go up this mountain with your head', '11px Arial')
const crowWarn = new Text(433, 400, "don't die to that spike by the way", '12px Arial')
const instructions = new Text(60, 170, 'walk around with the arrow keys', '40px Arial')
const instructionsTwo = new Text(180, 220, 'jump with z!', '30px Arial')


// the game function that will run when start button is pressed
function game() {
    window.requestAnimationFrame(game)
    c.clearRect(0, 0, canvas.width, canvas.height)
    screenOne.draw()
    guy.move()
    // action
    // winning condition
    
    
    guy.velocity.x = 0
    if(guy.position.x < 1) {
        keys.a.pressed = false
    } 
    if (keys.d.pressed) {guy.velocity.x = 4}
    else if (keys.a.pressed) {guy.velocity.x = -4}
    
    if (background == '/img/screenOne.png') {
    if (guy.position.x < 140) {
        instructions.append()
        instructionsTwo.append()
    }
    if (guy.position.x > 200 && guy.position.x < 320) {
        crowHello.append()
        console.log('crow hello')
    } else if (guy.position.x > 370 && guy.position.x < 480) {
        crowDetails.append()
        console.log('crow go up mountain')
    } else if (guy.position.x > 600) {
        crowWarn.append()
    }

    if (guy.position.x >= 525 && guy.position.x <= 593 && guy.position.y >= 530) {
        console.log('gameover')
        gameOver()
    }
    if(guy.position.x > 670){
        level = 2
    }
    console.log(level, screenOne)
}
    
}
game()
