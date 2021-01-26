function Person (name){
    this.name = name
}
Person.prototype.getName = function () {
    return this.name
}

let a = new Person('张飞')
console.log(a.getName());

console.log(Person.prototype);


class Person2 {
    constructor(props) {
        this.name = props
    }

    getName =  function (){
        return this.name
    }
}

let b = new Person2('吕布')
let c = new Person2('高顺')

console.log(b.getName());
console.log(c.getName === b.getName);

console.log(a instanceof Person)
console.log(b instanceof Person2)
