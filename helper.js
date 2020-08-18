/* function update() {
    clearCanvas()
    cuadrito.draw()
}

function clearCanvas() {
    ctx.clearRect(0, 0, $canvas.width, $canvas.height)
} */

startBtn.addEventListener("click", iniciar)

function iniciar() {
    img = new Image();
    img.addEventListener(`load`, dividirCuadritos)
    let random = Math.floor(Math.random() * imagenesColors.length)
    img.src = "./img/bluecuadrito.jpg"
    //creo que el problema es el random aquí
}

function dividirCuadritos() {
    cuadritoswidth = $canvas.width / nivel
    cuadritosheight = $canvas.height / nivel
    //set canvas y init puzle cambiaran
    //setCanvas();
    empezarQiyi();
}

function empezarQiyi() {
    // ctx.drawImage(img, 0, 0, $canvas.width, $canvas.height)
    //esta función (buildpieces) puede cambiar
    generarPiezas()
}

function generarPiezas() {
    let cuadro;
    let xPos = 0;
    let yPos = 0;
    for (let i = 0; i < nivel * nivel; i++) {
        cuadro = {};
        cuadro.sx = xPos;
        cuadro.sy = yPos;
        cuadritos.push(cuadro);
        xPos += cuadritoswidth;
        if (xPos >= $canvas.width) {
            xPos = 0;
            yPos += cuadritosheight;
        }
    }
    cuadritos.pop()
    //crear las piezas al dar clic en algun boton
    // document.onmousedown = 
    shuffleCuadritos(cuadritos);
}


