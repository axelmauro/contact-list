// Declara dos variables numéricas
//var num1 = 34;
//var num2 = 34;

// Usa una sentencia if-else para comparar los números
/*if (num1 > num2) {
  // Si el primer número es mayor, imprime un mensaje
  console.log("El número mayor es " + num1);
} else if (num1 < num2) {
  // Si el segundo número es mayor, imprime otro mensaje
  console.log("El número mayor es " + num2);
} else {
  // Si los números son iguales, imprime otro mensaje
  console.log("Los números son iguales");
}*/
/*Aquí te pasamos una cadena para trabajar. 
let myString = 'Javascript+es+super+cool' ; 
Convierta la cadena en un array, eliminando los caracteres + en el proceso.
Guarde el resultado en una variable llamada myArray.
Almacene la longitud del array en una variable llamada arrayLength.
Almacene el último elemento del array en una variable llamada lastItem.
Aquí te pasamos una cadena para trabajar. 
let myString = 'Javascript+es+super+cool' ; 
Convierta la cadena en un array, eliminando los caracteres + en el proceso.
Guarde el resultado en una variable llamada myArray.
Almacene la longitud del array en una variable llamada arrayLength.
Almacene el último elemento del array en una variable llamada lastItem.*/

let myString = 'Javascript+es+super+cool';

let miArray = myString.split("+");
console.log(miArray);

let arrayLength = miArray.length;
let lastItem = miArray[arrayLength - 1];
console.log(lastItem);