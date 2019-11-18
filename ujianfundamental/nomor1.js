// function loop(num) {
//     var hasil = 10000
//     var naik = 10000
//     var output = 10000
//     var coba = 0
//     for (var i = 1; i < num; i++) {
//         // if (i % 3 === 0) {
//         //     hasil -= 3
//         //     console.log(hasil)
//         // }
//         //else {
//         naik = output * 0.2
//         output += naik
//         //coba = output + naik
//         console.log(output)
//         // }
//         // if (hasil === 0) {
//         //     break;
//         // }
//     }
// }

// console.log(loop(49))

function loop(num) {
    var hasil = 10000
    var naik = Math.round(naik)
    var output = 10000
    var coba = 0
    for (var i = 0; i < num; i++) {
        if (i % 4 == 0 && i !== 0) {
            //naik = parseFloat(naik)
            naik = output * 0.1
            //output1 = parseFloat(output)
            output1 = Math.round(output)
            output = output1 + naik
            //coba = "menit ke " + num + " hasilnya " + output
            //return "menit ke " + num + " hasilnya " + output
            //return output[num]
            //console.log("menit ke " + i + " hasilnya " + output)
        }
        else {
            //naik = parseFloat(naik)
            naik = output * 0.2
            //output1 = parseFloat(output)
            output1 = Math.round(output)
            output = output1 + naik
            //round(output = output + naik
            //coba = output + naik
            //coba = "menit ke " + num + " hasilnya " + output
            //return "menit ke " + num + " hasilnya " + output
            //return output
            //return output[num]
            //console.log("menit ke " + i + " hasilnya " + output)
        }
    }

    if (output >= 30000000) {
        return "menit ke " + i + " barang sudah terjual"
    }
    else return "menit ke " + i + " hasilnya " + output
}

console.log(loop(49))