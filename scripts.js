let roundReport=[];
function getComputerChoice(){
    let val= Math.floor(Math.random()*3);
    var choice;
    //confirm(val);
    switch(val){
     case 1:
         choice="Paper";
         break
     case 2:
         choice="Scissors";
         break
     default:
         choice="Rock";
        
    }
    return choice.toLocaleLowerCase();
 
 }
 function getPlayerChoice(){
    let playertext=prompt("enter player choice between Rock Paper and Scissors");
    return playertext.toLowerCase();
 }
 function plays( playerSelection,  computerSelection){
      
    
        if(playerSelection==computerSelection){
            alert("You win! " +playerSelection+ " matches with computer choice");
            roundReport.push("Win round");
        }
        else{
            alert("You lose! " +computerSelection+ " beats "+ playerSelection);
            roundReport.push("lose round");
        }
       
    
 }
 wincount=0;
 function game(){
    for(let i=0; i<5;i++){
        plays(getPlayerChoice(), getComputerChoice());
    }
    let i=1;
    for(let report in roundReport){
        
        console.log("round "+ i +" "+roundReport[report]);
        if(roundReport[report]=="Win round"){
            wincount++
        }
       
        i++;
    }
    console.log("---------------------------------");
    if(wincount>2){
        console.log("Player is winner with "+ wincount +"/5");
    }
    else{
        console.log("Computer is winner with "+ (5-wincount)+"/5");
    }
 }