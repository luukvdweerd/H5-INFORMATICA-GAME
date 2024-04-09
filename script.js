document.addEventListener("DOMContentLoaded", function() {
    const ball = document.getElementById('ball');
    const goal = document.getElementById('goal');
    const gameContainer = document.getElementById('game-container');

    // Beweging van de bal
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        const ballStyle = window.getComputedStyle(ball);
        let ballLeft = parseInt(ballStyle.getPropertyValue('left'));
        let ballTop = parseInt(ballStyle.getPropertyValue('top'));

        switch (key) {
            case 'ArrowUp':
                ballTop -= 10;
                break;
            case 'ArrowDown':
                ballTop += 10;
                break;
            case 'ArrowLeft':
                ballLeft -= 10;
                break;
            case 'ArrowRight':
                ballLeft += 10;
                break;
        }

        // Controleer of de nieuwe positie van de bal binnen het game-container valt
        if (ballLeft >= 0 && ballLeft <= gameContainer.clientWidth - ball.clientWidth &&
            ballTop >= 0 && ballTop <= gameContainer.clientHeight - ball.clientHeight) {
            ball.style.left = ballLeft + 'px';
            ball.style.top = ballTop + 'px';
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
