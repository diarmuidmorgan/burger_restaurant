var records = [];

function addRecord(){

var netEarning = burgerTown.netEarning;
var bankBalance = burgerTown.bankBalance;
var employeeStress = 0;
var employeeApathy = 0;
var employeeHunger = 0;
var unionization = 0;
var timeStamp = burgerTown.clock.produceTimeString();
var actualTime = burgerTown.clock.time;
var employees = burgerTown.staff.length;
//add other employee staffStats
for (var i in burgerTown.staff){

  employeeHunger += i.hunger;
  employeeApathy += i.apathy;
  employeeStress += i.stress;
  employeeHours += i.hours;
//etc


}

var customers = burgerTown.customers.length;
//add more records

records.push({'Net Earnings':netEarning,
'Bank Balance' : bankBalance,
'Stress Level' : employeeStress/employees,
'Apathy Level' : employeeApathy/employees,
'Unionization' : unionization/employees,
'Hunger Level' : employeeHunger/hunger,
'Staff count' : employees,
'clock time' : actualTime,
'real time' : timeStamp,
'Customers' : customers})






}
