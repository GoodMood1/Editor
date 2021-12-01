var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
let aa,a2,b2,c2,d2=0;
canvas.addEventListener('mousemove',(e)=>{
aa=document.getElementById("colr").value;
a2 = document.getElementById("rad").value;
d2 = document.getElementById("q").value;
b2=e.pageX;
c2=e.pageY;
})

canvas.addEventListener('click',function star(a,b,c,d){
    a=Number(a2);b=Number(b2);c=Number(c2);d=Number(d2);
    ctx.beginPath();
    ctx.strokeStyle = aa;
    ctx.moveTo(b + a,c);
    for(var i = 1; i <= d * 2; i++)
    {
      if(i % 2 == 0)
      {
        var theta = i * (Math.PI * 2) / (d * 2);
        var x = b + (a * Math.cos(theta));
        var y = c + (a * Math.sin(theta));
      } 
      else {
        var theta = i * (Math.PI * 2) / (d * 2);
        var x = b + ((a/2) * Math.cos(theta));
        var y = c + ((a/2) * Math.sin(theta));
      }
      ctx.lineTo(x ,y);
    }
    ctx.closePath();
    ctx.stroke();
});
