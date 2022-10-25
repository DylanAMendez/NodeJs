const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    //  return false;
    throw new Error("El valor debe ser de tipo numero")
} 

// const elDoble = miFuncion("a1a");
const numero = "8";

try {
    // Codigo que puede fallar
    console.log("Esta ejecutandose de manera correcta")
    const doble = miFuncion(numero);
    console.log(doble)
} catch (e) {
 // en caso de que falle, quiero que ejecutes 
 console.error("ERROR!")
 console.error(`El valor de e es: ${e}`)
} finally {
    console.log("Esto se va a ejecutar tanto si se produce un error, como si NO existe algun error")
}

// InternalError, SyntaxError, TypeError, RangeError, ReferenceError
// Errores mas comunas ---> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error