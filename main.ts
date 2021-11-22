let nb_personne = 0
input.onButtonPressed(Button.A, function () {
    nb_personne += 0 + 1
})
input.onButtonPressed(Button.AB, function () {
    nb_personne = 0
})
input.onButtonPressed(Button.B, function () {
    nb_personne += 0 - 1
})
basic.forever(function () {
    while (nb_personne < 11) {
        basic.showNumber(nb_personne)
    }
    basic.showString("salle remplie")
})
