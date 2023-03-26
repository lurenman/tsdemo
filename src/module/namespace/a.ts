 namespace ANS {
    let a = 1
    export let b = 1
}
// export namespace Validation {
//     export interface StringValidator {
//         isAcceptable(s: string): boolean;
//     }
//     export let b = 1
// }
namespace Validation {
    const numberRegexp = /^[0-9]+$/;
    export class ZipCodeValidator   {
        isAcceptable(s: string) {
            return s
        }
    }
}
console.log(`ANS.b:${ANS.b}`)
let validation=new Validation.ZipCodeValidator()
console.log(`validation.isAcceptable("haha"):${validation.isAcceptable("haha")}`)

