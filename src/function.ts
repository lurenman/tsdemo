function add(x: number, y: number) {
    return x + y;
}
let myAdd = function (x: number, y: number): number { return x + y; };
//=> 这和dart 一样啊
let myAdd1: (x: number, y: number) => number =
    function (x: number, y: number): number { return x + y; };

//默认参数可以设置值 kt / groovy 都有
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}
buildName("dd")
//buildName("dd",undefined)
//可选参数加？
function buildName1(firstName: string, lastName?: string) {
    return firstName + " " + lastName;
}
function buildName2(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}
//这种不想传就需要用undefined,没有kt好啊
buildName2(undefined, "Adams");

//剩余参数 ...
function buildName3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ")
}
console.log("buildName3:" + buildName3("Joseph", "Samuel", "Lucas", "MacKinzie"))

function buildName4(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName4;
let buildNameFun1: (fname: string, ...rest: string[]) => string = function (firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
};
console.log("buildNameFun1:" + buildNameFun1("Joseph", "Samuel", "Lucas", "MacKinzie", "China"))





