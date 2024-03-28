// // function constructors （函数构造函数）
// function Circle (radius) {  // 构造函数的首字需大写
//     this.radius = radius;   // this 指向新创建的对象
// }
//
// Circle.prototype.getArea = function() { // prototype 为所有对象添加方法
//     return Math.PI * Math.pow(this.radius, 2);  // Math.pow() 方法返回基数（base）的指数（exponent）次幂，即 baseexponent。
// }
//
// var myCircle = new Circle(10);  // 创建对象
// console.log(myCircle);  // 打印对象
// console.log(myCircle.getArea());    // 打印对象的方法
//
// var myOtherCircle = new Circle(20); // 创建对象
// console.log(myOtherCircle); // 打印对象
// console.log(myOtherCircle.getArea());   // 打印对象的方法
//
//
// // 以下是字面量的方式创建对象
// var literalCircle = {  // 创建对象
//     radius: 10,
//     getArea: function() {
//         console.log(this);
//         return Math.PI * Math.pow(this.radius, 2);
//     }
// };
// console.log(literalCircle.getArea());    // 打印对象的方法
//
//
// // 数组
// var array = new Array();    // 创建数组
// array[0] = "max";   // 添加元素
// array[1] = 2;   // 添加元素
// array[2] = function (name) {   // 添加元素
//     console.log("Hello " + name);
// };
// array[3] = {course: "HTML, CSS, js"};
// console.log(array); // 打印数组
//
//
// var names = ["max", "lando", "sebastian"];
// console.log(names);
//
// for (var i =0; i < names.length; i++) {
//     console.log("hello " +names[i]);
// }
//
//
// var counter = 0;
// var myArray = ["max", 2, {handle: "maxxxx"}];
//  for (var i = 0; i < myArray.length; i++) {
//      counter ++;
//  }
//  console.log(counter);




// 闭包
function makeMultiplier (multiplier) {

    return (
        function (x) {
            return multiplier * x;
        }
    );
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));  // 20


// 立即调用函数

(function (name) {
    console.log("hello  " + name);
})('Max');
