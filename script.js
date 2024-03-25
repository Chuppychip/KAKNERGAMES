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

document.addEventListener("DOMContentLoaded", function() {
    // Functie om willekeurige coördinaten te genereren binnen het speelvak
    function getRandomPosition() {
        // Breedte en hoogte van het speelvak
        var maxWidth = document.getElementById("game-container").offsetWidth;
        var maxHeight = document.getElementById("game-container").offsetHeight;

        // Willekeurige x- en y-coördinaten
        var randomX = Math.floor(Math.random() * (maxWidth - 50)); // 50 is de breedte van het doel
        var randomY = Math.floor(Math.random() * (maxHeight - 50)); // 50 is de hoogte van het doel

        return [randomX, randomY];
    }

    // Doelen selecteren en hun positie instellen
    var goals = document.getElementsByClassName("goal");
    for (var i = 0; i < goals.length; i++) {
        var position = getRandomPosition();
        goals[i].style.left = position[0] + "px";
        goals[i].style.top = position[1] + "px";
    }
});
