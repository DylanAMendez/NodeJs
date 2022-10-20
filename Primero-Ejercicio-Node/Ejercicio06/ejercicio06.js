const compra = ["leche", "carne", "pan", "dulces", "hojas"];
const añadirCompra = compra.push("Aceite de girasol");

console.log(compra)

const eliminarCompra = compra.pop();
console.log(compra)

const peliculas = [
    {titulo: "Harry Potter", director: "J.K Rowling", fecha: 2010},
    {titulo: "Harry Potter: Camara Secreta", director: "J.K Rowling", fecha: 2011},
    {titulo: "Harry Potter: Caliz de fuego", director: " J.K Rowling", fecha: 2010}
]

const nueva_Lista_Fecha = peliculas.filter(obj => obj.fecha > 2010 )
console.log(nueva_Lista_Fecha)

const nueva_Lista_Director = peliculas.map(obj => obj.director === "string")
console.log(nueva_Lista_Director)

const nueva_Lista_Peliculas = peliculas.map(obj => obj.peliculas )

const lista_directores = ["J.K Rowling", "Guillermo del toro", "J.K Rowling_2"];
const lista_peliculas = ["Harry Potter", "Harry potter camara secreta", "Harry Potter caliz de fuego"];

const concat_listaDirecPelic = lista_directores.concat(lista_peliculas)

console.log(concat_listaDirecPelic)

const propagacion_listaDirecPelic = [...lista_directores, ...lista_peliculas];
console.log(propagacion_listaDirecPelic)