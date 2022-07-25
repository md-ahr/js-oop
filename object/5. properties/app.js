function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
}
const circle = new Circle(10);
circle.location = { x: 1, y: 1 }; // add properties
const propertyName = 'new-location';
circle[propertyName] = { a: 1, b: 1 }; // add properties dynamically
delete circle.location; // delete properties
delete circle[propertyName]; // delete dynamic properties
console.log(circle);

// Enumerating Properties
for (let key in circle) {
    console.log(key); // output: radius, draw
    console.log(circle[key]); // output: 10, Function()
    if (typeof circle[key] !== 'function') {
        console.log(key); // output: radius
    }
}
const keys = Object.keys(circle);
console.log(keys); // output: ['radius', 'draw'];
if ('draw' in circle) {
    console.log('The circle has a draw function');
}
