let misCursos = ["HTML", "CS3", "JAVASCRIP"];

//obtener valor arreglo
console.log(misCursos);
console.log(misCursos[2]);

//reemplazar elementos

misCursos[2] = "PHP";
console.log(misCursos);

//agregar un elemento
misCursos[4] = "JAVASCRIP";
console.log(misCursos);

//longitud arreglo

console.log(misCursos.length);

//tipo de datos

let nuevoArreglo = ["java", true, 12, function () { alert("hello") }, { nombre: "juan" }];

//metodo pop /push, shift / unshift

let numero = [
                "unos",
                "dos",
                "tres"
];
console.log(numero);
numero.push("cuatro");
console.log(numero);
numero.pop();
console.log(numero);
numero.unshift("cero");
console.log(numero);
numero.shift();
console.log(numero);

//arreglos multidimencionales o matrices

let matriz = [[1, 2, 3],
            [4,5,6],
            [7, 8, 9]
        ];

console.log(matriz[1][2]);    