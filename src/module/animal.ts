/**
 * 参考：https://www.cnblogs.com/niklai/p/5808789.html
 */
export let vstr: string = "hello"
class Animal1 {
    name: string = "animal";
    show(): string {
        console.log(`Animal.name:${this.name}`)
        return this.name;
    }
}
//一个模块的默认导出只能有一个
export default class Animal2 {
    name: string = "animal";
    show(): string {
        console.log(`Animal.name:${this.name}`)
        return this.name;
    }
}
export { Animal1 }  //默认函数Animal2就不要导出了，没什么用