abstract class Employee {
    protected baseSalary: number;

    constructor(baseSalary: number) {
        this.baseSalary = baseSalary;
    }

    abstract calculateMonthlySalary(): number;
}

class FullTimeEmployee extends Employee {
    calculateMonthlySalary(): number {
        return this.baseSalary;
    }
}

class PartTimeEmployee extends Employee {
    private hoursWorked: number;
    private hourlyRate: number;

    constructor(baseSalary: number, hoursWorked: number, hourlyRate: number) {
        super(baseSalary);
        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
    }

    calculateMonthlySalary(): number {
        return this.hoursWorked * this.hourlyRate;
    }
}

class Contractor extends Employee {
    private hoursWorked: number;
    private hourlyRate: number;

    constructor(baseSalary: number, hoursWorked: number, hourlyRate: number) {
        super(baseSalary);
        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
    }

    calculateMonthlySalary(): number {
        return this.hoursWorked * this.hourlyRate;
    }
}

const fullTimeEmployee = new FullTimeEmployee(5000);
console.log(fullTimeEmployee.calculateMonthlySalary()); 

const partTimeEmployee = new PartTimeEmployee(0, 160, 25); 
console.log(partTimeEmployee.calculateMonthlySalary()); 

const contractor = new Contractor(0, 80, 50); 
console.log(contractor.calculateMonthlySalary()); 
