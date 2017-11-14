function Employee(skill, rank, hunger, motivation, agitator, unionised) {
    // Constructor for an employee
    this.skill = skill;
    this.rank = rank;

    this.hunger = hunger;
    this.motivation = motivation;

    this.agitator = agitator;
    this.unionised = unionised;

    this.occupied = false

}

function Chef(skill, rank, hunger, motivation, agitator, unionised) {
    // Constructor for a chef
    Employee.call(this, skill, rank, hunger, motivation, agitator, unionised)
}

function Manager(skill, rank, hunger, motivation, agitator, unionised) {
    // Constructor for a manager
    Employee.call(this, skill, rank, hunger, motivation, agitator, unionised)
}


// Prototype constructors and reference
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Chef.prototype = Object.create(Employee.prototype);
Chef.prototype.constructor = Chef;
