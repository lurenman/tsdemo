//https://www.jb51.net/article/254045.htm let和var的区别
//
var a = 1
var a = 2
console.log(a)
let b = 1
console.log(b)
{ //let 只在块级作用域，不可重复定义
    let b = 2
    console.log(b)
}
let isDone: boolean = true
console.log("isDone:" + isDone)
let decLiteral: number = 6;
console.log("decLiteral:" + decLiteral)
let strname = "haha"
let strname1: string = "haha1"
console.log("strname:" + strname)
console.log("strname1:" + strname1)
//数组
let arr1 = [1, 2, 3]
console.log("arr1:" + arr1)
let arr2: number[] = [1, 2, 3]
console.log("arr2:" + arr2)
let arr3: Array<number> = [4, 5, 6]
//let arr3: Array<Number> = [4, 5, 6]
console.log("arr3:" + arr3)
//元组 Tuple 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let x: [string, number] = ["hehe", 2];
console.log("x:" + x)
//x[3] = 'world'; 这和文中不一样
//任意值 any和dart动态类型差不多
//any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。 你可能认为 Object有相似的作用，就像它在其它语言中那样。 
//但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法
let anyValue: any = 6
anyValue = "hello"
anyValue = false
//anyValue.haha()
console.log("anyValue:" + anyValue)
//obj
let prettySure: Object = 4;
console.log("prettySure:" + prettySure)
//prettySure.haha()

let unusable: void = undefined;
console.log("unusable:" + unusable)
//Null 和 Undefined
let u: undefined = undefined;
let n: null = null;
console.log("n:" + n)
//Never never类型表示的是那些永不存在的值的类型
// 返回never的函数必须存在无法达到的终点 可参考：https://zhuanlan.zhihu.com/p/487762194
// function error(message: string): never {
//     throw new Error(message);
// }
// error("ddd")
//可参考：https://www.jianshu.com/p/d9015677dbb6
let kk;//默认就是undefined let kk:undefined
console.log("kk:" + kk)

//类型断言
let someValue: any = "this is a string";
 
//let strLength: number = (<string>someValue).length;
let strLength: number = (someValue as string).length;
console.log("strLength:"+strLength)




