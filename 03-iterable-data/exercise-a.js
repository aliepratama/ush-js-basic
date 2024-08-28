function crudArray(array, operation, index, value) {
    // Percabangan berdasarkan operation
    switch(operation){
        // Operasi tambah data berdasarkan index dengan value
        case 'create':
            array.splice(index, 0, value)
            return array
        // Operasi baca data berdasarkan index
        case 'read':
            return array[index]
        // Operasi update data berdasarkan index dengan value
        case 'update':
            array[index] = value
            return array
        // Operasi hapus data berdasarkan index
        case 'delete':
            array.splice(index, 1)
            return array
        // Jika tidak sesuai operasinya akan membalikkan nilai kosong
        default:
            return
    }
}

// Skenario
console.log(crudArray([1, 2, 3], 'create', 2, 4)) // [1, 2, 4, 3]
console.log(crudArray([1, 2, 3], 'read', 2, null)) // 3
console.log(crudArray([1, 2, 3], 'update', 2, 4)) // [1, 2, 4]
console.log(crudArray([1, 2, 3], 'delete', 2, null)) // [1, 2]
