// isShortsWeather Function
// 短パンででかけても良いような気温かどうかを判断するisShortsWeatherという関数を作ってください！

// パラメータは一つ受け取る関数にしてください。例えばtemperatureなど

// temperatureが25以上であれば、trueをreturnしてください

// そうでなければfalseをreturnしてください

// （注意：temperatureはセ氏を前提にしてます。華氏圏の生徒がいましたらごめんなさい）

// isShortsWeather(25) //true
// isShortsWeather(15) //false
// isShortsWeather(35) //true

function isShortsWeather(tmp){
    if(tmp >= 25) return true
    return false
}

console.log(isShortsWeather(24))
