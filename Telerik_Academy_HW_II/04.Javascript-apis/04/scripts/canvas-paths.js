(function () {
    var ctx = document.getElementsByTagName("canvas")[0].getContext("2d"); //find the <canvas> element
	ctx.fillStyle = "#f2f2f2";
	ctx.fillRect(10,10, ctx.canvas.width,ctx.canvas.height)
    ctx.beginPath();


    //head
    ctx.beginPath();
    //ctx.globalAlpha = 0.5;
    ctx.fillStyle = "#90cad7";
    ctx.strokeStyle = "#235762";
    ctx.arc(300, 230, 30, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(279, 250);
    ctx.lineTo(205, 340);
    ctx.lineTo(280, 360);
    ctx.lineTo(290, 430);
    
    ctx.moveTo(205, 340);
    ctx.lineTo(279, 335);
    ctx.lineTo(262, 412);
    
    ctx.moveTo(258, 275);
    ctx.lineTo(300, 305);
    ctx.lineTo(347, 295);

    ctx.moveTo(258, 275);
    ctx.lineTo(283, 315);
    ctx.lineTo(315, 315);

    ctx.strokeStyle = "#235762";
    
    ctx.stroke();
    ctx.closePath();

    //eyes
    ctx.scale(2, 1);
    ctx.beginPath();
    ctx.arc(155 - 3, 240 - 10, 2, 0, 2 * Math.PI, false);
    ctx.moveTo(157 + 5, 240 - 10);
    ctx.arc(157 + 3, 240 - 10, 2, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.closePath();

    //zenici
    ctx.scale(0.5, 2);
    ctx.beginPath();
    ctx.fillStyle = "#22545f";
    ctx.arc(309 - 3, 125 - 10, 0.5, 0, 2 * Math.PI, false);
    ctx.moveTo(309 + 12, 125 - 10);
    ctx.arc(320 + 3, 125 - 10, 0.5, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    //mouth
    ctx.scale(6, 1);
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.arc(52, 121, 0.2, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.closePath();

    //head
    ctx.beginPath();
    ctx.scale(2, 1);
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.fillStyle = "#396693";
    ctx.strokeStyle = "#262625";   
    ctx.arc(25, 100, 3, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    
    ctx.beginPath();
    ctx.fillStyle = "#396693";
    ctx.moveTo(26, 99);
    ctx.arc(25, 99, 1.7, 0, 1 * Math.PI, false);
    ctx.lineTo(23.3, 87);
    ctx.lineTo(26.6, 87);
    ctx.lineTo(26.6, 100);

    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();   
    ctx.arc(25, 87, 1.6, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#10ca10";

    ctx.closePath();

    //house
    ctx.beginPath();
    //ctx.moveTo(38, 200);
    ctx.rect(50, 100, 28, 140);
    ctx.fillStyle = "#b18d66";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(52, 110, 4, 15);
    ctx.rect(52 + 4.6, 110, 4, 15);
    ctx.rect(52 + 4.6, 110 + 18, 4, 15);
    ctx.rect(52, 110 + 18, 4, 15);
    

    ctx.rect(67.5, 110, 4, 15);
    ctx.rect(67.5 + 4.6, 110, 4, 15);
    ctx.rect(67.5 + 4.6, 110 + 18, 4, 15);
    ctx.rect(67.5, 110 + 18, 4, 15);
    
    ctx.rect(67.5, 165, 4, 15);
    ctx.rect(67.5 + 4.6, 165, 4, 15);
    ctx.rect(67.5 + 4.6, 165 + 18, 4, 15);
    ctx.rect(67.5, 165 + 18, 4, 15);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    ctx.arc(56, 180, 3, 1 * Math.PI, 2 * Math.PI, false);
    ctx.moveTo(53, 180);
    ctx.lineTo(53, 240);
    ctx.moveTo(59, 180);
    ctx.lineTo(59, 240);
    ctx.moveTo(56, 177);
    ctx.lineTo(56, 240);
    ctx.strokeStyle = "#05000";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth = 0.1;
    ctx.arc(56, 212, 1, 0, 2 * Math.PI, false);
    ctx.scale(1, 2);    
    ctx.stroke();
    ctx.closePath();


    //roof
    ctx.beginPath();
    ctx.fillStyle = "#8e591f";
    ctx.moveTo(63, 15);
    ctx.lineTo(49, 50);
    ctx.lineTo(79, 50);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#b18d66";
    ctx.moveTo(68, 21);
    ctx.lineTo(68, 37);
    ctx.lineTo(72, 37);
    ctx.lineTo(72, 21);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "#5a3813";
    ctx.arc(70, 21, 2, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    


    ctx.beginPath();
    ctx.scale(1, 2.7);    
    ctx.arc(15, 40, 5, 0, 2 * Math.PI, false);
    ctx.moveTo(35, 38);
    ctx.arc(15 + 15, 40 - 2, 5, 0, 2 * Math.PI, false);
    ctx.moveTo(24, 39);
    ctx.fillStyle = "#2d2720";
    ctx.fill();
    ctx.strokeStyle = "#d53c59"; 
    ctx.arc(23, 39, 1, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.closePath();


    ctx.beginPath();
    ctx.moveTo(23, 39);
    ctx.lineTo(15, 40);
    ctx.lineTo(19, 33);
    ctx.lineTo(28, 30);
    ctx.lineTo(23, 39);

    ctx.moveTo(30, 38);
    ctx.lineTo(27.8, 29);

    ctx.moveTo(26, 29);
    ctx.lineTo(27.8, 29);
    ctx.lineTo(29, 27);
    
    ctx.moveTo(23.8, 39.5);
    ctx.lineTo(24.5, 40);
    
    ctx.moveTo(22.2, 38.3);
    ctx.lineTo(21.5, 37.7);
    
    ctx.moveTo(23, 39);
    ctx.lineTo(17, 32);

    ctx.moveTo(15.5, 32);
    ctx.lineTo(18, 32);
    ctx.strokeStyle = "#d53c59"; 
    ctx.stroke();
    ctx.closePath();


}());
