function Employee(skill, hunger, motivation, stress, fatigue, agitator, unionised) {
	// Constructor for an employee
	// Begining at 0.0, incrementing periodically
	// Chefs with every succesfull cooking action
	// Managers with every customer served
	// Constructor for an employee
	this.skill = skill;
	this.hours = 0
	this.totalHours = 0

	this.hunger = hunger;
	this.motivation = motivation;
	this.stress = stress;
	this.fatigue = fatigue;

	this.agitator = agitator;
	this.unionised = unionised;

	this.occupied = false

	this.increaseSkill = function(skillIncrease) {
		this.skill += skillIncrease;
	}

}

function Chef(skill, hunger, motivation, stress, fatigue, agitator, unionised) {
	// Constructor for a chef
	Employee.call(this, skill, hunger, motivation, stress, fatigue, agitator, unionised)
	this.wage = CHEF_WAGE + Math.floor(skill)

	this.cookOrder = function(order) {
		// Function to cook an order
		for (item in order) {
			if (order[item].FRIED == true) {
				order.completion = 100
				// fryer(order[item]);
				break;
			} else {
				if (order[item].GRILLED == true) {
					order.completion = 100
					// grill(order[item]);
					break;
				} else {
					order.completion = 100;
				};
			}
		}
	}
};

function Manager(skill, hunger, motivation, stress, fatigue, agitator, unionised) {
	// Constructor for a manager
	Employee.call(this, skill, hunger, motivation, stress, fatigue, agitator, unionised)
	this.wage = MANAGER_WAGE + Math.floor(skill)

	this.payWages = function() {
		for (var staffMember in burgerTown.staff) {
			console.log("Paying wages")
			// Deducts wage * hours from bankBalance
			burgerTown.bankBalance -= burgerTown.staff[staffMember].wage * burgerTown.staff[staffMember].hours;
			burgerTown.staff[staffMember].totalHours += burgerTown.staff[staffMember].hours
			burgerTown.staff[staffMember].hours = 0;
		}
	}
}

function Cashier(skill, hunger, motivation, stress, fatigue, agitator, unionised) {
	// Constructor for a cashier
	Employee.call(this, skill, hunger, motivation, stress, fatigue, agitator, unionised)
	this.wage = CASHIER_WAGE + Math.floor(skill)

	this.checkCompletion = function(queue) {
		// Checks completion of order
		if (queue.order.completion == 100) {
			this.serveCustomer()
		}
	}

	this.serveCustomer = function() {
		// Serves customer
		console.log("Serving customer.")
		burgerTown.netEarning += burgerTown.queue[0].order.orderTotal;
		burgerTown.bankBalance += burgerTown.queue[0].order.orderTotal;
		burgerTown.queue.splice(0, 1)
		burgerTown.customerServed += 1
	}
}

function hireEmployee(role) {
	// Hire an employee
	burgerTown.staff.push(new role(0, 0, 0, 0, 0, 0, false, false));
}


function incrementHoursWorked() {
	// Increment hours of each staff member
	for (var staffMember in burgerTown.staff) {
		burgerTown.staff[staffMember].hours += 1
	}
}


// Prototype constructors and reference
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Chef.prototype = Object.create(Employee.prototype);
Chef.prototype.constructor = Chef;

Cashier.prototype = Object.create(Employee.prototype);
Cashier.prototype.constructor = Cashier;