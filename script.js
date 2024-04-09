// script.js
document.addEventListener("DOMContentLoaded", function() {
    const ball = document.getElementById('ball');
    const goal = document.getElementById('goal');
    const gameContainer = document.getElementById('game-container');

    // Beweging van de bal
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        const ballStyle = getComputedStyle(ball);
        const ballLeft = parseInt(ballStyle.left);
        const ballTop = parseInt(ballStyle.top);

        switch (key) {
            case 'ArrowUp':
                if (ballTop > 0) // Zorg ervoor dat de bal niet buiten het spelgebied gaat
                    ball.style.top = (ballTop - 10) + 'px';
                break;
            case 'ArrowDown':
                if (ballTop < gameContainer.clientHeight - ball.clientHeight) // Zorg ervoor dat de bal niet buiten het spelgebied gaat
                    ball.style.top = (ballTop + 10) + 'px';
                break;
            case 'ArrowLeft':
                if (ballLeft > 0) // Zorg ervoor dat de bal niet buiten het spelgebied gaat
                    ball.style.left = (ballLeft - 10) + 'px';
                break;
            case 'ArrowRight':
                if (ballLeft < gameContainer.clientWidth - ball.clientWidth) // Zorg ervoor dat de bal niet buiten het spelgebied gaat
                    ball.style.left = (ballLeft + 10) + 'px';
                break;
        }
        // Controleer winvoorwaarde
        if (checkCollision(ball, goal)) {
            alert('Gefeliciteerd! Je hebt gewonnen!');
        }
    });

    // Controleer of de bal het doel bereikt
    function checkCollision(ball, goal) {
        const ballRect = ball.getBoundingClientRect();
        const goalRect = goal.getBoundingClientRect();
        return !(ballRect.right < goalRect.left || 
                 ballRect.left > goalRect.right || 
                 ballRect.bottom < goalRect.top || 
                 ballRect.top > goalRect.bottom);
    }
});
// Voeg de volgende code toe aan script.js om de obstakels heen en weer te laten bewegen
const obstacle1 = document.getElementById('obstacle1');
const obstacle2 = document.getElementById('obstacle2');
let obstacle1Direction = 1; // Richting van beweging (1 voor rechts, -1 voor links)
let obstacle2Direction = -1; // Richting van beweging (1 voor rechts, -1 voor links)

function moveObstacles() {
    const obstacle1Left = parseInt(getComputedStyle(obstacle1).left);
    const obstacle2Left = parseInt(getComputedStyle(obstacle2).left);

    // Beweeg obstakel 1
    obstacle1.style.left = (obstacle1Left + obstacle1Direction * 5) + 'px';
    if (obstacle1Left <= 0 || obstacle1Left >= gameContainer.clientWidth - obstacle1.clientWidth) {
        obstacle1Direction *= -1; // Omkeren van richting bij bereiken van de rand
    }

    // Beweeg obstakel 2
    obstacle2.style.left = (obstacle2Left + obstacle2Direction * 3) + 'px';
    if (obstacle2Left <= 0 || obstacle2Left >= gameContainer.clientWidth - obstacle2.clientWidth) {
        obstacle2Direction *= -1; // Omkeren van richting bij bereiken van de rand
    }
}

setInterval(moveObstacles, 30); // Roep moveObstacles functie elke 30 milliseconden op
