function checkNum(num) {
    // num mengecek jika lebih dari 0, maka mengembalikan nilai 'Positif'
    if (num > 0) {
        return 'Positif'
    }
    // num mengecek jika sama dengan 0, maka mengembalikan nilai 'Nol'
    if (num === 0) {
        return 'Nol'
    }
    // jika num tidak memenuhi kondisi atas, maka mengembalikan nilai 'Negatif'
    return 'Negatif'
}

// Skenario
console.log(checkNum(-100)) // Negatif
console.log(checkNum(0)) // Nol
console.log(checkNum(60)) // Positif
