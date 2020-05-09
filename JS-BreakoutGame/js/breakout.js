let canvas = document.getElementById("myCanvas"); // связывваем JS  с элементом canvas
let ctx = canvas.getContext("2d"); // инструмент, который мы можем использовать для рисования на холсте
console.log(canvas);

let x = canvas.width/2; //  направление движения мяча
let y = canvas.height-30; // направление движения мяча

let ballRadius = 10; // радиус мяча 

let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width-paddleWidth) / 2;

let rightPressed = false; // индикаторы нажатия кнопок
let leftPressed = false; // индикаторы нажатия кнопок

let dx = 2; //переменные движения мяча
let dy = -2; // переменные движения мяча

let brickRowCount = 3; // параметры кирпичиков
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

let score = 0;

let lives = 3;

let bricks = [];
for(let c=0; c<brickColumnCount; c++) {// расположение кирпичиков
    bricks[c] = [];
    for(let r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

function drawBricks() { // отображение кирпичиков
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function drawBall() { // движение мяча
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2); // мяч
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() { // рисуем платформу для отбития меча
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() { // холст 
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    drawBall();
    x += dx;
    y += dy;
    requestAnimationFrame(draw);

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {  // отскакиевания мяча от границ
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    } else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) { // проверяем попал ли мяч  на ракетку
            dy = -dy;
        }
        else {
            lives--;
            if(!lives) {
                alert("GAME OVER");
                document.location.reload()
            }
            else {
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 2;
                dy = -2;
                paddleX = (canvas.width-paddleWidth)/2;
            }
        }
    }

    if(rightPressed) {
        paddleX += 7;
        if (paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - paddleWidth;
        }
    }
    else if(leftPressed) {
        paddleX -= 7;
        if (paddleX < 0){
            paddleX = 0;
        }
    }
    drawPaddle();
    drawBricks();
    collisionDetection();
    drawScore();
    drawLives();
    

}


document.addEventListener("keydown", keyDownHandler, false); // привязка движений клавиатурой
document.addEventListener("keyup", keyUpHandler, false);  // привязка движений клавиатурой

document.addEventListener("mousemove", mouseMoveHandler, false); // привязка движений мыши

function mouseMoveHandler(e) {
    let relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}

function keyDownHandler(e) {  // упрафление движением ракетки
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) { // упрафление движением ракетки
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function collisionDetection() { // разрушение кирпичиков
    for(let c=0; c<brickColumnCount; c++) {
        for(let r=0; r<brickRowCount; r++) {
            let b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;

                    if(score == brickRowCount*brickColumnCount) { // отобраение выйграшного сообщения после уничтожения всех кирпичиков
                        alert("Вы прошли 1 уровень!");
                        document.location.reload();
 
                }
            }
        }
    }
}
}

function drawScore() { // функция подъсчёта отчков
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}
function drawLives() { // функция очков жизней
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

draw();