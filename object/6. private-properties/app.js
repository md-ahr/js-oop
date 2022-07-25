function Circle(radius) {
    this.radius = radius;
    // private property
    let defaultLocation = { x: 0, y: 0 };
    // private method
    let computeLocation = function (factor) {
        // compute the location
    };
    this.draw = function () {
        computeLocation(0.2);
        console.log('draw');
    };
}

const circle = new Circle(10);
console.log(circle.defaultLocation); // output: undefined [cause of private property]
