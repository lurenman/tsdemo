class CClass {
    name = ""
    constructor(name: string) {
        this.name = name
    }
    isAcceptable(s: string) {
        return s;
    }
}
 
//若要导入一个使用了export =的模块时，必须使用TypeScript提供的特定语法import let = require("module")。
//只能导出一个
export = CClass
