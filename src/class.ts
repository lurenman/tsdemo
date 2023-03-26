//简单示例
class Greeter {
    // 在TypeScript里，成员都默认为 public。
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");

class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
//console.log(howard.name); // error
//get and set

class Person1 {
    //这是参考dart吗
    private _name: string = "bai";
    private age: number = 0

    get name(): string {
        return this._name
    }

    set name(str: string) {
        this._name = str
    }
}
let person1 = new Person1()
console.log("person1.name:" + person1.name)
person1.name = "lufei"
//person1.name("lufei") error 不可以这样调用
console.log("person1.name:" + person1.name)
//静态变量 看只能类.调用
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}
//抽象类略 
 
 



