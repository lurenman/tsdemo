/**
 * 高级类型
 */
//混入的例子
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
        console.log("id1:" + id)
    }
    for (let id in second) {
        (<any>result)[id] = (<any>second)[id];
        console.log("id2:" + id)
    }
    return result;
}

class Personn {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        console.log("ConsoleLogger invoke log")
    }
}
// let jim = extend(new Personn("Jim"), new ConsoleLogger());
// console.log("jim.name:" + jim.name)
// jim.log()

function padLeft(value: string, padding: any) {
    if (typeof padding === "number") {
        return value + padding;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
console.log("padLeft:" + padLeft("Hello world", 8))

//联合类型 联合类型表示一个值可以是几种类型之一
function padLeft1(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return value + padding;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
}
console.log("padLeft1:" + padLeft1("Hello world", 6))

interface Bird {
    fly(): void
    layEggs(): void
}
class BirdIm implements Bird {
    fly(): void {

    }
    layEggs(): void {

    }
}
interface Fish {
    swim(): void
    layEggs(): void
}
//如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。共有
function getSmallPet(): Fish | Bird {
    let finsh = <Fish>{}
    finsh.swim = function () {
        console.log("finsh swim invoke")
    }
    finsh.layEggs = function () {
        console.log("finsh layEggs invoke")
    }
    let bird = <Bird>{}
    bird.fly = function () {
        console.log("bird fly invoke")
    }
    bird.layEggs = function () {
        console.log("bird layEggs invoke")
    }
    return bird
}

let pet = getSmallPet();
pet.layEggs(); // okay
//pet.swim();    // errors
console.log("<Fish>pet).swim:" + (<Fish>pet).swim)//undefined
//这种实现的类型可以用instanceof instanceof的右侧要求是一个构造函数 if (pet instanceof Bird) error
if (pet instanceof BirdIm) {

}
if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
}
else {
    (<Bird>pet).fly();
}
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
//可以看出if可以过滤掉null和undefined
let testuf: undefined = undefined
if (testuf) {
    console.log("testufk:true")
} else {
    console.log("testuf:false")
}
let testnull: null = null
if (testnull) {
    console.log("testnull:true")
} else {
    console.log("testnull:false")
}

function isNumber(x: any): x is number {
    return typeof x === "number";
}

function isString(x: any): x is string {
    return typeof x === "string";
}

function padLeft2(value: string, padding: string | number) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(" ") + value;
    }
    if (isString(padding)) {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

//类型别名 这和c语言的差不多
type stringType = string
function testTypeName(str: stringType) {
    console.log(`testTypeName:${str}`)
}
testTypeName("testType")
//类型别名不能被extends和implements（自己也不能extends和implements其它类型）
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
//let testNameResolver: () => string = () => "testNameResolver"
let testNameResolver: NameResolver = () => "testNameResolver"
console.log(getName(testNameResolver))

//字符串字面量类型
type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {
            // ...
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // error! should not pass null or undefined.
        }
        console.log("the easing:" + easing)
    }
}
let buttonf = new UIElement();
buttonf.animate(0, 0, "ease-in");
//buttonf.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here


