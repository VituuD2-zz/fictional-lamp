const AREA = document.body;
const CIRCLE = document.querySelector('.circle');
const CIRCLE1 = document.querySelector('.circle1');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Captura o objeto de evento (movimento do mouse).
    // Obtém a coordenada X (distância da borda esquerda da janela de visualização) através da propriedade clientX.
    // Pega a largura total da janela, subtrai a coordenada atual e a largura do círculo.
    // Faz o mesmo para a coordenada Y (distância da borda superior da janela de visualização).
    var horizontalPosition = windowWidth - e.clientX - 26;
    var verticalPosition= windowHeight - e.clientY - 26;

    // Define a posição horizontal e vertical.
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';
    
    var posx0 =  e.clientX + 35 + ((horizontalPosition + e.clientX + 35) / 15 );    
    var posy0 =  e.clientY - 60 - ((verticalPosition - e.clientY -60) * 1.4);

    var posax = CIRCLE1.style.left = posx0 + 'px';
    var posay = CIRCLE1.style.top = posy0 + 'px';
   
}   

function changeColorOnTouch() {
    CIRCLE.style.backgroundColor = "green";
    CIRCLE.style.borderColor = "green";

    CIRCLE1.style.backgroundColor = "#ebd234";
    CIRCLE1.style.borderColor = "#ebd234";
}

// Quando o mouse se move, executa a função mouseCoordinates.
AREA.addEventListener('mousemove', mouseCoordinates, false);

// Quando o mouse toca o círculo, executa a função changeColorOnTouch.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);

// Quando o mouse sai do círculo, remove estilos embutidos com uma função anônima.
CIRCLE.addEventListener('mouseleave', function(){
    CIRCLE.removeAttribute("style");
    CIRCLE1.removeAttribute("style");
}, false);
