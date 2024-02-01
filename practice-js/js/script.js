// let x= "hello max";
let s = 2;
A();

function A() {
    s = 4;
    B();

    function B() {
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
} else {
    console.log("x is defined");
}

// 通用语言结构


// 字符串的连接
let string = "hello";
string += " world";
// string = string + " world";
console.log(string + "!");

//数学运算符的测试
console.log((5 + 4) / 3);

console.log(undefined / 5);
// 返回 NaN ，NaN 是一个特殊的值，代表 "Not a Number"（不是一个数字）。
// 当一个数学运算无法生成正常的数值时，就会返回 NaN。


// equality

let a = 4, b = 4;
if (a == b) {
    console.log("a=4 is equal to b=4");
}

// == 会自动转换类型，所以这里在比较中实际的字符串4会被转换成数字4，
// 如果不想被转换可以使用 === 来比较，具体示例如下。

// 会转换
a = "4";
if (a == b) {
    console.log("b=4 is equal to a='4'");
}

// 不会转换
if (a === b) {
    console.log("b=4 is equal to a='4'");
} else {
    console.log("b=4 is NOT equal to a='4'");
}

// 布尔值的测试，用 or 运算符测试多个值，如果一个为真则返回 true，
// 但在 js 中下面测试的都被视为 false，所以会执行 else语句块，所以会打印 "All false"。
if (false || null || undefined || "" || 0 || NaN) {
    console.log("This line won't ever execute");
} else {
    console.log("All false");
}
// 用 and 运算符测试多个值，如果一个为假则返回 false，
if (true && "hello" && 1 && -1 && "false") {
    console.log("All true");
}
// 函数 p 的返回值并不是我们期望的 {name: "max"}，
// 而是 undefined。这是因为在 JavaScript 中，
// return 语句后面的对象字面量必须和return 在同一行，
// 否则 return 后面的内容会被忽略，函数就会返回 undefined。
// function p()
// {
//     return
//     {
//         name: "max"
//     };
// }

function q() {
    return {
        name: "Max"
    };
}

// console.log(p());
console.log(q());

// for 循环
// 定义一个变量 sum，初始化为 0
let sum = 0;
// 使用 for 循环从 0 加到 9，在每次循环中，将当前的迭代值i加到 sum 中
for (let i = 0; i <10; i++) {
    sum += i;
}
console.log("从 0 加到 9 的和是：" + sum);

// 处理默认值
function orderChickenWith(sideDish) {
    // 当调用函数不传任何参数的时候，sideDish 的值是 undefined，
    // 所以我们可以在函数体中处理这种情况，比如这里我们给 sideDish 赋一个默认值 "whatever!"。
    // if (sideDish === undefined) {
    //     sideDish = "whatever!"
    // }
    // 这句代码的作用和上面的 if 语句是一样的，但是更简洁。
    sideDish = sideDish || "whatever!"
    console.log("Chicken with " + sideDish);
}
orderChickenWith("noodles");

orderChickenWith();

