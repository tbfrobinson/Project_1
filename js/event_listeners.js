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
        break
        case 'ArrowLeft':
            keys.a.pressed = true
        break
        case 'z':
            // single jump !
            if(guy.velocity.y === 0) {
            guy.velocity.y = -12}
        break
        case 'x':
            keys.x.pressed = true
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