// By value
const n = 10;
function increaseNumber(num) {
    num++;
}
increaseNumber(n);
console.log(n);  // output: 10

// By reference
const obj = { value: 10 };
function increaseNumberByObj(o) {
    o.value++;
}
increaseNumberByObj(obj);
console.log(obj.value);  // output: 11
