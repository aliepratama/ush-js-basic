function isEvenOrOdd(num) {
    // mengecek jika num habis dibagi oleh 2
    if (num % 2 == 0) {
        return 'Genap'
    }
    return 'Ganjil'
}

// Skenario
console.log(isEvenOrOdd(-100)) // 'Genap'
console.log(isEvenOrOdd(-3)) // 'Ganjil'
console.log(isEvenOrOdd(0)) // 'Genap'
console.log(isEvenOrOdd(5)) // 'Ganjil'
console.log(isEvenOrOdd(100)) // 'Genap'
