// Low-level module
class EmailService {
    sendEmail(message: string): void {
        console.log(`Email sent: ${message}`);
    }
}

// High-level module
class OrderService {
    private emailService: EmailService;

    constructor() {
        this.emailService = new EmailService();
    }

    placeOrder(orderId: string): void {
        // Logic for placing an order
        console.log(`Order placed: ${orderId}`);
        
        // Sending notification
        this.emailService.sendEmail(`Order ${orderId} has been placed.`);
    }
}

// Using the high-level module
const orderService = new OrderService();
orderService.placeOrder("12345");
