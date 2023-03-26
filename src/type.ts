 /**
  * 类型兼容性
  */
//TypeScript里的类型兼容性是基于结构子类型的
interface Named {
    name?: string;
}

class Persons {
    name?: string;
}
class Persons1 {
    name?: string;
    age?: number
}
let ps: Named
// OK, because of structural typing
ps = new Persons();
let ps1 = new Persons();
let ps2 = new Persons1();
ps1 = ps2
ps1.name = "lufei"
console.log("ps1.name:" + ps1.name)

interface Named {
    name?: string;
}

let xn: Named;
// y's inferred type is { name: string; location: string; }
let yn = { name: 'Alice', location: 'Seattle' };
xn = yn;

//比较两个函数,看forEach源码理解
let x1 = (a: number) => 0;
let y1 = (b: number, s: string) => 0;
y1 = x1; // OK
//x1 = y1; // Error

let items = [1, 2, 3];
// Don't force these extra arguments
items.forEach((item, index, array) => {
    console.log("index:" + index + " item:" + item)
    console.log("array:" + array)
});

// Should be OK!
items.forEach((item) => console.log(item));

let xk = () => ({ name: 'Alice' });
let yk = () => ({ name: 'Alice1', location: 'Seattle' });

xk = yk; // OK
console.log("xk:" + xk)
console.log("xk.name:" + xk.name)
//yk = xk; // Error because x() lacks a location property

let xk1 = () => {
    return { name: 'Alice' }
};
let yk1 = () => {
    return { name: 'Alice1', location: 'Seattle' }
};

console.log("xk1:" + xk1)
console.log("xk1.name:" + xk1.name) //xk1
console.log("xk1():" + xk1())//xk1():[object Object]
console.log("xk1().name:" + xk1().name)
//需要理解一点是针对结构相等,这个语言特性
interface Empty<T> {
}
let xw: Empty<number> = {};
let yw: Empty<string> = {};
xw = yw

interface Empty1<T> {
    value: T
}
let xw1: Empty1<number> = { value: 12 };
let yw1: Empty1<string> = { value: "haha" };
//xw1 = yw1 error

//类与对象字面量和接口差不多，但有一点不同：类有静态部分和实例部分的类型。 
//比较两个类类型的对象时，只有实例的成员会被比较。 静态成员和构造函数不在比较的范围内。
class Animal {
    feet: number = 10;
   // str: string = "dd"
    constructor(name: string, numFeet: number) { }
}

class Size {
    feet: number = 20;
    constructor(numFeet: number) { }
}

let aa: Animal = new Animal("dd", 33);
let ss: Size = new Size(23)
// aa = ss//ok
// console.log("aa.feet:" + aa.feet)//20
ss = aa
console.log("ss.feet:" + ss.feet)
