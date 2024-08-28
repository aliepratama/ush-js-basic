function maxOfThree(num1, num2, num3) {
    // mengecek jika num1 lebih kecil dari num3 dan num2 lebih kecil dari num3
    if (num1 <= num3 && num2 <= num3) {
        return num3
    // mengecek jika num1 lebih kecil dari num2 dan num3 lebih kecil dari num2
    } else if (num1 <= num2 && num3 <= num2) {
        return num2
    // mengecek jika num2 lebih kecil dari num1 dan num3 lebih kecil dari num1
    } else if (num2 <= num1 && num3 <= num1) {
        return num1
    }
    return 'Tidak valid'
}

// Skenario
console.log(maxOfThree(1, 3, 4)) // 4
console.log(maxOfThree(1, 4, 3)) // 4
console.log(maxOfThree(4, 1, 3)) // 4
console.log(maxOfThree(4, 1, 1)) // 4
console.log(maxOfThree(1, 4, 1)) // 4
console.log(maxOfThree(1, 1, 4)) // 4
console.log(maxOfThree(4, 1, 4)) // 4
console.log(maxOfThree(4, 4, 1)) // 4
console.log(maxOfThree(1, 4, 4)) // 4
console.log(maxOfThree(4, 4, 4)) // 4
