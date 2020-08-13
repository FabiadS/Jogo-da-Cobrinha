let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //renderiza o desenho (plano 2d)
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
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

criarBG();
snakeCreate();