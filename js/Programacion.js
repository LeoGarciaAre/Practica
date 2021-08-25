document.write("<h1>Practica1-Jesús Carranza y Leonardo García</h1>");

var a=23;
var b=-7;
var c=-50;

var formulap=((-b)+Math.pow(((Math.pow(b,2))-(4*a*c)),(1/2)))/(2*a);
var formulan=((-b)-Math.pow(((Math.pow(b,2))-(4*a*c)),(1/2)))/(2*a);
console.log("Resultados de las raices por medio de la ecuacion con estos valores: a=",a+", b=",b+", c=",c , "es:");
console.log("x1=",formulap);
console.log("x2=",formulan);