let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //renderiza o desenho (plano 2d)
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

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

function startGame(){

    criarBG();
    snakeCreate();

    let snakeX = snake[0].x; //posição inicial no x
    let snakeY = snake[0].y; //posição inicial no y

    //criando as coordenadas
    if(direction == "right") snakeX += box;  //direita
    if(direction =="left") snakeX -= box; //esquerda

    if(direction == "up") snakeY += box;  //cima
    if(direction =="down") snakeY -= box; //baixo

    snake.pop(); //retira o ultimo elemento do array

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); //adiciona a nova cabeça ao inicio do array
    

}

let game = setInterval(startGame, 100); //a cada 100 milisegundos o jogo se renova sem travar


