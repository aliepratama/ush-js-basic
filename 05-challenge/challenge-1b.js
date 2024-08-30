const removeDuplicates = (arr) => {
    return Array.from(new Set(arr))
}

console.log(removeDuplicates([1, 1, 2])) // [1, 2]
console.log(removeDuplicates([1, 2, 1, 1, 3, 2])) // [1, 2, 3]
