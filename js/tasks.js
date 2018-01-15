
//the data structure of a task//
var taskManager = function(){

  var grillTasks = []
  var fryTasks = [];
  var drinkTasks =[];
  var getTasks = [];
  var serveTasks = [];

  this.addTasksFromOrder = function(order){

    for (i in order.items){

      if(i.GRILLED===true){

        this.GrillTasks.push(['add', i])

      }
      else{

        if(i.FRIED===true){


          this.fryTasks.push(['add', i])
        }

        else{
          if(i.DRINK===true){

            this.drinkTasks.push(['make', i])


          }
          else{

            this.getTasks.push(['sauce', i])



  }}}  }
this.serveTasks.push(order)}






}
