canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,400,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e)
{
    color=document.getElementById("color").value
    mousex=e.clientX - canvas.offsetLeft;
    mousey=e.clientY - canvas.offsetTop;
    circle(mousex,mousey);
}

function circle(mousex,mousey){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mousex,mousey,40,0,2*Math.PI);
ctx.stroke();
}

function clearArea()
{
ctx.clearRect(0,0,canvas.width,canvas.height);

}