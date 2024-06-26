
let randomNumber = Math.floor((Math.random()*10)+1);
let uI=Number(document.getElementById("userGuess").value);
let count=0;
function guess() { 
    count++;
    if(count<=2){
    
    if(randomNumber==uI){
        
        alert("උබ හරි බන්!!");
    }else if(randomNumber<uI){
        
        alert("වැරදී!!!ඔයාගෙ නම්බරේ ලොකු වැඩී මෙයා.");
     
     } else{
        
            alert("වැරදී!!!ඔයාගෙ නම්බරේ පොඩි වැඩී මෙයා.");
            }

     
       
     }else{
     
        document.getElementById("userGuess").disabled=true;
        
        alert("වැරදී!!!වැරදී!!!උබ පරාදයි පුතේ.");}

    }


        

    

