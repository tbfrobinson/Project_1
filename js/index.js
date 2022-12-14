//imports

// set canvas width height relativity

const canvas = document.querySelector('canvas')
canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])
const c = canvas.getContext('2d')



// buttons
const startScreen = document.querySelector('#startScreen')
const start = document.querySelector('#start')
const options = document.querySelector('#options')
const music = document.querySelector('#music')
const sfx = document.querySelector('#sfx')
const back = document.querySelector('#back')
let mainMenu = document.querySelector('#mainMenu')
let restart = document.querySelector('#restart')
c.drawImage(startScreen, 0, 0)


let letSfx = 'yes'
// music section!
let startMusic = document.querySelector('#audio')
let letMusic = 'yes'

const hecticMusic = new Audio()
hecticMusic.src = 'music/finalScreen.m4a'

const victoryMusic = new Audio()
victoryMusic.src = 'music/victory.m4a'

const raven = new Audio()
raven.src = 'music/raven.m4a'

const death = new Audio()
death.src = 'music/death.m4a'

function musicChange(e) {
    startMusic.src = e
}

sfx.addEventListener('click', () => {
    if(letSfx === 'yes') {
        letSfx = 'no'
    } else {
        letSfx = 'yes'
    }
})
music.addEventListener('click', () => {
    if(letMusic === 'yes') {
        letMusic = 'no'
        startMusic.pause();
        startMusic.currentTime = 0
    } else {
        letMusic = 'yes'
        startMusic.play()
    }}
    )
    
    let gravity = 0.6
    
start.addEventListener('click', () => {
    game()
    if(letMusic === 'yes') {
    musicChange('music/crowMusic.m4a')
    }
})
//
options.addEventListener('click', () => {
    start.style.display = 'none'
     options.style.display = 'none'
    music.style.display = 'block'
    sfx.style.display = 'block'
    back.style.display = 'block'
    })
back.addEventListener('click', () => {
    start.style.display = 'block'
    options.style.display = 'block'
    music.style.display = 'none'
    sfx.style.display = 'none'
    back.style.display = 'none'
})

const deathScreen = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: 'img/death.png'
})
// set background
const screenOne = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: 'img/screenOne.png'
})
const screenTwo = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: 'img/screenTwo.png'
})
const victory = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: 'img/victory.png'
})
// create character
const guy = new Character({position: {
    x: 1,
    y: 510,
}, imageSrc: 'img/guy.png',
frameRate: 3
})

const newGuy = new Character ({position: {
    x: 1,
    y: 510,
}, imageSrc: 'img/guy.png',
frameRate : 3
})



function main() {
    location.reload()
}
function restartGame() {
    level = 1
    mainMenu.style.display = 'none'
    restart.style.display = 'none'
    guy.position.x = 1
    guy.position.y = 510
    if(letMusic === 'yes'){
    death.pause()
    startMusic.play()
    }
    
}
function gameOver() {
    keys.d.pressed = false
    keys.a.pressed = false
    guy.velocity.x = 0
    guy.velocity.y = 0.1
    
    c.clearRect(0, 0, canvas.width, canvas.height)
    deathScreen.draw()
    
    if(letMusic === 'yes') {
        startMusic.pause()
        death.play()
    }


    const gameOver = new Text(180, 170, 'LOL U DIED', '70px Arial')
    gameOver.append()
    mainMenu.style.display = 'block'
    restart.style.display = 'block'
    restart.addEventListener('click', restartGame)
    mainMenu.addEventListener('click', main)
}
function win() {
    keys.a.pressed = false
    keys.d.pressed = false
    keys.b.pressed = false
    keys.f.pressed = false
    guy.velocity.y = 0.1
    
    c.clearRect(0, 0, canvas.width, canvas.height)
    const winText = new Text(180, 170, 'YOU WIN', '70px Arial')
    if(letMusic === 'yes'){
    hecticMusic.pause()
    victoryMusic.play()
    }
    victory.draw()

    winText.append()
    mainMenu.style.display = 'block'
    mainMenu.addEventListener('click', main)
}

const crowHello = new Text(433, 400, 'hey you, come closer', '12px Arial')
const crowDetails = new Text(415, 390, 'I saw some guy go up this mountain with your head', '11px Arial')
const crowWarn = new Text(433, 400, "don't die on that spike by the way", '12px Arial')
const instructions = new Text(60, 170, 'walk around with the arrow keys', '40px Arial')
const instructionsTwo = new Text(180, 220, 'jump with z!', '30px Arial')




// the game function that will run when start button is pressed
function game() {
    start.style.display = 'none'
    options.style.display = 'none'
    
    window.requestAnimationFrame(game)
    c.clearRect(0, 0, canvas.width, canvas.height)
    
    // action
    // winning condition
    
    screenOne.draw()
    guy.move()
    
    guy.velocity.x = 0
    if(guy.position.x < 1) {
        keys.a.pressed = false
    } 
    if (keys.d.pressed) {guy.velocity.x = 3}
    else if (keys.a.pressed) {guy.velocity.x = -3}
    
    
    if (guy.position.x < 140) {
        instructions.append()
        instructionsTwo.append()
    }
    if (guy.position.x > 200 && guy.position.x < 320) {
        if(letSfx === 'yes'){
        raven.play()
    }
        crowHello.append()
        
    } else if (guy.position.x > 370 && guy.position.x < 480) {
        crowDetails.append()
        
    } else if (guy.position.x > 600) {
        crowWarn.append()
    }
    if (guy.position.x >= 525 && guy.position.x <= 593 && guy.position.y >= 540) {
        
        gameOver()
    }
    if(guy.position.x > 670){
        gameTwo()
        window.cancelAnimationFrame(game)
        startMusic.pause()
        if(letMusic === 'yes'){
        hecticMusic.play()
        }
    }
    
}



function gameTwo(){
    keys.a.pressed = false
    keys.d.pressed = false
    c.clearRect(0, 0, canvas.width, canvas.height)
    
    
    
    screenTwo.draw()
    newGuy.move()
    // console.log(newGuy.position.x, newGuy.position.y)
    newGuy.velocity.x = 0
    if(newGuy.position.x < 1) {
        keys.b.pressed = false
    } 
    if (keys.f.pressed) {newGuy.velocity.x = .03}
    else if (keys.b.pressed) {newGuy.velocity.x = -.03}
    if(keys.z.pressed) {newGuy.position.y - 15}
    console.log(guy.position.x, newGuy.position.x)
    
    if (newGuy.position.x > 600) {
        win()
        console.log('win!')
    }
    window.requestAnimationFrame(gameTwo)
}

window.addEventListener('DOMContentLoaded', () => {
    startMusic.play()
})