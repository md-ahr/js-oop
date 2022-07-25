/**
 ** Inheritance:
 **     1. Classical
 **     2. Prototypical
 ** Objects created by a given constructor will have the same prototype
 */

let x = {};
let y = {};

console.log(Object.getPrototypeOf(x));
console.log(Object.getPrototypeOf(y));

console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));
