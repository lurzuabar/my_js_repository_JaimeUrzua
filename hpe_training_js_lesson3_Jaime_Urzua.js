 // Exercises 1 
console.log("------ Ejercicio 1 ------");
console.log("Multiplos de 5: ");
for (var i=0;i<=100;i+=5) {
	console.log("* "+i);
	
}


 // Exercise2
console.log("------ Ejercicio 2 ------");
var array = ["Contento","Emocionado","Cansado","Dormido","Triste","Feliz"];
for (i=0;i<array.length;i+=1) {
	console.log("Entrada "+i+": "+array[i]);
}


 // Exercise3
console.log("------ Ejercicio 3 ------");
for (i=24;i>=0;i=i-=2) {
	console.log("* "+i);
}
  
 
 // Exercise4
console.log("------ Ejercicio 4 ------");
var text = "Sigo programando!!";
if (text.length > 5) {
	for (i=10;i<=50;i+=10)
		console.log("* "+i);
}

if (text.length < 5) {
	for (i=10;i<=50;i+=10)
		console.log("* "+i);
}
else {	
	for (i=50;i>=10;i-=10)
		console.log("* "+i);
}

 // Exercise2
console.log("------ Ejercicio 5 ------");
var array1 = ["uno","dos","tres","cinco","siete","once","trece"];
if (array1.length > 5) {
	for (i=9;i>=0;i-=1)
		console.log("* "+i);
}

if (array1.length < 5) {
	for (i=9;i>=0;i-=1)
		console.log("* "+i);
}
else {	
	for (i=0;i<=9;i+=1)
		console.log("* "+i);
}