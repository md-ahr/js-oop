// Constructor Function
function Circle (radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}

console.log(Circle.length); // functions are object

Circle.call({}, 1); // same as new Circle(1, 2, 3)
Circle.apply({}, [1, 2, 3]); // same as new Circle(1, 2, 3)

const circle = Circle(1); // without 'new' keyword, this object referes to the global object
circle.draw(); // output: 'draw'

// Constructor function as a function object
const Circle1 = new Function('radius', `
    this.radius = radius,
    this.draw = function () {
        console.log('draw as a function');
    }
`);
const circle1 = new Circle1(1);
circle1.draw(); // output: 'draw as a function'

