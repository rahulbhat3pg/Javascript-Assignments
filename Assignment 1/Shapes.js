class Shapes { //parent class
    constructor(givenName, givenDimension1, givenDimension2) {

        this.name = givenName;
        this.dimension1 = givenDimension1;
        this.dimension2 = givenDimension2;

    }
    getShapeInfo() { //method to display properties(name,dimensions)of a shape
        return `Name => ${this.name}, Length => ${this.dimension1}, Breadth => ${this.dimension2}`;

    }

}

class Rectangle extends Shapes { //child class
    constructor(givenName, givenDimension1, givenDimension2) {
        super(givenName, givenDimension1, givenDimension2); 
    }
    multiply() { //method to find area or rechtangle
        return this.dimension1 * this.dimension2;
    }

}

let rectangle = new Rectangle("Rectangle", 30, 20)
console.log("Info of this shape is " + rectangle.getShapeInfo());
console.log("Area of Rectangle is " + rectangle.multiply());