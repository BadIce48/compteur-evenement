let Nombre_de_peronnes = 0
input.onButtonPressed(Button.A, function () {
    Nombre_de_peronnes += -1
    basic.showNumber(Nombre_de_peronnes)
})
input.onButtonPressed(Button.AB, function () {
    Nombre_de_peronnes = 0
    basic.showNumber(Nombre_de_peronnes)
})
input.onButtonPressed(Button.B, function () {
    Nombre_de_peronnes += 1
    basic.showNumber(Nombre_de_peronnes)
})
basic.forever(function () {
    if (Nombre_de_peronnes == 10) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
    basic.showNumber(Nombre_de_peronnes)
})
