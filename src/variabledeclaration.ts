//https://www.jb51.net/article/254045.htm let和var的区别

// function f() {
//     var a = 10
//     return function g() {
//         var b = a + 1
//         console.log("b:" + b)
//         return b
//     }
// }
// console.log(f()) //返回：[Function: g]

function f() {
    var a = 1;
    a = 2;
    var b = g();
    a = 3;
    return b;

    function g() {
        return a;
    }
}

console.log(f())

//const 声明
const va = 7
//va=8 error
const student = {
    name: "lufei",
    age: 19
}
student.name = "namei"
console.log("student.name:" + student.name)

//解构数组
let input = [1, 2]
//相当于赋值
let [v1, v2] = input
console.log("v1:" + v1)
function finput([k1, k2]: [number, number]) {
    //实际就是定义变量name
    console.log("k1:" + k1)
    console.log("k2:" + k2)
}
finput(input as [number, number])
let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
let [first1] = [1, 2, 3, 4];
console.log(first1); // outputs 1
//说白了就是给数组里的元素进行赋值
let [, second, , fourth] = [1, 2, 3, 4];
console.log(second);

let o = {
    av: "foo",
    bv: 12,
    cv: "bar"
}
let { av, bv } = o;
console.log("av:" + av);
//默认值
function keepWholeObject(wholeObject: {a: string, b?: number}) {
    let {a, b = 1001} = wholeObject;
}
 

