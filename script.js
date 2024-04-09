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
                ball.style.top = (ballTop - 10) + 'px';
                break;
            case 'ArrowDown':
                ball.style.top = (ballTop + 10) + 'px';
                break;
            case 'ArrowLeft':
                ball.style.left = (ballLeft - 10) + 'px';
                break;
            case 'ArrowRight':
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
// In de checkCollision functie, voeg logica toe om te controleren op botsingen met obstakels.
function checkCollision(ball, goal) {
    const ballRect = ball.getBoundingClientRect();
    const goalRect = goal.getBoundingClientRect();
    const obstacles = document.querySelectorAll('.obstacle');

    for (let obstacle of obstacles) {
        const obstacleRect = obstacle.getBoundingClientRect();
        if (!(ballRect.right < obstacleRect.left || 
              ballRect.left > obstacleRect.right || 
              ballRect.bottom < obstacleRect.top || 
              ballRect.top > obstacleRect.bottom)) {
            return false; // Als er een botsing met een obstakel is, return false
        }
    }

    return !(ballRect.right < goalRect.left || 
             ballRect.left > goalRect.right || 
             ballRect.bottom < goalRect.top || 
             ballRect.top > goalRect.bottom);
}
