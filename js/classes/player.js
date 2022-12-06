
class Character extends Sprite {
    // make position track instead of x or y
    constructor({ position, imageSrc, frameRate }) {
        super({ imageSrc, frameRate })
        this.position = position
        // velocity to add speed left or right
        this.velocity = {
            x: 0,
            y: 1,
        }
        this.alive = true
        
    }
    // create onscreen
    // new fuction that adds gravity and movement // collision??
    move() {
        this.draw()
        // append the character here so that it always appears
        
        // position updates with velocity
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        // gravity
        if (this.position.y + this.height + this.velocity.y < canvas.height - 40) {
            this.velocity.y += gravity
        } else {
            this.velocity.y = 0
        }
    }
}