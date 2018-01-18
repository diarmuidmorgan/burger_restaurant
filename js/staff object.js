//the idea here is to make one object for all of the staff to live in

function staffManager(){

  this.staff = {};
  this.activeRoster = {};
  //staff should exist in a dictionary, where they are identified by their id
  this.payScale = [7, 7.50, 8, 9, 10.50, 12, 14.50, 17, 19, 23];

  this.idSeed=0

  this.newEmployeeId = function(){
  var t = 'e'+idSeed.toString();
  this.idSeed+=1;
  return t;


  }

  this.fire = function(id){
    this.staff[id].position='fired';
    delete this.activeRoster[id];


  }

  this.raiseSalary = function(id){

    this.staff[id].payScale+=1;
    this.staff[id].wages=this.payScale[this.staff[id].payScale];



  }



this.cutSalary = function(id){

this.staff[id].payScale-=1;
this.staff[id].wages=this.payScale[this.staff[id].payScale];



    }

this.addEmployee(employee){
  employee.id=this.newEmployeeId()
  this.staff[employee.id]=employee
  this.activeRoster[employee.id]=employee
}












}
