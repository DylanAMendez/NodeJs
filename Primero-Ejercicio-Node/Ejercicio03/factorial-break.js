let sumaMaxima = 0;
let sumaMin = 0;

bucleMaxima: while (true){
    bucleMin: while (true) {
        console.log(`El numero actual es: ${sumaMaxima}${sumaMin}`)
        sumaMin++
        if (sumaMin === 10) {
            sumaMin = 0
            break;
        }
        if (sumaMaxima === 1) {
            break bucleMaxima
        }
    }
    sumaMaxima++
}
console.log("Ya llego al valor maximo")