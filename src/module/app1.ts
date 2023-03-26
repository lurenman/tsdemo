// let kkd:string="dasd"
// import { Animal1, vstr } from './animal';

//导入整个模块并且命名为animal_module，之后都是通过这个调用，对*号代替的所有模块进行重命名为animal_module，则通过animal_module对象可以访问到模块里导出的所有内容。
import * as animal_module from './animal';
import Animal2 from './animal';
let dog = new animal_module.Animal1();
dog.name = '狗狗';
dog.show();
console.log("vstr:" + animal_module.vstr)
 //animal_module.Animal2  默认导出的引用不到啊

let dog2=new Animal2()
dog2.name="gogo"
dog2.show()
 

