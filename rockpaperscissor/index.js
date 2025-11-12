let userScore = 0;
let compScore = 0;
let userwinCounter = document.querySelector("#user-score");
let compwinCounter =document.querySelector("#comp-score");
let msg = document.querySelector("#msg");
let resetbtn = document.querySelector("#reset");

const choices = document.querySelectorAll(".choice");
resetbtn.addEventListener("click",()=>{
    userScore = 0;
    compScore = 0;
    userwinCounter.innerText = userScore;
    compwinCounter.innerText = compScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "rgb(79, 25, 122)";

});

const getComputerchoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const gameDraw = () =>{
    msg.innerText = "game DRAW Try Again!";
     msg.style.backgroundColor = "rgb(79, 25, 122)";
}
const showwinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        msg.innerText = `you won!. Your-${userChoice}- beats -${compChoice}-`;
        
        userScore++;
        userwinCounter.innerText = userScore;
        msg.style.backgroundColor = "black";
    }
    else{
        msg.innerText = `you lost -${compChoice}- beats your-${userChoice}-`;
        compScore++;
        compwinCounter.innerText = compScore;
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userChoice) => {
    const compChoice = getComputerchoice();
    let userWin = true;
    if(userChoice === compChoice){
        gameDraw();
    }
    else{
        if(userChoice === "rock"){
            //options paper,scissors
         userWin = compChoice === "paper"?false:true;
        }
        else if(userChoice === "paper"){
            //options scissors,rock
            userWin = compChoice === "rock"?true:false; 
        }else{
            //options paper,rock
            userWin = compChoice === "rock"?false:true; 
        }
    
    showwinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
       
        playgame(userChoice);
    });

});