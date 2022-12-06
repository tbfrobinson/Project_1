const keys = {
    d: {
        pressed: false
    },
    a: {
        pressed: false
    },
    x: {
        pressed: false
    }
}
//movement
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowRight':
            keys.d.pressed = true
            guy.currentFrame++
            if(guy.currentFrame === 3) {
                guy.currentFrame = 0
            }
        break
        case 'ArrowLeft':
            keys.a.pressed = true
            guy.currentFrame++
            if(guy.currentFrame === 3) {
                guy.currentFrame = 0
            }
        break
        case 'z':
            // single jump !
            if(guy.velocity.y === 0) {
            guy.velocity.y = -12}
        break
        case 'x':
            keys.x.pressed = true
            console.log('shot')
        break


    }
})
// the buttons up do nothing, remove any velocity
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowRight':
            keys.d.pressed = false
            guy.currentFrame = 0
        break
        case 'ArrowLeft':
            keys.a.pressed = false
            guy.currentFrame = 0
        break
    }
})