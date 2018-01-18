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

this.currentGrillBox='a1';


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

var html = '<div id="mainStaffWindows" style="display:none">'
html += '<div id = "allStaffViewer" class = "col-4 mainWindow" style="overflow-y:auto"></div>'
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

html += '<div onClick="staffManager.fire(currentStaffMember)" class="button col-1"><p>Fire</p></div>';
html += '<div onClick="staffManager.raiseSalary(currentStaffMember)" class="button col-1"><p>Raise salary</p></div>';
html += '<div onClick="staffManager.cutSalary(currentStaffMember)" class="button col-1"><p>Cut salary</p></div>';
html += '<div onClick="staffManager.reward(currentStaffMember)" class="button col-1"><p>Reward</p></div>';
html += '<div onClick="staffManager.praise(currentStaffMember)" class="button col-1"><p>Praise</p></div>';
html += '<div onClick="onClick="staffManager.chastise(currentStaffMember)"" class="button col-1"><p>Chastise</p></div>';
html += '<div onClick="interface.staffOrders(currentStaffMember)" class="button col-1"><p>Order</p></div>';


html+='</div>';
return html;




}
//for staff windows
this.updateAllStaffViewer = function(){

  var ctx = document.getElementById('allStaffViewer');
  for(var i in staffManager.staff){

ctx.innerHTML += '<p class="staffMemberBox" onclick="interface.selectCurrentStaffMember(this.id)" id="'+i.id+'">'+i.name+':'+i.occupation+'</p>';


  }



}
this.selectCurrentStaffMember=function(id){
document.getElementById(this.currentStaffMember).style.backgroundColor='white';
document.getElementById(id).style.backgroundColor='yellow';
this.currentStaffMember=id

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

this.buildGrillWindow() = function(){
var keys = ['a', 'b', 'c']
var html = '<div id="grillWindow" style="width:100%">';
for(var i =0; i<3; i++){

html+='<div id="grillRow'+keys[i]'" style="width:100%>'
for(var z = 0; z<12; z++){
html+='div id="grillCol'+keys[i]+z.toString()'" class="col-1 grillBox" onclick="interface.selectGrillBox(this.id)"></div>';
}
html+='</div>';
}
html+='</div>';
return html;
}

this.buildGrillControls()=function(){
//1   2   3   4   5   6   7   8   9   10  11  12
// slider temp stock cupboard  stock control mssg


var html = '<div id="grillControlsWindow" style="width:100%">';
html+='<div id="grillTemp" class="col-2">';
html+='<div id="grillSliderContainer">';
html+='<input type="range" min="1" max="200" value="1" class="slider" id="grillTempSlider" onchange="interface.updateGrillSlider(this.value)"></div>'
html+='<p id="grillTempDisplay"></p>'
html+='</div>';

html+='<div class="col-1><p id="grillTempDisplay"></p></div>'

html += '<div class = "col-3" id="grillStockDisplay"><p>Grill stock</p></div>';

html += 'div class = "col-1 button" id="grillControlsRefill" onclick="interface.grillRefill(interface.grillStockCurrent)"><p>Refill</p></div>';
html += 'div class = "col-1 button" id="grillControlsAdd" onclick="interface.grillAdd(interface.grillStockCurrent, interface.currentGrillBox)"><p>Add</p></div>';
html += 'div class = "col-1 button" id="grillControlsFlip" onclick="interface.grillFlip(interface.currentGrillBox)"><p>Flip</p></div>';
html += 'div class = "col-1 button" id="grillControlsRemove" onclick="interface.grillRemove(interface.currentGrillBox)"><p>Remove</p></div>';
html += 'div class = "col-1 button" id="grillControlsClean" onclick="interface.grillClean(interface.currentGrillBox)"><p>Clean</p></div>';

html += 'div class = "col-1" id="grillMssgBox"></div>'



return html;
}

//grill controls and update functions. OMFG SO MANY! Have everything covered so far, though many of the grill.methods that they call are yet to be defined/
//made to work properly
this.grillClean = function(grillBox){

this.grillRemove(grillBox);
kitchen.grill.cleanBoxMaster(grillBox);
this.updateGrillBox(grillBox);
this.addGrillMssg('success');

}


this.grillAdd = function(stock, grillBox){

var mssg = kitchen.grill.addMaster(stock, grillBox)
if(mssg=='success'){
  this.addGrillMssg('success');
  this.updateGrillBox(grillBox);
}

else{
this.addGrillMssg(mssg);
  }

}

this.updateGrillBox(id){

var data = kitchen.grill.requestBoxStatus(id)
var box = document.getElementById(id);
box.style.backgroundColor = data[0];
box.innerHTML = '<p>'+data[1]+'</p><p>'+data[2]+'</p>';


}

this.grillRemove=function(id){
if(kitchen.grill.removeMaster=='nothing there'){
  this.addGrillMssg('nothing there to remove');

}
else{
this.addGrillMssg('success');
this.updateGrillBox(id);

}


}

this.grillRefill = function(id){

  if (kitchen.grill.restockItem(id)===true){
  this.updateGrillStock();

  }
else{

  this.addGrillMssg(id+' was unavailable. Please order more.')

}
}
this.addGrillMssg(mssg){
var html = '<p class="grillMssg">'+mssg+'</p>' + document.getElementById('grillMssgBox').innerHTML
document.getElementById('grillMssgBox').innerHTML=html;
}


this.updateGrillSlider = function(value){
document.getElementById('grillSetTempDisplay').innerHTML=value;
kitchen.grill.set_max_Temperature(value);
}

this.selectGrillBox = function(id){
  this.updateGrillColor(this.currentGrillBox);
  this.currentGrillBox = id;
  document.getElementById(id).style.backgroundColor='yellow';
  }






}
