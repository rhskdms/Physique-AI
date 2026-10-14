function 좌회전 () {
    aiPonybot.runNormal(aiPonybot.DirectionControl.Clockwise, 50)
    basic.pause(500)
    aiPonybot.stopAllMotors()
}
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    데이터 = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (데이터 == "forward") {
        전진()
    } else if (데이터 == "backward") {
        후진()
    } else if (데이터 == "left") {
        좌회전()
    } else if (데이터 == "right") {
        우회전()
    } else if (데이터 == "stop") {
        aiPonybot.stopAllMotors()
    } else if (데이터 == "happy") {
        basic.showIcon(IconNames.Happy)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    } else if (데이터 == "name") {
        basic.showIcon(IconNames.Ghost)
        aiPonybot.showString("sook", 0, 3, 1)
    } else if (데이터 == "angry") {
        basic.showIcon(IconNames.Sad)
        music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
    } else if (데이터 == "dance") {
        aiPonybot.runNormal(aiPonybot.DirectionControl.Forward, 80)
        basic.pause(100)
        aiPonybot.runNormal(aiPonybot.DirectionControl.Backward, 80)
        basic.pause(100)
        aiPonybot.runNormal(aiPonybot.DirectionControl.Clockwise, 80)
        basic.pause(100)
        aiPonybot.runNormal(aiPonybot.DirectionControl.CounterClockwise, 80)
        basic.pause(100)
    } else {
        aiPonybot.stopAllMotors()
    }
})
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Heart)
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    상태 = "connect"
})
function 우회전 () {
    aiPonybot.runNormal(aiPonybot.DirectionControl.CounterClockwise, 50)
    basic.pause(500)
    aiPonybot.stopAllMotors()
}
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    상태 = "disconnect"
})
function 후진 () {
    aiPonybot.runNormal(aiPonybot.DirectionControl.Backward, 50)
    basic.pause(2000)
    aiPonybot.stopAllMotors()
}
function 전진 () {
    aiPonybot.runNormal(aiPonybot.DirectionControl.Forward, 70)
    basic.pause(2000)
    aiPonybot.stopAllMotors()
}
let 데이터 = ""
let 상태 = ""
bluetooth.startUartService()
상태 = "waiting"
basic.forever(function () {
    aiPonybot.showString("status : " + 상태, 0, 0, 1)
    aiPonybot.showString("data :" + 데이터, 0, 1, 1)
    basic.pause(100)
    aiPonybot.clear()
    basic.pause(100)
})