function shuffleCuadritos() {

    cuadritos = shuffleArray(cuadritos)
    // $canvas.clearReact(0, 0, $canvas.width, $canvas.height);
    let xPos = 0
    let yPos = 0;
    for (let i = 0; i < cuadritos.length; i++) {
        cuadritos[i].xPos = xPos
        cuadritos[i].yPos = yPos
        ctx.drawImage(img, cuadritos[i].sx, cuadritos[i].sy, cuadritoswidth, cuadritosheight, cuadritos[i].xPos, cuadritos[i].yPos, cuadritoswidth, cuadritosheight);
        xPos += cuadritoswidth;
        if (xPos >= $canvas.width) {
            xPos = 0;
            yPos += cuadritoswidth
        }
    }

    //posible cambio de accion
    // document.onmousedown = onPuzzleClick;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

function onGame(){
    mover()
}

$canvas.addEventListener('mousedown', e => {
    mouseDown = true;
    mouseX = e.pageX - $canvas.offsetLeft; 
    mouseY = e.pageY - $canvas.offsetTop;
    mover()
    winLevel()
})

function mover() {
    for (i = 0; i < cuadritos.length; i++) {
        if (mouseDown) {
            if (cuadritos[i].xPos < mouseX && (cuadritos[i].xPos + cuadritoswidth) > mouseX && cuadritos[i].yPos < mouseY && (cuadritos[i].yPos + cuadritosheight) > mouseY) {
                if (cuadritos[i].xPos == espacioX && (cuadritos[i].yPos == espacioY - cuadritosheight || cuadritos[i].yPos == espacioY + cuadritosheight) || cuadritos[i].yPos == espacioY && (cuadritos[i].xPos == espacioX - cuadritoswidth || cuadritos[i].xPos == espacioX + cuadritoswidth)) {
                        ctx.clearRect(cuadritos[i].xPos, cuadritos[i].yPos, cuadritoswidth, cuadritosheight)
                        nuevoEspacioX = cuadritos[i].xPos
                        nuevoEspacioY = cuadritos[i].yPos
                        cuadritos[i].xPos = espacioX
                        cuadritos[i].yPos = espacioY
                        espacioX = nuevoEspacioX
                        espacioY = nuevoEspacioY
                    }
            }
        ctx.drawImage(img, cuadritos[i].sx, cuadritos[i].sy, cuadritoswidth, cuadritosheight, cuadritos[i].xPos, cuadritos[i].yPos, cuadritoswidth, cuadritosheight)

        }
    }
}

function winLevel(){
    switch (nivel) {
        case 3:
            for(i = 0; i < cuadritos.length; i++){
                if (cuadritos[0].sx === cuadritos[0].xPos && cuadritos[0].sy == cuadritos[0].yPos &&
                    cuadritos[1].sx === cuadritos[1].xPos && cuadritos[1].sy == cuadritos[1].yPos &&
                    cuadritos[2].sx === cuadritos[2].xPos && cuadritos[2].sy == cuadritos[2].yPos &&
                    cuadritos[3].sx === cuadritos[3].xPos && cuadritos[3].sy == cuadritos[3].yPos &&
                    cuadritos[4].sx === cuadritos[4].xPos && cuadritos[4].sy == cuadritos[4].yPos &&
                    cuadritos[5].sx === cuadritos[5].xPos && cuadritos[5].sy == cuadritos[5].yPos &&
                    cuadritos[6].sx === cuadritos[6].xPos && cuadritos[6].sy == cuadritos[6].yPos &&
                    cuadritos[7].sx === cuadritos[7].xPos && cuadritos[7].sy == cuadritos[7].yPos &&
                    cuadritos[8].sx === cuadritos[8].xPos && cuadritos[8].sy == cuadritos[8].yPos){
                        ctx.drawImage(img, 0, 0, $canvas.width, $canvas.height)
                    }
                }
                nivel++
            break;
        case 4:
            for(i = 0; i < cuadritos.length; i++){
                if (cuadritos[0].sx === cuadritos[0].xPos && cuadritos[0].sy == cuadritos[0].yPos &&
                    cuadritos[1].sx === cuadritos[1].xPos && cuadritos[1].sy == cuadritos[1].yPos &&
                    cuadritos[2].sx === cuadritos[2].xPos && cuadritos[2].sy == cuadritos[2].yPos &&
                    cuadritos[3].sx === cuadritos[3].xPos && cuadritos[3].sy == cuadritos[3].yPos &&
                    cuadritos[4].sx === cuadritos[4].xPos && cuadritos[4].sy == cuadritos[4].yPos &&
                    cuadritos[5].sx === cuadritos[5].xPos && cuadritos[5].sy == cuadritos[5].yPos &&
                    cuadritos[6].sx === cuadritos[6].xPos && cuadritos[6].sy == cuadritos[6].yPos &&
                    cuadritos[7].sx === cuadritos[7].xPos && cuadritos[7].sy == cuadritos[7].yPos &&
                    cuadritos[8].sx === cuadritos[8].xPos && cuadritos[8].sy == cuadritos[8].yPos &&
                    cuadritos[9].sx === cuadritos[9].xPos && cuadritos[9].sy == cuadritos[9].yPos &&
                    cuadritos[10].sx === cuadritos[10].xPos && cuadritos[10].sy == cuadritos[10].yPos &&
                    cuadritos[11].sx === cuadritos[11].xPos && cuadritos[11].sy == cuadritos[11].yPos &&
                    cuadritos[12].sx === cuadritos[12].xPos && cuadritos[12].sy == cuadritos[12].yPos &&
                    cuadritos[13].sx === cuadritos[13].xPos && cuadritos[13].sy == cuadritos[13].yPos &&
                    cuadritos[14].sx === cuadritos[14].xPos && cuadritos[14].sy == cuadritos[14].yPos &&
                    cuadritos[15].sx === cuadritos[15].xPos && cuadritos[15].sy == cuadritos[15].yPos){
                        ctx.drawImage(img, 0, 0, $canvas.width, $canvas.height)
                    }
                }
                nivel++            
            break;
        case 5:
            for(i = 0; i < cuadritos.length; i++){
                if (cuadritos[0].sx === cuadritos[0].xPos && cuadritos[0].sy == cuadritos[0].yPos &&
                    cuadritos[1].sx === cuadritos[1].xPos && cuadritos[1].sy == cuadritos[1].yPos &&
                    cuadritos[2].sx === cuadritos[2].xPos && cuadritos[2].sy == cuadritos[2].yPos &&
                    cuadritos[3].sx === cuadritos[3].xPos && cuadritos[3].sy == cuadritos[3].yPos &&
                    cuadritos[4].sx === cuadritos[4].xPos && cuadritos[4].sy == cuadritos[4].yPos &&
                    cuadritos[5].sx === cuadritos[5].xPos && cuadritos[5].sy == cuadritos[5].yPos &&
                    cuadritos[6].sx === cuadritos[6].xPos && cuadritos[6].sy == cuadritos[6].yPos &&
                    cuadritos[7].sx === cuadritos[7].xPos && cuadritos[7].sy == cuadritos[7].yPos &&
                    cuadritos[8].sx === cuadritos[8].xPos && cuadritos[8].sy == cuadritos[8].yPos &&
                    cuadritos[9].sx === cuadritos[9].xPos && cuadritos[9].sy == cuadritos[9].yPos &&
                    cuadritos[10].sx === cuadritos[10].xPos && cuadritos[10].sy == cuadritos[10].yPos &&
                    cuadritos[11].sx === cuadritos[11].xPos && cuadritos[11].sy == cuadritos[11].yPos &&
                    cuadritos[12].sx === cuadritos[12].xPos && cuadritos[12].sy == cuadritos[12].yPos &&
                    cuadritos[13].sx === cuadritos[13].xPos && cuadritos[13].sy == cuadritos[13].yPos &&
                    cuadritos[14].sx === cuadritos[14].xPos && cuadritos[14].sy == cuadritos[14].yPos &&
                    cuadritos[15].sx === cuadritos[15].xPos && cuadritos[15].sy == cuadritos[15].yPos &&
                    cuadritos[16].sx === cuadritos[16].xPos && cuadritos[16].sy == cuadritos[16].yPos &&
                    cuadritos[17].sx === cuadritos[17].xPos && cuadritos[17].sy == cuadritos[17].yPos &&
                    cuadritos[18].sx === cuadritos[18].xPos && cuadritos[18].sy == cuadritos[18].yPos &&
                    cuadritos[19].sx === cuadritos[19].xPos && cuadritos[19].sy == cuadritos[19].yPos &&
                    cuadritos[20].sx === cuadritos[20].xPos && cuadritos[20].sy == cuadritos[20].yPos &&
                    cuadritos[21].sx === cuadritos[21].xPos && cuadritos[21].sy == cuadritos[21].yPos &&
                    cuadritos[22].sx === cuadritos[22].xPos && cuadritos[22].sy == cuadritos[22].yPos &&
                    cuadritos[23].sx === cuadritos[23].xPos && cuadritos[23].sy == cuadritos[23].yPos &&
                    cuadritos[24].sx === cuadritos[24].xPos && cuadritos[24].sy == cuadritos[24].yPos){
                        ctx.drawImage(img, 0, 0, $canvas.width, $canvas.height)
                    }
                }
                nivel++
            break;
    
    }
}