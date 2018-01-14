function Employee(skill, hunger, apathy, stress, fatigue, agitator, unionised) {
	// Constructor for an employee
	// Begining at 0.0, incrementing periodically
	// Chefs with every succesfull cooking action
	// Managers with every customer served
	// Constructor for an employee
	this.skill = skill;
	this.hours = 0
	this.totalHours = 0


	this.hunger = hunger;
	this.apathy = apathy;
	this.stress = stress;
	this.fatigue = fatigue;

	this.agitator = agitator;
	this.unionised = unionised;

	this.striking = false;
	this.occupied = false;

	this.increaseSkill = function(skillIncrease) {
		this.skill += skillIncrease;
	}

	this.editFatigue = function(fatigueChange) {
		this.fatigue += fatigueChange;
	}

	this.editStress = function(stressChange) {
		this.stress += stressChange;
	}

	this.editHunger = function(hungerChange) {
		this.hunger += hungerChange;
	}

	this.editApathy = function(apathyChange) {
		this.apathy += apathyChange;
	}

}

function Chef(skill, hunger, apathy, stress, fatigue, agitator, unionised) {
	// Constructor for a chef
	Employee.call(this, skill, hunger, apathy, stress, fatigue, agitator, unionised)
	this.wage = CHEF_WAGE + Math.floor(skill)
	this.name = nameGenerator.generate()
	this.work = function(){
		//chef should look for available tasks.


	}

	this.skive = function(){
		//if no available tasks, or insufficient motivation, Chef should choose a leisure activity


	}

	this.cookOrder = function(order) {
		// Function to cook an order
		for (item in order.items) {
			if (order.items[item].FRIED == true) {
				order.completion = 100
				this.editFatigue(FATIGUE_INCREMENT);
				burgerTown.messageBox.writeMessage(order.items[item].NAME + " fried.")
				// fryer(order[item]);
				break;
			} else {
				if (order.items[item].GRILLED == true) {
					order.completion = 100
					this.editFatigue(FATIGUE_INCREMENT);
					burgerTown.messageBox.writeMessage(order.items[item].NAME + " grilled.")
					// grill(order[item]);
					break;
				} else {
					order.completion = 100;
				};
			}
		}
	}
}

function Manager(skill, hunger, apathy, stress, fatigue, agitator, unionised) {
	// Constructor for a manager
	Employee.call(this, skill, hunger, apathy, stress, fatigue, agitator, unionised)
	this.wage = MANAGER_WAGE + Math.floor(skill)
	this.name = nameGenerator.generate()
	


	this.payWages = function() {
		for (var staffMember in burgerTown.staff) {
			// Deducts wage * hours from bankBalance
			burgerTown.bankBalance -= burgerTown.staff[staffMember].wage * burgerTown.staff[staffMember].hours;
			burgerTown.staff[staffMember].totalHours += burgerTown.staff[staffMember].hours
			burgerTown.staff[staffMember].hours = 0;
			burgerTown.messageBox.writeMessage("Wages paid.")
		}
	}
}

function Cashier(skill, hunger, apathy, stress, fatigue, agitator, unionised) {
	// Constructor for a cashier
	Employee.call(this, skill, hunger, apathy, stress, fatigue, agitator, unionised)
	this.wage = CASHIER_WAGE + Math.floor(skill)
	this.name = nameGenerator.generate()

	this.checkCompletion = function(queue) {
		// Checks completion of order
		if (queue.order.completion == 100) {
			this.serveCustomer()
			this.editFatigue(FATIGUE_INCREMENT);
		}
	}

	this.serveCustomer = function() {
		// Serves customer
		burgerTown.netEarning += burgerTown.queue[0].order.orderTotal;
		burgerTown.bankBalance += burgerTown.queue[0].order.orderTotal;
		burgerTown.queue.splice(0, 1)
		burgerTown.customerServed += 1
		burgerTown.messageBox.writeMessage("Customer served.")
	}
}

function hireEmployee(role) {
	// Hire an employee
	burgerTown.staff.push(new role(0, 0, 0, 0, 0, 0, false, false));
}

function nameGenerator(){

	var surnames = ['Mallory', 'Blake', 'Mulligan', 'Morgan', 'Said', 'Chen', 'Hobbes', 'Wang', 'O\'Donovan', 'O\'Shaughnessey'];
	var firstnames = ['Mick', 'Peter', 'Gregor', 'Jill', 'Jane', 'Tim', 'Kevin', 'Clarence', 'Sara', 'Yiming', 'Hope'];

	this.generate = function(){
		var r1 = Math.floor(Math.random() * surnames.length);
		var r2 = Math.floor(Math.random() * firstnames.length);
		return firstnames[r2]+' '+surnames[r1];
}
}

var nameGenerator = new nameGenerator()

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
