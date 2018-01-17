//thought it might be good to start packing the
//the interface into a seperate object
//teletype is out of date
//there is snow here in the west of Ireland

function interface() {

this.currentView = 'mainView';
this.activeWindows = [];
this.requiredWindows = {mainView : ['clockBar', 'mainWindows'],
staffView : ['clockBar', 'staffWindows', 'staffControls']
}


this.buildInterface = function(mode){
  if(mode=='default'){
  document.getElementById('window').innerHTML+=this.buildClockBar();
  document.getElementById('window').innerHTML+=this.buildMainWindows();
  document.getElementById('window').innerHTML+=this.buildMainStaffWindows('default');
  this.currentView = 'mainView';
  this.activeWindows=['clockBar', 'mainWindows']
  //document.getElementById('window').innerHTML+=this.buildMainControls();
//want to get rid of all of the HTML in index.html, and have it all dynamically generated here.
//will give us more control, I reckon
//basically, I want to decompose it into
//a series of views that can be easily switched on and off.
//implement 12 column screen model.
return true;
}


}

this.buildMainWindows = function(){

var html = '<div id = "mainWindows>"';
html += this.buildMainStatsWindow();
html += this.buildMainStockWindow();
html += this.buildMainEventsWindow();

html += '</div>';
return html;


}

this.buildMainStatsWindow = function(){

var html = '<div id="mainStatsWindow" class="col-4 mainWindow">';
html += '<p>Stats</p>'
html+='</div>'
return html;
}

this.buildMainEventsWindow = function(){

var html = '<div id="mainEventsWindow" class="col-4 mainWindow">';
html+='<p>Events</p>'
html+='</div>'
return html;
}

this.buildMainStockWindow = function(){

var html = '<div id="mainStockWindow" class="col-4 mainWindow" onClick="switchView(\'stockView\')">';
html += '<p>Stock Window</p>'
html+='</div>'
return html;
}


this.buildMainControls = function(){}

this.buildClockBar = function(){
var html = '<div id="clockBar">';
html += '<div id="clockTime" class = "col-3">'
html+='<span id="clockHours">00</span><span>:</span><span id="clockMinutes">00</span><span>:</span><span id="clockSeconds">00</span></div>';
html += '<div id = "clockStartButton" class = "col-1" onclick="burgerTown.clock.start()"><p>Start</p></div>';
html += '<div id = "clockStartButton" class = "col-1" onclick="burgerTown.clock.stop()"><p>Stop</p></div>';
html += '<div  class="col-3"><p id="clockDate">17th January 2018</p></div>'
html += '<div id="viewMainButton" class="col-1 button" onclick="interface.switchView(\'mainView\')"><p>Main</p></div>'
html += '<div id="viewStaffButton" class="col-1 button" onclick="interface.switchView(\'staffView\')"><p>Staff</p></div>'
html += '<div id="viewKitchenButton" class="col-1 button" onclick="interface.switchView(\'kitchenView\')"><p>Kitchen</p></div>'
html += '</div>'

return html;
}

this.buildMainStaffWindows = function(mode){

var html = '<div id="mainStaffWindows">'
html += '<div id = "allStaffViewer" class = "col-4 mainWindow"></div>'
html += '<div id = "individualStaffViewer" class = "col-8 mainWindow">'
//add more details as required
html += '<p id="currentStaffName"></p>'
html += '<p>Occupation: <span id="currentStaffOccupation"></span></p>'
html += '<p>Skill: <span id="currentStaffSkill"></span></p>'
html += '<p>Wage: $<span id="currentStaffHunger"></span</p>'
html += '<p>Hunger: <span id="currentStaffWage"></span></p>'
html += '<p>Apathy: <span id="currentStaffApathy"></span>%</p>'
html += '<p>Fatigue: <span id="currentStaffFatigue"></span>%</p>'
html += '<p>Working at: <span id="currentStaffTask"></span></p>'


html += '</div>'
return html;

}

this.buildStaffControls = function(){
var html = '<div id="staffControls">';

html += '<div onClick="staff.fire(currentStaffMember)" class="button col-1"><p>Fire</p></div>';
html += '<div onClick="staff.raiseSalary(currentStaffMember)" class="button col-1"><p>Raise salary</p></div>';
html += '<div onClick="staff.cutSalary(currentStaffMember)" class="button col-1"><p>Cut salary</p></div>';
html += '<div onClick="staff.reward(currentStaffMember)" class="button col-1"><p>Reward</p></div>';
html += '<div onClick="staff.praise(currentStaffMember)" class="button col-1"><p>Praise</p></div>';
html += '<div onClick="onClick="staff.chastise(currentStaffMember)"" class="button col-1"><p>Chastise</p></div>';
html += '<div onClick="interface.staffOrders(currentStaffMember)" class="button col-1"><p>Order</p></div>';


html+='</div>';
return html;




}




this.updateClockHours = function(hours){
  document.getElementById('clockHours').innerHTML=hours;
}
this.updateClockMinutes = function(minutes){
  document.getElementById('clockMinutes').innerHTML=minutes;
}

this.updateClockSeconds = function(seconds){
  document.getElementById('clockSeconds').innerHTML=seconds;
}

this.updateDate = function(date){

  document.getElementById('clockDate').innerHTML=date;
}


this.switchView = function(view){
  for (var i in this.activeWindows){
    document.getElementById(i).style.display='none'
  }
  for (var i in this.requiredWindows[view]){
    document.getElementById(i).style.display='';


  }
  this.currentView = view;
}




}
