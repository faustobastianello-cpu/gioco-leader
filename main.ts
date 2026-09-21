input.onButtonPressed(Button.A, function () {
    radio.sendString("sinistra")
    basic.showLeds(`
        . . # . .
        . # . . .
        # . # # #
        . # . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("torna")
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("destra")
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # . #
        . . . # .
        . . # . .
        `)
})
radio.setGroup(1)
basic.showString("Leader A")
