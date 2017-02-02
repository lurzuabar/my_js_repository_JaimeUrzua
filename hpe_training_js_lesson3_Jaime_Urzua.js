// Exercises 1 and 4
var text1 = "Hola Mundo";
var text2 = "Estoy creando otro nuevo JS";
var text3 = "Funciones aritmeticas y logicas";
var text4 = "Comparaciones aritmeticas y logicas";
var text5 = "Hay que darle.. Con todo!!";;
console.log("------ Ejercicio 1 ------");
if (text1.length < 30) 
	console.log("Del Texto: "+text1+", comparando el tamaño de texto es menor a 30, obtuvimos que: La Sentencia es Verdadera");
if (text2.length > 10)
	console.log("Del Texto: "+text2+", comparando el tamaño de texto es mayor a 10, obtuvimos que: La Sentencia es Verdadera");
if ((5+9)*10 === 450)
	console.log("Comparando la aritmetica: (5+9)*10 == 450, obtuvimos que: La Sentencia es Verdadera");
if (text3.length <= 30)
	console.log("Del Texto: "+text3+", comparando el tamaño de texto es igual a 31, obtuvimos que: La Sentencia Verdadera");
else
	console.log("Del Texto: "+text3+", comparando el tamaño de texto es igual a 31, obtuvimos que: La Sentencia es Falsa");
if (text4.length >= 110)
	console.log("Del Texto: "+text4+", comparando el tamaño de texto es mayor o igual a 110, obtuvimos que: La Sentencia es Verdadera");
else
	console.log("Del Texto: "+text4+", comparando el tamaño de texto es mayor o igual a 110, obtuvimos que: La Sentencia es Falsa");
if ((460-10)/5 !== 90)
	console.log("Comparando la aritmetica: ((45/09)-10 !== 450, obtuvimos que: La Sentencia es Verdadera");
else
	console.log("Comparando la aritmetica: ((45/09)-10 !== 450, obtuvimos que: La Sentencia es Falsa");


// Exercise2
console.log("------ Ejercicio 2 ------");
console.log(text1.substring(0,2));
console.log(text2.substring(2,3));
console.log(text3.substring(0,5));
console.log(text4.substring(1,3));
console.log(text5.substring(5,7));


 // Exercise3
 var array1 = ["Yo","Tu","El","Ella","Nosotros","Ustedes"];
 var array2 = ["Negro","Azul","Blanco","Rojo","Verde"];
 var array3 = ["Cielo","Tierra","Agua","Aire","Fuego"];
 var array4 = ["Campo","Ciudad","Pueblo","Rancho"];
 var array5 = ["Contento","Emocionado","Cansado","Dormido","Triste","Feliz"];
console.log("Arreglo 1,4: "+array1[4]);
console.log("Arreglo 2,1: "+array2[1]);
console.log("Arreglo 3,2: "+array3[2]);
console.log("Arreglo 1,4: "+array4[3]);
console.log("Arreglo 5,5: "+array5[5]);
  
 
 // Exercise5
console.log("El residuo de 1500001 entre 5 es: "+50001%5);
console.log("El residuo de 492290833 entre 66 es: "+492290833%66);
console.log("El residuo de 3937005 entre 4 es: "+3937005%4);
console.log("El residuo de 36036036000 entre 360 es: "+36036036000%360);
console.log("El residuo de 85730755 entre 19 es: "+85730755%19);
console.log("El residuo de 1670400 entre 9 es: "+1670400%9);