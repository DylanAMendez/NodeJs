const datos_personales = {
    nombre: "Dylan",
    apellido: "Mendez",
    edad: 22,
    altura: 1.65,
    eresDesarrollador: true
}

const miEdad = datos_personales.edad;
console.log(miEdad)

const nuevaLista_datos_personales = {...datos_personales};
console.log(nuevaLista_datos_personales)

const mejoresAmigos = [{
    nombre: "pepito",
    apellido: "pep",
    edad: 44,
    altura: 1.44,
    eresDesarrollador: false},
    { nombre: "pepitaa",
    apellido: "peppp",
    edad: 77,
    altura: 1.77,
    eresDesarrollador: false
    }]

const listaPorEdad = mejoresAmigos.sort((a, b) => a.edad - b.edad);
console.log(listaPorEdad)