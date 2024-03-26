document.addEventListener("DOMContentLoaded", function() {
    const startScreen = document.getElementById("start-screen");
    const startBtn = document.getElementById("start-btn");
    const gameContainer = document.getElementById("game-container");
    const ball = document.getElementById("ball");
    const scoreValue = document.getElementById("score-value");
    const goals = document.querySelectorAll(".goal");

    let score = 0;

    startBtn.addEventListener("click", function() {
        startScreen.style.display = "none";
        gameContainer.style.display = "block";
        startGame();
    });

    function startGame() {
        // Initialize ball position
        let ballX = gameContainer.offsetWidth / 2;
        let ballY = gameContainer.offsetHeight / 2;

        // Update ball position
        function updateBallPosition() {
            ball.style.left = ballX + "px";
            ball.style.top = ballY + "px";
        }

        // Update score
        function updateScore() {
            score++;
            scoreValue.textContent = score;
        }

        // Check collision with goals
        function checkCollision() {
            goals.forEach(goal => {
                let goalRect = goal.getBoundingClientRect();
                let ballRect = ball.getBoundingClientRect();

                if (ballRect.left < goalRect.right &&
                    ballRect.right > goalRect.left &&
                    ballRect.top < goalRect.bottom &&
                    ballRect.bottom > goalRect.top) {
                        updateScore();
                        resetGoal(goal);
                }
            });
        }

        // Reset goal position
        function resetGoal(goal) {
            goal.style.left = Math.random() * (gameContainer.offsetWidth - 30) + "px";
            goal.style.top = Math.random() * (gameContainer.offsetHeight - 30) + "px";
        }

        // Move ball with arrow keys
        document.addEventListener("keydown", function(event) {
            const speed = 10;
            switch(event.key) {
                case "ArrowUp":
                    ballY -= speed;
                    break;
                case "ArrowDown":
                    ballY += speed;
                    break;
                case "ArrowLeft":
                    ballX -= speed;
                    break;
                case "ArrowRight":
                    ballX += speed;
                    break;
            }
            updateBallPosition();
            checkCollision();
        });
        
        // Initial ball position
        updateBallPosition();
    }
});
