// set canvas width height relativity
const canvas = document.querySelector('canvas')
canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])
// will use c a lot
const c = canvas.getContext('2d')

// set what will pull our character downward
let gravity = 0.6

//character creation
class Character {
    // make position track instead of x or y
    constructor(position) {
        this.position = position
        // velocity to add speed left or right
        this.velocity = {
            x: 0,
            y: 1
        }
        this.height = 20
    }
    // create onscreen
    append() {
        c.fillStyle = 'green'
        c.fillRect(this.position.x, this.position.y, 20, 20, this.height)
    }
    // new fuction that adds gravity and movement // collision??
    move() {
        // append the character here so that it always appears
        this.append()

        // position updates with velocity
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        // gravity
        if (this.position.y + this.height + this.velocity.y < canvas.height) {
            this.velocity.y += gravity
        } else {
            this.velocity.y = 0
        }
    }
}
// create character
const guy = new Character( {
    x: 1,
    y: 0,
})

// platform creation

// NEED TO // // MAKE PLATFORMS // // HAVE COLLISION
class Platform {
    constructor(position) {
        this.position = position
    }
    append() {
        c.fillStyle = 'grey'
        c.fillRect(this.position.x, this.position.y, 70, 10)
    }
}

const plat = new Platform( {
    x: 155,
    y: 600
})

// adding text
class Text {
    constructor(x, y, text, size){
        this.x = x 
        this.y = y
        this.text = text
        this.size = size
    }
    append() {
        c.fillStyle = 'black'
        c.font = `${this.size}px sans-serif`
        c.fillText(this.text, this.x, this.y)
    }

}

class Object {
    constructor(x, y, width, height, fillStyle){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.fillStyle = fillStyle
    }
    append() {
        c.fillStyle = this.fillStyle
        c.fillRect(this.x, this.y, this.width, this.height)
    }
}



const crow = new Object (323, 570, 20, 20, 'black')
const tree = new Object (300, 450, 65, 300, 'brown')


// first screen text
function instructions() {
    const arrowKeys = new Text(150, 300, 'arrow keys to move left and right', 25)
    const jump = new Text(240, 330, 'and space to jump', 22)
    const jumpHere = new Text(160, 580, 'jump up here!', 10)
    const yay = new Text(170, 550, 'nice', 20)
    const wow = new Text(175, 480, 'wow', 15)

   arrowKeys.append()
   jump.append()
   jumpHere.append()
   if(guy.position.x >= 135 && guy.position.x <= 225 && guy.position.y + guy.height >= 599 && guy.position.y + guy.height  <= 601){
    yay.append()
   } else if(guy.position.x >= 135 && guy.position.x <= 225 && guy.position.y + guy.height >= 500 && guy.position.y + guy.height  <= 540) {
    wow.append()
    }
}
// make keys array to look at for keypresses
const keys = {
    d: {
        pressed: false
    },
    a: {
        pressed: false
    },
    w: {
        pressed: false
    },
    s: {
        pressed: false
    }
}

function collision() {
    guy.velocity.x = 0
    if (keys.d.pressed) {guy.velocity.x = 4}
    else if (keys.a.pressed) {guy.velocity.x = -4}
    
    if(guy.position.x >= 135 && guy.position.x <= 225 && guy.position.y + guy.height + guy.velocity.y  >= 600 && guy.position.y + guy.height <= 601 && guy.velocity.y !== 0){
        guy.velocity.y = 0
    } 

}
function crowTalk() {
    c.clearRect(0, 0, canvas.width, canvas.height)
}

// the game function that will run when start button is pressed
function game() {
    c.clearRect(0, 0, canvas.width, canvas.height)
    tree.append()
    crow.append()
    plat.append()
// basic movement and spawning guy
    instructions()
    guy.move()

    // action
    if(guy.position.x > 360) {
        setInterval(crowTalk(), 10000)
    }
    //spawn guy
    // make first screen
    

    // idk what this does completely but it makes it work
    //like animates it
    window.requestAnimationFrame(game)
    
    //set guy velocity
    // somehow made collision
    collision()
    console.log(guy.position.x)
}

game()

//movement
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowRight':
            keys.d.pressed = true
        break
        case 'ArrowLeft':
            keys.a.pressed = true
        break
        case ' ':
            // single jump !
            if(guy.velocity.y === 0) {
            guy.velocity.y = -10}
        break
    }
})
// the buttons up do nothing, remove any velocity
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowRight':
            keys.d.pressed = false
        break
        case 'ArrowLeft':
            keys.a.pressed = false
        break
    }
})