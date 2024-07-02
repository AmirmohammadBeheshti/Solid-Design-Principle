// Abstraction
interface NotificationService {
    sendNotification(message: string): void;
}

// Low-level module
class EmailService implements NotificationService {
    sendNotification(message: string): void {
        console.log(`Email sent: ${message}`);
    }
}

// High-level module
class OrderService {
    private notificationService: NotificationService;

    constructor(notificationService: NotificationService) {
        this.notificationService = notificationService;
    }

    placeOrder(orderId: string): void {
        // Logic for placing an order
        console.log(`Order placed: ${orderId}`);
        
        // Sending notification
        this.notificationService.sendNotification(`Order ${orderId} has been placed.`);
    }
}

// Using the high-level module
const emailService = new EmailService();
const orderService = new OrderService(emailService);
orderService.placeOrder("12345");
