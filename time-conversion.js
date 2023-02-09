function timeConversion(s){

let tempoSeparado = s.split(":")

if(s[8] == 'P') {

    switch(tempoSeparado[0]) {
        case '12': tempoSeparado[0] = '12'
        break
        case '11': tempoSeparado[0] = '23'
        break
        case '10': tempoSeparado[0] = '22'
        break
        case '09': tempoSeparado[0] = '21'
        break
        case '08': tempoSeparado[0] = '20'
        break
        case '07': tempoSeparado[0] = '19'
        break
        case '06': tempoSeparado[0] = '18'
        break
        case '05': tempoSeparado[0] = '17'
        break
        case '04': tempoSeparado[0] = '16'
        break
        case '03': tempoSeparado[0] = '15'
        break
        case '02': tempoSeparado[0] = '14'
        break
        case '01': tempoSeparado[0] = '13'
        break
    }
        s = tempoSeparado.join(":")
        s = s.replace("PM", "")
}

if(tempoSeparado[0] == '12') {
    tempoSeparado[0] = '00'
}

if (s[8] == 'A') {
    console.log('test')
    s = tempoSeparado.join(":")
    s = s.replace("AM", "")
}




return s


}

console.log(timeConversion('12:45:54PM'))