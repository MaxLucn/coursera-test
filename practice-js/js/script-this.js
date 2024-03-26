// function constructors （函数构造函数）
function Circle (radius) {  // 构造函数的首字需大写
    this.radius = radius;   // this 指向新创建的对象
}

Circle.prototype.getArea = function() { // prototype 为所有对象添加方法
    return Math.PI * Math.pow(this.radius, 2);  // Math.pow() 方法返回基数（base）的指数（exponent）次幂，即 baseexponent。
}

var myCircle = new Circle(10);  // 创建对象
console.log(myCircle);  // 打印对象
console.log(myCircle.getArea());    // 打印对象的方法

var myOtherCircle = new Circle(20); // 创建对象
console.log(myOtherCircle); // 打印对象
console.log(myOtherCircle.getArea());   // 打印对象的方法


// 以下是字面量的方式创建对象
var literalCircle = {  // 创建对象
    radius: 10,
    getArea: function() {
        console.log(this);
        return Math.PI * Math.pow(this.radius, 2);
    }
};
console.log(literalCircle.getArea());    // 打印对象的方法