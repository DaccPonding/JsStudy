function SuperType(){
    this.property = true;
}

SuperType.prototype.getSuperValue = function(){
    return this.property;
};
function SubType(){
    this.subproperty = false;
}
//继承了 SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function (){
    return this.subproperty;
};
var instance = new SubType();
console.log(instance.getSuperValue()); //true
console.log(instance instanceof SubType); //true
console.log(instance instanceof SuperType); //true
console.log(instance.constructor === SuperType); //true
console.log(SubType.prototype.constructor === SuperType); //true
console.log(instance.__proto__.__proto__ === SuperType.prototype);
console.log(instance.__proto__.__proto__ === SuperType.prototype);
console.log(SuperType.prototype.__proto__ === Object.prototype);
console.log(SuperType.__proto__ === Function.prototype);
console.log(Object.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.__proto__ === Function.prototype);
console.log(Object.__proto__ === Function.prototype);
