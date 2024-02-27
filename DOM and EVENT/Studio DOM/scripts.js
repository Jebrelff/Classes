
// Write your JavaScript code here.
// Remember to pay attention to page loading!

 //const button = document.queryselector('button');
 const takeoff = document.getElementById("takeoff");
 const landing = document.getElementById("landing");
 const abort  = document.getElementById("missionAbort");
               
      
  takeoff.addEventListener("click", start);

  function starter(){
   window.onclick = confirm("Confirm that the shuttle is ready for takeof"); 
   
   if( window.onclick == true) {
      
       start() ;
                         
   } 

  }


function start(){
  
   window.onclick = confirm("Confirm that the shuttle is ready for takeof"); 
   
  document.getElementById("flightStatus").innerHTML = "Shuttle in flight",
  document.getElementById('shuttleBackground').style.backgroundColor = 'blue' ,
  document.getElementById("spaceShuttleHeight").innerHTML= "10,000" ;


}

function land(){
   alert("The shuttle is landing. Landing gear engaged.") 
   document.getElementById("flightStatus").innerHTML = "Shuttle has landed",
   document.getElementById('shuttleBackground').style.backgroundColor = 'green' ,
   document.getElementById("spaceShuttleHeight").innerHTML= "0" ;
}

function abortMission(){
   window.onclick = confirm("Confirm that you want to abort the mission.");  
   document.getElementById("flightStatus").innerHTML = "Mission aborted",
   document.getElementById('shuttleBackground').style.backgroundColor = 'green' ,
   document.getElementById("spaceShuttleHeight").innerHTML= "0" ;
}



function up(){
   document.getElementById('rocket').style.paddingBottom = '20px' 
   document.getElementById('rocket').style.paddingTop = '0px'
   document.getElementById("spaceShuttleHeight").innerHTML= "10,000" ;
}
      
function down(){
   document.getElementById('rocket').style.paddingTop = '20px' 
   document.getElementById('rocket').style.paddingBottom = '0px' 
   document.getElementById("spaceShuttleHeight").innerHTML= "0" ;
   
}

function leftward(){
   document.getElementById('rocket').style.paddingright = '20px' 
   document.getElementById('rocket').style.paddingleft = '0px' 
   
}
    
function rightward(){
   document.getElementById('rocket').style.paddingleft = '20px' 
   document.getElementById('rocket').style.paddingright = '0px' 
   
}
