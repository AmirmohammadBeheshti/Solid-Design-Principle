class Product {
  private name: string;
  private price: number;
  quantity: number;

  constructor(name: string, price: number, quantity: number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  get getName(): string {
    return this.name;
  }

  get getQuantity(): number {
    return this.quantity;
  }

  // Method to display product information.
  displayProductInfo() {
    console.log(
      `Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`
    );
  }
}

class InventoryManager {
  // Simulated inventory
  private inventory: Map<string, Product>;

  constructor() {
    this.inventory = new Map();
  }

  // Method to update inventory after a sale.
  updateInventory(productName: string, soldQuantity: number) {
    if (this.inventory.has(productName)) {
      const existingProduct = this.inventory.get(productName)!;
      existingProduct.quantity -= soldQuantity;
      this.inventory.set(productName, existingProduct);
      console.log(
        `Inventory updated for ${productName}, remaining quantity: ${existingProduct}`
      );
    } else {
      console.log(`Product ${productName} not found in inventory.`);
    }
  }

  // Method to add product to inventory.
  addToInventory(product: Product) {
    this.inventory.set(product.getName, product);
    console.log(`Product ${product.getName} added to inventory.`);
  }
}

class ShoppingCart {
  // Simulated shopping cart
  private items: Map<string, number>;

  constructor() {
    this.items = new Map();
  }

  // Method to add product to the shopping cart.
  addToCart(productName: string, quantity: number) {
    if (this.items.has(productName)) {
      this.items.set(productName, this.items.get(productName)! + quantity);
    } else {
      this.items.set(productName, quantity);
    }
    console.log(`Added ${quantity} ${productName}(s) to the shopping cart.`);
  }
}

const orange = new Product("orange", 1.5, 10);
const inventoryManager = new InventoryManager();
inventoryManager.addToInventory(orange);

const cart = new ShoppingCart();
cart.addToCart(orange.getName, 3);

inventoryManager.updateInventory(orange.getName, 3);
