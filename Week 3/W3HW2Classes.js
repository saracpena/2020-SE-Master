// OOP: Classes

// Let's create shaped objects

//1. Define a new class called Circle with appropriate attributes and instantiate a few Circle objects.
//  a.  Write a function called circle_area that returns the area of the object. 
//  b.  Write a function total_sides that returns the number of sides of the object.

class Circle{
    constructor(radius){
      this.radius = radius;
    }
    circle_area(){
      console.log(Math.PI * this.radius * 2);
    }
    total_sides(){
      console.log("Total sides of Circle: 0");
    }
  }

let circle = new Circle(5);
circle.area = 5
circle.total_sides = 5
console.log(circle);


//2. Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.
//  a.  Write a function called rectangle_area that returns the area of the given object.
//  b.  Write a function total_sides that returns the number of sides of the object.

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
  
  let square = new Rectangle(10, 10);
  
  console.log(square.area); // 100

//   class Rectangle{
//     constructor(len,width){
//       this.len = len;
//       this.width = width;
//     }
//     rectangle_area(){
//       console.log("Area of a rectangle: " + this.len * this.width);
//     }
//     total_sides(){
//       console.log("Total sides of rectangle: 4");
//     }
//   }
  
//   const rectangle1 = new Rectangle(4,2);
//   rectangle1.rectangle_area();
//   rectangle1.total_sides();
//   const rectangle2 = new Rectangle(6,3);
//   rectangle2.rectangle_area();
//   rectangle2.total_sides();

//3. Define a new class called Square with appropriate attributes and instantiate a few Square objects.
//  a.  Write a function called square_area that returns the area of the given object.
//  b.  Write a function total_sides that returns the number of sides of the object.

class Square{
    constructor(side){
      this.side = side;
    }
    area(){
      console.log("Area of the Square: " + Math.pow(this.side,2));
    }
    total_sides(){
      console.log("Total sides of the Square: 4");
    }
  }
  
  const square1 = new Square(4);
  square1.area();
  square1.total_sides();
  
  const square2 = new Square(3);
  square2.area();
  square2.total_sides();