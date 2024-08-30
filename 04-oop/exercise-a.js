// Pembuatan class pada syntax lama
function Animal(name, id, age, type) {
    // ini attributes
    this.name = name
    // public attribute
    this.type = type
    // protected attribute
    this._id = id
    // private attribute
    this.__age = age
    // ini method
    this.setName = function (newName) {
        this.name = newName
    }
}

// Pembuatan method juga bisa seperti ini
Animal.prototype.drink = function () {
    console.log(this.name + ' is drinking right now!')
}

// Pembuatan object seperti ini
const hewan = new Animal('hewan', 0, 1, 'jawa')
hewan.setName('raja jawa')
hewan.drink() // raja jawa is drinking right now!

// Inheritance
function Turtle(name, id, age, type, diameter) {
    Animal.call(this, name, id, age, type)
    this.diameter = diameter
}
Turtle.prototype = Object.create(Animal.prototype)
Turtle.prototype.constructor = Turtle

// Pembuatan object
const kuraKura = new Turtle('kura', 0, 1, 'lawd')
kuraKura.setName('kura-kura')
kuraKura.drink() // kura-kura is drinking right now!

// Inheritance
function Snake(name, id, age, type, width) {
    Animal.call(this, name, id, age, type)
    this.width = width
}
Snake.prototype = Object.create(Animal.prototype)
Snake.prototype.constructor = Turtle

// Pembuatan object
const ular = new Snake('ular', 0, 1, 'python')
ular.setName('py')
ular.drink() // py is drinking right now!
