function Circle(radius) {
    this.radius = radius;
    // private property
    let defaultLocation = { x: 0, y: 0 };
    this.draw = function () {
        console.log('draw');
    };
    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y) {
                throw new Error('Invalid location');
            }
            defaultLocation = value;
        }
    });
}

const circle = new Circle(10);
// circle.defaultLocation = { x: 2 }; // output: Invalid location
circle.defaultLocation = { x: 3, y: 5 };
console.log(circle.defaultLocation); // output: {x: 3, y: 5}
