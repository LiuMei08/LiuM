function 去A点 () {
    // 到达去A点的路口
    巡线到1111()
    nezhaV2.comboMove(80, nezhaV2.VerticallDirection.Up, 7, nezhaV2.DistanceAndAngleUnit.cm)
    右转巡到黑线(450)
    巡线到1111()
    // 到达A点
    nezhaV2.comboMove(70, nezhaV2.VerticallDirection.Up, 3, nezhaV2.DistanceAndAngleUnit.cm)
    nezhaV2.comboStop()
    basic.pause(200)
    // 用超声波传感器检测到人偶
    if (PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) <= 8) {
        music.play(music.stringPlayable("C5 A B G A F G E ", 500), music.PlaybackMode.UntilDone)
    }
    // 逆时针夹住人偶
    nezhaV2.move(nezhaV2.MotorPostion.M1, 50, nezhaV2.MovementDirection.CCW, 150, nezhaV2.SportsMode.Degree)
    basic.pause(200)
}
function 去B点 () {
    // 后退22厘米，速度要慢
    nezhaV2.comboMove(45, nezhaV2.VerticallDirection.Down, 27, nezhaV2.DistanceAndAngleUnit.cm)
    左转巡到黑线(700)
    nezhaV2.comboMove(80, nezhaV2.VerticallDirection.Up, 3, nezhaV2.DistanceAndAngleUnit.cm)
    // 到达第一个转弯路口
    巡线到1111()
    nezhaV2.comboMove(80, nezhaV2.VerticallDirection.Up, 7, nezhaV2.DistanceAndAngleUnit.cm)
    // 到达第一个转弯路口
    巡线到1111()
    // 逆时针夹住人偶
    nezhaV2.move(nezhaV2.MotorPostion.M1, 30, nezhaV2.MovementDirection.CW, 150, nezhaV2.SportsMode.Degree)
    basic.pause(200)
}
function 去D点 () {
    左转掉头()
    nezhaV2.comboStop()
    // 到达第一个路口
    巡线到1111()
    nezhaV2.comboMove(80, nezhaV2.VerticallDirection.Up, 6, nezhaV2.DistanceAndAngleUnit.cm)
    // 到达第2个路口
    巡线到1111()
    nezhaV2.comboMove(80, nezhaV2.VerticallDirection.Up, 6, nezhaV2.DistanceAndAngleUnit.cm)
    右转巡到黑线(500)
    巡线到1111()
    // 继续向前走
    nezhaV2.comboMove(80, nezhaV2.VerticallDirection.Up, 6, nezhaV2.DistanceAndAngleUnit.cm)
    巡线到1111()
    nezhaV2.comboMove(70, nezhaV2.VerticallDirection.Up, 1, nezhaV2.DistanceAndAngleUnit.cm)
    nezhaV2.comboStop()
    // 放下急救包
    nezhaV2.move(nezhaV2.MotorPostion.M1, 50, nezhaV2.MovementDirection.CCW, 90, nezhaV2.SportsMode.Degree)
}
function 巡线到1111 () {
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_5))) {
        巡线()
    }
    nezhaV2.comboStop()
}
function 左转6 () {
    nezhaV2.start(nezhaV2.MotorPostion.M2, 59)
    nezhaV2.start(nezhaV2.MotorPostion.M3, 50)
}
function 去C点 () {
    // 从B点后退，要慢速
    nezhaV2.comboMove(45, nezhaV2.VerticallDirection.Down, 26, nezhaV2.DistanceAndAngleUnit.cm)
    右转巡到黑线(320)
    // 开始巡曲线
    巡线到1111()
    nezhaV2.comboMove(80, nezhaV2.VerticallDirection.Up, 5, nezhaV2.DistanceAndAngleUnit.cm)
    左转巡到黑线(700)
    巡线到1111()
    // 到达火灾点C点
    nezhaV2.comboMove(80, nezhaV2.VerticallDirection.Up, 5, nezhaV2.DistanceAndAngleUnit.cm)
    nezhaV2.comboStop()
    // 闪烁红蓝
    strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.Red))
    // 播放警报声2秒
    music.play(music.stringPlayable("C5 B A G F E D C ", 400), music.PlaybackMode.InBackground)
    basic.pause(500)
    strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.Blue))
    basic.pause(200)
    strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.Black))
    basic.pause(500)
    // 闪烁红蓝
    strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.Red))
    basic.pause(500)
    strip.showColor(PlanetX_Display.colors(PlanetX_Display.NeoPixelColors.Black))
    basic.pause(200)
}
function 直行 (数字: number) {
    nezhaV2.comboStart(40, 40)
    basic.pause(数字)
    nezhaV2.comboStop()
}
input.onButtonPressed(Button.A, function () {
    basic.pause(200)
    nezhaV2.comboMove(40, nezhaV2.VerticallDirection.Up, 15, nezhaV2.DistanceAndAngleUnit.cm)
    去A点()
    去B点()
    去C点()
    去D点()
    去E点()
    去F点()
})
function 巡线 () {
    PlanetX_Basic.Trackbit_get_state_value()
    if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_1)) {
        nezhaV2.comboStart(80, 80)
    } else if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_3)) {
        nezhaV2.comboStart(-10, 45)
    } else if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_2)) {
        nezhaV2.comboStart(45, -10)
    } else if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_11)) {
        nezhaV2.comboStart(-10, 45)
    } else if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_14)) {
        nezhaV2.comboStart(45, -10)
    } else if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_12)) {
        nezhaV2.comboStart(80, 0)
    } else if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_8)) {
        nezhaV2.comboStart(0, 80)
    } else if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_13)) {
        nezhaV2.comboStart(45, -10)
    } else if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_9)) {
        nezhaV2.comboStart(-10, 45)
    } else if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_0)) {
        nezhaV2.comboStart(50, 50)
    } else {
        nezhaV2.comboStart(10, 10)
    }
    PlanetX_Basic.Trackbit_get_state_value()
}
function 左转巡到黑线 (毫秒: number) {
    nezhaV2.comboStart(-60, 60)
    basic.pause(毫秒)
    nezhaV2.comboStop()
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1))) {
        nezhaV2.comboStart(-50, 50)
        PlanetX_Basic.Trackbit_get_state_value()
    }
    nezhaV2.comboStop()
}
function 后退 (数字: number) {
    nezhaV2.comboStart(-40, -40)
    basic.pause(数字)
}
function 去E点 () {
    nezhaV2.comboStart(-30, -30)
    basic.pause(1000)
    nezhaV2.comboStart(-40, -20)
    basic.pause(300)
    nezhaV2.comboStop()
    左转巡到黑线(700)
    巡线到1111()
    // 到达临近E点路口
    nezhaV2.comboMove(80, nezhaV2.VerticallDirection.Up, 5, nezhaV2.DistanceAndAngleUnit.cm)
    右转巡到黑线(700)
    巡线到1111()
    // 到达E点
    nezhaV2.comboMove(70, nezhaV2.VerticallDirection.Up, 2, nezhaV2.DistanceAndAngleUnit.cm)
    nezhaV2.comboStop()
    // 松开爪子放下急救包
    nezhaV2.move(nezhaV2.MotorPostion.M1, 50, nezhaV2.MovementDirection.CW, 90, nezhaV2.SportsMode.Degree)
    nezhaV2.comboStop()
    basic.pause(200)
}
function 左转1 (度数: number) {
    nezhaV2.move(nezhaV2.MotorPostion.M2, 50, nezhaV2.MovementDirection.CW, 度数, nezhaV2.SportsMode.Degree, nezhaV2.DelayMode.NoDelay)
    nezhaV2.move(nezhaV2.MotorPostion.M3, 50, nezhaV2.MovementDirection.CW, 度数, nezhaV2.SportsMode.Degree)
}
function 左转掉头 () {
    左转1(320)
    nezhaV2.comboMove(50, nezhaV2.VerticallDirection.Down, 9, nezhaV2.DistanceAndAngleUnit.cm)
    左转到0110()
    nezhaV2.comboStop()
}
function 右转巡到黑线 (毫秒: number) {
    nezhaV2.comboStart(60, -60)
    basic.pause(毫秒)
    PlanetX_Basic.Trackbit_get_state_value()
    while (!(PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1))) {
        nezhaV2.comboStart(50, -50)
        PlanetX_Basic.Trackbit_get_state_value()
    }
    nezhaV2.comboStop()
}
input.onButtonPressed(Button.B, function () {
    // M1控制夹子，逆时针是放开物体。
    nezhaV2.move(nezhaV2.MotorPostion.M1, 20, nezhaV2.MovementDirection.CCW, 10, nezhaV2.SportsMode.Degree)
})
function 左转到0110 () {
    左转1(380)
    PlanetX_Basic.Trackbit_get_state_value()
    while (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_1)) {
        左转6()
        PlanetX_Basic.Trackbit_get_state_value()
    }
}
function 去F点 () {
    后退(800)
    basic.pause(500)
    nezhaV2.comboStop()
    左转巡到黑线(600)
    巡线到1111()
    // 到达场地的最左边路口
    nezhaV2.comboMove(80, nezhaV2.VerticallDirection.Up, 6, nezhaV2.DistanceAndAngleUnit.cm)
    右转巡到黑线(500)
    巡线到1111()
    // 到达场地的最左上角路口
    nezhaV2.comboMove(80, nezhaV2.VerticallDirection.Up, 5, nezhaV2.DistanceAndAngleUnit.cm)
    右转巡到黑线(550)
    巡线到1111()
    nezhaV2.comboMove(80, nezhaV2.VerticallDirection.Up, 7, nezhaV2.DistanceAndAngleUnit.cm)
    // 开始巡黑白线
    巡线到1111()
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    // 到达F点
    nezhaV2.comboMove(80, nezhaV2.VerticallDirection.Up, 7, nezhaV2.DistanceAndAngleUnit.cm)
    nezhaV2.comboStop()
}
let strip: PlanetX_Display.Strip = null
basic.showIcon(IconNames.Heart)
let state = 0
strip = PlanetX_Display.create(PlanetX_Display.DigitalRJPin.J4, 8, PlanetX_Display.NeoPixelMode.RGB)
nezhaV2.setComboMotor(nezhaV2.MotorPostion.M2, nezhaV2.MotorPostion.M3)
nezhaV2.setWheelPerimeter(13.6, nezhaV2.Uint.cm)
