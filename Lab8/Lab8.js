class Employee {
    constructor(firstName, lastName, baseSalary, experience) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.baseSalary = baseSalary;
        this.experience = experience;
    }

    get countedSalary() {
        let salary = this.baseSalary;
        if (this.experience > 5) {
            salary = this.baseSalary * 1.2 + 500;
        } else if (this.experience > 2) {
            salary = this.baseSalary + 200;
        }
        return salary;
    }

    getSalaryStatement() {
        return `${this.firstName} ${this.lastName} отримав ${this.countedSalary.toFixed(2)} грошей`;
    }
}

class Developer extends Employee {
    // Inherits everything from Employee
}

class Designer extends Employee {
    constructor(firstName, lastName, baseSalary, experience, effCoeff) {
        super(firstName, lastName, baseSalary, experience);
        this.effCoeff = effCoeff;
    }

    get countedSalary() {
        return super.countedSalary * this.effCoeff;
    }
}

class Manager extends Employee {
    constructor(firstName, lastName, baseSalary, experience, team = []) {
        super(firstName, lastName, baseSalary, experience);
        this.team = team;
    }

    get countedSalary() {
        let salary = super.countedSalary;
        const teamSize = this.team.length;

        if (teamSize > 10) {
            salary += 300;
        } else if (teamSize > 5) {
            salary += 200;
        }

        const developersCount = this.team.filter(member => member instanceof Developer).length;
        if (developersCount > teamSize / 2) {
            salary *= 1.1;
        }

        return salary;
    }
}

class Department {
    constructor(managers = []) {
        this.managers = managers;
    }

    giveSalary() {
        const allEmployees = [];

        this.managers.forEach(manager => {
            allEmployees.push(manager);
            allEmployees.push(...manager.team);
        });

        allEmployees.forEach(employee => {
            console.log(employee.getSalaryStatement());
        });
    }
}

// Example Usage:

const dev1 = new Developer('Peter', 'Parker', 3000, 2);
const dev2 = new Developer('Kendrick', 'Lamar', 3200, 5);
const designer1 = new Designer('Tom', 'Cruise', 2800, 3, 0.8);
const designer2 = new Designer('Mike', 'Tyson', 2900, 4, 0.9);

const manager1 = new Manager('Michael', 'Jordan', 5000, 10, [dev1, designer1]);
const manager2 = new Manager('Laura', 'Anderson', 4800, 6, [dev2, designer2]);

const department = new Department([manager1, manager2]);

department.giveSalary();