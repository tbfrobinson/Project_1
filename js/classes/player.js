
class Character extends Sprite {
    // make position track instead of x or y
    constructor(imageSrc) {
        super({ imageSrc })
        this.position = {
            x: 1,
            y: 400,
        }
        // velocity to add speed left or right
        this.velocity = {
            x: 0,
            y: 1,
        }
        this.alive = true
        
    }
    // create onscreen
    append() {
        c.fillstyle = 'red'
        this.width = 10
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    // new fuction that adds gravity and movement // collision??
    move() {
        this.append()
        // append the character here so that it always appears
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
        // position updates with velocity
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        // gravity
        if (this.position.y + this.height + this.velocity.y < canvas.height - 26) {
            this.velocity.y += gravity
        } else {
            this.velocity.y = 0
        }
    }
}