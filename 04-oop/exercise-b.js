// Pembuatan class pada syntax ES6
class Animal {
    constructor(name, id, age, type) {
        // ini attributes
        this.name = name
        // public attribute
        this.type = type
        // protected attribute
        this._id = id
        // private attribute
        this.__age = age
    }
    // ini method
    setName(newName) {
        this.name = newName
    }
    drink() {
        console.log(this.name + ' is drinking right now!')
    }
}

// Pembuatan object seperti ini
const hewan = new Animal('hewan', 0, 1, 'jawa')
hewan.setName('raja jawa')
hewan.drink() // raja jawa is drinking right now!

// Inheritance
class Turtle extends Animal {
    constructor(name, id, age, type, diameter) {
        super(name, id, age, type)
        this.diameter = diameter
    }
}

// Pembuatan object
const kuraKura = new Turtle('kura', 0, 1, 'lawd')
kuraKura.setName('kura-kura')
kuraKura.drink() // kura-kura is drinking right now!

// Inheritance
class Snake extends Animal {
    constructor(name, id, age, type, width) {
        super(name, id, age, type)
        this.width = width
    }
}

// Pembuatan object
const ular = new Snake('ular', 0, 1, 'python')
ular.setName('py')
ular.drink() // py is drinking right now!
