let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //renderiza o desenho (plano 2d)
let box = 32;

function criarBG(){   //criar o background
    context.fillStyle= "SpringGreen";  //definir o estilo
    context.fillRect(0, 0, 16 * box, 16 * box);  //desenhar o retângulo
}

criarBG();