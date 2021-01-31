// function Person (name) {
//   this.name = name
//
//   function getName () {
//     return this.name
//   }
// }

// Person.prototype.getName = function () {
//     return this.name
// }
//
// let a = new Person('张飞')
// let d = new Person('徐晃')

// console.log(a.getName());
// console.log(Person.prototype);

// class Person2 {
//   constructor (props) {
//     this.name = props
//   }
//
//   getName = function () {
//     return this.name
//   }
// }
//
// let b = new Person2('吕布')
// let c = new Person2('高顺')
//
//
// class Person3 extends Person {
//   constructor (props) {
//     super(props)
//   }
// }
//
// let e = new Person3('貂蝉')
// console.log(c.getName === b.getName)
// console.log(a.getName === d.getName)
// console.log(a instanceof Person)
// console.log(b instanceof Person2)

// console.log(Person.prototype.constructor === Person)

// console.log(e.__proto__ === Person3.prototype)
// console.log(Person3.prototype.__proto__ === Person.prototype)
// console.log(e instanceof Person3)


// console.log(Person.__proto__ === Function.prototype)
// console.log(Person.__proto__ === Function.__proto__)

// console.log(Person.__proto__ === Function.prototype)
// console.log(Person.prototype.constructor === Person)
// console.log(Person.prototype.__proto__ === Function.__proto__)
// console.log(Person.__proto__ === Function.prototype)
// console.log(Person.__proto__.__proto__ === Object.prototype)



// console.log(Function.__proto__ === Function.prototype)
// console.log(Function.__proto__ === Function.prototype)
// console.log(Function.__proto__.__proto__ === Object.prototype)
// console.log(Object.__proto__ === Function.prototype)
// console.log(Object.__proto__.__proto__ === Object.prototype)
