let nombre = "Dylan";
let apellido = "Mendez";
let objeto = { nombre, apellido };

sessionStorage.setItem("objeto", JSON.stringify(objeto))

localStorage.setItem("objeto", JSON.stringify(objeto))

const time = new Date();

document.cookie = "nombreCccookie=objeto"

document.cookie = `objeto=${JSON.stringify(objeto)};expires=${new Date(time.getTime() + 2 * 60000)}`