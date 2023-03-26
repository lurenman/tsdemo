export let am: number = 1

const numberRegexp = /^[0-9]+$/;
//这种默认导出的方法不用命名，在导入的时候在命名
export default function (s: string) {
    return s.length === 5 && numberRegexp.test(s);
}
let am1: number = 2
