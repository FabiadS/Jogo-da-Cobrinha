let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //renderiza o desenho (plano 2d)
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,  //criando números aleatorios, tirando a parte flutuante   
    y: Math.floor(Math.random() * 15 +1) * box
}

function criarBG(){   //criar o background
    context.fillStyle= "SpringGreen";  //definir o estilo
    context.fillRect(0, 0, 16 * box, 16 * box);  //desenhar o retângulo
}

function snakeCreate(){
    for(i=0; i  < snake.length; i++)
    {
        context.fillStyle = "DarkSlateGray";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood(){
    context.fillStyle = "blue";
    context.fillRect(food.x, food.y, box, box);
}

// clique no botão do teclado:keydown
document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}
function startGame(){

    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box; 


    criarBG();
    snakeCreate();
    drawFood();

    let snakeX = snake[0].x; //posição inicial no x
    let snakeY = snake[0].y; //posição inicial no y


    //criando as coordenadas
    if(direction == "right") snakeX += box;  //direita
    if(direction =="left") snakeX -= box; //esquerda

    if(direction == "up") snakeY -= box;  //cima
    if(direction =="down") snakeY += box; //baixo

    if(snakeX != food.x || snakeY != food.y){
        snake.pop(); //retira o ultimo elemento do array
    }
    else{
        food.x = Math.floor(Math.random() * 15 + 1) * box,  //criando números aleatorios, tirando a parte flutuante   
        food.y = Math.floor(Math.random() * 15 +1) * box
    }
    

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); //adiciona a nova cabeça ao inicio do array
    

}

let game = setInterval(startGame, 100); //a cada 100 milisegundos o jogo se renova sem travar


