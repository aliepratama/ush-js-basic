const todos = [
    { task: 'Belajar JavaScript', completed: false },
    { task: 'Membuat Proyek', completed: true },
    { task: 'Berolahraga', completed: false },
]

function viewTodos(isCompleted) {
    const filteredTodos = todos.filter(function (value) {
        return value.completed === isCompleted
    })
    const taskTodos = filteredTodos.map(function (value) {
        return value.task
    })
    return taskTodos
}

// Skenario
console.log('Tugas yang belum diselesaikan', viewTodos(false))
// Tugas yang belum diselesaikan [ 'Belajar JavaScript', 'Berolahraga' ]
console.log('Tugas yang sudah diselesaikan', viewTodos(true))
// Tugas yang sudah diselesaikan [ 'Membuat Proyek' ]
