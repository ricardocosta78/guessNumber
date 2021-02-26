'use strict'
let title = document.querySelector('.title');
let guess = Number(document.querySelector('.guess').value);
let number = document.querySelector('.number');
let check = document.querySelector('.check');
let message = document.querySelector('.message');
let score = 20;
let highscore = 0;
let random =Math.floor(( Math.random()*100)+1);
let again = document.querySelector('.again');
check.addEventListener('click', function(){
    
    let guess = Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent = "No Number"
    }else if (guess === random){
        document.querySelector('.message').textContent = "You Win!!!"
        document.querySelector('.title').textContent = "You Win!!!"
        document.querySelector('body').style.backgroundImage = 'linear-gradient(#97CD6Add,#97CD6Add),url("bg.jpg")';
        document.querySelector('.number').textContent = random;
        again.addEventListener('click', restart);
        
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }else{
            document.querySelector('.highscore').textContent = highscore;
        }
    }else if(guess > random){
        if (score >1){
            document.querySelector('.message').textContent = "Too Higher"
            score --;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = '#BD5943';
        }else{
            document.querySelector('.message').textContent = "LOOSER!!!"
            document.querySelector('.title').textContent = "You Loose";
            document.querySelector('body').style.backgroundImage = 'linear-gradient(rgba(31, 38, 35, 0.87),rgba(31, 38, 135, 0.47)),url("bg.jpg")';
            document.querySelector('.score').textContent = 0;
            document.querySelector('.title').style.color ="black";
            document.querySelector('#main:before').style.backgroundColor = 'rgba(255,255,255,.7)';
        }
        
    }else if(guess < random){
        if (score >1){
            document.querySelector('.message').textContent = "Too Lower"
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = '#FA8D74';
        }else{
            document.querySelector('.message').textContent = "LOOSER!!!"
            document.querySelector('.title').textContent = "You Loose!!!"
            document.querySelector('body').style.backgroundImage = 'linear-gradient(rgba(31, 38, 35, 0.87),rgba(31, 38, 135, 0.47)),url("bg.jpg")';
            document.querySelector('.score').textContent = 0;
            document.querySelector('.title').style.color ="black";
            document.querySelector('#main, :before').style.backgroundColor = 'white';
        }
    }
})



function restart(){
    document.querySelector('.message').textContent = "Start ...";
    document.querySelector('.guess').value = "";
    document.querySelector('.number').textContent = "";
    random =Math.floor(( Math.random()*100)+1);
    document.querySelector('body').style.backgroundColor = '#f3e15c';
    document.querySelector('.title').textContent = "Guess my Number";
    score = 20;
    document.querySelector('.score').textContent = score;

}