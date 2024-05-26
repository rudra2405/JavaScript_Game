let choices = document.querySelectorAll('.div-inner');
const msgID = document.querySelector('#msg');

let userScore = 0;
let compScore = 0; 

const userScorePara = document.querySelector('#User-score');
const compScorePara = document.querySelector('#Computer-score');

const drawCondition = ()=>{
   msgID.innerText = 'Game is Draw, Please Play Again';
   msgID.style.backgroundColor = 'black';
}
const genCompChoice = ()=>{
    let options = ['rock','paper','scissors'];
    let rindex = Math.floor(Math.random() * 3)
    return options[rindex];
}
const winnerGame = (userWin, userChoice, compChoice)=> {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msgID.innerText = `You Win. Your ${userChoice} beat ${compChoice}`;
        msgID.style.backgroundColor = 'green';
        document.querySelector('body')
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msgID.innerText = `You Lose. ${compChoice} beats Your ${userChoice}`;
        msgID.style.backgroundColor = 'red';
    }
}
const playGame = (userChoice)=> {
    
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
          drawCondition();
    }
    else{
        let userWin = true;
        if(userChoice === 'rock'){
          userWin  =  compChoice === 'paper' ? false : true;
        }
        else if(userChoice === 'paper'){
           userWin =  compChoice === 'scissors' ? false : true ; 
        }
        else{
            userWin = compChoice === 'rock' ?  false : true; 
        }
        winnerGame(userWin, userChoice, compChoice);
    }
}

choices.forEach((e)=>{
    e.addEventListener('click',()=>{
        const userChoice = e.getAttribute('id')
        playGame(userChoice);
    })
})