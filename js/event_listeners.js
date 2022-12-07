const keys = {
    f: {
        pressed: false
    },
    b: {
        pressed: false
    },
    d: {
        pressed: false
    },
    a: {
        pressed: false
    },
    x: {
        pressed: false
    },
    z: {
        pressed: false
    }
}
//movement
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowRight':
            keys.f.pressed = true
            keys.d.pressed = true
            guy.currentFrame++
            if(guy.currentFrame === 3) {
                guy.currentFrame = 0
            }
            newGuy.currentFrame++
            if(newGuy.currentFrame === 3) {
                newGuy.currentFrame = 0
            }
        break
        case 'ArrowLeft':
            keys.b.pressed = true
            keys.a.pressed = true
            guy.currentFrame++
            if(guy.currentFrame === 3) {
                guy.currentFrame = 0
            }
            newGuy.currentFrame++
            if(newGuy.currentFrame === 3) {
                newGuy.currentFrame = 0
            }
        break
        case 'z':
            // single jump !
            if(guy.velocity.y === 0) {
            guy.velocity.y = -12}
            if(newGuy.velocity.y === 0) {
                newGuy.velocity.y = -15
            }
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
            keys.f.pressed = false
            keys.d.pressed = false
            guy.currentFrame = 0
        break
        case 'ArrowLeft':
            keys.b.pressed = false
            keys.a.pressed = false
            guy.currentFrame = 0
        break
        case 'x':
            keys.x.pressed = false
        break
        case 'z':
            keys.z.pressed = false
        break
    }

})