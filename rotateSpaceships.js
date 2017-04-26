<!-- Winger spaceship-->
function PrintWinger(random1,random2) { 
  
       for (var i = random1; i < (random1+5); i++){
           for (var j = random2; j < (random2+3); j++){
                var hex=i.toString(16);
                var hex1=j.toString(16); 
                var divid=hex+''+hex1;
                  if(((j!=(random2+1)) && (i!=(random1+2)))|| ((i==(random1+2)) && (j==(random2+1))))
                  {
       
                      if(document.getElementById(divid).innerHTML!="*")
                       {
                             document.getElementById(divid).innerHTML="*";
                             
                             document.getElementById(divid).style.color="red";
                             
                       }
                      else
                       {
                              randomNumberGeneratorWinger();
                       }
                  }
                
             }  
        }
}

<!-- RotatedWinger spaceship-->

function PrintWingerRotate(random1,random2) { 

       for (var i = random1; i < (random1+5); i++){
           for (var j = random2; j < (random2+3); j++){
                var hex=i.toString(16);
                var hex1=j.toString(16); 
                var divid=hex1+''+hex;
                  if(((j!=(random2+1)) && (i!=(random1+2)))|| ((i==(random1+2)) && (j==(random2+1))))
                  {
       
                      if(document.getElementById(divid).innerHTML!="*")
                       {
                             document.getElementById(divid).innerHTML="*";
                             
                             document.getElementById(divid).style.color="red";
                             
                       }
                      else
                       {
                              randomNumberGeneratorWinger();
                       }
                  }
                
    
             }   
        }

}



<!-- Angle spaceship-->

function PrintAngle(random3,random4) { 
      var testValue;
     
 mainloop:     for (var i = random3; i < (random3+4); i++){
            for (var j = random4; j < (random4+3); j++){  

                 var hex=i.toString(16);
                 var hex1=j.toString(16); 
                 var divid=hex+''+hex1;
                 if((j==random4) || (i==(random3+3)))
                {
                   
                   if(document.getElementById(divid).innerHTML!=="*")
                  {
                        testValue=true;
                           
                             
                  }
                 else{
                      testValue=false; 
                       break mainloop;
        
                  }
    }
  }
}

if(testValue==true){
  
for (var i = random3; i < (random3+4); i++)
{
  for (var j = random4; j < (random4+3); j++)
  {  

    var hex=i.toString(16);
  var hex1=j.toString(16); 
  var divid=hex+''+hex1;
  if((j==random4) || (i==(random3+3))){
  document.getElementById(divid).innerHTML="*";
   document.getElementById(divid).style.color="purple";
  }
}
}
}
else 
{
  randomNumberGeneratorAngle();
}

}


<!--Rotated Angel Spaceship-->
function PrintAngleRotate(random3,random4) { 
      var testValue;
   
 mainloop:     for (var i = random3; i < (random3+4); i++){
            for (var j = random4; j < (random4+3); j++){  

                 var hex=i.toString(16);
                 var hex1=j.toString(16); 
                 var divid=hex1+''+hex;
                 if((j==random4) || (i==(random3+3)))
                {
                  
                   if(document.getElementById(divid).innerHTML!=="*")
                  {
                        testValue=true;
                           
                             
                  }
                 else{
                      testValue=false; 
                       break mainloop;
        
                  }
    }
  }
}

if(testValue==true){
  
for (var i = random3; i < (random3+4); i++)
{
  for (var j = random4; j < (random4+3); j++)
  {  

    var hex=i.toString(16);
  var hex1=j.toString(16); 
  var divid=hex1+''+hex;
  if((j==random4) || (i==(random3+3))){
  document.getElementById(divid).innerHTML="*";
   document.getElementById(divid).style.color="purple";
  }
}
}
}
else 
{
  randomNumberGeneratorAngle();
}

}


