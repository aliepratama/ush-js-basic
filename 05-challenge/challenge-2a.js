const quickCount = (arr) => {
    let tempPos = 0
    let tempNeg = 0
    if (arr.length <= 0 || arr === null) {
        return []
    }
    for (element of arr) {
        if (element >= 0) {
            tempPos++
        } else {
            tempNeg += element
        }
    }
    return [tempPos, tempNeg]
}

console.log(quickCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // [10, -65]
