/**
 * 声明合并
 */
interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

let box: Box = { height: 5, width: 6, scale: 10 };

console.log("box.scale:" + box.scale)

namespace Animals {
    export class Zebra { }
}

namespace Animals {
    export interface Legged { numberOfLegs: number; }
    export class Dog { }
}
let leg: Animals.Legged = <Animals.Legged>{}

leg.numberOfLegs = 18

console.log(`leg.numberOfLegs:${leg.numberOfLegs}`)


function buildLabel(name: string): string {
    return buildLabel.prefix + name + buildLabel.suffix;
}
namespace buildLabel {
    export let suffix = "lufei";
    export let prefix = "Hello, ";
}
namespace buildLabel {
    export let suffix1 = "lufei";
    export let prefix1 = "Hello, ";
}
console.log(buildLabel("xx"))
class buildLabel1 {
    suffix1 = "lufei";
}
interface buildLabel1{
    suffix1d : "lufeid";
}
namespace buildLabel1 {
    export let suffix1 = "lufei";
    export let prefix1 = "Hello, ";
}
let bb=new buildLabel1()
//不同类型看来是合并不了的
console.log(bb.suffix1)
console.log(bb.suffix1d)//undefined

//相似的，命名空间可以用来扩展枚举型：
 enum Color {
    red = 1,
    green = 2,
    blue = 4
}

namespace Color {
    export function mixColor(colorName: string) {
        if (colorName == "yellow") {
            return Color.red + Color.green;
        }
        else if (colorName == "white") {
            return Color.red + Color.green + Color.blue;
        }
        else if (colorName == "magenta") {
            return Color.red + Color.blue;
        }
        else if (colorName == "cyan") {
            return Color.green + Color.blue;
        }
    }
}
console.log(`Color.mixColor("white"):${Color.mixColor("white")}`)
