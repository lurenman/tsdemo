/**
 * 混入，dart中with
 */
class A {
    //dart中就不让有构造方法
    constructor(name: string) {
        this.name = name
    }
    name: string = "lufei"
    testA() {
        console.log("the testA call")
    }
}
class B {
    age: number = 20
    testB() {
        console.log("the testB call")
    }
    sValue!: string
    sValue1?: string
}

class PMixInx implements A, B {
    constructor() {

    }
    name: string = "ppp";
    testA(): void {
        throw new Error("Method not implemented.");
    }
    age: number = 18;
    // testB(): void {
    //     throw new Error("Method not implemented.");
    // }
    testB!: () => void

    sValue: string = "value"

}
applyMixins(PMixInx, [A, B])

let pmx = new PMixInx()
pmx.testA()
pmx.testB()
console.log(pmx.name)
console.log(pmx.sValue)

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            // if (name == "testB") {
            //     return
            // }
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

let str = undefined
let num = null;

str = "haha"
num = 21
str = 4
num = "dd"
console.log(str)
console.log(num)

console.log(typeof num)


let r1: any;
//https://zhuanlan.zhihu.com/p/545347624
let r2: unknown;
r2 = "un"
console.log(r2)

