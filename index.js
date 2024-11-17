// Generate a random number between 1 and 9
var a = Math.floor(Math.random() * 9) + 1;
var score = 9;
console.log(a);

function guessNumber(number) {
    if (number === a) {
        alert("Congratulations! You guessed the correct number!");
        resetGame();
    } else {
        var d = document.getElementById("chan");
        score--;
        var c = score;
        switch (c) {
            case 0:
                d.innerHTML = `Score: ${score} &#128128;`; // Skull emoji
                break;
            case 1:
                d.innerHTML = `Score: ${score} &#129398;`; // Dizzy face
                break;
            case 2:
                d.innerHTML = `Score: ${score} &#129397;`; // Frowning face
                break;
            case 3:
                d.innerHTML = `Score: ${score} &#128127;`; // Ghost
                break;
            case 4:
                d.innerHTML = `Score: ${score} &#129402;`; // Worried face
                break;
            case 5:
                d.innerHTML = `Score: ${score} &#128560;`; // Shushed face
                break;
            case 6:
                d.innerHTML = `Score: ${score} &#129303;`; // Relieved face
                break;
            case 7:
                d.innerHTML = `Score: ${score} &#129392;`; // Smiling face
                break;
            case 8:
                d.innerHTML = `Score: ${score} &#129395;`; // Smiling face with halo
                break;
            case 9:
                d.innerHTML = `Score: ${score} &#128526;`; // Cool face with sunglasses
                break;
        }
        if (score <= 0) {
            alert("Game Over! You've run out of tries.");
            resetGame();
        }
    }
}

function resetGame() {
    a = Math.floor(Math.random() * 9) + 1; // Generate a new random number between 1 and 9
    score = 9; // Reset the score
    document.getElementById("chan").textContent = `Score: ${score}`; // Reset score display
}
