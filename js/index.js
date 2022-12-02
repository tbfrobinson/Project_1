// set canvas width height relativity
const canvas = document.querySelector('canvas')
canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])
// will use c a lot
const c = canvas.getContext('2d')

// set what will pull our character downward
const gravity = 0.5

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
    x: 0,
    y: 0,
})

// platform creation
class Platform {
    constructor(position) {
        this.position = position
    }
    append() {
        c.fillStyle = 'grey'
        c. fillRect(this.position.x, this.position.y, 70, 10)
    }
}

const plat = new Platform( {
    x: 100,
    y: 600
})

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

// the game function that will run when start button is pressed
function game() {
    // clear out the start screen
    c.clearRect(0, 0, canvas.width, canvas.height)
    // idk what this does completely but it makes it work
    //like animates it
    window.requestAnimationFrame(game)
    plat.append()
    //spawn guy
    guy.move()
    //set guy velocity
    guy.velocity.x = 0
    if (keys.d.pressed) {guy.velocity.x = 4}
        else if (keys.a.pressed) {guy.velocity.x = -4}
    
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