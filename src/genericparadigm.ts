//泛型
function identity<T>(arg: T): T {
    return arg;
}
let output = identity<string>("myString");
let output1 = identity("myString");
console.log("output1:" + output1)

function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
class Fc {
    str: string = ""
}
//在泛型里使用类类型
function create<T>(c: { new(): T; }): T {
    let fc = new c()
    if (fc instanceof Fc) {
        (<Fc>fc).str = "lufei"
    }
    return fc;
}
let fc = create<Fc>(Fc)
console.log("fc.str:" + fc.str)
