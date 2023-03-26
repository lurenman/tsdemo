// import {am} from "./a"
// console.log(am)

let am: number = 3
console.log(am)

import validate from "./a";

let strings = ["Hello", "98052", "101"];

// Use function validate
strings.forEach(s => {
  console.log(`"${s}" ${validate(s) ? " matches" : " does not match"}`);
});