enum Direction {
    Up = 1,//默认是0
    Down,
    Left,
    Right
}
console.log("Direction.Up:" + Direction.Up)
console.log("Direction.Down:" + Direction.Down)
//常数枚举常数枚举只能使用常数枚举表达式并且不同于常规的枚举的是它们在编译阶段会被删除。
//常数枚举成员在使用的地方被内联进来。 这是因为常数枚举不可能有计算成员。
const enum Enum {
    A = 1,
    B = A * 2
}
console.log("Enum.B:" + Enum.B)
//外部枚举

// declare enum Enum {
//     A = 1,
//     B,
//     C = 2
// }
//可以使用 enum + namespace的声明方式向枚举类型添加静态方法：
enum Weekday {
    Monday,
    Tuseday,
    Wednesday,
    Thursday,
    Firday,
    Saturday,
    Sunday
}
namespace Weekday {
    export function isBusinessDay(day: Weekday) {
        switch (day) {
            case Weekday.Saturday:
            case Weekday.Sunday:
                return false;
            default:
                return true
        }
    }
}
const mon = Weekday.Monday;
const sun = Weekday.Sunday;

console.log(Weekday.isBusinessDay(mon)); // true
console.log(Weekday.isBusinessDay(sun)); // false
 
 