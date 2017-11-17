function Employee(skill, hunger, motivation, stress, fatigue, agitator, unionised) {
    // Constructor for an employee
    this.skill = skill;
    // Begining at 0.0, incrementing periodically
    // Chefs with every succesfull cooking action
    // Managers with every customer served

    this.hunger = hunger;
    this.motivation = motivation;
    this.stress = stress;
    this.fatigue = fatigue;

    this.agitator = agitator;
    this.unionised = unionised;

    this.occupied = false

}

function Chef(skill, hunger, motivation, stress, fatigue, agitator, unionised) {
    // Constructor for a chef
    Employee.call(this, skill, hunger, motivation, stress, fatigue, agitator, unionised)
    this.wage = 6.5 + Math.floor(skill)
}

function Manager(skill, hunger, motivation, stress, fatigue, agitator, unionised) {
    // Constructor for a manager
    Employee.call(this, skill, hunger, motivation, stress, fatigue, agitator, unionised)
    this.wage = 7.5 + Math.floor(skill)
}

function Cashier(skill, hunger, motivation, stress, fatigue, agitator, unionised) {
    // Constructor for a cashier
    Employee.call(this, skill, hunger, motivation, stress, fatigue, agitator, unionised)
    this.wage = 6.5 + Math.floor(skill)
}

function hireEmployee(role) {
    burgerTown.staff.push(new role(0, 0, 0, 0, 0, 0, false, false));
}

// Prototype constructors and reference
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Chef.prototype = Object.create(Employee.prototype);
Chef.prototype.constructor = Chef;

Cashier.prototype = Object.create(Employee.prototype);
Cashier.prototype.constructor = Cashier;
