let miRefran = "";
miRefran = "A quien madruga Dios le ayuda";
const longitudRefran = miRefran.length;
// Declarar una variable con const y asignarle la longitud de miRefran
let novenaLetra = miRefran.charAt(8);
// Declarar una variable con const y asignarle la última letra de miRefran
const ultimaLetra = miRefran.charAt(miRefran.length - 1);
// Declarar una variable con let y asignarle el índice de "que" en miRefran
let indicePalabra = miRefran.indexOf("Que");
// Buscar otra preposición si el índice es menor que cero
if (indicePalabra < 0) {
    // Usar un array con algunas preposiciones comunes
    let preposiciones = ["a", "de", "en", "por", "para", "con", "sin"];
    // Recorrer el array con un bucle for
    for (let i = 0; i < preposiciones.length; i++){
    // Buscar el índice de cada preposición en miRefran
        indicePalabra = miRefran.indexOf(preposiciones[i]);
        // Si el índice es mayor o igual a cero, salir del bucle
        if (indicePalabra >= 0) {
            break;
        }
    }
}
// Reemplazar la preposición encontrada por "xxx"
miRefran = miRefran.replace(miRefran.substring(indicePalabra, indicePalabra + 3), "XXX");
// Convertir a mayúsculas todos los caracteres de miRefran
miRefran = miRefran.toUpperCase();