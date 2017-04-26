function locate(){

  var elementValue = document.getElementById("place").value;
  var fields = elementValue.split(/X/);
  var text;

  if(isNaN(fields[0]))
  {
    value1=fields[0];
  }else{
  var value1=parseInt(fields[0]);
}

if(isNaN(fields[1]))
  {
    value2=fields[1];
  }else{
  var value2=parseInt(fields[1]);
}
  
  var no1 = value1.toString(16);
  var no2 = value2.toString(16);
    var newId=no1+""+no2;
    alert(newId);
    var str=document.getElementById(newId).innerHTML;
   alert(str);
    if(str=="*"){
          var colour=document.getElementById(newId).style.color;

     switch(colour) {
    case "gray":
        text = "SClass spaceship";
       document.getElementById("printLocation").innerHTML=text;
        break;
    case "red":
        text = "Winger spaceship";
        document.getElementById("printLocation").innerHTML=text;
        break;
    case "lime":
        text = "AClass spaceship";
        document.getElementById("printLocation").innerHTML=text;
        break;
        case "orange":
        text = "BClass spaceship";
        document.getElementById("printLocation").innerHTML=text;
        break;

    case "purple":
        text = "Angle spaceship";
        document.getElementById("printLocation").innerHTML=text;
        break;
}

    }
    else{
document.getElementById("printLocation").innerHTML="No spaceship present there";
    }
  


}


function randomNO(){
  
  var createNo=Math.floor((Math.random()*2));


  return createNo; 
}

function showSpaceships(){

  var createdrandomNo=randomNO();
 

  if(createdrandomNo==0){
randomNumberGeneratorWinger();
  }
  else if(createdrandomNo==1){

randomNumberGeneratorRotatedWinger();
  }

   var createdrandomNo=randomNO();


  if(createdrandomNo==0){
randomNumberGeneratorAngle();
  }
  else if(createdrandomNo==1){

randomNumberGeneratorRotatedAngle();
  }
   var createdrandomNo=randomNO();

  if(createdrandomNo==0){
randomNumberGeneratorAClass();
  }
  else if(createdrandomNo==1){

randomNumberGeneratorRotatedAClass();
  }
var createdrandomNo=randomNO();


  if(createdrandomNo==0){
randomNumberGeneratorBClass();
  }
  else if(createdrandomNo==1){

randomNumberGeneratorRotatedBClass();
  }
  var createdrandomNo=randomNO();
  

  if(createdrandomNo==0){
randomNumberGeneratorSClass();
  }
  else if(createdrandomNo==1){

randomNumberGeneratorRotatedSClass();
  }

}
function randomNumberGeneratorWinger(){
     var randomNo1=RandomNumber();
     var randomNo2=RandomNumber();
     PrintWinger(randomNo1,randomNo2);
}

function randomNumberGeneratorRotatedWinger(){
    var randomNo1=RandomNumber();
     var randomNo2=RandomNumber();
     PrintWingerRotate(randomNo1,randomNo2);
}

function randomNumberGeneratorAngle(){
      var randomNo1=RandomNumber();
     var randomNo2=RandomNumber();
    PrintAngle(randomNo1,randomNo2);
}

function randomNumberGeneratorRotatedAngle(){
      var randomNo1=RandomNumber();
     var randomNo2=RandomNumber();
    PrintAngleRotate(randomNo1,randomNo2);
}
function randomNumberGeneratorAClass(){
      var randomNo1=RandomNumber();
     var randomNo2=RandomNumber();
     PrintAClassRotate(randomNo1,randomNo2);
}
function randomNumberGeneratorRotatedAClass(){
 var randomNo1=RandomNumber();
     var randomNo2=RandomNumber();
     PrintAClass(randomNo1,randomNo2);
}
function randomNumberGeneratorBClass()
{
 var randomNo1=RandomNumber();
     var randomNo2=RandomNumber();
     PrintBClassRotate(randomNo1,randomNo2);
}
function randomNumberGeneratorRotatedBClass()
{
   var randomNo1=RandomNumber();
     var randomNo2=RandomNumber();
     PrintBClass(randomNo1,randomNo2);
}
function randomNumberGeneratorSClass(){
     var randomNo1=RandomNumber();
     var randomNo2=RandomNumber();
     PrintSClassRotate(randomNo1,randomNo2);
}
function randomNumberGeneratorRotatedSClass(){
   var randomNo1=RandomNumber();
     var randomNo2=RandomNumber();
     PrintSClass(randomNo1,randomNo2);
}
<!--  Funtion to generate random number -->
function RandomNumber(){ 
     var value=Math.floor((Math.random()*11)+1);
     
     return value;
}


<!-- click to NewButton-->
  function newRequest()
        { 
          for (var i = 0; i < 16; i++)
{
  for (var j = 0; j < 16; j++)
  { 

  
   var hex=i.toString(16);
  var hex1=j.toString(16); 
  var divid=hex+''+hex1;
   document.getElementById(divid).innerHTML=" ";


}
}
showSpaceships();
}