<!-- AClass spaceship-->
function PrintAClass(random5,random6) {  

mainloop:  for (var i = random5; i < (random5+4); i++)
{
  for (var j = random6; j < (random6+3); j++)
  { 
  var hex=i.toString(16);
  var hex1=j.toString(16); 
  var divid=hex+''+hex1;
   if(((i==random5)&&(j==random6))||((i==random5)&&(j==(random6+2)))||((i==(random5+1))&&(j==(random6+1)))||((i==(random5+3))&&(j==(random6+1)))) 
      {



      
     }
     else{
  
             if(document.getElementById(divid).innerHTML!="*")
       {
       testValue=true;  

           }
       else{
         testValue=false; 
        break mainloop;
        
       }

        }
 
  } 
}
if(testValue==true){
for (var i = random5; i < (random5+4); i++)
{
  for (var j = random6; j < (random6+3); j++)
  {  

    var hex=i.toString(16);
  var hex1=j.toString(16); 
  var divid=hex+''+hex1;
   if(((i==random5)&&(j==random6))||((i==random5)&&(j==(random6+2)))||((i==(random5+1))&&(j==(random6+1)))||((i==(random5+3))&&(j==(random6+1)))) 
      {
 
  }
  else
  {
    
     document.getElementById(divid).innerHTML="*";
        document.getElementById(divid).style.color="lime";
  }
}
}
}
else 
{
  randomNumberGeneratorAClass();
}

}

<!--Rotated AClass Spaceship-->


function PrintAClassRotate(random5,random6) {  

mainloop:  for (var i = random5; i < (random5+4); i++)
{
  for (var j = random6; j < (random6+3); j++)
  { 
  var hex=i.toString(16);
  var hex1=j.toString(16); 
  var divid=hex1+''+hex;
   if(((i==random5)&&(j==random6))||((i==random5)&&(j==(random6+2)))||((i==(random5+1))&&(j==(random6+1)))||((i==(random5+3))&&(j==(random6+1)))) 
      {



       
     }
     else{
     
             if(document.getElementById(divid).innerHTML!="*")
       {
       testValue=true;  

           }
       else{
         testValue=false; 
        break mainloop;
        
       }

        }
 
  } 
}
if(testValue==true){
for (var i = random5; i < (random5+4); i++)
{
  for (var j = random6; j < (random6+3); j++)
  {  

    var hex=i.toString(16);
  var hex1=j.toString(16); 
  var divid=hex1+''+hex;
   if(((i==random5)&&(j==random6))||((i==random5)&&(j==(random6+2)))||((i==(random5+1))&&(j==(random6+1)))||((i==(random5+3))&&(j==(random6+1)))) 
      {
 
  }
  else
  {
    
     document.getElementById(divid).innerHTML="*";
             document.getElementById(divid).style.color="lime";
  }
}
}
}
else 
{
  randomNumberGeneratorAClass();
}

}



<!-- BClass spaceship-->

function PrintBClass(random7,random8) {  

mainloop:  for (var i = random7; i < (random7+5); i++)
{
  for (var j = random8; j < (random8+3); j++)
  { 
  var hex=i.toString(16);
  var hex1=j.toString(16); 
  var divid=hex+''+hex1;
   if(((i==random7)&&(j==(random8+2)))||((i==(random7+1))&&(j==(random8+1)))||((i==(random7+2))&&(j==(random8+2)))||((i==(random7+3))&&(j==(random8+1)))||((i==(random7+4))&&(j==(random8+2)))) 
      {
      
     }
     else{
     
       if(document.getElementById(divid).innerHTML!="*")
       {
       testValue=true;  

           }
       else{
         testValue=false; 
        break mainloop;
        
       }

        }
     }
 
  } 

  if(testValue==true)
  {
    for (var i = random7; i < (random7+5); i++)
{
  for (var j = random8; j < (random8+3); j++)
  { 
  var hex=i.toString(16);
  var hex1=j.toString(16); 
  var divid=hex+''+hex1;
   if(((i==random7)&&(j==(random8+2)))||((i==(random7+1))&&(j==(random8+1)))||((i==(random7+2))&&(j==(random8+2)))||((i==(random7+3))&&(j==(random8+1)))||((i==(random7+4))&&(j==(random8+2)))) 
      {
     
     }
     else{
     
       
        document.getElementById(divid).innerHTML="*";
        document.getElementById(divid).style.color="orange";
        }
     }
 
  } 
  }else 
{
  randomNumberGeneratorBClass();
}


}
<!--Rotated BClass Spaceship-->

