class Estudiante {
    _nombre
    _asignaturas
    constructor (nombre, asignaturas) {
    this._nombre = nombre;
    this._asignaturas = asignaturas;
   }

   obtenDatos(){
    return console.log(`Mi nombre es ${this._nombre} y mis asignaturas son: ${this._asignaturas}`);
   }
}

// Nueva Instancia de Estudiante
const nuevo_Estudiante = new Estudiante ("Dylan", ["Javascript", " HTML",  " CSS"])

console.log(nuevo_Estudiante)

// - Haz la llamada al método obtenDatos
const datos = nuevo_Estudiante.obtenDatos()