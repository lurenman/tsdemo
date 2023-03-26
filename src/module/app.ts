// let kkd:string="dasd"
import { Animal1, vstr } from './animal';
let dog = new Animal1();
dog.name = '狗狗';
dog.show();
console.log("vstr:" + vstr)

class App {
    static test() {
        let dog = new Animal1();
        dog.name = 'App狗狗';
        dog.show();
    }
}
App.test()
