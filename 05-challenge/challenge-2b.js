const quickCount = (arr) => {
    return [arr.filter((val) => val >= 0).length, 
        arr.filter((val) => val < 0)
        .reduce((acc, val) => acc + val)]
}

console.log(quickCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) // [10, -65]
