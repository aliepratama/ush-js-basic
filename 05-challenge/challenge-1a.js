const removeDuplicates = (arr) => {
    const temp = []
    for(element of arr){
        if(!temp.includes(element)){
            temp.push(element)
        }
    }
    return temp
}

console.log(removeDuplicates([1, 1, 2])) // [1, 2]
console.log(removeDuplicates([1, 2, 1, 1, 3, 2])) // [1, 2, 3]
