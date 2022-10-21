const datos_personales = {
    nombre: "Dylan",
    apellido: "Mendez",
    edad: 22,
    altura: 1.65,
    eresDesarrollador: true
}

const miEdad = datos_personales.edad;
console.log(miEdad)

const nuevaLista_Bffs = [{ 
           ...datos_personales 
               },
         { nombre: "pepito",
         apellido: "pep",
             edad: 44,
           altura: 1.44,
eresDesarrollador: false },
         { nombre: "pepitaa",
         apellido: "peppp",
             edad: 77,
           altura: 1.77,
eresDesarrollador: false }];

const listaPorEdad = nuevaLista_Bffs.sort((a, b) => a.edad - b.edad);
console.log(listaPorEdad)
