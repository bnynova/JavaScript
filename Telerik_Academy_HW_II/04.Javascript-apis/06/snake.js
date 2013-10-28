//1. detect when the page has finished loading
window.onload = function(){

    //2. Create Canvas obj
    var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');

    score = 0;
    level = 0;

    canvas.width = 204;
    canvas.height = 224;

    //3.Attach the canvas to the body
    var body = document.getElementsByTagName('body')[0]; // get reference to the body onj of the page
    body.appendChild(canvas); //append the canvas to body

    drawGame();

    function drawGame(){
        ctx.clearRect(0, 0 canvas.width, canvas.height);
        drawMain();
    }


    function drawMain(){
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'black';
        ctx.strokeRect(2, 20, canvas.width - 4, canvas.height - 24);
        ctx.font = '12px sans-serif';
        ctx.fillText('Skore: ' + score + 'Level: '+ level, 2, 12);
    }













};