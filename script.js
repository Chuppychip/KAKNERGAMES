document.addEventListener("DOMContentLoaded", function() {
    const ball = document.getElementById('ball');
    const gameContainer = document.getElementById('game-container');
    const gameContainerRect = gameContainer.getBoundingClientRect();
    const goal = createGoal();

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

    // Functie om willekeurige coördinaten te genereren binnen het speelvak
    function getRandomPosition() {
        // Breedte en hoogte van het speelvak
        var maxWidth = gameContainer.offsetWidth;
        var maxHeight = gameContainer.offsetHeight;

        // Willekeurige x- en y-coördinaten
        var randomX = Math.floor(Math.random() * (maxWidth - 50)); // 50 is de breedte van het doel
        var randomY = Math.floor(Math.random() * (maxHeight - 50)); // 50 is de hoogte van het doel

        return [randomX, randomY];
    }

    // Functie om een doel te maken
    function createGoal() {
        // Doel element maken
        const goal = document.createElement('div');
        goal.classList.add('goal');
        gameContainer.appendChild(goal);

        // Positie instellen
        const position = getRandomPosition();
        goal.style.left = position[0] + 'px';
        goal.style.top = position[1] + 'px';

        return goal;
    }

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
