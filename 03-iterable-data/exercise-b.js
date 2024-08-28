const people = [
    {name: 'Dea', age: 30},
    {name: 'Eko', age: 25},
    {name: 'Sandhika', age: 30},
]

function groupByAndCount(arr, key){
    // Melakukan pengelompokan menggunakan map
    const groupBy = arr.map(function (val) { return val[key] }) // [30, 25, 30] (pada key: age)
    // Buat variabel temporary
    const count = {}
    // Mengecek satu-satu menggunakan for...of
    for(element of groupBy){
        // Jika elemen belum ada di count, maka diberikan value 1
        if(count[element] !== 1){
            count[element] = 1
        // Jika elemen sudah ada di count, maka dilakukan increment
        } else {
            count[element]++
        }
    }
    // Jangan lupa dibalikkan nilai count/temp nya
    return count
}

// Skenario
console.log(groupByAndCount(people, 'age')) // { '25': 1, '30': 2 }
console.log(groupByAndCount(people, 'name')) //{ Dea: 1, Eko: 1, Sandhika: 1 }