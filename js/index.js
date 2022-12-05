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



let gravity = 0.6



//character creation
const screenOne = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './img/screenOne.png'
})
// create character
const guy = new Character({imageSrc: './img/guy.png'})


function main() {
    location.reload()
}


function gameOver() {
    keys.d.pressed = false
    keys.a.pressed = false
    guy.velocity.y = 0.1
    
    c.clearRect(0, 0, canvas.width, canvas.height)
    const gameOver = new Text(160, 300, 'LOL U DIED', 70)
    gameOver.append()
    mainMenu.style.display = 'block'
    restart.style.display = 'block'
    restart.addEventListener('click', restartGame)
    mainMenu.addEventListener('click', main)
}




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
    
}
game()
