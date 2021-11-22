/*
Author(s): David Walker, 
        Deidre Cochrane,
        Frederica Forbes, 
        Romario Stewart
FormFunctions.js
*/
// create a global array
let PlayersData = new Array();

function Register()
{
     


    // get value from the input text
    let firstname = document.getElementById('Firstname_box').value;
    let lastname = document.getElementById('Lastname_box').value;
    let email = document.getElementById('Email_box').value;
    let DOB = document.getElementById('DOB_box').value;

    //Get selected gender from form input type="radio"
    //not sure how
    let Gender = document.querySelector('input[value = Female]:checked');
   
    /*if(document.getElementById('Female_box').)
        let Gender = document.getElementsById('Female_box').va;*/
    
    
    let Age = ageCalculator(DOB); 

    
    //Calculating age based Date passed in user input
    function ageCalculator(userinput) {  

        var userinput = document.getElementById("DOB_box").value;  
        var dob = new Date(userinput);  
          
        //calculate month difference from current date in time  
        var month_diff = Date.now() - dob.getTime();  
          
        //convert the calculated difference in date format  
        var age_dt = new Date(month_diff);   
          
        //extract year from date      
        var year = age_dt.getUTCFullYear();  
          
        //now calculate the age of the user  
        var age = Math.abs(year - 1970);  
          
       return age;
        
    }  
    //let age = document.getElementById('Age_box').value;
    
    // append data to the array
    console.log(firstname, lastname, email, DOB, Age);
    PlayersData.push(firstname + " " + lastname + " " + email + " " + DOB + " " + Age);
    console.table(PlayersData);
   
  
        
        document.getElementById('Firstname_box').disabled = true;
        document.getElementById('Lastname_box').disabled = true;
        document.getElementById("Email_box").disabled = true;
        document.getElementById('DOB_box').disabled = true;
        document.getElementById('Female_box').disabled = true;
        document.getElementById('Male_box').disabled = true;
        document.getElementById("Start_button").disabled = false;
        document.getElementById("End_button").disabled = false;
    
    
}

//Displays age based on date chosen in a text field
function age()
{
    let DOB = document.getElementById('DOB_box').value;
     
    let Age = ageCalculator(DOB); 
    
        
    
        function ageCalculator(userinput) {  
            var userinput = document.getElementById("DOB_box").value;  
            var dob = new Date(userinput);  
              
            //calculate month difference from current date in time  
            var month_diff = Date.now() - dob.getTime();  
              
            //convert the calculated difference in date format  
            var age_dt = new Date(month_diff);   
              
            //extract year from date      
            var year = age_dt.getUTCFullYear();  
              
            //now calculate the age of the user  
            var age = Math.abs(year - 1970);  
              
           return age;
            
        }  
        let age = document.getElementById("Age_box");
        age.innerHTML = Age;

}



let mul;
//Starts the game and enables the the accept and next buttons as well as display the eqaution
function PlayGame() {
    //randomly generate two (2) integer numbers, one number must be any number from 1 to 9 and the other 1 to 5
    var num1; 
    num1 = Math.floor(Math.random() * 9) + 1;

    var num2;
    num2 = Math.floor(Math.random() * 5) + 1;

      mul = Number(num1) * Number(num2);
    
    

        let equation = document.getElementById("GuessEqu"); 
    
        let guessEqu = ("Guess: " + num1 + "x" + num2 + "=" + "?\n");
        equation.innerHTML = guessEqu;

        document.getElementById("Accept").disabled = false;
        document.getElementById("Next").disabled = false;
        document.getElementById("PlayAreafield").disabled = false;
}

//check and validate the answer provided by the player
function CheckAnswer() {

    let guess = document.getElementById("PlayArea_field").value;
       // guess = Number(guess);
        if (guess == mul)
        {alert(guess + " is a correct answer");}else{alert(guess + " is an incorrect answer");}
        showAll(); 
}



//calculate and display total number of questions, the number of correct answers, the percentage score,
// and the player’s name, current date, in the ‘showpercentage’ textarea
function findPercentageScore() {

}

//display all the data within the global array in the ‘showallplayers’ textarea 
function showAll() { 

}
//will display two frequency bar charts based on the percentage score, and gender 
function showfreq() {

}