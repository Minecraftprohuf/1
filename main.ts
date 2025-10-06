input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 9; index++) {
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Breve)), music.PlaybackMode.LoopingInBackground)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        music.play(music.createSoundExpression(WaveShape.Sine, 498, 2183, 68, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    }
})
