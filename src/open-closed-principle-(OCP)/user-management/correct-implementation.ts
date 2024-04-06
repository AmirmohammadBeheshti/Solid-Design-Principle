abstract class Shape {
  abstract area(): number;
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  public area(): number {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  public area(): number {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(10)

const rectangle = new Rectangle(10 , 10)
