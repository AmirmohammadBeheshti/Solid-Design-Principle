class Employee {
  protected baseSalary: number;

  constructor(baseSalary: number) {
    this.baseSalary = baseSalary;
  }

  calculateMonthlySalary(
    employeeType: "fullTime" | "partTime" | "contractor",
    hoursWorked?: number,
    hourlyRate?: number
  ): number {
    switch (employeeType) {
      case "fullTime":
        return this.calculateFullTimeMonthlySalary();
      case "partTime":
        return this.calculatePartTimeMonthlySalary(hoursWorked, hourlyRate);
      case "contractor":
        return this.calculateContractorMonthlySalary(hoursWorked, hourlyRate);
      default:
        return 0;
    }
  }

  private calculateFullTimeMonthlySalary(): number {
    return this.baseSalary;
  }

  private calculatePartTimeMonthlySalary(
    hoursWorked: number = 0,
    hourlyRate: number = 0
  ): number {
    return hoursWorked * hourlyRate;
  }

  private calculateContractorMonthlySalary(
    hoursWorked: number = 0,
    hourlyRate: number = 0
  ): number {
    return hoursWorked * hourlyRate;
  }
}

const employee = new Employee(10);
console.log(employee.calculateMonthlySalary("fullTime"));
