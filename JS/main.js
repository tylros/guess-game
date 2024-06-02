let answer = generateRandomNumber();
let guesses = 0;
console.log(answer)
let output = document.getElementById('answer');
let timeOutId;
window.onload =  timeOut()
document.getElementById("submit").onclick = function(){
 let guess = document.getElementById('guess').value;
guesses++
 if(guess == answer){
  output.innerHTML =`${guess} is the number. It took you ${guesses} guesses`;
  
  output.style.color = "green";
  output.style.textAlign ="center"
  clearTimeout(timeOutId)
  timeOutId = timeOut(); 
  reset();
 
 }else if(guess < answer){
  output.innerHTML = 'Too small!!';
  guess.innerHTML = " "
  output.style.color = "red"
 }else{
  output.innerHTML = 'Too large!!';
  guess.innerHTML = " "
  output.style.color = "red"
 }
}
// generating random number
function generateRandomNumber(){
 return Math.floor(Math.random() * 10 + 1)
}
// reset game when the player wins
function reset(){
 answer = generateRandomNumber()
 guesses = 0;

  
}
function timeOut(){
  setTimeout(function(){
    alert(`Oops! You have run out of time. The answer is ${answer}`); 
    reset();
    timeOut();

  }, 10000)
}
 