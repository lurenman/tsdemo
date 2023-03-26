function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

interface LabelledValue {
    label: string;
}

function printLabel1(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj1 = { size: 10, label: "Size 10 Object" };
printLabel1(myObj1);

interface SquareConfig {
    color?: string;
    width?: number;//可选属性必须带？
}

function createSquare(config: SquareConfig) {
    console.log("config.color:" + config.color)//black
    console.log("config.width:" + config.width)//undefined
}
let mySquare = createSquare({ color: "black" });

function createSquare1(str: string, labelledObj: { label?: string }) {
    console.log("str:" + str)
}
createSquare1("haha", {})
//只读属性
//一些对象属性只能在对象刚刚创建的时候修改其值
interface Point {
    readonly x: number
    readonly y: number
}
let p: Point = { x: 1, y: 2 }
console.log("p.x:" + p.x)
//p.x=2 error
let a1: number[] = [1, 2, 3, 4];
let ro1: ReadonlyArray<number> = a1;
//ro1[0] = 12; // error!
//ro1.push(5); // error!
//ro1.length = 100; // error!
//a1 = ro1; // error!
// readonly vs const
// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用const，若做为属性则使用readonly

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;//其它属性
}

function createSquare2(config: SquareConfig) {
    console.log("config.colour:" + config.colour)//可以访问到
    console.log("config.age:" + config.age)//可以访问到
}
createSquare2({ colour: "red", age: 18, width: 100 });
//函数类型
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
}
console.log(mySearch("haha", "ha"))
//扩展接口 类似于多继承
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}
let squareObj: Square = { color: "blue", sideLength: 20 }
//混合类型
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) {
        console.log("start:" + start)
    }
    counter.reset = function () {
        console.log("reset")
    }
    counter.interval = 10
    return counter
}
let counter = getCounter()
counter(20)
counter.reset()
console.log("counter.interval:" + counter.interval)

//接口继承类
// 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 接口同样会继承到类的
//private和protected成员。 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）
class Control {
    private state: any;
    name?: string;
    f(str: string) {
        console.log("Control.str:" + str + this.name)
    }
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}
let button = new Button()
button.name = "lufei"
button.f("haha")
//看看这种new的对象必须声明，直接可以实现重写
let button1: Button = <Button>{}
button1.name = "namei"
button1.f = function (str: string) {
    console.log("button1.f:" + str + button1.name)
}
button1.f("fff")

// 错误：“Location1”类型缺少“state”属性。
//这个接口类型只能被这个类或其子类所实现
// class Location1  implements SelectableControl {
//      select() { }
// }

//可选参数
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;

}

class AA {
    sValue!: string
    name?: string
}
let objAA = <AA>{ name: "dd" }

console.log(objAA.sValue)
console.log(objAA.name)

function testOption(labelledObj: { sValue: string, label?: string }) {
    console.log(`label:${labelledObj.label}`)
    if (labelledObj.label === undefined) {
        console.log(`label1:${labelledObj.label}`)
    }
    if (!labelledObj.label) {
    }

}
testOption({ sValue: "v" })



interface User {
    name: string
    address?: {
        street: string
    }
}

function printStreet(user: User) {
    const streetInfo = user.address?.street
    if (streetInfo === undefined) {
        console.log('No street info')
    } else {
        console.log(streetInfo)
    }
}

let user: User = {
    name: 'O.O'
}

printStreet(user)









