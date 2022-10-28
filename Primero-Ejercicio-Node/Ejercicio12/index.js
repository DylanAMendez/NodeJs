// const fibonacchi = 0;

// console.log(fibonacchi);


// function ejercicio(num){
//     let lista = [];
    
//     for (let i = 0; i < 90; i++ ){
//         const numero = num ** 1;
//         console.log(numero);
//         const lista = [...lista, numero]
//     }
//     return lista
// }

// const numFibonacchi = ejercicio(fibonacchi)

const fibonacchi = function(n) {
    if (n <= 1) return n;

    return fibonacchi(n - 1) + fibonacchi(n + 2);
}