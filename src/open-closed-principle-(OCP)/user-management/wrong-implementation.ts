class Shape {
    constructor(
      private radius: number,
      private width: number,
      private height: number
    ) {}
  
    public area(name: "RECTANGLE" | "CIRCLE") {
      if (name === "CIRCLE") this.calculateCircleArea(this.radius);
      else if (name === "RECTANGLE")
        this.calculateRectangleArea(this.width, this.height);
      else throw new Error("Unsupported shape type");
    }
  
    private calculateCircleArea(radius: number): number {
      return Math.PI * radius ** 2;
    }
  
    private calculateRectangleArea(width: number, height: number): number {
      return width * height;
    }
  }
  
  const area = new Shape(10, 20, 10);
  
  const calcCircle = area.area("CIRCLE");
  
  const calcRectangle = area.area("RECTANGLE");
  