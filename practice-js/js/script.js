// let x= "hello max";
let s = 2;
A();
function A () {
    s = 4;
    B();
    function B () {
        console.log(s);
    }

}

// undefined 的演示，undefined 是一个值，是一个变量，是一个类型
// 1. 定义一个变量，但是没有赋值
// 2. 访问一个对象上不存在的属性
// 3. 函数没有返回值，或者没有写 return
// 4. 函数的参数没有传递，但是在函数体中使用了这个参数
// 5. 一个函数没有传递参数，但是在函数体中使用了这个参数
let x;
console.log(x);

// 测试 x 是否是 undefined
if (x == undefined) {
    console.log("x is undefined");
}

x = 5;
if (x == undefined) {
    console.log("x is undefined");
}
else {
    console.log("x is defined");
}