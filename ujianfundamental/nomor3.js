function koin(num) {
    jumlah = 0
    //for (var i = num; i > 0;) {
    while (num >= 25) {
        jumlah++
        num = num - 25
    }
    while (num < 25 && num >= 10) {
        jumlah++
        num = num - 10
    }
    while (num < 10 && num >= 5) {
        jumlah++
        num = num - 5
    }
    while (num < 5 && num > 0) {
        jumlah++
        num = num - 1
    }

    //while (num )

    // if (i > 25) {
    //     var dualima = i % 25
    //     jumlah++
    //     i = dualima
    // }
    // else if (i < 25) {
    //     var sepuluh = i % 10
    //     jumlah++
    //     i = sepuluh
    // }
    // else if (i < 10) {
    //     var lima = i % 5
    //     jumlah++
    //     i = lima
    // }
    // else { jumlah++ }

    // }
    return jumlah
}
console.log(koin(50))

//     var satu = num % 1
//     if (num > 25) {
//         var dualima = num % 25
//         jumlah++
//     }
//     else if (num < 25) {

//     }
//     else if (num < 10) {

//     }
//     else if (num == 1) {

//     }
//     // if(dualima > 0){
//     // jumlah ++
//     // }
//     return jumlah
// }
