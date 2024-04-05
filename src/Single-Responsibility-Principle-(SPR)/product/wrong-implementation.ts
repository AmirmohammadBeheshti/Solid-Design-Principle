class Product {
  private name: string;
  private price: number;
  private quantity: number;

  constructor(name: string, price: number, quantity: number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  displayProductInfo() {
    console.log(
      `Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`
    );
    this.updateInventory(-1); 
    this.addToCart(); 
  }

  updateInventory(quantitySold: number) {
    this.quantity -= quantitySold;
    console.log(
      `Inventory updated for ${this.name}, remaining quantity: ${this.quantity}`
    );
  }

  addToCart() {
    console.log(`Added 1 ${this.name} to the shopping cart.`);
  }
}

const apple = new Product("Apple", 1.5, 10);
apple.displayProductInfo(); 


