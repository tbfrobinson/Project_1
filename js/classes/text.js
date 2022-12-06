class Text {
    constructor(x, y, text, font) {
        this.x = x
        this.y = y
        this.text = text
        this.font = font
    }
    append() {
        c.font = this.font;
        c.fillText(this.text, this.x, this.y)
    }
}