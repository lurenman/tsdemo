declare function require(moduleName: string): any;

import { EClass } from "./e";
//todo 
let load: boolean = true
if (load) {
    let EClassK: (typeof EClass) = require("./e");
    let eObj = new EClassK("dasd")
    console.log(eObj.name)
}