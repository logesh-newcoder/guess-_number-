// Randomly select a number between 1 and 9
var a = Math.floor(Math.random() * 10);
var score = 10;
console.log(a);
// Function to handle button clicks
function na1() { guessNumber(1); }
function na2() { guessNumber(2); }
function na3() { guessNumber(3); }
function na4() { guessNumber(4); }
function na5() { guessNumber(5); }
function na6() { guessNumber(6); }
function na7() { guessNumber(7); }
function na8() { guessNumber(8); }
function na9() { guessNumber(9); }

function guessNumber(number) {
    if (number === a) {
        alert("Congratulations! You guessed the correct number!");
        resetGame();
    } else {
        var d=document.getElementById("chan");
        score--;
        var c=score;
        switch(c){
            case 0:
            d.innerHTML = `Score: ${score}`+"&#128128";
            break;    
            case 1:
                d.innerHTML = `Score: ${score}`+"&#129398";
            break;
            case 2:
                d.innerHTML = `Score: ${score}`+"&#129397";
            break;    
            case 3:
                d.innerHTML = `Score: ${score}`+"&#128127";
                break;
            case 4:
                d.innerHTML = `Score: ${score}`+"&#129402";
                break;    
            case 5:
                d.innerHTML = `Score: ${score}`+"&#128560";
                break;
            case 6:
                d.innerHTML = `Score: ${score}`+"&#129303";
                break;    
            case 7:
                d.innerHTML = `Score: ${score}`+"&#129392";
                break;
            case 8:
                d.innerHTML= `Score: ${score}`+ "&#129395";
                break;    
            case 9:
                d.innerHTML = `Score: ${score}`+"&#128526";
                break;
        }
        if (score <= 0) {
            alert("Game Over! You've run out of tries.");
            resetGame();
        }
    }
}

function resetGame() {
    a= Math.floor(Math.random() * 10);
    score = 10;
    document.getElementById("chan").textContent = `Score: ${score}`;
}
