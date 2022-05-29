input.onButtonPressed(Button.A, function () {
    strip.setPixelColor(Pixel, neopixel.colors(NeoPixelColors.Black))
    strip.show()
    Pixel += 1
})
input.onButtonPressed(Button.B, function () {
    strip.setPixelColor(Pixel, neopixel.colors(NeoPixelColors.Black))
    Pixel += -1
    strip.show()
})
let Pixel = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 64, NeoPixelMode.RGB)
strip.clear()
strip.setBrightness(64)
strip.show()
Pixel = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    strip.setPixelColor(Pixel, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.showNumber(Pixel)
})