function PrintBClassRotate(random7,random8) {  

mainloop:  for (var i = random7; i < (random7+5); i++)
{
  for (var j = random8; j < (random8+3); j++)
  { 
  var hex=i.toString(16);
  var hex1=j.toString(16); 
  var divid=hex1+''+hex;
   if(((i==random7)&&(j==(random8+2)))||((i==(random7+1))&&(j==(random8+1)))||((i==(random7+2))&&(j==(random8+2)))||((i==(random7+3))&&(j==(random8+1)))||((i==(random7+4))&&(j==(random8+2)))) 
      {
      
     }
     else{
  
       if(document.getElementById(divid).innerHTML!="*")
       {
       testValue=true;  

           }
       else{
         testValue=false; 
        break mainloop;
        
       }

        }
     }
 
  } 

  if(testValue==true)
  {
    for (var i = random7; i < (random7+5); i++)
{
  for (var j = random8; j < (random8+3); j++)
  { 
  var hex=i.toString(16);
  var hex1=j.toString(16); 
  var divid=hex1+''+hex;
   if(((i==random7)&&(j==(random8+2)))||((i==(random7+1))&&(j==(random8+1)))||((i==(random7+2))&&(j==(random8+2)))||((i==(random7+3))&&(j==(random8+1)))||((i==(random7+4))&&(j==(random8+2)))) 
      {
      
     }
     else{
     
       
        document.getElementById(divid).innerHTML="*";
        document.getElementById(divid).style.color="orange";
        }
     }
 
  } 
  }else 
{
  randomNumberGeneratorBClass();
}


}


<!-- SClass spaceship-->


function PrintSClass(random9,random10) {  
    var testValue;

mainloop: for (var i = random9; i < (random9+5); i++)
{
  for (var j = random10; j < (random10+4); j++)
  {  var hex=i.toString(16);
  var hex1=j.toString(16); 
  var divid=hex+''+hex1;
 
  if(((i==random9)&&(j==(random10+1)))||((i==random9)&&(j==(random10+2)))||((i==(random9+1))&&(j==random10))||((i==(random9+2))&&(j==(random10+1)))||((i==(random9+2))&&(j==(random10+2)))||((i==(random9+3))&&(j==(random10+3)))||((i==(random9+4))&&(j==(random10+1)))  ||((i==(random9+4))&&(j==(random10+2))))
      {


   if(document.getElementById(divid).innerHTML!="*")
       {
       testValue=true;  

           }
       else{
         testValue=false; 
        break mainloop;
        
       }
     }}}

if(testValue==true){
for (var i = random9; i < (random9+5); i++)
{
  for (var j = random10; j < (random10+4); j++)
  {  

    var hex=i.toString(16);
  var hex1=j.toString(16); 
  var divid=hex+''+hex1;
  if(((i==random9)&&(j==(random10+1)))||((i==random9)&&(j==(random10+2)))||((i==(random9+1))&&(j==random10))||((i==(random9+2))&&(j==(random10+1)))||((i==(random9+2))&&(j==(random10+2)))||((i==(random9+3))&&(j==(random10+3)))||((i==(random9+4))&&(j==(random10+1)))  ||((i==(random9+4))&&(j==(random10+2))))
      {
  document.getElementById(divid).innerHTML="*";
  document.getElementById(divid).style.color="gray";
  }
}
}
}
else 
{
  randomNumberGeneratorSClass();
}

}


<!--Rotated BClass Spaceship-->

function PrintSClassRotate(random9,random10) {  
    var testValue;
 
mainloop: for (var i = random9; i < (random9+5); i++)
{
  for (var j = random10; j < (random10+4); j++)
  {  var hex=i.toString(16);
  var hex1=j.toString(16); 
  var divid=hex1+''+hex;
 
  if(((i==random9)&&(j==(random10+1)))||((i==random9)&&(j==(random10+2)))||((i==(random9+1))&&(j==random10))||((i==(random9+2))&&(j==(random10+1)))||((i==(random9+2))&&(j==(random10+2)))||((i==(random9+3))&&(j==(random10+3)))||((i==(random9+4))&&(j==(random10+1)))  ||((i==(random9+4))&&(j==(random10+2))))
      {


   if(document.getElementById(divid).innerHTML!="*")
       {
       testValue=true;  

           }
       else{
         testValue=false; 
        break mainloop;
        
       }
     }}}

if(testValue==true){
for (var i = random9; i < (random9+5); i++)
{
  for (var j = random10; j < (random10+4); j++)
  {  

    var hex=i.toString(16);
  var hex1=j.toString(16); 
  var divid=hex1+''+hex;
  if(((i==random9)&&(j==(random10+1)))||((i==random9)&&(j==(random10+2)))||((i==(random9+1))&&(j==random10))||((i==(random9+2))&&(j==(random10+1)))||((i==(random9+2))&&(j==(random10+2)))||((i==(random9+3))&&(j==(random10+3)))||((i==(random9+4))&&(j==(random10+1)))  ||((i==(random9+4))&&(j==(random10+2))))
      {
  document.getElementById(divid).innerHTML="*";
  document.getElementById(divid).style.color="gray";
  }
}
}
}
else 
{
  randomNumberGeneratorSClass();
}

}
