
window.onload = function() { 
    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');
    
    function drawRectangle(x, y, fill) {
        context.fillStyle = fill;
        context.fillRect (x, y, 100, 100);
    }

    function drawTriangle() {
        context.beginPath();
        context.moveTo(400, 300);
        context.lineTo(200, 500);
        context.lineTo(600, 500);
        context.lineTo(400, 300);
        context.strokeStyle = 'red';
        context.stroke();
    }

    function clear() {
        context.fillStyle = "#ffffff"; 
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    let xpos = 0;
    let velocidad = 1; 

    draw();

    function draw() { 
        requestAnimationFrame(draw);
        
        clear(); 
        
        drawRectangle(xpos, 100, 'black');
        drawTriangle();

        xpos = xpos + velocidad;  
    }		 
        
} 
