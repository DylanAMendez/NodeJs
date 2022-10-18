let nombre = "Dylan";
let apellido = "Mendez";
let estudiante = `${nombre} ${apellido}`;

let estudianteMayus = estudiante.toLowerCase();
let estudianteMinus = estudiante.toUpperCase();

let espacios = estudiante.length;
let primeraLetra = estudiante[0];
let ultimaLetra = estudiante[5];

let noEspacios = estudiante.trim();
let booleana = estudiante.includes("Dylan Mendez")
console.log(booleana)