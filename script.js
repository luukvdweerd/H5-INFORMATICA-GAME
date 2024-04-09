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
