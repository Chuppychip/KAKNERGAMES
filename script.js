document.addEventListener("DOMContentLoaded", function() {
    const ball = document.getElementById('ball');
    const goal = document.getElementById('goal');
    const gameContainer = document.getElementById('game-container');
    const gameContainerRect = gameContainer.getBoundingClientRect();

    // Beweging van de bal
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        const ballStyle = getComputedStyle(ball);
        const ballLeft = parseInt(ballStyle.left);
        const ballTop = parseInt(ballStyle.top);

        switch (key) {
            case 'ArrowUp':
                if (ballTop > gameContainerRect.top) {
                    ball.style.top = (ballTop - 10) + 'px';
                } else {
                    alert('GVD, jij bent KAKNER slecht in dit spel. Da hell..');
                }
                break;
            case 'ArrowDown':
                if (ballTop < gameContainerRect.bottom - ball.offsetHeight) {
                    ball.style.top = (ballTop + 10) + 'px';
                } else {
                    alert('GVD, jij bent KAKNER slecht in dit spel. Da hell..');
                }
                break;
            case 'ArrowLeft':
                if (ballLeft > gameContainerRect.left) {
                    ball.style.left = (ballLeft - 10) + 'px';
                } else {
                    alert('GVD, jij bent KAKNER slecht in dit spel. Da hell..');
                }
                break;
            case 'ArrowRight':
                if (ballLeft < gameContainerRect.right - ball.offsetWidth) {
                    ball.style.left = (ballLeft + 10) + 'px';
                } else {
                    alert('GVD, jij bent KAKNER slecht in dit spel. Da hell..');
                }
                break;
        }
        // Controleer winvoorwaarde
        if (checkCollision(ball, goal)) {
            alert('AH WAT DE FAK, JIJ KAN WAT?!?!?');
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

#ball {
    width: 50px;
    height: 50px;
    background-color: red;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
