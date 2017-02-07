 // Exercises 1 
console.log("------ Ejercicio 1 ------");
var EnterName = function(display) {
	console.log("My name is: "+display+", and guess what?");
}	
//name=prompt('Your name is: ','');
//EnterName(name);
EnterName(prompt('Your name is: ',''));

 // Exercise2
console.log("------ Ejercicio 2 ------");
var resp ='y';
do {
	resp=prompt('Quieres seguir en el bucle?  [y/n]: ','');
}
while (resp==='y' || resp==='Y') 
	
//--------------- (or)-----------------
var resp ='y';
while (resp==='y' || resp==='Y') {
	resp=prompt('Quieres seguir en el bucle?  [y/n]: ','');
}


 // Exercise3
console.log("------ Ejercicio 3 ------");
var array = ["azul","verde","rojo","amarillo","gris","blanco","rosa","negro","naranja","morado"];
var i = 0;
while (i < array.length) {
	console.log("En el Reg: "+i+" esta guardado: "+array[i]);
	i+=1;
}
  
 
 // Exercise4
console.log("------ Ejercicio 4 ------");
var j = 1;
while (j < 3) {
	console.log("Esta es la tabla del: "+j);
	for (var i = 1;i<=10;i+=1) {
		console.log(j+" x "+i+" = "+i*j);
	}
	j+=1;
}


 // Exercise5
console.log("------ Ejercicio 5 ------");